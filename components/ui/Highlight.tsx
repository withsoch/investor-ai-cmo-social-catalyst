"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * A highlighter-pen swipe behind a phrase, drawn left to right the first time
 * it scrolls into view. Colour defaults to the sun accent; text stays ink.
 */
export function Highlight({
  children,
  color = "var(--color-sun)",
  delay = 0.25,
}: {
  children: React.ReactNode;
  color?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="relative isolate inline-block whitespace-nowrap">
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-[-0.12em] bottom-[0.06em] top-[0.52em] -z-10 origin-left rounded-[0.2em]"
        style={{ background: color }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </span>
  );
}
