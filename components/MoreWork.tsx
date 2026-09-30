import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Aurora } from "@/components/ui/Aurora";
import { Icon } from "@/components/Icons";
import { WORK_CASE_STUDIES } from "@/lib/content";

/**
 * "More work" strip at the foot of each content / design case study: the
 * other pieces of work, image first. The results case studies have their own
 * strip (MoreCaseStudies).
 */
export function MoreWork({ current }: { current: string }) {
  const others = WORK_CASE_STUDIES.filter((w) => w.slug !== current);
  return (
    <section className="relative overflow-hidden bg-forest py-20 sm:py-24">
      <Aurora tone="dark" />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[0.8rem] font-semibold text-white ring-1 ring-white/15">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
              More work
            </span>
            <h2 className="text-h2 mt-5 !text-white">Content, design and video we&apos;ve made.</h2>
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
          {others.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/case-studies/${w.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_var(--color-brand)]"
              >
                <Photo
                  src={w.image}
                  alt={w.imageAlt}
                  ratio="16/10"
                  sizes="(min-width: 640px) 30vw, 90vw"
                  imgClassName={`${w.imageFocus ?? "object-top"} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-sun">
                    {w.client} · {w.platform}
                  </p>
                  <p className="mt-2 text-[1rem] font-semibold leading-snug text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {w.title}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.85rem] font-semibold text-white/85 transition-colors group-hover:text-white">
                    Read case study
                    <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
