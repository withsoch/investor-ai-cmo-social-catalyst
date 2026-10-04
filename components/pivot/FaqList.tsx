"use client";

import { play } from "@/lib/sound";

/** Native <details> accordion with a soft tick on open/close. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {items.map((f) => (
        <details
          key={f.q}
          onToggle={() => play("tick")}
          className="card-r group bg-white p-5 ring-1 ring-line open:ring-ink/25"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {f.q}
            <span className="text-xl text-brand transition group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 text-slate">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
