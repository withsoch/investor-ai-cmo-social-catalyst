"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Photo } from "@/components/ui/Photo";
import { Avatar } from "@/components/ui/Avatar";
import { SpinBadge } from "@/components/ui/SpinBadge";
import { NotificationToast } from "@/components/SocialGrowthAnim";
import { useAuditModal } from "@/context/AuditModalContext";
import { CASE_STUDIES, HERO, headlineMetric } from "@/lib/content";

// ------------------------------------------------------------------
//  Hero collage: one photo of people on a bright colour plate, with the
//  proof floating around it - a live notification, a real client result
//  (real face, real number, links to the case study), a growth chip and
//  the free-audit badge. Layers drift a little with the pointer on desktop.
// ------------------------------------------------------------------

/** Relative bar heights for the growth chip. Same shape as the dashboard trend. */
const BARS = [38, 46, 42, 55, 63, 72, 84, 100];

const pop = (delay: number, reduce: boolean | null) =>
  reduce
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 14, scale: 0.94 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.55, delay, ease: [0.34, 1.4, 0.64, 1] as const },
      };

/** Pointer-parallax offset for one layer; `depth` is px of travel at the edge. */
function useLayer(x: MotionValue<number>, y: MotionValue<number>, depth: number) {
  return {
    x: useTransform(x, (v) => v * depth),
    y: useTransform(y, (v) => v * depth),
  };
}

function ResultChip() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % CASE_STUDIES.length), 4000);
    return () => clearInterval(id);
  }, [reduce]);

  const cs = CASE_STUDIES[i];
  const m = headlineMetric(cs);

  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="relative flex w-[16.25rem] items-center rounded-2xl bg-white p-3 pr-4 shadow-[var(--shadow-lift)] ring-1 ring-line transition-transform duration-300 hover:-translate-y-0.5"
      aria-label={`${cs.author}: ${m.value} ${m.label}. Read the case study`}
    >
      <span className="absolute -top-2.5 left-4 rounded-full bg-leaf px-2 py-[0.2rem] text-[0.58rem] font-bold uppercase tracking-[0.08em] text-white">
        Client result
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={cs.slug}
          className="flex min-w-0 items-center gap-3"
          initial={reduce ? false : { opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Avatar
            src={cs.image}
            name={cs.author}
            initials={cs.initials}
            accent={cs.accent}
            size={46}
            objectPosition="50% 25%"
            captioned
          />
          <span className="min-w-0">
            <span
              className="block text-[1.4rem] font-semibold leading-none text-brand"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {m.value}
            </span>
            <span className="mt-1 block truncate text-[0.72rem] leading-tight text-ink-soft">
              {m.label}
            </span>
            <span className="mt-0.5 block truncate text-[0.66rem] leading-tight text-muted">
              {cs.author}
            </span>
          </span>
        </motion.span>
      </AnimatePresence>
    </Link>
  );
}

function GrowthChip() {
  const reduce = useReducedMotion();
  return (
    <div className="w-[9.75rem] rounded-2xl bg-white p-3 shadow-[var(--shadow-lift)] ring-1 ring-line">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
        Profile visits
      </p>
      <p
        className="mt-1 flex items-center gap-1.5 text-[1.15rem] font-semibold leading-none text-ink"
        style={{ fontFamily: "var(--font-display)" }}
      >
        +38%
        <svg viewBox="0 0 12 12" className="h-3 w-3 text-leaf" aria-hidden="true">
          <path d="M6 1.5 10 8H2z" fill="currentColor" />
        </svg>
      </p>
      <div className="mt-2.5 flex h-8 items-end gap-[3px]" aria-hidden="true">
        {BARS.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              background:
                i >= BARS.length - 2
                  ? "var(--color-brand)"
                  : "color-mix(in srgb, var(--color-brand) 26%, var(--color-mist))",
            }}
            initial={reduce ? { height: `${h}%` } : { height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.6, delay: 1.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const { openModal } = useAuditModal();

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 110, damping: 18, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 110, damping: 18, mass: 0.6 });

  const plate = useLayer(sx, sy, -12);
  const photo = useLayer(sx, sy, 6);
  const toast = useLayer(sx, sy, 20);
  const result = useLayer(sx, sy, 16);
  const growth = useLayer(sx, sy, 24);
  const badge = useLayer(sx, sy, -18);

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onPointerLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[29rem] lg:mr-0"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative px-4 pb-16 pt-12 sm:px-8">
        {/* colour plate */}
        <motion.div
          aria-hidden="true"
          style={plate}
          className="absolute inset-x-6 bottom-9 top-6 sm:inset-x-10"
        >
          <div className="h-full w-full rotate-[5deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)]" />
        </motion.div>
        <motion.span
          aria-hidden="true"
          style={plate}
          className="absolute bottom-3 right-3 h-20 w-20 rounded-full bg-lilac/70 blur-[2px] sm:right-4"
        />

        {/* photo */}
        <motion.div
          style={photo}
          className="relative"
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96, rotate: -1.5 },
                animate: { opacity: 1, scale: 1, rotate: 0 },
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
              })}
        >
          <Photo
            src={HERO.photo.src}
            alt={HERO.photo.alt}
            priority
            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 26rem, 90vw"
            className="aspect-[4/3] rounded-[2rem] shadow-[var(--shadow-lift)] ring-4 ring-white sm:aspect-[4/5]"
            imgClassName="object-[60%_center]"
          />
        </motion.div>

        {/* live notification, top-left */}
        <motion.div style={toast} className="absolute -left-3 top-0 z-20 hidden w-[15.5rem] sm:block">
          <motion.div {...pop(0.45, reduce)}>
            <div className="animate-float-a">
              <NotificationToast className="pointer-events-none relative h-14 w-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* growth chip, right */}
        <motion.div style={growth} className="absolute -right-4 top-[44%] z-20 hidden sm:block lg:-right-8">
          <motion.div {...pop(0.8, reduce)}>
            <div className="animate-float-b">
              <GrowthChip />
            </div>
          </motion.div>
        </motion.div>

        {/* real client result, bottom-left */}
        <motion.div style={result} className="absolute -left-1 bottom-1 z-20 sm:-left-6">
          <motion.div {...pop(0.65, reduce)}>
            <div className="animate-float-c">
              <ResultChip />
            </div>
          </motion.div>
        </motion.div>

        {/* free-audit badge, top-right */}
        <motion.div style={badge} className="absolute -top-1 right-0 z-30 sm:-right-3">
          <motion.div {...pop(1, reduce)}>
            <button
              type="button"
              onClick={openModal}
              aria-label="Get a free marketing audit"
              className="block cursor-pointer rounded-full transition-transform duration-300 hover:scale-105"
            >
              <SpinBadge text="Free audit · Back in 24h · " size={104} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
