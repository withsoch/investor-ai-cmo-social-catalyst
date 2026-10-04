"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import type { DemoPost } from "@/lib/product";
import { play } from "@/lib/sound";

export type Brand = {
  name: string;
  oneLiner: string;
  icp: string;
  archetype: string;
  voice: string[];
  colors: string[];
  font: string;
};

const CHANNEL_LABEL: Record<DemoPost["channel"], string> = {
  linkedin: "LinkedIn · Founder",
  company: "LinkedIn · Page",
  x: "X",
  instagram: "Instagram",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function PostCard({
  post,
  brand,
  className = "",
  fit = false,
}: {
  post: DemoPost;
  brand: Pick<Brand, "name" | "colors">;
  className?: string;
  /**
   * The card sits in a fixed-height slot (the swipe deck). Long copy then
   * scrolls inside the card, with a fade at the bottom, instead of spilling
   * out over the buttons. Live posts vary in length, so this has to hold for
   * any text, not just the demo's.
   */
  fit?: boolean;
}) {
  return (
    <article className={`card-r flex h-full flex-col overflow-hidden bg-white p-5 shadow-[0_18px_40px_-24px_rgba(20,30,25,0.45)] ring-1 ring-line ${className}`}>
      <header className="flex flex-wrap items-center gap-3">
        <span
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ background: brand.colors[0] ?? "#1c2b26" }}
        >
          {initials(brand.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{brand.name}</p>
          <p className="text-xs text-muted">{CHANNEL_LABEL[post.channel]} · {post.when}</p>
        </div>
        <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-[0.7rem] font-semibold text-ink-soft max-[420px]:order-last max-[420px]:ml-[3.25rem]">
          {post.style}
        </span>
      </header>
      <p
        className={`mt-4 flex-1 whitespace-pre-line text-[0.92rem] leading-relaxed text-ink-soft ${
          fit ? "min-h-0 overflow-y-auto overscroll-contain pb-6 pr-1 [mask-image:linear-gradient(to_bottom,black_82%,transparent)]" : ""
        }`}
      >
        {post.text}
      </p>
      <footer className="mt-4 flex gap-5 border-t border-line pt-3 text-xs text-muted">
        <span>Like</span>
        <span>Comment</span>
        <span>Repost</span>
      </footer>
    </article>
  );
}

/**
 * Tinder-style approval deck. Drag right / press Approve to schedule,
 * drag left / press Skip to bin. The deck never empties — it cycles, the way
 * the product keeps generating suggestions.
 */
export function SwipeDeck({
  posts,
  brand,
  compact = false,
}: {
  posts: DemoPost[];
  brand: Pick<Brand, "name" | "colors">;
  compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [scheduled, setScheduled] = useState<DemoPost[]>([]);
  const [lastDir, setLastDir] = useState<1 | -1>(1);

  const current = posts[index % posts.length];
  const next = posts[(index + 1) % posts.length];

  function decide(dir: 1 | -1) {
    play(dir === 1 ? "approve" : "skip");
    setLastDir(dir);
    if (dir === 1) {
      setScheduled((s) => [current, ...s].slice(0, 4));
    }
    setIndex((i) => i + 1);
  }

  return (
    <div className={`grid gap-6 ${compact ? "" : "lg:grid-cols-[1fr_15rem]"}`}>
      <div>
        <div className="relative mx-auto h-[26rem] w-full max-w-[24rem]">
          {/* the card behind */}
          <div className="absolute inset-0 translate-y-3 scale-[0.96] opacity-70">
            <PostCard post={next} brand={brand} fit />
          </div>
          <AnimatePresence initial={false} custom={lastDir}>
            <SwipeCard key={index} onDecide={decide}>
              <PostCard post={current} brand={brand} fit />
            </SwipeCard>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => decide(-1)}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink ring-1 ring-line transition hover:ring-ink/40"
          >
            <span aria-hidden>✕</span> Skip
          </button>
          <button
            type="button"
            onClick={() => decide(1)}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-forest px-6 text-sm font-semibold text-white transition hover:bg-ink"
          >
            <span aria-hidden>✓</span> Approve
          </button>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          Drag the card, or use the buttons.
          {compact && scheduled.length > 0 && (
            <span className="ml-2 rounded-full bg-leaf/15 px-2 py-0.5 font-semibold text-leaf">
              {scheduled.length} scheduled
            </span>
          )}
        </p>
      </div>

      {!compact && (
        <aside className="card-r bg-white/70 p-4 ring-1 ring-line">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Scheduled</p>
          <ul className="mt-3 flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {scheduled.length === 0 && (
                <li className="rounded-xl border border-dashed border-line p-3 text-xs text-muted">
                  Approve a post and it lands here.
                </li>
              )}
              {scheduled.map((p, i) => (
                <motion.li
                  key={`${p.id}-${scheduled.length - i}`}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="rounded-xl bg-white p-3 ring-1 ring-line"
                >
                  <p className="text-[0.7rem] font-semibold text-brand-dark">{p.when}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-ink-soft">{p.text.split("\n")[0]}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </aside>
      )}
    </div>
  );
}

// The exit direction comes from AnimatePresence's `custom` (the last
// decision), so a button press flies the card the same way a drag would.
const SWIPE_VARIANTS = {
  enter: { scale: 0.96, y: 12, opacity: 0.7 },
  center: { scale: 1, y: 0, opacity: 1 },
  exit: (dir: 1 | -1) => ({ x: dir * 420, rotate: dir * 18, opacity: 0, transition: { duration: 0.35 } }),
};

function SwipeCard({
  children,
  onDecide,
}: {
  children: React.ReactNode;
  onDecide: (dir: 1 | -1) => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const approveOpacity = useTransform(x, [20, 120], [0, 1]);
  const skipOpacity = useTransform(x, [-120, -20], [1, 0]);

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x > 110) onDecide(1);
    else if (info.offset.x < -110) onDecide(-1);
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
      style={{ x, rotate }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={onDragEnd}
      variants={SWIPE_VARIANTS}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
    >
      {children}
      <motion.span
        style={{ opacity: approveOpacity }}
        className="pointer-events-none absolute left-5 top-16 rotate-[-10deg] rounded-lg border-2 border-leaf px-3 py-1 text-sm font-bold uppercase tracking-wider text-leaf"
      >
        Schedule
      </motion.span>
      <motion.span
        style={{ opacity: skipOpacity }}
        className="pointer-events-none absolute right-5 top-16 rotate-[10deg] rounded-lg border-2 border-brand-dark px-3 py-1 text-sm font-bold uppercase tracking-wider text-brand-dark"
      >
        Skip
      </motion.span>
    </motion.div>
  );
}

export function BrandKitCard({ brand, domain, linkedin }: { brand: Brand; domain: string; linkedin?: string }) {
  return (
    <div className="card-r bg-white p-5 ring-1 ring-line">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Brand kit</p>
        <p className="truncate text-xs text-muted">{domain}</p>
      </div>
      <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-medium text-ink">{brand.name}</p>
      <p className="mt-1 text-sm text-slate">{brand.oneLiner}</p>

      <div className="mt-4 flex gap-2">
        {brand.colors.map((c) => (
          <span key={c} className="h-9 w-9 rounded-lg ring-1 ring-black/5" style={{ background: c }} title={c} />
        ))}
        <span className="ml-auto self-center text-xs text-muted">{brand.font}</span>
      </div>

      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="text-xs font-semibold text-muted">Who you sell to</dt>
          <dd className="mt-0.5 text-ink-soft">{brand.icp}</dd>
        </div>
        {linkedin && (
          <div>
            <dt className="text-xs font-semibold text-muted">Voice learned from</dt>
            <dd className="mt-0.5 truncate text-ink-soft">{linkedin}</dd>
          </div>
        )}
        <div>
          <dt className="text-xs font-semibold text-muted">Archetype</dt>
          <dd className="mt-0.5 text-ink-soft">{brand.archetype}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold text-muted">Voice</dt>
          <dd className="mt-1 flex flex-wrap gap-1.5">
            {brand.voice.map((v) => (
              <span key={v} className="rounded-full bg-peach px-2.5 py-0.5 text-xs font-medium text-ink">
                {v}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
