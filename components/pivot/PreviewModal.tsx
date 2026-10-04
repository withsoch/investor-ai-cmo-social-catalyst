"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { DEMO, CTA, type DemoPost } from "@/lib/product";
import { BrandKitCard, SwipeDeck, type Brand } from "@/components/pivot/DemoParts";
import { play } from "@/lib/sound";

export type PreviewInput = { site: string; linkedin: string };

type Result = {
  mode: "live" | "example";
  domain: string;
  linkedin: string;
  brand: Brand;
  posts: DemoPost[];
  note?: string;
};

const EXAMPLE: Result = {
  mode: "example",
  domain: DEMO.domain,
  linkedin: DEMO.linkedin,
  brand: DEMO.brand,
  posts: DEMO.posts,
};

/** "https://www.linkedin.com/in/jane-doe/" → "linkedin.com/in/jane-doe" */
function cleanLinkedin(raw: string) {
  return raw.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "").replace(/[?#].*$/, "").replace(/\/+$/, "");
}

function cleanDomain(raw: string) {
  return raw.replace(/^https?:\/\//i, "").replace(/\/.*$/, "").trim().toLowerCase();
}

/**
 * The hero's "Generate" flow.
 *
 * - Empty URL → plays the scripted example (Northwind Ledger, fictional).
 * - A URL → asks /api/generate. That route only does real work when
 *   ANTHROPIC_API_KEY is set; otherwise it answers 501 and we fall back to
 *   the example, saying so plainly rather than pretending.
 *
 * The staged progress always runs for at least ~5s so the example and a fast
 * live response feel the same.
 */
export function PreviewModal({ input, onClose }: { input: PreviewInput | null; onClose: () => void }) {
  const open = input !== null;
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const [minDone, setMinDone] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const domain = input?.site ? cleanDomain(input.site) : "";
  const linkedin = input?.linkedin ? cleanLinkedin(input.linkedin) : "";
  const shownSite = domain || DEMO.domain;
  const shownLinkedin = linkedin || DEMO.linkedin;
  const stages = DEMO.stages.map((s) => s.replace("{site}", shownSite).replace("{linkedin}", shownLinkedin));

  // reset + run whenever a new preview is opened
  useEffect(() => {
    if (!open) return;
    /* eslint-disable react-hooks/set-state-in-effect */
    setStage(0);
    setResult(null);
    setMinDone(false);
    /* eslint-enable react-hooks/set-state-in-effect */

    const timers: number[] = [];
    DEMO.stages.forEach((_, i) => {
      timers.push(window.setTimeout(() => setStage(i + 1), 750 * (i + 1)));
    });
    timers.push(window.setTimeout(() => setMinDone(true), 750 * DEMO.stages.length + 300));

    let cancelled = false;
    if (!domain) {
      setResult(EXAMPLE);
    } else {
      fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: domain, linkedin }),
      })
        .then(async (r) => {
          if (cancelled) return;
          if (r.ok) {
            const data = await r.json();
            setResult({
              mode: "live",
              domain,
              linkedin,
              brand: data.brand,
              posts: data.posts,
              note: "Generated from your website. In the full version, your LinkedIn posts and a 10-minute interview set the voice.",
            });
          } else {
            setResult({
              ...EXAMPLE,
              note:
                r.status === 501
                  ? `This is a demo: live generation is in private beta. Here's what Social Catalyst made from an example company's website and its founder's LinkedIn, in place of ${domain}${linkedin ? ` and ${linkedin}` : ""}.`
                  : `We couldn't read ${domain} just now. Here's an example company instead.`,
            });
          }
        })
        .catch(() => {
          if (!cancelled) setResult({ ...EXAMPLE, note: `We couldn't read ${domain} just now. Here's an example company instead.` });
        });
    }

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [open, domain, linkedin]);

  // Escape closes; lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const ready = minDone && result !== null;

  // A soft chime when the preview lands. Only audible if the visitor opened
  // it themselves: browsers keep audio locked until a user gesture.
  useEffect(() => {
    if (ready) play("success");
  }, [ready]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Your content preview"
            tabIndex={-1}
            className="panel relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-b-none bg-cream p-5 outline-none sm:rounded-b-[28px] sm:p-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                play("tick");
                onClose();
              }}
              aria-label="Close preview"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line hover:ring-ink/40"
            >
              ✕
            </button>

            {!ready ? (
              <div className="mx-auto max-w-md py-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Generating</p>
                <h2 className="mt-2 text-h3">{shownSite}</h2>
                <p className="mt-1 text-sm text-slate">{shownLinkedin}</p>
                <ol className="mt-6 flex flex-col gap-3">
                  {stages.map((s, i) => {
                    const done = stage > i;
                    const active = stage === i;
                    return (
                      <li key={s} className="flex items-center gap-3 text-sm">
                        <span
                          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            done ? "bg-leaf text-white" : active ? "bg-sun text-ink" : "bg-white text-muted ring-1 ring-line"
                          }`}
                        >
                          {done ? "✓" : i + 1}
                        </span>
                        <span className={done ? "text-ink" : active ? "font-medium text-ink" : "text-muted"}>
                          {s}
                          {active && <span className="ml-1 animate-pulse">…</span>}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap items-center gap-2 pr-12">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${result.mode === "live" ? "bg-leaf/15 text-leaf" : "bg-sun-soft text-ink"}`}>
                    {result.mode === "live" ? "Generated live" : DEMO.label}
                  </span>
                  <h2 className="text-h3">A month of content, drafted.</h2>
                </div>
                {result.note && <p className="mt-3 max-w-2xl text-sm text-slate">{result.note}</p>}

                <div className="mt-6 grid gap-6 lg:grid-cols-[18rem_1fr]">
                  <BrandKitCard brand={result.brand} domain={result.domain} linkedin={result.linkedin} />
                  <SwipeDeck posts={result.posts} brand={result.brand} compact />
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-line sm:flex-row">
                  <p className="text-sm text-ink-soft">
                    This is a taste, from two links. Add a <strong className="text-ink">10-minute interview</strong> and the full version drafts 50+ posts a month in your own voice.
                  </p>
                  <Link
                    onClick={() => play("tap")}
                    href={domain ? `${CTA.start.href}?site=${encodeURIComponent(domain)}&linkedin=${encodeURIComponent(linkedin)}` : CTA.start.href}
                    className="shrink-0 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-ink hover:bg-brand-light"
                  >
                    Get the full month
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
