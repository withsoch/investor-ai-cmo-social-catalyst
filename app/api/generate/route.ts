import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import { METHOD } from "@/lib/product";

/**
 * Live hero demo: company website + founder LinkedIn URL → brand kit + 3 posts.
 *
 * The LinkedIn URL is accepted but not read yet: scraping it needs the Apify
 * path from Content Studio, so live mode writes from the website alone and
 * the preview says so.
 *
 * Off by default. It only runs when ANTHROPIC_API_KEY is set in .env.local;
 * otherwise it answers 501 and the hero plays the scripted example instead.
 * The prompt follows the Content Studio pipeline in miniature (read →
 * position → write, held to the quality floor) — it does not call Content
 * Studio itself, which is an internal tool.
 *
 * Before this goes on a public URL it needs rate limiting: every request
 * spends API credit.
 */

export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = "claude-opus-5";
const MAX_HTML_BYTES = 1_500_000;
const MAX_TEXT_CHARS = 60_000;

const ResultSchema = z.object({
  brand: z.object({
    name: z.string(),
    oneLiner: z.string(),
    icp: z.string(),
    archetype: z.string(),
    voice: z.array(z.string()),
    font: z.string(),
  }),
  posts: z.array(
    z.object({
      style: z.enum(["The Narrator", "The Puncher", "The Teacher", "The Thinker", "The Proof", "The Learner"]),
      channel: z.enum(["linkedin", "company"]),
      text: z.string(),
    }),
  ),
});

const SYSTEM = `You are the writing engine behind Social Catalyst, which runs LinkedIn for B2B founders.

Given the text of a company's website, produce:
1. A brand kit: company name, a one-line description of the offer, the buyer they sell to (role + company stage), a Jungian brand archetype, 3-4 voice traits, and the main typeface if the site names one (otherwise your best guess).
2. Exactly three LinkedIn posts, each in a different shape:
${METHOD.styles.filter((s) => s.name !== "The Infographic").map((s) => `- ${s.name}: ${s.d}`).join("\n")}
Two posts are for the founder's personal profile ("linkedin"), one for the company page ("company").

The quality floor every post must pass:
${METHOD.floor.map((f) => `- ${f}`).join("\n")}

Write like a specific founder talking to a peer. Use only facts present on the site; never invent customers, numbers or results. If the site gives no proof, write ideas and opinions rather than results. Keep each post under 90 words. No hashtags, no emoji, no em dashes, no "Here's the thing", no closing question asking for engagement.`;

/** Accepts a bare public hostname only — no IPs, ports, localhost or paths. */
function parseHost(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const host = raw.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/[/?#].*$/, "");
  if (!/^([a-z0-9-]+\.)+[a-z]{2,}$/.test(host)) return null;
  if (host.endsWith(".local") || host.endsWith(".internal") || host === "localhost") return null;
  return host;
}

function htmlToText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/** The four most-used non-greyscale hex colours in the page source. */
function topColors(html: string): string[] {
  const counts = new Map<string, number>();
  for (const m of html.matchAll(/#([0-9a-f]{6})\b/gi)) {
    const hex = `#${m[1].toUpperCase()}`;
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
    if (Math.max(r, g, b) - Math.min(r, g, b) < 18) continue; // skip greys
    counts.set(hex, (counts.get(hex) ?? 0) + 1);
  }
  const picked = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([h]) => h);
  const fallback = ["#1C2B26", "#FF5C35", "#FFC043", "#F6F2EA"];
  return [...picked, ...fallback].slice(0, 4);
}

/** Follows up to 3 redirects by hand so every hop is checked before it's requested. */
async function fetchSite(host: string): Promise<string> {
  let url = `https://${host}`;
  let res: Response | null = null;
  for (let hop = 0; hop < 4; hop++) {
    res = await fetch(url, {
      headers: { "User-Agent": "SocialCatalystPreview/1.0 (+https://www.withsocialcatalyst.com)" },
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });
    const location = res.headers.get("location");
    if (res.status < 300 || res.status >= 400 || !location) break;
    const next = new URL(location, url);
    if (next.protocol !== "https:" || !parseHost(next.hostname)) throw new Error("redirected to a non-public host");
    url = next.toString();
  }
  if (!res || !res.ok) throw new Error(`site returned ${res?.status ?? "nothing"}`);
  const buf = await res.arrayBuffer();
  if (buf.byteLength > MAX_HTML_BYTES) throw new Error("site too large");
  return new TextDecoder().decode(buf);
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "live generation disabled" }, { status: 501 });
  }

  const body = await req.json().catch(() => ({}));
  const host = parseHost(body?.url);
  if (!host) return Response.json({ error: "enter a domain like yourcompany.com" }, { status: 400 });

  let html: string;
  try {
    html = await fetchSite(host);
  } catch (e) {
    return Response.json({ error: `couldn't read ${host}: ${(e as Error).message}` }, { status: 422 });
  }

  const text = htmlToText(html);
  if (text.length < 200) {
    return Response.json({ error: `${host} has too little readable text (it may render with JavaScript)` }, { status: 422 });
  }
  if (text.length > MAX_TEXT_CHARS) {
    // A marketing homepage this long is almost always nav/legal boilerplate;
    // refuse rather than silently cut it.
    return Response.json({ error: `${host} is too long to preview` }, { status: 422 });
  }

  const client = new Anthropic();
  try {
    const response = await client.messages.parse({
      model: MODEL,
      max_tokens: 16000,
      thinking: { type: "adaptive" },
      output_config: { effort: "medium", format: zodOutputFormat(ResultSchema) },
      system: SYSTEM,
      messages: [{ role: "user", content: `Website: ${host}\n\n<site_text>\n${text}\n</site_text>` }],
    });

    if (response.stop_reason === "refusal" || !response.parsed_output) {
      return Response.json({ error: "generation failed" }, { status: 502 });
    }

    const { brand, posts } = response.parsed_output;
    const when = ["Tue 08:40", "Thu 09:15", "Mon 07:55"];
    return Response.json({
      brand: { ...brand, colors: topColors(html) },
      posts: posts.slice(0, 3).map((p, i) => ({ id: `live-${i}`, when: when[i], ...p })),
    });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError) {
      return Response.json({ error: "busy, try again shortly" }, { status: 429 });
    }
    if (e instanceof Anthropic.APIError) {
      return Response.json({ error: `model error ${e.status}` }, { status: 502 });
    }
    throw e;
  }
}
