import { BookButton } from "@/components/BookButton";
import { Icon } from "@/components/Icons";
import type { Package } from "@/lib/content";

/**
 * A single package card. Growth (popular) is the forest card with a brand
 * ring and a "Most popular" badge; `dark` (Full) is an ink card. Specialist
 * packages are laid out wider by the caller, not here.
 */
export function PackageCard({ pkg, dark = false }: { pkg: Package; dark?: boolean }) {
  const onDark = dark || pkg.popular;
  const tone = onDark
    ? {
        name: "!text-white",
        audience: "text-white/70",
        rule: "border-white/15",
        price: "text-white",
        priceSub: "text-white/60",
        outcome: "text-white",
        feature: "text-white/85",
        check: "text-sun",
      }
    : {
        name: "",
        audience: "text-muted",
        rule: "border-line border-dashed",
        price: "text-ink",
        priceSub: "text-muted",
        outcome: "text-ink",
        feature: "text-slate",
        check: "text-brand",
      };

  const wrap = pkg.popular
    ? "bg-forest text-white ring-2 ring-brand shadow-[0_34px_70px_-34px_var(--color-brand)]"
    : dark
      ? "bg-ink text-white ring-1 ring-white/10 shadow-[var(--shadow-lift)]"
      : "bg-white text-ink ring-1 ring-line hover:shadow-[var(--shadow-lift)]";

  return (
    <div className={`relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${wrap}`}>
      {pkg.popular && (
        <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-ink shadow-[var(--shadow-card)]">
          <Icon name="star" className="h-3 w-3" strokeWidth={2.4} />
          Most popular
        </span>
      )}

      <h3 className={`text-h3 ${tone.name}`}>{pkg.name}</h3>
      <p className={`mt-2 text-[0.9rem] leading-relaxed ${tone.audience}`}>{pkg.audience}</p>

      <div className={`my-5 border-t ${tone.rule}`} />

      <div>
        <p className={tone.price}>
          <span
            className="text-[1.6rem] leading-none"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Get a quote
          </span>
        </p>
        <p className={`mt-1.5 text-[0.8rem] ${tone.priceSub}`}>Monthly fee plus a one-off setup fee, excl. VAT</p>
      </div>

      <div className={`my-5 border-t ${tone.rule}`} />

      <p className={`text-[0.95rem] font-medium leading-snug ${tone.outcome}`}>{pkg.outcome}</p>

      <ul className="mt-4 flex-1 space-y-2.5">
        {pkg.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-[0.875rem] leading-snug ${tone.feature}`}>
            <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${tone.check}`} strokeWidth={2.4} />
            {f}
          </li>
        ))}
      </ul>

      <div className={`mt-6 border-t pt-5 ${tone.rule}`}>
        <BookButton
          variant={pkg.popular ? "primary" : dark ? "light" : "secondary"}
          size="md"
          arrow
          className={`w-full justify-center ${pkg.popular ? "btn-shine" : ""}`}
        >
          Get a quote
        </BookButton>
      </div>
    </div>
  );
}
