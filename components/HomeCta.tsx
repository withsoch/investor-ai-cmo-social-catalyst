import { AuditButton } from "@/components/AuditButton";
import { BookButton } from "@/components/BookButton";
import { AuditReportVisual } from "@/components/AuditReportVisual";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SpinBadge } from "@/components/ui/SpinBadge";
import { AUDIT_STEPS, CTAS, HOME_CTA } from "@/lib/content";

/**
 * Homepage closing CTA. Homepage-only on purpose: the shared CtaBand on the
 * other pages is untouched. Leads with the free audit - the copy is about
 * the audit, so the primary button is too - and shows the actual report.
 */
export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-aurora-a absolute -left-[10%] -top-[30%] h-[34rem] w-[34rem] rounded-full bg-brand/45 blur-[110px]" />
        <div className="animate-aurora-b absolute -right-[5%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-lilac/35 blur-[110px]" />
        <div className="animate-aurora-c absolute -bottom-[35%] left-[35%] h-[26rem] w-[26rem] rounded-full bg-sun/30 blur-[110px]" />
        <div className="bg-dots absolute inset-0 [--dot:rgba(255,255,255,0.07)]" />
      </div>

      <div className="container-x relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-28">
        <Reveal>
          <h2 className="text-h2 !text-white">{HOME_CTA.title}</h2>
          <p className="lead mt-5 max-w-xl !text-white/75">{HOME_CTA.subtitle}</p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-3">
            {AUDIT_STEPS.map((s, i) => (
              <li key={s.title} className="flex items-center gap-3 rounded-2xl bg-white/[0.07] p-3 ring-1 ring-white/10 sm:flex-col sm:items-start">
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sun text-sm font-semibold text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <span className="text-[0.85rem] font-medium leading-snug text-white">{s.title}</span>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <AuditButton
              variant="primary"
              size="lg"
              className="btn-shine cursor-pointer shadow-[0_18px_40px_-14px_var(--color-brand)]"
            >
              {CTAS.secondary.label}
              <Icon
                name="arrow"
                className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </AuditButton>
            <BookButton variant="light" size="lg">
              Or get a quote
            </BookButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative px-2 pb-12 pt-14 sm:px-6">
          <div className="transition-transform duration-500 hover:rotate-0 lg:rotate-2">
            <AuditReportVisual />
          </div>
          <div className="animate-float-b absolute bottom-0 left-6 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[var(--shadow-lift)] sm:left-0">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-leaf/15">
              <Icon name="check" className="h-3.5 w-3.5 text-leaf" strokeWidth={2.6} />
            </span>
            <span className="text-[0.75rem] font-semibold text-ink">Delivered within 24h</span>
          </div>
          <div className="absolute right-0 top-0 z-20">
            <SpinBadge text="Read by a person · No templates · " size={88} tone="brand" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
