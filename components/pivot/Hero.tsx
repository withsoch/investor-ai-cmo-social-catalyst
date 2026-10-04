"use client";

import { useEffect, useState } from "react";
import { ONBOARDING, PRODUCT } from "@/lib/product";
import { AppMock } from "@/components/pivot/AppMock";
import { play } from "@/lib/sound";
import { PreviewModal, type PreviewInput } from "@/components/pivot/PreviewModal";

/** Types each audience out, holds, deletes, moves on. SSR shows the first one whole. */
function useTypewriter(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [len, setLen] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const word = words[wordIndex];
    let delay = deleting ? 38 : 72;
    if (!deleting && len === word.length) delay = 1900;
    if (deleting && len === 0) delay = 260;

    const t = window.setTimeout(() => {
      if (!deleting && len === word.length) setDeleting(true);
      else if (deleting && len === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else setLen((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(t);
  }, [len, deleting, wordIndex, words]);

  return words[wordIndex].slice(0, len);
}

export function Hero() {
  const typed = useTypewriter(PRODUCT.heroAudiences);
  const [site, setSite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  // null = closed; empty strings = the example company
  const [preview, setPreview] = useState<PreviewInput | null>(null);
  const example = { site: "", linkedin: "" };

  // ?demo=1 opens the example preview on load: a link you can send someone
  // that lands straight in the product demo.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("demo") === "1") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreview(example);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    play("generate");
    setPreview({ site: site.trim(), linkedin: linkedin.trim() });
  }

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />

      <div className="container-x relative flex flex-col items-center pt-16 text-center sm:pt-24">
        {/* Two fixed lines: the prefix never moves, and the typed line keeps
            its height even while empty, so nothing below it reflows. The
            size is capped so the longest audience fits one line on a phone. */}
        <h1
          className="max-w-5xl text-[clamp(1.85rem,0.9rem+5.4vw,4.6rem)] leading-[1.08] tracking-[-0.028em]"
          aria-label={`${PRODUCT.heroPrefix} ${PRODUCT.heroAudiences[0]}`}
        >
          <span aria-hidden className="block whitespace-nowrap">{PRODUCT.heroPrefix}</span>
          <span aria-hidden className="block h-[1.08em] whitespace-nowrap text-brand">
            <span className="type-caret">{typed || "\u200b"}</span>
          </span>
        </h1>
        <p className="lead mt-6 max-w-xl !text-ink-soft">{PRODUCT.heroSub}</p>

        {/* Company website + founder's LinkedIn: the two links the preview reads. */}
        <form
          onSubmit={submit}
          className="mt-9 grid w-full max-w-3xl gap-2 rounded-2xl bg-white p-2 shadow-[0_24px_60px_-28px_rgba(20,30,25,0.45)] ring-1 ring-ink/10 sm:grid-cols-[1fr_1fr_auto]"
        >
          <label className="flex min-w-0 items-center gap-2 rounded-xl px-3 ring-1 ring-transparent focus-within:ring-ink/15 sm:ring-0">
            <span className="shrink-0 text-xs font-semibold text-muted">Website</span>
            <input
              id="hero-url"
              type="text"
              inputMode="url"
              autoComplete="url"
              required
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder={PRODUCT.heroPlaceholder}
              aria-label="Company website"
              className="min-w-0 flex-1 bg-transparent py-3 text-base text-ink outline-none placeholder:text-muted/70"
            />
          </label>
          <label className="flex min-w-0 items-center gap-2 rounded-xl border-t border-line px-3 sm:border-l sm:border-t-0">
            <span className="shrink-0 text-xs font-semibold text-muted">LinkedIn</span>
            <input
              type="text"
              inputMode="url"
              required
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder={PRODUCT.heroLinkedinPlaceholder}
              aria-label="Founder's LinkedIn profile URL"
              className="min-w-0 flex-1 bg-transparent py-3 text-base text-ink outline-none placeholder:text-muted/70"
            />
          </label>
          <button
            type="submit"
            className="btn-shine shrink-0 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-light"
          >
            {PRODUCT.heroButton}
          </button>
        </form>
        <p className="mt-3 text-sm text-ink-soft/80">
          Free preview from your company website and your LinkedIn. No card.{" "}
          <button
            type="button"
            onClick={() => {
              play("generate");
              setPreview(example);
            }}
            className="font-semibold text-ink underline decoration-brand underline-offset-4"
          >
            See an example
          </button>
        </p>

        {/* The whole setup, visible before any scrolling: three inputs, then posts. */}
        <a href="#how" className="group mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-3" aria-label="How setup works: website, LinkedIn, 10-minute interview">
          {ONBOARDING.map((o, i) => (
            <span key={o.k} className="flex items-center gap-2">
              {i > 0 && <span className="hidden text-ink/30 sm:inline" aria-hidden>→</span>}
              <span className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-left shadow-[0_6px_16px_-12px_rgba(20,30,25,0.45)] ring-1 ring-line transition group-hover:ring-ink/25">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-ink">{i + 1}</span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">{o.k}</span>
                  <span className="block text-[0.7rem] text-muted">{o.d}</span>
                </span>
              </span>
            </span>
          ))}
          <span className="flex items-center gap-2">
            <span className="hidden text-ink/30 sm:inline" aria-hidden>→</span>
            <span className="rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-white">50+ posts in your voice</span>
          </span>
        </a>

        <div className="mt-14 w-full sm:mt-16">
          <AppMock />
        </div>
      </div>

      {/* the window runs into the next section rather than stopping on a hard edge */}
      <div className="relative -mt-24 h-24 bg-gradient-to-b from-transparent to-cream" aria-hidden />

      <PreviewModal input={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
