"use client";

import { motion, useReducedMotion } from "motion/react";
import { STEPS } from "@/lib/content";

// Each step is a plotted point on a compounding-authority curve.
// x = column centre (matches lg:grid-cols-4), y = height (lower y = higher).
const NODES = [
  { x: 12.5, y: 78 },
  { x: 37.5, y: 56 },
  { x: 62.5, y: 34 },
  { x: 87.5, y: 14 },
];
const BASELINE = 90;
const CLIMB = 2.1; // seconds for the ball to climb from step 1 to step 4

// Smooth rising curve through the four nodes, accelerating upward (compounding).
const CURVE =
  "M12.5,78 C24,72 27,64 37.5,56 C48,48 52,45 62.5,34 C73,24 77,21 87.5,14";
const AREA = `${CURVE} L87.5,${BASELINE} L12.5,${BASELINE} Z`;

// Cubic-bézier segments between consecutive nodes (p0, c1, c2, p3).
const SEGMENTS = [
  [[12.5, 78], [24, 72], [27, 64], [37.5, 56]],
  [[37.5, 56], [48, 48], [52, 45], [62.5, 34]],
  [[62.5, 34], [73, 24], [77, 21], [87.5, 14]],
];

const cubic = (a: number, b: number, c: number, d: number, t: number) => {
  const u = 1 - t;
  return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d;
};

// Sample the curve into evenly-parameterised points the ball travels through.
// Equal sample count per segment ⇒ the ball reaches node i at fraction i/3 of the climb.
const PER_SEG = 22;
const SAMPLES = SEGMENTS.flatMap((s, si) => {
  const pts: { x: string; y: string }[] = [];
  for (let k = si === 0 ? 0 : 1; k <= PER_SEG; k++) {
    const t = k / PER_SEG;
    pts.push({
      x: `${cubic(s[0][0], s[1][0], s[2][0], s[3][0], t)}%`,
      y: `${cubic(s[0][1], s[1][1], s[2][1], s[3][1], t)}%`,
    });
  }
  return pts;
});
const TIMES = SAMPLES.map((_, i) => i / (SAMPLES.length - 1));

/** "Authority over 90 days" chart - a marker climbs the curve, igniting each step as it arrives. */
export function HowWeWorkChart() {
  const reduce = useReducedMotion();
  const viewport = { once: true, margin: "-80px" } as const;
  const last = SAMPLES[SAMPLES.length - 1];

  return (
    <div className="relative mt-16 hidden h-60 lg:block" aria-hidden>
      <span className="absolute left-[3%] top-0 text-xs font-medium tracking-wide text-muted">
        Visibility &amp; orders, compounding →
      </span>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hww-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[34, 56, 78].map((y) => (
          <line key={y} x1="3" x2="97" y1={y} y2={y} stroke="var(--color-ink)" strokeOpacity="0.06" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        <line x1="3" x2="97" y1={BASELINE} y2={BASELINE} stroke="var(--color-ink)" strokeOpacity="0.16" strokeWidth="1" vectorEffect="non-scaling-stroke" />

        <path d={AREA} fill="url(#hww-area)" />
        <path d={CURVE} fill="none" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* dashed stems + numbered markers - each ignites as the ball arrives */}
      {STEPS.map((step, i) => {
        const n = NODES[i];
        const isLast = i === STEPS.length - 1;
        const delay = reduce ? 0 : (i / (STEPS.length - 1)) * CLIMB;
        return (
          <span key={step.no}>
            <motion.span
              className="absolute border-l border-dashed border-ink/15"
              style={{ left: `${n.x}%`, top: `${n.y}%`, height: `${BASELINE - n.y}%` }}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay }}
            />
            <motion.span
              className={`absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-sm ${
                isLast ? "border-brand bg-brand text-white shadow-card" : "border-line bg-white text-ink"
              }`}
              style={{ left: `${n.x}%`, top: `${n.y}%`, fontFamily: "var(--font-display)" }}
              initial={reduce ? false : { scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ delay, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {step.no}
            </motion.span>
          </span>
        );
      })}

      {/* the climbing ball */}
      <motion.span
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={reduce ? { left: last.x, top: last.y } : { left: SAMPLES[0].x, top: SAMPLES[0].y }}
        initial={false}
        whileInView={reduce ? undefined : { left: SAMPLES.map((p) => p.x), top: SAMPLES.map((p) => p.y) }}
        viewport={viewport}
        transition={{ duration: CLIMB, ease: "easeInOut", times: TIMES }}
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-brand/40 animate-ping motion-reduce:hidden" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand shadow-[0_0_12px_3px] shadow-brand/40 ring-2 ring-white" />
        </span>
      </motion.span>

      <span className="absolute left-[3%] text-xs text-muted" style={{ top: "91%" }}>Day&nbsp;0</span>
      <span className="absolute right-[3%] text-xs text-muted" style={{ top: "91%" }}>Day&nbsp;90+</span>
    </div>
  );
}
