import { Aurora } from "@/components/ui/Aurora";

/**
 * Shared hero for the inner pages - the homepage hero's cream-and-aurora
 * treatment, with slots for the page's own copy, actions and visual.
 * Pulled up under the sticky, transparent header like the homepage hero.
 */
export function InnerHero({
  eyebrow,
  title,
  lead,
  actions,
  footer,
  aside,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Buttons row under the lead. */
  actions?: React.ReactNode;
  /** Anything below the buttons: facts, proof row. */
  footer?: React.ReactNode;
  /** Right-hand visual. Without it the copy spans a single, wider column. */
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pt-[4.5rem]">
      <Aurora tone="cream" />
      <div
        className={`container-x relative grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16 ${
          aside ? "lg:grid-cols-[1.02fr_0.98fr] lg:gap-14" : ""
        }`}
      >
        <div className={aside ? "max-w-xl" : "max-w-3xl"}>
          {eyebrow && <span className="eyebrow animate-fade-up">{eyebrow}</span>}
          <h1 className="text-display mt-5 text-[clamp(2.2rem,1.3rem+3.1vw,3.6rem)] animate-fade-up [animation-delay:80ms]">
            {title}
          </h1>
          {lead && (
            <p className="lead mt-5 max-w-2xl animate-fade-up [animation-delay:160ms]">{lead}</p>
          )}
          {actions && (
            <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
              {actions}
            </div>
          )}
          {footer && <div className="mt-9 animate-fade-up [animation-delay:320ms]">{footer}</div>}
        </div>
        {aside && <div className="animate-pop">{aside}</div>}
      </div>
    </section>
  );
}
