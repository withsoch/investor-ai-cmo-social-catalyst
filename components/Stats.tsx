import { Reveal } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Aurora";
import { StatValue } from "@/components/StatCounter";
import { STATS } from "@/lib/content";

/** Bright orange promise band. All text is ink: white on brand orange fails contrast. */
export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand py-14 text-ink sm:py-16">
      <Aurora tone="brand" />
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`px-5 text-center ${i !== 0 ? "lg:border-l lg:border-dashed lg:border-ink/25" : ""}`}
            >
              <StatValue
                value={s.value}
                className="block text-[3rem] leading-none text-ink sm:text-[3.6rem] [&>span]:!text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              />
              <p className="mx-auto mt-3 max-w-[12rem] text-sm font-medium text-ink">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
