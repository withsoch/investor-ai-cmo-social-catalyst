import { BookButton } from "@/components/BookButton";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icons";
import { PACKAGES } from "@/lib/content";

const CORE = PACKAGES.filter((p) => p.track === "core");

export function PackagesPreview() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_60%,black,transparent)]" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Packages</span>
            <h2 className="text-h2 mt-5">Five packages. Get a quote for yours.</h2>
            <p className="lead mt-5">
              Five packages, one goal: look open, get found, get more orders.
              See the full detail and the two specialist tracks on the
              packages page.
            </p>
          </Reveal>
          <Button href="/packages" variant="dark" arrow className="shrink-0">
            See all packages
          </Button>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {CORE.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1.5 sm:p-7 ${
                  p.popular
                    ? "bg-forest text-white shadow-[0_34px_70px_-34px_var(--color-brand)] ring-2 ring-brand lg:-translate-y-3 lg:hover:-translate-y-4"
                    : "bg-white ring-1 ring-line hover:shadow-[var(--shadow-lift)]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-ink shadow-[var(--shadow-card)]">
                    <Icon name="star" className="h-3 w-3" strokeWidth={2.4} />
                    Most popular
                  </span>
                )}
                <h3 className={`text-[1.35rem] font-semibold ${p.popular ? "!text-white" : ""}`}>{p.name}</h3>
                <p className={`mt-1.5 text-[0.85rem] leading-relaxed ${p.popular ? "text-white/70" : "text-slate"}`}>
                  {p.audience}
                </p>
                <p className={`mt-4 text-[1rem] font-medium leading-snug ${p.popular ? "text-white" : "text-ink"}`}>
                  {p.outcome}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[0.85rem] ${p.popular ? "text-white/85" : "text-slate"}`}>
                      <Icon
                        name="check"
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-sun" : "text-brand"}`}
                        strokeWidth={2.4}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={`my-5 border-t border-dashed ${p.popular ? "border-white/20" : "border-line"}`} />
                <BookButton
                  variant={p.popular ? "primary" : "secondary"}
                  size="md"
                  arrow
                  className={`w-full justify-center ${p.popular ? "btn-shine" : ""}`}
                >
                  Get a quote
                </BookButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
