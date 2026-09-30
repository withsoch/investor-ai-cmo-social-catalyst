import type { Metadata } from "next";
import { AuditButton } from "@/components/AuditButton";
import { AuditReportVisual } from "@/components/AuditReportVisual";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Aurora";
import { Emphasis } from "@/components/ui/Emphasis";
import { InnerHero } from "@/components/InnerHero";
import { ProofPill } from "@/components/ProofPill";
import {
  AUDIT_DELIVERABLES,
  AUDIT_EXCLUSIONS,
  AUDIT_FAQS,
  AUDIT_STEPS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Free Marketing Audit",
  description:
    "Request a free marketing audit. We review your Instagram, Google Business Profile and LinkedIn by hand, then send back a plan of the moves worth making first.",
};

/** Card tints for the four deliverables, in order. */
const TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft", "bg-mist"];

const HERO_FACTS = [
  { icon: "clock" as const, label: "Back within 24 hours" },
  { icon: "pen" as const, label: "Read by hand, not by tool" },
  { icon: "shield" as const, label: "Free, and yours to keep" },
];

export default function AuditPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <InnerHero
        eyebrow="Free marketing audit"
        title={
          <>
            See exactly what&apos;s keeping leads{" "}
            <Emphasis>from finding you online.</Emphasis>
          </>
        }
        lead={
          <>
            Send us your links. A person reads your Instagram, your Google
            listing and your LinkedIn by hand, then sends back a written plan
            of what to fix first.
          </>
        }
        actions={
          <>
            <AuditButton
              variant="primary"
              size="lg"
              className="btn-shine cursor-pointer shadow-[0_18px_34px_-14px_var(--color-brand)]"
            >
              Get Your Free Audit
              <Icon name="arrow" className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5" />
            </AuditButton>
            <p className="text-sm text-muted">Takes under a minute. No call required.</p>
          </>
        }
        footer={
          <>
            <ul className="flex flex-wrap gap-2.5">
              {HERO_FACTS.map((f) => (
                <li
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-2 ring-1 ring-line backdrop-blur"
                >
                  <Icon name={f.icon} className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.8} />
                  <span className="text-[0.82rem] font-medium text-ink-soft">{f.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ProofPill />
            </div>
          </>
        }
        aside={
          // the deliverable itself, on a colour plate
          <div className="relative px-2 pb-12 pt-12 sm:px-6">
            <div aria-hidden="true" className="absolute inset-x-6 bottom-6 top-14 -rotate-[4deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-lilac)_0%,var(--color-brand-light)_55%,var(--color-sun)_100%)] opacity-90" />
            <div className="relative lg:rotate-2">
              <AuditReportVisual />
            </div>
            <div className="animate-float-b absolute bottom-0 left-6 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[var(--shadow-lift)] ring-1 ring-line">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-leaf/15">
                <Icon name="check" className="h-3.5 w-3.5 text-leaf" strokeWidth={2.6} />
              </span>
              <span className="text-[0.75rem] font-semibold text-ink">Delivered within 24h</span>
            </div>
          </div>
        }
      />

      {/* ── WHAT'S INSIDE ─────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What you get</span>
            <h2 className="text-h2 mt-5">What lands in your inbox.</h2>
            <p className="lead mt-5">
              Four sections, written for your channels specifically. No score
              badge, no generic checklist, nothing you could have generated
              yourself in thirty seconds on a scoring tool.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {AUDIT_DELIVERABLES.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.1} className="h-full">
                <article className={`group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:p-8 ${TINTS[i % TINTS.length]}`}>
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-[0.95rem] font-semibold text-ink shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:-rotate-6"
                    style={{ fontFamily: "var(--font-display)", fontVariantNumeric: "tabular-nums" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 mt-5">{d.title}</h3>
                  <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand py-20 text-ink sm:py-24 lg:py-28">
        <Aurora tone="brand" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-[0.8rem] font-semibold text-white">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-sun" />
              How it works
            </span>
            <h2 className="text-h2 mt-5">Three steps. One takes you a minute.</h2>
          </Reveal>

          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {AUDIT_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1} as="li" className="relative">
                {/* connector rule between steps on desktop */}
                {i < AUDIT_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-16 right-0 top-6 hidden border-t-2 border-dashed border-ink/30 md:block"
                  />
                )}
                <span
                  className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-[1rem] text-white shadow-[var(--shadow-lift)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="text-h3 mt-5">{s.title}</h3>
                <p className="mt-2.5 max-w-sm text-[0.975rem] leading-relaxed text-ink">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHAT IT ISN'T ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <p
              className="text-[1.45rem] leading-snug text-ink"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Built for B2B and growing businesses that want a straight
              answer, not a sales pitch.
            </p>
            <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {AUDIT_EXCLUSIONS.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-peach text-brand-deep">
                    <Icon name="close" className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  <span className="text-[0.925rem] text-ink-soft">{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-h2">Before you send your links.</h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-slate">
                Anything still unclear, email{" "}
                <a
                  href="mailto:riz@soovita.com"
                  className="font-semibold text-brand-dark underline underline-offset-4"
                >
                  riz@soovita.com
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Faq items={AUDIT_FAQS} />
              <div className="mt-8">
                <AuditButton variant="primary" size="lg" className="btn-shine cursor-pointer">
                  Get Your Free Audit
                </AuditButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        audit={false}
        title="Prefer to talk it through first"
        subtitle="Get a quote instead. Same honesty, on a 30-minute call, and we look at your business together while we're on it."
      />
    </>
  );
}
