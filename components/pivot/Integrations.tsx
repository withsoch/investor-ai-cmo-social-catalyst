"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { INTEGRATIONS } from "@/lib/product";
import { Reveal } from "@/components/ui/Reveal";
import { play } from "@/lib/sound";

/**
 * "Hears your week": the integrations layer, shown as coming soon.
 * Left: the sources, grouped. Right: an example idea inbox where each idea
 * carries the line it came from — the part that makes it a Head of Content
 * rather than a writing tool. Nothing here is built yet, and it says so.
 */
export function Integrations({ heading = true }: { heading?: boolean }) {
  const [drafted, setDrafted] = useState<number[]>([]);

  function draft(i: number) {
    if (drafted.includes(i)) return;
    play("approve");
    setDrafted((d) => [...d, i]);
  }

  return (
    <section id="integrations" className="bg-cream py-20 sm:py-28">
      <div className="container-x">
        {heading && (
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-brand-dark">{INTEGRATIONS.eyebrow}</p>
            <h2 className="text-h2 mt-3">{INTEGRATIONS.title}</h2>
            <p className="lead mx-auto mt-4 max-w-2xl">{INTEGRATIONS.lead}</p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          {/* sources */}
          <div className="grid gap-4 sm:grid-cols-2">
            {INTEGRATIONS.groups.map((g, i) => (
              <Reveal key={g.k} delay={i * 0.05}>
                <div className="card-r flex h-full flex-col gap-3 bg-white p-5 ring-1 ring-line">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2.5">
                      <span className="h-3 w-3 rounded-full" style={{ background: g.color }} />
                      <span className="font-semibold text-ink">{g.k}</span>
                    </span>
                    <span className="rounded-full bg-mist px-2 py-0.5 text-[0.68rem] font-semibold text-muted">Soon</span>
                  </div>
                  <p className="text-sm text-slate">{g.d}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {g.tools.map((t) => (
                      <span key={t} className="rounded-md bg-mist px-2 py-0.5 text-[0.72rem] font-medium text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* example idea inbox */}
          <Reveal delay={0.1}>
            <div className="panel bg-mist p-3 ring-1 ring-line sm:p-4">
              <div className="flex items-center justify-between gap-3 px-2 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Idea inbox · this week</span>
                <span className="rounded-full bg-sun-soft px-2.5 py-0.5 text-[0.68rem] font-semibold text-ink">Example</span>
              </div>
              <ul className="flex flex-col gap-3">
                {INTEGRATIONS.inbox.map((it, i) => {
                  const done = drafted.includes(i);
                  return (
                    <li key={it.idea} className="card-r bg-white p-4 ring-1 ring-line">
                      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                        <span className="rounded-full bg-ink px-2 py-0.5 font-semibold text-white">{it.source}</span>
                        {it.where}
                      </p>
                      <blockquote className="mt-3 border-l-2 border-brand pl-3 text-sm italic text-ink-soft">
                        “{it.quote}”
                      </blockquote>
                      <div className="mt-3 flex items-end justify-between gap-3">
                        <p className="text-sm font-medium text-ink">{it.idea}</p>
                        <button
                          type="button"
                          onClick={() => draft(i)}
                          aria-pressed={done}
                          className={`shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                            done ? "bg-leaf text-white" : "bg-forest text-white hover:bg-ink"
                          }`}
                        >
                          {done ? "Drafted ✓" : "Draft it"}
                        </button>
                      </div>
                      {done && (
                        <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-xs text-leaf">
                          Added to your deck for approval.
                        </motion.p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {INTEGRATIONS.trust.map((t) => (
            <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm text-ink-soft ring-1 ring-line">
              <span className="text-leaf" aria-hidden>✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
