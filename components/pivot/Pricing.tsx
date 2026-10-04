"use client";

import Link from "next/link";
import { useState } from "react";
import { PLANS } from "@/lib/product";
import { Reveal } from "@/components/ui/Reveal";
import { play } from "@/lib/sound";

/** Yearly is 20% off the monthly price, shown per month and rounded to the dollar. */
function price(monthly: number, yearly: boolean) {
  return yearly ? Math.round(monthly * 0.8) : monthly;
}

export function Pricing({ heading = true }: { heading?: boolean }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2">Pick your plan.</h2>
            <p className="lead mt-4">Month to month. Cancel anytime.</p>
          </Reveal>
        )}

        <div className="mt-8 flex justify-center">
          <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-full bg-mist p-1 ring-1 ring-line">
            {[
              { v: false, l: "Monthly" },
              { v: true, l: "Yearly −20%" },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                role="radio"
                aria-checked={yearly === o.v}
                onClick={() => {
                  if (yearly !== o.v) play("tick");
                  setYearly(o.v);
                }}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  yearly === o.v ? "bg-ink text-white" : "text-slate hover:text-ink"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-slate">
          Every plan starts with a <strong className="font-semibold text-ink">free preview</strong>: your first 10 posts, no card.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.05}>
              <div
                className={`card-r relative flex h-full flex-col p-6 ${
                  p.featured ? "bg-forest text-white" : "bg-cream ring-1 ring-line"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-sun px-3 py-1 text-xs font-semibold text-ink">
                    Most popular
                  </span>
                )}
                <h3 className={`text-h3 ${p.featured ? "!text-white" : ""}`}>{p.name}</h3>
                <p className={`mt-2 min-h-[2.75rem] text-sm ${p.featured ? "text-white/70" : "text-slate"}`}>{p.blurb}</p>
                <p className={`mt-5 font-[family-name:var(--font-display)] text-5xl font-medium ${p.featured ? "text-white" : "text-ink"}`}>
                  {p.monthly === null ? "Custom" : `$${price(p.monthly, yearly)}`}
                  {p.monthly !== null && <span className="text-base font-normal opacity-60">/mo</span>}
                </p>
                <p className={`mt-1 h-5 text-xs ${p.featured ? "text-white/60" : "text-muted"}`}>
                  {p.monthly !== null && yearly ? `Billed $${price(p.monthly, true) * 12} yearly` : ""}
                </p>

                <Link
                  href={p.cta.href}
                  onClick={() => play("tap")}
                  className={`mt-6 rounded-xl px-4 py-3 text-center text-sm font-semibold transition ${
                    p.featured ? "bg-brand text-ink hover:bg-brand-light" : "bg-ink text-white hover:bg-ink-soft"
                  }`}
                >
                  {p.cta.label}
                </Link>

                <ul className={`mt-6 flex flex-col gap-2.5 text-sm ${p.featured ? "text-white/85" : "text-ink-soft"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className={p.featured ? "text-sun" : "text-brand-dark"} aria-hidden>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {p.extra && <p className={`mt-auto pt-6 text-xs ${p.featured ? "text-white/55" : "text-muted"}`}>{p.extra}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
