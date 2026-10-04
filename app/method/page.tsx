import type { Metadata } from "next";
import { FinalCta, PageHero } from "@/components/pivot/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { METHOD } from "@/lib/product";

export const metadata: Metadata = {
  title: "The Catalyst Method | Social Catalyst",
  description: "How Social Catalyst turns a website into posts worth following: strategy pack, ICP, 30 themes, seven post shapes and a quality floor.",
};

export default function MethodPage() {
  return (
    <>
      <PageHero eyebrow={METHOD.eyebrow} title={METHOD.title} lead={METHOD.lead} chain chips={METHOD.pipeline.map((p) => ({ label: p.k }))} />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Six stages, one brand brain</h2>
            <p className="lead mt-4">Each stage writes structured output the next stage reads. No prose parsed back into data, no step silently dropped.</p>
          </Reveal>
          <ol className="relative mt-12 grid gap-4 md:grid-cols-3">
            {METHOD.pipeline.map((s, i) => (
              <Reveal key={s.k} delay={(i % 3) * 0.05} as="li">
                <div className="card-r h-full bg-cream p-6 ring-1 ring-line">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-semibold text-ink">{i + 1}</span>
                  <h3 className="text-h3 mt-4">{s.k}</h3>
                  <p className="mt-2 text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-h2">Seven shapes of post</h2>
            <p className="lead mt-4">Every post is written in one of seven shapes, each with its own rules, and mixed across the month so your feed never repeats itself.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.styles.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 0.04}>
                <div className="card-r h-full bg-white p-5 ring-1 ring-line">
                  <p className="font-[family-name:var(--font-display)] text-lg text-ink">{s.name}</p>
                  <p className="mt-1 text-sm text-slate">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" aria-hidden />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-sm font-semibold text-sun">The quality floor</p>
            <h2 className="text-h2 mt-3 !text-white">A post can follow every rule and still be filler.</h2>
            <p className="lead mt-5 !text-white/75">
              So under all seven shapes sits one test that doesn&apos;t care about format. A post that fails it is rewritten before you see it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-3">
              {METHOD.floor.map((f, i) => (
                <li key={f} className="card-r flex gap-4 bg-white/[0.06] p-5 ring-1 ring-white/10">
                  <span className="font-[family-name:var(--font-display)] text-2xl text-sun">{i + 1}</span>
                  <span className="text-white/85">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <FinalCta title="See it on your own site." />
    </>
  );
}
