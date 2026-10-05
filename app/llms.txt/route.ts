import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

// Rebuilt at build time, which is every deploy — so every new post.
export const dynamic = "force-static";

/**
 * llms.txt: a plain-text map of the site for language models (llmstxt.org).
 * What the site is, the pages that explain it, and every post with its summary.
 */
export function GET() {
  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug})${p.excerpt ? `: ${p.excerpt}` : ""}`)
    .join("\n");

  const body = `# Social Catalyst

> Social Catalyst is marketing on autopilot for B2B founders. Add your website and it drafts a month of LinkedIn and social posts in your voice; approve with a swipe or run it on autopilot. Plans from $149/month.

## Pages

- [How it works](${SITE_URL}/how-it-works)
- [Pricing](${SITE_URL}/pricing)
- [The Catalyst Method](${SITE_URL}/method)
- [Solutions](${SITE_URL}/solutions)
- [Integrations (coming soon)](${SITE_URL}/integrations)
- [About](${SITE_URL}/about)
- [Case studies](${SITE_URL}/case-studies)
- [Blog](${SITE_URL}/blog)
- [Contact sales](${SITE_URL}/book)

## Posts

${posts}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
