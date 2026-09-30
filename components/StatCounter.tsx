"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  num: number;
  suffix: string;
  className?: string;
  style?: React.CSSProperties;
};

export function StatCounter({ num, suffix, className, style }: Props) {
  const [count, setCount] = useState(0);
  const triggered = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - t) ** 3;
            setCount(Math.round(eased * num));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <span ref={ref} className={className} style={style}>
      {count}
      <span className="text-brand">{suffix}</span>
    </span>
  );
}

/**
 * A display value like "29%", "24h" or "10+": counts up the leading integer
 * and keeps the rest as the suffix. Anything without a leading number
 * ("Free") renders as plain text.
 */
export function StatValue({ value, className, style }: { value: string; className?: string; style?: React.CSSProperties }) {
  const m = /^(\d+)(.*)$/.exec(value);
  if (!m) {
    return (
      <span className={className} style={style}>
        {value}
      </span>
    );
  }
  return <StatCounter num={Number(m[1])} suffix={m[2]} className={className} style={style} />;
}
