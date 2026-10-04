import type { Metadata } from "next";
import { FinalCta, PageHero } from "@/components/pivot/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/lib/product";

export const metadata: Metadata = {
  title: "About | Social Catalyst",
  description: "Social Catalyst is built in Tallinn. We turned a done-for-you LinkedIn service into software, so founders get their time back.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={ABOUT.title} chips={[{ label: "Tallinn, Estonia" }, { label: "Built for B2B founders" }, { label: "Real results only" }]} />
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x max-w-3xl">
          <div className="flex flex-col gap-6">
            {ABOUT.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className={i === 0 ? "text-2xl leading-relaxed text-ink" : "lead"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <h2 className="text-h2">What we believe</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="card-r h-full bg-white p-6 ring-1 ring-line">
                  <h3 className="text-h3">{v.t}</h3>
                  <p className="mt-2 text-slate">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
