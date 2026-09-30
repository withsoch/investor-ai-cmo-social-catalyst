import type { Metadata } from "next";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { InnerHero } from "@/components/InnerHero";
import { HeroPhoto, FloatChip } from "@/components/HeroPhoto";
import { ProofPill } from "@/components/ProofPill";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { Emphasis } from "@/components/ui/Emphasis";
import { Highlight } from "@/components/ui/Highlight";
import { PackageCard } from "@/components/PackageCard";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/ui/Reveal";
import { CTAS, PACKAGES, PACKAGE_TERMS, PRICING_FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing for B2B and Growing Businesses",
  description:
    "Five packages for B2B and growing businesses. Social media, Google, reviews, LinkedIn outreach and ads. Get a quote.",
};

const CORE = PACKAGES.filter((p) => p.track === "core");
const SPECIALIST = PACKAGES.filter((p) => p.track === "specialist");

export default function PackagesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <InnerHero
        eyebrow="Packages"
        title={
          <>
            Five packages. <Emphasis>One goal: more customers.</Emphasis>
          </>
        }
        lead={
          <>
            Pick the package that matches where your business is today. Get
            a quote and we&apos;ll confirm the exact fit and price for your
            business.
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
        footer={<ProofPill />}
        aside={
          <HeroPhoto
            src="/Service Images/packages-hero-planning-meeting.webp"
            alt="Two colleagues planning at a laptop"
            imgClassName="object-[45%_center]"
          >
            {PACKAGE_TERMS.map((t, i) => (
              <FloatChip
                key={t.label}
                className={i === 0 ? "-left-2 top-3 hidden sm:block" : "-left-1 bottom-1 sm:-left-6"}
                float={i === 0 ? "animate-float-a" : "animate-float-c"}
              >
                <p
                  className="text-[1.35rem] font-semibold leading-none text-brand"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.value}
                </p>
                <p className="mt-1 max-w-[11rem] text-[0.72rem] leading-snug text-ink-soft">{t.label}</p>
              </FloatChip>
            ))}
          </HeroPhoto>
        }
      />

      {/* ── CORE LADDER ───────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The core ladder</span>
            <h2 className="text-h2 mt-5">
              <Highlight>Start here.</Highlight>
            </h2>
            <p className="lead mt-5">
              Essentials, Starter and Growth build on each other. Pick the
              one that matches how much of your business is online today.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {CORE.map((p, i) => (
              <div key={p.slug} id={p.slug} className="scroll-mt-32">
                <Reveal delay={i * 0.08}>
                  <PackageCard pkg={p} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST TRACKS ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-lilac-soft py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Specialist tracks</span>
            <h2 className="text-h2 mt-5">Two of these aren&apos;t a step up.</h2>
            <p className="lead mt-5">
              Outbound-Led and Full are different routes, not higher rungs on
              the same ladder. Built for a specific shape of business, not
              just a bigger version of the same one.
            </p>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {SPECIALIST.map((p, i) => (
              <div key={p.slug} id={p.slug} className="h-full scroll-mt-32">
                <Reveal delay={i * 0.08} className="h-full">
                  <PackageCard pkg={p} dark={p.slug === "full"} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-h2">Questions before you ask for a quote.</h2>
              <div className="mt-8 rounded-3xl bg-sun-soft p-6">
                <ClientAvatarStack size={40} />
                <p className="mt-4 text-[1.05rem] font-medium leading-snug text-ink">
                  Not sure which one fits? We&apos;ll name one honestly, even if it&apos;s the cheapest.
                </p>
                <BookButton variant="dark" size="md" arrow className="mt-5">
                  {CTAS.primary.label}
                </BookButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={PRICING_FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about your business and we'll quote it"
        subtitle="Get a quote. We'll ask a few questions and recommend a package honestly, even when the honest answer is the cheapest one."
      />
    </>
  );
}
