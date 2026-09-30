import { Reveal } from "@/components/ui/Reveal";
import { PlatformMark } from "@/components/PlatformIcons";
import { SocialGrowthAnim } from "@/components/SocialGrowthAnim";
import { PLATFORMS } from "@/lib/channels";

/**
 * The homepage's "here's the fix" band: the channels we actually run, next to
 * the live dashboard mock that shows them planned and measured in one place.
 *
 * Bright orange on purpose. Every word on it is ink, never white: white on
 * brand orange is ~3:1 and fails body-text contrast, ink is ~4.8:1.
 */
export function PlatformStrip() {
  return (
    <section id="channels" className="relative scroll-mt-20 overflow-hidden bg-brand py-20 text-ink sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora-b absolute -left-[10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-sun/50 blur-[90px]" />
        <div className="animate-aurora-a absolute -right-[8%] -bottom-[20%] h-[30rem] w-[30rem] rounded-full bg-brand-light blur-[80px]" />
        <div className="bg-dots absolute inset-0 opacity-60 [--dot:rgba(28,43,38,0.14)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-[0.8rem] font-semibold text-white">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-sun" />
              Channels we run
            </span>
            <h2 className="text-h2 mt-5 max-w-xl">One plan. Every app your customers already use.</h2>
            <p className="lead mt-5 max-w-xl !text-ink">
              Instagram, Google, LinkedIn, Facebook and TikTok, run as one
              calendar. Planned, written, published and measured for you, and
              nothing goes live until you approve it.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div className="group flex h-full items-center gap-3 rounded-2xl bg-white/30 px-3.5 py-3 ring-1 ring-white/50 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[var(--shadow-lift)]">
                  <PlatformMark id={p.id} size="md" className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="min-w-0">
                    <p className="truncate text-[0.95rem] font-semibold leading-tight text-ink">{p.name}</p>
                    <p className="mt-0.5 text-[0.75rem] leading-snug text-ink/75">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <SocialGrowthAnim toast={false} />
        </Reveal>
      </div>
    </section>
  );
}
