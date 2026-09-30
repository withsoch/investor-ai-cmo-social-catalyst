import type { Metadata } from "next";
import { InnerHero } from "@/components/InnerHero";
import { HeroPhoto, FloatChip } from "@/components/HeroPhoto";
import { ProofPill } from "@/components/ProofPill";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Aurora } from "@/components/ui/Aurora";
import { Emphasis } from "@/components/ui/Emphasis";
import { SpinBadge } from "@/components/ui/SpinBadge";
import { TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a quote for your business. A free 30-minute call, no pitch, just a plan for where your business is losing customers and how to fix it.",
};

const EXPECT = [
  "A clear read on where your business is losing customers today",
  "Which package fits, and why, even if it's the cheapest one on the list",
  "Which platforms would move the needle fastest for your business specifically",
  "A straight recommendation, no pressure. Work with us, or take the plan and run",
];

const META = [
  { icon: "clock" as const, label: "30 minutes" },
  { icon: "chat" as const, label: "No pitch, just a plan" },
  { icon: "shield" as const, label: "Free, no card needed" },
];

export default function BookPage() {
  return (
    <>
      <InnerHero
        eyebrow="Get a quote"
        title={
          <>
            From overlooked online to <Emphasis>actually generating leads.</Emphasis>
          </>
        }
        lead="A free 30-minute call. We look at where your business stands today on Instagram, Google and LinkedIn, and hand you a clear plan. Take it and run, or take it with us."
        actions={
          <>
            <BookButton variant="primary" size="lg" arrow className="btn-shine shadow-[0_18px_34px_-14px_var(--color-brand)]">
              Get a quote
            </BookButton>
            <AuditButton variant="secondary" size="lg" className="cursor-pointer bg-white/80">
              Get a Free Marketing Audit
            </AuditButton>
          </>
        }
        footer={<ProofPill />}
        aside={
          <HeroPhoto
            src="/Service Images/ai-content-team-meeting.webp"
            alt="A team talking through a plan in their office"
            imgClassName="object-[35%_center]"
          >
            {META.map((m, i) => (
              <FloatChip
                key={m.label}
                className={
                  i === 0
                    ? "-left-2 top-4 hidden sm:block"
                    : i === 1
                      ? "-right-3 top-[46%] hidden sm:block lg:-right-7"
                      : "-left-1 bottom-1 sm:-left-6"
                }
                float={i === 0 ? "animate-float-a" : i === 1 ? "animate-float-b" : "animate-float-c"}
              >
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-peach">
                    <Icon name={m.icon} className="h-3.5 w-3.5 text-brand-deep" strokeWidth={2} />
                  </span>
                  <span className="text-[0.78rem] font-semibold text-ink">{m.label}</span>
                </span>
              </FloatChip>
            ))}
            <div className="absolute -top-1 right-0 z-30 sm:-right-3">
              <SpinBadge text="Free · 30 minutes · No pitch · " size={100} icon="calendar" />
            </div>
          </HeroPhoto>
        }
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">On the call</span>
              <h2 className="text-h2 mt-5">What you walk away with</h2>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {EXPECT.map((e, i) => (
                <Reveal key={e} delay={(i % 2) * 0.1} as="li" className="h-full">
                  <div className={`flex h-full items-start gap-3.5 rounded-3xl p-6 ${["bg-peach", "bg-lilac-soft", "bg-sun-soft", "bg-mist"][i % 4]}`}>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                      <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    <span className="text-[0.975rem] leading-relaxed text-ink-soft">{e}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* who you'll actually be on the call with - drops out entirely until
                there is a real person with a real photo in TEAM */}
            {TEAM[0]?.photo && (
              <Reveal delay={0.15}>
                <div className="mt-5 flex flex-col gap-5 rounded-3xl border border-line bg-white p-6 sm:flex-row sm:items-center">
                  <Photo
                    src={TEAM[0].photo}
                    alt={`${TEAM[0].name}, ${TEAM[0].role} at Social Catalyst`}
                    ratio="1/1"
                    sizes="112px"
                    className="w-28 shrink-0 rounded-xl"
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Who you&apos;ll be talking to
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {TEAM[0].name}, {TEAM[0].role}. You get the person who would
                      actually run your account, not a sales team passing you along
                      afterwards.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-forest p-7 text-white sm:p-8">
              <Aurora tone="dark" dots={false} />
              <div className="relative">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-sun">Who it&apos;s for</p>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-white/90">
                  B2B and growing business owners who want to look active, get
                  found on Google, and turn that into more leads, without
                  becoming a full-time content creator themselves.
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                  <ClientAvatarStack size={36} />
                  <span className="text-[0.78rem] leading-snug text-white/70">Founders we already work with</span>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <BookButton variant="primary" size="lg" arrow className="btn-shine w-full justify-center">
                    Get a quote
                  </BookButton>
                  <AuditButton variant="light" size="lg" className="w-full cursor-pointer">
                    Or get a free audit
                  </AuditButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
