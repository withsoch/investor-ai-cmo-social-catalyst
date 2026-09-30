import { AuditButton } from "@/components/AuditButton";
import { BookButton } from "@/components/BookButton";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { HeroHeadline } from "@/components/HeroHeadline";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";
import { CTAS, HERO } from "@/lib/content";

export function Hero() {
  return (
    // Pulled up under the sticky, transparent header so the cream and the
    // aurora run all the way to the top of the viewport.
    <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pt-[4.5rem]">
      {/* atmosphere: three slow colour blobs and a faded dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora-a absolute -left-[12%] -top-[18%] h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[90px]" />
        <div className="animate-aurora-b absolute -right-[10%] top-[2%] h-[30rem] w-[30rem] rounded-full bg-sun/45 blur-[90px]" />
        <div className="animate-aurora-c absolute -bottom-[30%] left-[30%] hidden h-[30rem] w-[30rem] rounded-full bg-lilac/30 blur-[100px] sm:block" />
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(65%_60%_at_50%_45%,black,transparent)]" />
      </div>

      <div className="container-x relative grid items-center gap-8 pb-14 pt-8 sm:pt-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pb-20 lg:pt-14">
        {/* ---- copy ---- */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up [animation-delay:0ms]">{HERO.eyebrow}</span>

          <HeroHeadline className="text-display mt-5 text-[clamp(2.15rem,1.2rem+3.4vw,3.6rem)] animate-fade-up [animation-delay:80ms]" />

          <p className="lead mt-5 max-w-lg text-[clamp(0.98rem,0.9rem+0.3vw,1.12rem)] animate-fade-up [animation-delay:160ms]">
            {HERO.lead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
            <AuditButton
              variant="primary"
              size="lg"
              className="btn-shine cursor-pointer shadow-[0_18px_34px_-14px_var(--color-brand)]"
            >
              {CTAS.secondary.label}
              <Icon
                name="arrow"
                className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </AuditButton>
            <BookButton variant="secondary" size="lg" className="bg-white/80 backdrop-blur">
              {CTAS.primary.label}
            </BookButton>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] text-slate animate-fade-up [animation-delay:300ms]">
            {HERO.microcopy.map((m) => (
              <li key={m} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-leaf" strokeWidth={2.4} />
                {m}
              </li>
            ))}
          </ul>

          <a
            href="#results"
            className="group mt-9 inline-flex max-w-full items-center gap-3 rounded-full bg-white/75 py-1.5 pl-1.5 pr-4 ring-1 ring-line backdrop-blur transition-colors hover:bg-white animate-fade-up [animation-delay:380ms]"
          >
            <ClientAvatarStack size={34} className="shrink-0" />
            <span className="text-[0.8rem] leading-snug text-ink-soft">
              {HERO.proofLine}
              <Icon
                name="arrow"
                className="ml-1 inline h-3.5 w-3.5 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* ---- photo collage ---- */}
        <div className="animate-pop">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
