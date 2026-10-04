"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { DEMO, STEPS } from "@/lib/product";
import { BrandKitCard, PostCard, SwipeDeck } from "@/components/pivot/DemoParts";
import { Reveal } from "@/components/ui/Reveal";
import { play } from "@/lib/sound";

/**
 * The five product steps: the three-input onboarding (links, interview),
 * then Native's work / approve / revise.
 *
 * Desktop: one pinned section. The copy for each step scrolls on the left;
 * the visual on the right is sticky and swaps to whichever step is in the
 * middle of the viewport. Phones: copy then visual, stacked.
 */
export function Steps() {
  const [active, setActive] = useState(0);
  const markers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    markers.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const visual = (i: number) =>
    [<UrlVisual key="a" />, <VoiceVisual key="v" />, <WorkVisual key="b" />, <ApproveVisual key="c" />, <RefineVisual key="d" />][i];

  return (
    <section id="how" className="bg-cream py-20 sm:py-28">
      <div className="container-x">
        {/* phones and tablets: stacked */}
        <div className="flex flex-col gap-20 lg:hidden">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex flex-col gap-8">
              <Reveal>
                <StepCopy s={s} />
              </Reveal>
              <Reveal delay={0.1}>{visual(i)}</Reveal>
            </div>
          ))}
        </div>

        {/* desktop: pinned */}
        <div className="hidden grid-cols-2 gap-16 lg:grid">
          <div>
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                data-step={i}
                ref={(el) => {
                  markers.current[i] = el;
                }}
                className={`flex min-h-[72vh] items-center transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-30"}`}
              >
                <StepCopy s={s} />
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="sticky top-[calc(50vh-17rem)] flex flex-col gap-5">
              <div className="flex gap-1.5" aria-hidden>
                {STEPS.map((s, i) => (
                  <span key={s.n} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= active ? "bg-brand" : "bg-line"}`} />
                ))}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {visual(active)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCopy({ s }: { s: (typeof STEPS)[number] }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-brand-dark">{s.n}</p>
      <h2 className="text-h2 mt-2">{s.title}</h2>
      <p className="lead mt-4 max-w-lg">{s.body}</p>
      <ul className="mt-6 flex flex-col gap-2.5">
        {s.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-ink-soft">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-[0.7rem] font-bold text-brand-dark">✓</span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="panel bg-mist p-3 ring-1 ring-line sm:p-4">
      <div className="flex items-center gap-1.5 px-2 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 truncate text-xs text-muted">{label}</span>
      </div>
      <div className="card-r bg-cream p-4 sm:p-6">{children}</div>
    </div>
  );
}

/* 01 — typing a URL, then the site's pieces being pulled out */
function UrlVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [chars, setChars] = useState(0);
  // Types the website, then the LinkedIn URL, as one continuous run.
  const site = DEMO.domain;
  const li = DEMO.linkedin;
  const total = site.length + li.length;

  useEffect(() => {
    if (!inView || chars >= total) return;
    const t = window.setTimeout(() => setChars((c) => c + 1), 55);
    return () => window.clearTimeout(t);
  }, [inView, chars, total]);

  const siteTyped = site.slice(0, chars);
  const liTyped = li.slice(0, Math.max(0, chars - site.length));
  const done = chars >= total;
  const found = [
    { k: "Offer", v: DEMO.brand.oneLiner },
    { k: "Buyer", v: DEMO.brand.icp },
    { k: "Voice", v: "From 10 recent posts: short paragraphs, numbers up front, dry humour" },
  ];

  const field = (prefix: string, value: string, typing: boolean) => (
    <div className="flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-line">
      <span className="w-16 shrink-0 pl-2 text-xs text-muted">{prefix}</span>
      <span className="min-w-0 flex-1 truncate text-sm text-ink">
        {value}
        {typing && <span className="type-caret" />}
      </span>
    </div>
  );

  return (
    <div ref={ref}>
      <Frame label="app.withsocialcatalyst.com/new">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Step 1 of 2 · Your links</p>
        <div className="mt-3 flex flex-col gap-2">
          {field("Website", siteTyped, chars < site.length)}
          {field("LinkedIn", liTyped, chars >= site.length && !done)}
        </div>
        <ul className="mt-5 flex flex-col gap-2">
          {found.map((f, i) => (
            <motion.li
              key={f.k}
              initial={{ opacity: 0, y: 8 }}
              animate={done ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.35 }}
              className="flex gap-3 rounded-xl bg-white p-3 text-sm ring-1 ring-line"
            >
              <span className="w-12 shrink-0 text-xs font-semibold text-brand-dark">{f.k}</span>
              <span className="text-ink-soft">{f.v}</span>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: 8 }}
            animate={done ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm ring-1 ring-line"
          >
            <span className="w-12 shrink-0 text-xs font-semibold text-brand-dark">Look</span>
            <span className="flex gap-1.5">
              {DEMO.brand.colors.map((c) => (
                <span key={c} className="h-5 w-5 rounded-md ring-1 ring-black/5" style={{ background: c }} />
              ))}
            </span>
            <span className="text-xs text-muted">{DEMO.brand.font}</span>
          </motion.li>
        </ul>
      </Frame>
      <p className="mt-3 text-center text-xs text-muted">{DEMO.label}: {DEMO.brand.name} is fictional.</p>
    </div>
  );
}

/* 02 — the 10-minute voice interview that replaces the discovery call */
function VoiceVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [shown, setShown] = useState(0); // lines revealed: q1, a1, q2, a2, …
  const [confirmed, setConfirmed] = useState(false);
  const ex = DEMO.interview.exchanges;
  const lines = ex.length * 2;

  useEffect(() => {
    if (!inView || shown > lines) return;
    const t = window.setTimeout(() => setShown((n) => n + 1), shown % 2 ? 1300 : 900);
    return () => window.clearTimeout(t);
  }, [inView, shown, lines]);

  const done = shown > lines;

  return (
    <div ref={ref}>
      <Frame label="Step 2 of 2 · Interview">
        <div className="flex items-center gap-4">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
            {!done && <span className="absolute inset-0 animate-ping rounded-full bg-brand/25 motion-reduce:animate-none" />}
            <span className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full ${done ? "bg-leaf" : "bg-brand"}`}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={done ? "white" : "#1c2b26"} strokeWidth="2" strokeLinecap="round" aria-hidden>
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink">{done ? "Interview complete" : "Listening…"}</p>
            <div className="mt-1.5 flex h-5 items-end gap-[3px]" aria-hidden>
              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  className={`voice-bar w-1 rounded-full ${done ? "bg-line" : "bg-brand/70"}`}
                  style={{ animationDelay: `${(i % 7) * 0.11}s`, animationPlayState: done ? "paused" : "running" }}
                />
              ))}
            </div>
          </div>
          <span className="text-xs tabular-nums text-muted">{done ? "9:48" : `${String(2 + Math.floor(shown * 1.2)).padStart(1, "0")}:${shown % 2 ? "14" : "40"}`}</span>
        </div>

        <ul className="mt-5 flex flex-col gap-2">
          {ex.map((e, i) => (
            <li key={e.q} className="flex flex-col gap-2">
              {shown > i * 2 && (
                <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="max-w-[85%] rounded-xl rounded-bl-sm bg-mist px-3 py-2 text-[0.8rem] text-ink-soft">
                  {e.q}
                </motion.p>
              )}
              {shown > i * 2 + 1 && (
                <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-white px-3 py-2 text-[0.8rem] text-ink ring-1 ring-line">
                  “{e.a}”
                </motion.p>
              )}
            </li>
          ))}
        </ul>

        {done && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-white p-3 ring-1 ring-line">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">What we heard</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {DEMO.interview.captured.map((c) => (
                <span key={c} className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-medium text-ink">{c}</span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                if (!confirmed) play("success");
                setConfirmed(true);
              }}
              className={`mt-3 w-full rounded-lg py-2 text-xs font-semibold transition ${confirmed ? "bg-leaf text-white" : "bg-forest text-white hover:bg-ink"}`}
            >
              {confirmed ? "Confirmed ✓ · drafting your month" : "Looks right"}
            </button>
          </motion.div>
        )}
      </Frame>
    </div>
  );
}

/* 03 — brand kit plus a fanned stack of drafted posts and a counter */
function WorkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= 52) return;
    const t = window.setTimeout(() => setCount((c) => Math.min(52, c + 2)), 40);
    return () => window.clearTimeout(t);
  }, [inView, count]);

  return (
    <div ref={ref}>
      <Frame label="Strategy pack · Northwind Ledger">
        <div className="grid gap-5">
          <BrandKitCard brand={DEMO.brand} domain={DEMO.domain} />
          <div className="relative mx-auto h-[19rem] w-full max-w-sm">
            {DEMO.posts.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.id}
                className="absolute inset-x-0 top-0"
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={inView ? { opacity: 1, y: i * 26, rotate: (i - 1) * 3 } : {}}
                transition={{ delay: 0.2 + i * 0.25, type: "spring", stiffness: 160, damping: 20 }}
                style={{ zIndex: 3 - i }}
              >
                <PostCard post={p} brand={DEMO.brand} className="max-h-60 overflow-hidden" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between rounded-xl bg-white p-4 ring-1 ring-line">
          <span className="text-sm text-ink-soft">Posts drafted this month</span>
          <span className="font-[family-name:var(--font-display)] text-3xl font-medium tabular-nums text-ink">{count}</span>
        </div>
      </Frame>
    </div>
  );
}

/* 04 — the live swipe deck */
function ApproveVisual() {
  return (
    <Frame label="Suggestions">
      <SwipeDeck posts={DEMO.posts} brand={DEMO.brand} compact />
    </Frame>
  );
}

/* 05 — plain-language revision of one post */
function RefineVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [typed, setTyped] = useState(0);
  const [revised, setRevised] = useState(false);
  const prompt = DEMO.refine.prompt;

  useEffect(() => {
    if (!inView) return;
    if (typed < prompt.length) {
      const t = window.setTimeout(() => setTyped((c) => c + 1), 35);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setRevised(true), 700);
    return () => window.clearTimeout(t);
  }, [inView, typed, prompt.length]);

  // Revises on its own for people just scrolling past (silently); a click
  // revises straight away with a sound, or replays once it's done.
  function onButton() {
    if (revised) {
      play("tick");
      setRevised(false);
      setTyped(0);
    } else {
      play("revise");
      setTyped(prompt.length);
      setRevised(true);
    }
  }

  const post = { ...DEMO.posts[0], text: revised ? DEMO.refine.after : DEMO.refine.before };

  return (
    <div ref={ref}>
      <Frame label="Revise post">
        <motion.div key={revised ? "after" : "before"} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <PostCard post={post} brand={DEMO.brand} />
        </motion.div>
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-line">
          <span className="flex-1 px-2 text-sm text-ink">
            {prompt.slice(0, typed)}
            {typed < prompt.length && <span className="type-caret" />}
          </span>
          <button
            type="button"
            onClick={onButton}
            className={`rounded-lg px-3 py-2 text-xs font-semibold ${revised ? "bg-leaf text-white" : "bg-brand text-ink"}`}
          >
            {revised ? "Revised ✓ · replay" : "Revise"}
          </button>
        </div>
      </Frame>
    </div>
  );
}
