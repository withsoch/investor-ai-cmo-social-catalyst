"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AuditButton } from "@/components/AuditButton";
import { BookButton } from "@/components/BookButton";
import { Icon } from "@/components/Icons";
import { CategoryVisual } from "@/components/CategoryVisual";
import { SERVICE_CATEGORIES } from "@/lib/content";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Colour plate behind each category's visual, cycling so neighbours differ. */
const PLATES = [
  "bg-peach",
  "bg-lilac-soft",
  "bg-sun-soft",
  "bg-[linear-gradient(135deg,var(--color-peach),var(--color-sun-soft))]",
  "bg-[linear-gradient(135deg,var(--color-lilac-soft),var(--color-peach))]",
  "bg-mist",
  "bg-[linear-gradient(135deg,var(--color-sun-soft),var(--color-lilac-soft))]",
];

export function ServicesShowcase() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0].slug);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band near the upper-middle of the viewport: whichever category
      // crosses it becomes "active".
      { rootMargin: "-45% 0px -50% 0px" },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      {/* mobile quick-jump chip strip */}
      <div className="sticky top-[4.5rem] z-20 border-b border-line bg-white/85 backdrop-blur lg:hidden">
        <div className="container-x overflow-x-auto py-3">
          <div className="flex w-max gap-2">
            {SERVICE_CATEGORIES.map((c, i) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  active === c.slug
                    ? "border-brand bg-peach/50 text-brand-dark"
                    : "border-line text-ink-soft"
                }`}
              >
                <span
                  className="mr-1.5 text-[0.65rem] text-muted"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {num(i)}
                </span>
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x grid gap-x-12 pt-14 lg:grid-cols-[13rem_1fr] lg:pt-20 xl:gap-x-20">
        {/* sticky index rail (lg+) */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 self-start">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
              Categories
            </p>
            <nav className="mt-4 border-l border-line">
              {SERVICE_CATEGORIES.map((c, i) => {
                const isActive = active === c.slug;
                return (
                  <a
                    key={c.slug}
                    href={`#${c.slug}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`group -ml-px flex items-baseline gap-3 rounded-r-lg border-l-2 py-2 pl-4 transition-colors ${
                      isActive ? "border-brand bg-peach/60" : "border-transparent hover:border-line"
                    }`}
                  >
                    <span
                      className={`text-[0.7rem] transition-colors ${
                        isActive ? "text-brand" : "text-muted"
                      }`}
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {num(i)}
                    </span>
                    <span
                      className={`text-[0.925rem] transition-colors ${
                        isActive
                          ? "font-medium text-ink"
                          : "text-muted group-hover:text-ink-soft"
                      }`}
                    >
                      {c.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-dashed border-line pt-6">
              <p className="text-[0.85rem] leading-relaxed text-slate">
                Take one service, or hand us the whole system.
              </p>
              <div className="mt-4">
                <BookButton variant="dark" size="md" arrow>
                  Get a quote
                </BookButton>
              </div>
            </div>
          </div>
        </aside>

        {/* editorial category chapters */}
        <div>
          {SERVICE_CATEGORIES.map((c, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal
                key={c.slug}
                className="border-t border-dashed border-line py-14 first:border-t-0 first:pt-0 lg:py-20"
              >
                <article
                  id={c.slug}
                  ref={(el) => {
                    refs.current[c.slug] = el;
                  }}
                  className="scroll-mt-32"
                >
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* copy */}
                    <div className={flipped ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl bg-brand px-2 text-[0.85rem] font-semibold text-ink"
                          style={{ fontFamily: "var(--font-display)", fontVariantNumeric: "tabular-nums" }}
                        >
                          {num(i)}
                        </span>
                        <span className="h-px w-8 bg-line" />
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
                          {c.name}
                        </span>
                      </div>

                      <h2 className="mt-4 text-[clamp(1.55rem,1.2rem+1.1vw,2.15rem)] leading-[1.12]">
                        {c.name}
                      </h2>

                      <p
                        className="mt-3 text-[1.05rem] leading-snug text-ink-soft"
                        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                      >
                        {c.blurb}
                      </p>

                      <ul className="mt-6 space-y-4 border-t border-line pt-5">
                        {c.services.map((s) => (
                          <li key={s.title}>
                            <p className="flex items-start gap-2.5 text-[0.95rem] font-semibold text-ink">
                              <Icon
                                name="check"
                                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                                strokeWidth={2.4}
                              />
                              {s.title}
                            </p>
                            <p className="mt-1 pl-[1.65rem] text-[0.9rem] leading-relaxed text-slate">
                              {s.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* visual */}
                    <div className={flipped ? "lg:order-1" : ""}>
                      <div className={`relative overflow-hidden rounded-[2rem] px-3 py-6 sm:px-6 sm:py-8 ${PLATES[i % PLATES.length]}`}>
                        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
                        <div className="relative">
                          <CategoryVisual slug={c.slug} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* rail CTA repeated inline for mobile, where the rail is hidden */}
          <Reveal className="border-t border-dashed border-line pt-10 lg:hidden">
            <p className="text-[0.975rem] leading-relaxed text-slate">
              Take one service, or hand us the whole system.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <BookButton variant="primary" size="lg" arrow>
                Get a quote
              </BookButton>
              <AuditButton variant="secondary" size="lg" className="cursor-pointer">
                Get a Free Marketing Audit
              </AuditButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
