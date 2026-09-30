import type { Metadata } from "next";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CtaBand } from "@/components/CtaBand";
import { InnerHero } from "@/components/InnerHero";
import { HeroPhoto, FloatChip } from "@/components/HeroPhoto";
import { PlatformMark } from "@/components/PlatformIcons";
import { StatValue } from "@/components/StatCounter";
import { Emphasis } from "@/components/ui/Emphasis";
import { PLATFORMS } from "@/lib/channels";
import { CTAS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services: Social, Google, Reviews & LinkedIn",
  description:
    "Instagram, TikTok and Facebook content, Google Business Profile management, review replies, AI-produced photos and video, one-page websites, LinkedIn outreach, and ad management, for B2B and growing businesses.",
};

const FACT_TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft"];

const FACTS = [
  { value: "24", label: "Services, across 7 categories" },
  { value: "7", label: "Categories, run as one system" },
  { value: "5", label: "Platforms & channels under one plan" },
];

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Services"
        title={
          <>
            Everything your business needs online.{" "}
            <Emphasis>Take one piece, or hand us the lot.</Emphasis>
          </>
        }
        lead={
          <>
            Every service below does one of two things: makes you easier to
            find, or makes people reach out once they&apos;ve found you.
            Across Instagram, Google, LinkedIn, TikTok and Facebook.
          </>
        }
        actions={
          <>
            <BookButton variant="primary" size="lg" arrow className="btn-shine shadow-[0_18px_34px_-14px_var(--color-brand)]">
              {CTAS.primary.label}
            </BookButton>
            <AuditButton variant="secondary" size="lg" className="cursor-pointer bg-white/80">
              {CTAS.secondary.label}
            </AuditButton>
          </>
        }
        footer={
          <dl className="grid grid-cols-3 gap-3">
            {FACTS.map((f, i) => (
              <div key={f.label} className={`rounded-2xl p-4 ${FACT_TINTS[i % FACT_TINTS.length]}`}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <StatValue
                    value={f.value}
                    className="block text-[1.9rem] leading-none text-ink"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                  />
                  <span className="mt-2 block text-[0.75rem] leading-snug text-ink-soft">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        }
        aside={
          <HeroPhoto
            src="/Service Images/services-hero-collage-v2.webp"
            alt="An analytics dashboard, social apps on a phone, a LinkedIn profile and Google Maps on a laptop"
          >
            <FloatChip className="-left-2 top-3 hidden sm:block" float="animate-float-a">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">One plan, run across</p>
              <div className="mt-2 flex gap-1.5">
                {PLATFORMS.map((p) => (
                  <PlatformMark key={p.id} id={p.id} size="sm" />
                ))}
              </div>
            </FloatChip>
            <FloatChip className="-left-1 bottom-1 sm:-left-6" float="animate-float-c">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-leaf/15 text-leaf">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.75rem] font-semibold leading-tight text-ink">You approve every post</p>
                  <p className="text-[0.68rem] leading-tight text-muted">Nothing goes live without you</p>
                </div>
              </div>
            </FloatChip>
          </HeroPhoto>
        }
      />

      <ServicesShowcase />

      <CtaBand
        title="Not sure which piece you need"
        subtitle="Get a quote. We'll look at your business, tell you which of these would help first, and say so plainly if the answer is none of them yet."
      />
    </>
  );
}
