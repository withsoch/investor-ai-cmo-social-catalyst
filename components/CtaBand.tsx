import { AuditButton } from "@/components/AuditButton";
import { BookButton } from "@/components/BookButton";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { Icon } from "@/components/Icons";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { CTAS, HERO } from "@/lib/content";

/**
 * Closing call to action for the inner pages (the homepage has its own
 * HomeCta). Ink band with colour glows; quote first, free audit second.
 * Pass `audit={false}` on pages where the audit is already the main ask.
 */
export function CtaBand({
  title = "See what's costing you customers, free",
  subtitle = "Send us your Instagram and Google links. We'll read them by hand and send back a written plan within 24 hours. Takes under a minute, no call needed.",
  audit = true,
}: {
  title?: string;
  subtitle?: string;
  audit?: boolean;
}) {
  const accentDot = /[a-zA-Z]$/.test(title);
  return (
    <section className="relative overflow-hidden bg-ink">
      <Aurora tone="dark" />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 !text-white">
            {title}
            {accentDot && <span className="text-brand">.</span>}
          </h2>
          <p className="lead mx-auto mt-5 max-w-2xl !text-white/75">{subtitle}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <BookButton
              variant="primary"
              size="lg"
              className="btn-shine shadow-[0_18px_40px_-14px_var(--color-brand)]"
            >
              {CTAS.primary.label}
              <Icon
                name="arrow"
                className="h-[1.05em] w-[1.05em] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </BookButton>
            {audit && (
              <AuditButton variant="light" size="lg" className="cursor-pointer">
                Or get a free audit
              </AuditButton>
            )}
          </div>

          <div className="mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-white/[0.07] py-1.5 pl-1.5 pr-4 ring-1 ring-white/10">
            <ClientAvatarStack size={32} className="shrink-0" />
            <span className="text-left text-[0.8rem] leading-snug text-white/75">{HERO.proofLine}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
