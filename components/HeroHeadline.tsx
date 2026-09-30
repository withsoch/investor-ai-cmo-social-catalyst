"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { HERO } from "@/lib/content";

const CYCLE_MS = 2600;

/**
 * Hero h1. Screen readers and crawlers get the one stable sentence; the
 * visual version keeps "finding you" fixed and cycles the channel it ends on.
 *
 * Every word is stacked invisibly in the same grid cell so the slot is always
 * as wide as the longest one - the line never reflows as the word changes.
 */
export function HeroHeadline({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % HERO.rotating.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [reduce]);

  const word = HERO.rotating[i];

  return (
    <h1 className={className}>
      <span className="sr-only">
        {HERO.headline}
        {HERO.headlineEmphasis}
      </span>
      <span aria-hidden="true">
        {HERO.headline}
        <span className="whitespace-nowrap">{HERO.rotatingPrefix}</span>{" "}
        <span className="inline-grid align-baseline italic text-brand">
          {HERO.rotating.map((w) => (
            <span key={w} className="invisible col-start-1 row-start-1">
              {w}
            </span>
          ))}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={word}
              className="relative col-start-1 row-start-1 justify-self-start whitespace-nowrap"
              initial={reduce ? false : { opacity: 0, y: "0.35em", filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: "-0.35em", filter: "blur(6px)" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
              {/* hand-drawn underline, redrawn under every new word */}
              <svg
                className="pointer-events-none absolute -bottom-[0.14em] left-0 h-[0.32em] w-full overflow-visible"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 8.5C40 3.5 90 2.5 198 6.5"
                  fill="none"
                  stroke="var(--color-sun)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </h1>
  );
}
