import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Aurora } from "@/components/ui/Aurora";
import { Icon } from "@/components/Icons";
import { CASE_STUDIES, headlineMetric } from "@/lib/content";

/**
 * "More results" strip at the foot of each case-study page: the other
 * engagements, face first, so a reader who finished one story has
 * somewhere to go other than the back button.
 */
export function MoreCaseStudies({ current }: { current: string }) {
  const others = CASE_STUDIES.filter((cs) => cs.slug !== current);
  return (
    <section className="relative overflow-hidden bg-forest py-20 sm:py-24">
      <Aurora tone="dark" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[0.8rem] font-semibold text-white ring-1 ring-white/15">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
              More results
            </span>
            <h2 className="text-h2 mt-5 !text-white">Other founders we&apos;ve worked with.</h2>
          </Reveal>
          <Link
            href="/case-studies"
            className="group inline-flex shrink-0 items-center gap-2 py-2 text-sm font-semibold text-white transition-colors hover:text-sun"
          >
            All case studies
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {others.map((cs, i) => {
            const m = headlineMetric(cs);
            return (
              <Reveal key={cs.slug} delay={i * 0.08}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl p-5 text-white ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_var(--color-brand)]"
                >
                  <div className="absolute inset-0 -z-10" style={{ background: cs.accent }}>
                    <Photo
                      src={cs.image}
                      alt={`${cs.author}, ${cs.authorRole}`}
                      sizes="(min-width: 640px) 30vw, 90vw"
                      className="h-full w-full"
                      imgClassName="object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1f1a] via-[#0b1f1a]/45 to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                    <Icon name="arrow" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </span>
                  <p
                    className="text-[2.8rem] leading-none tracking-tight text-white"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  >
                    {m.value.replace(/\D+$/, "")}
                    <span className="text-sun">{m.value.replace(/^\d+/, "")}</span>
                  </p>
                  <p className="mt-1.5 text-[0.85rem] leading-snug text-white/85">{m.label}</p>
                  <p className="mt-3 border-t border-white/20 pt-3 text-[0.9rem] font-semibold">{cs.author}</p>
                  <p className="truncate text-[0.72rem] text-white/70">{cs.authorRole}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
