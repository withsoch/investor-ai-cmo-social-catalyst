import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/components/Icons";
import { SERVICE_CATEGORIES } from "@/lib/content";

/** Bento placement per category on lg. Anything unlisted takes one cell. */
const SPAN: Record<string, string> = {
  "social-media": "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  google: "lg:col-span-2",
  "linkedin-leadgen": "lg:col-span-2",
};

/** Heights for the colour tile's little chart. */
const BARS = [30, 42, 38, 55, 64, 78, 100];

export function ServicesGrid() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="text-h2 mt-5">Everything your business needs online, in one place.</h2>
            <p className="lead mt-5">
              From a profile that looks active to a LinkedIn presence that
              brings in leads. Take one piece, or hand us the whole thing,
              across every channel your customers already use.
            </p>
          </Reveal>
          <Button href="/services" variant="dark" arrow className="shrink-0">
            Explore all services
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:auto-rows-[15.5rem] lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((c, i) => {
            const photo = Boolean(c.image);
            const big = c.slug === "social-media";
            return (
              <Reveal key={c.slug} delay={(i % 4) * 0.06} className={`h-full ${SPAN[c.slug] ?? ""}`}>
                <Link
                  href={`/services#${c.slug}`}
                  className={`group relative isolate flex h-full min-h-[19rem] flex-col overflow-hidden rounded-3xl p-5 transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] sm:p-6 lg:min-h-0 ${
                    photo ? "text-white" : "bg-sun text-ink"
                  }`}
                >
                  {photo ? (
                    <>
                      <div className="absolute inset-0 -z-10">
                        <Photo
                          src={c.image}
                          alt={c.imageAlt ?? ""}
                          sizes={big ? "(min-width: 1024px) 38rem, (min-width: 640px) 90vw, 100vw" : "(min-width: 1024px) 19rem, (min-width: 640px) 45vw, 100vw"}
                          className="h-full w-full"
                          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      </div>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/10" />
                    </>
                  ) : (
                    <div aria-hidden="true" className="absolute right-5 top-16 -z-10 flex h-20 w-32 items-end gap-1.5 sm:right-6">
                      {BARS.map((h, b) => (
                        <span
                          key={b}
                          className="flex-1 origin-bottom rounded-t-md bg-ink/15 transition-transform duration-500 group-hover:scale-y-110 last:bg-brand"
                          style={{ height: `${h}%`, transitionDelay: `${b * 30}ms` }}
                        />
                      ))}
                    </div>
                  )}

                  {/* top row */}
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                        photo ? "bg-white/15 ring-1 ring-white/25 backdrop-blur-md" : "bg-ink/10"
                      }`}
                    >
                      <Icon name={c.icon} className={`h-5 w-5 ${photo ? "text-white" : "text-ink"}`} strokeWidth={1.7} />
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-brand group-hover:text-white ${
                        photo ? "bg-white text-ink" : "bg-ink text-white"
                      }`}
                    >
                      <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>

                  {/* copy, pinned to the bottom */}
                  <div className="mt-auto pt-10">
                    <h3
                      className={`${big ? "text-[1.9rem] sm:text-[2.2rem]" : "text-[1.35rem]"} font-semibold leading-tight ${photo ? "!text-white" : ""}`}
                    >
                      {c.name}
                    </h3>
                    <p className={`mt-1.5 text-[0.9rem] leading-snug ${photo ? "text-white/85" : "text-ink/80"} ${big ? "max-w-sm text-[1rem]" : ""}`}>
                      {c.blurb}
                    </p>

                    {/* highlights: always shown on touch sizes, revealed on hover on desktop */}
                    <div className={`grid transition-all duration-500 ${big ? "" : "lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100"}`}>
                      <ul className="space-y-1.5 overflow-hidden pt-3">
                        {c.highlights.map((h) => (
                          <li key={h} className={`flex items-start gap-2 text-[0.82rem] ${photo ? "text-white/90" : "text-ink"}`}>
                            <Icon name="check" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${photo ? "text-sun" : "text-brand-deep"}`} strokeWidth={2.6} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
