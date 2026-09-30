"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PlatformMark } from "@/components/PlatformIcons";
import { type Channel } from "@/lib/channels";

// ------------------------------------------------------------------
//  Homepage channels visual: a "business control deck" mock. Deliberately not a clone of
//  any one platform's UI - it shows the thing we actually sell, which is
//  every channel planned, published and measured in one place.
//
//  Layout rule for this file: nothing floats on top of readable content.
//  The notification toast lives in the gutter above the card and the
//  rating chip below it, so the card's own text is never covered.
// ------------------------------------------------------------------

type Post = {
  channel: Channel;
  label: string;
  when: string;
  live?: boolean;
};

const SCHEDULE: Post[] = [
  { channel: "instagram", label: "Reel · behind the scenes", when: "Now", live: true },
  { channel: "google", label: "Google post · service update", when: "Tue" },
  { channel: "facebook", label: "Facebook · client spotlight", when: "Wed" },
  { channel: "tiktok", label: "Quick tip video", when: "Thu" },
  { channel: "linkedin", label: "Connection · outreach message", when: "Fri" },
];

const METRICS: { label: string; target: number }[] = [
  { label: "Reach", target: 18200 },
  { label: "Profile visits", target: 1340 },
  { label: "Contact requests", target: 146 },
];

/** Relative bar heights, in percent. Reads as steady growth, not a spike. */
const TREND = [34, 41, 37, 48, 55, 51, 62, 70, 66, 78, 88, 100];

const NOTIFS: { channel: Channel; title: string; sub: string }[] = [
  { channel: "google", title: "New 5-star review", sub: "“Excellent to work with, highly recommend”" },
  { channel: "instagram", title: "12 new comments on your Reel", sub: "Growing conversation" },
  { channel: "facebook", title: "3 people asked for directions", sub: "From today’s event post" },
  { channel: "linkedin", title: "3 new connection replies", sub: "From this week's outreach" },
];

function formatNumber(v: number) {
  if (v >= 1000) return (v / 1000).toFixed(v >= 10000 ? 1 : 1).replace(/\.0$/, "") + "k";
  return v.toLocaleString();
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

function CountUpMetric({ target, label, delay }: { target: number; label: string; delay: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Reduced motion: jump straight to the number, but after hydration so the
    // server and client first render agree (both start at 0).
    if (reduce) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now() + delay * 1000;
        const dur = 1600;
        function tick(now: number) {
          const p = Math.min(Math.max((now - start) / dur, 0), 1);
          setValue(Math.round(easeOutQuart(p) * target));
          if (now < start + dur) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay, reduce]);

  return (
    <div ref={ref}>
      <p
        className="text-[1.2rem] font-semibold leading-none text-ink tabular-nums"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {formatNumber(value)}
      </p>
      <p className="mt-1 text-[0.68rem] leading-tight text-muted">{label}</p>
    </div>
  );
}

/** One notification at a time, cycling. Keeps the frame alive without
 *  stacking four chips on top of the card the way the old version did.
 *  Exported so the hero collage can float the same toast over its photo. */
export function NotificationToast({
  className = "pointer-events-none absolute right-0 top-0 z-20 h-14 w-[15.5rem] max-w-full",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % NOTIFS.length), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  const n = NOTIFS[i];

  return (
    <div className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={n.title}
          className="flex items-center gap-2.5 rounded-xl border border-line bg-white/95 p-2.5 shadow-card backdrop-blur"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <PlatformMark id={n.channel} size="sm" />
          <div className="min-w-0">
            <p className="truncate text-[0.73rem] font-semibold leading-tight text-ink">
              {n.title}
            </p>
            <p className="truncate text-[0.68rem] leading-tight text-muted">{n.sub}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** `toast={false}` drops the cycling notification, for when the hero already shows it. */
export function SocialGrowthAnim({ toast = true }: { toast?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative mx-auto w-full max-w-[27rem] pb-10 ${toast ? "pt-[3.6rem]" : "pt-4"}`}>
      {/* depth: a translucent tilted plate behind the card, tuned for the orange channels band */}
      <div
        aria-hidden="true"
        className={`absolute -inset-x-2 bottom-[3.25rem] -rotate-[3deg] rounded-[1.6rem] border border-white/50 bg-white/30 ${toast ? "top-[4.15rem]" : "top-[1.4rem]"}`}
      />

      {toast && <NotificationToast />}

      {/* ---- the card ---- */}
      <motion.div
        className="relative z-10 rounded-[1.35rem] border border-line bg-white p-4 shadow-[var(--shadow-lift)] sm:p-5"
        initial={reduce ? undefined : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[0.95rem] font-semibold leading-tight text-ink">
              This week&apos;s content
            </h3>
            <p className="mt-1 text-[0.72rem] leading-tight text-muted">
              Planned, written and published for you
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[0.68rem] font-semibold text-slate">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
            </span>
            5 channels live
          </span>
        </div>

        <div className="mt-4 space-y-1">
          {SCHEDULE.map((p, i) => (
            <motion.div
              key={p.label}
              className={`flex items-center gap-2.5 rounded-xl border px-2.5 py-[0.45rem] ${
                p.live
                  ? "border-brand/25 bg-brand/[0.055]"
                  : "border-line/70 bg-cream"
              }`}
              initial={reduce ? undefined : { opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.18 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <PlatformMark id={p.channel} size="sm" />
              <p className="min-w-0 flex-1 truncate text-[0.78rem] font-medium text-ink-soft">
                {p.label}
              </p>
              {p.live ? (
                <span className="shrink-0 rounded-full bg-brand px-2 py-[0.15rem] text-[0.62rem] font-bold uppercase tracking-wide text-white">
                  {p.when}
                </span>
              ) : (
                <span className="shrink-0 text-[0.7rem] font-medium text-muted">{p.when}</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="rule-dashed my-4" />

        {/* ---- results ---- */}
        <div className="flex items-center justify-between">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.07em] text-muted">
            Last 30 days
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-leaf/10 px-2 py-[0.15rem] text-[0.68rem] font-semibold text-leaf">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
              <path d="M6 1.5 10 8H2z" fill="currentColor" />
            </svg>
            38%
          </span>
        </div>

        <div className="mt-3 flex h-11 items-end gap-[3px]" aria-hidden="true">
          {TREND.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 rounded-t-[3px]"
              style={{
                background:
                  i >= TREND.length - 3
                    ? "var(--color-brand)"
                    : "color-mix(in srgb, var(--color-brand) 24%, var(--color-mist))",
              }}
              initial={reduce ? { height: `${h}%` } : { height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: 0.5 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line/70 pt-3.5">
          {METRICS.map((m, i) => (
            <CountUpMetric key={m.label} target={m.target} label={m.label} delay={0.7 + i * 0.12} />
          ))}
        </div>
      </motion.div>

      {/* ---- rating chip, in the gutter below the card ---- */}
      <motion.div
        className="absolute bottom-0 left-2 z-20 flex items-center gap-2.5 rounded-xl border border-line bg-white p-2.5 pr-3.5 shadow-card"
        initial={reduce ? undefined : { opacity: 0, y: -8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, delay: 1.15, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <PlatformMark id="google" size="sm" />
        <div>
          <div className="flex items-center gap-1">
            <span
              className="text-[0.82rem] font-semibold leading-none text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4.8
            </span>
            <span className="flex gap-[1px]" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="h-2.5 w-2.5 text-brand" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
          </div>
          <p className="mt-0.5 text-[0.66rem] leading-tight text-muted">
            Rating up from 4.3
          </p>
        </div>
      </motion.div>
    </div>
  );
}
