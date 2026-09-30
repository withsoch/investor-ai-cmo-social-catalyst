import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/Icons";
import { HowWeWorkChart } from "@/components/HowWeWorkChart";
import { STEPS } from "@/lib/content";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-h2">Four steps.</h2>
            <p className="lead mt-5">
              We do the work. You stay in control and spend under an hour a
              month on it. Here&apos;s the whole process:
            </p>
          </div>
        </div>

        {/* Authority-over-90-days chart: steps plotted on a compounding curve, drawn in on scroll */}
        <HowWeWorkChart />

        {/* Step copy - columns align under the plotted nodes on lg; stacks editorially below */}
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-5 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08}>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-ink" style={{ fontFamily: "var(--font-display)" }}>
                  {step.no}
                </span>
                <span className="h-px flex-1 bg-line" />
                <Icon name={step.icon} className="h-5 w-5 text-brand" strokeWidth={1.6} />
              </div>
              <h3 className="text-h3 mt-4">
                {step.no === "01" ? (
                  <>
                    Audit &amp;
                    <br />
                    Quick Wins
                  </>
                ) : (
                  step.title
                )}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
