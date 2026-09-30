import { Icon, type IconName } from "@/components/Icons";

/**
 * Circular text badge that slowly rotates, with a static icon in the middle.
 * Purely visual: wrap it in a button or link when it should do something.
 */
export function SpinBadge({
  text,
  icon = "spark",
  size = 112,
  tone = "ink",
  className = "",
}: {
  text: string;
  icon?: IconName;
  size?: number;
  /** Ring colour; the centre disc takes the other one. */
  tone?: "ink" | "brand";
  className?: string;
}) {
  // Unique enough per text; two badges with the same text share a path, which is fine.
  const id = `spin-${text.replace(/[^a-z0-9]/gi, "").toLowerCase().slice(0, 24)}`;
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full ${tone === "ink" ? "bg-ink" : "bg-brand"} text-white shadow-[var(--shadow-lift)] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id={id} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current text-[9.6px] font-semibold uppercase tracking-[0.22em]">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className={`flex h-[38%] w-[38%] items-center justify-center rounded-full ${tone === "ink" ? "bg-brand" : "bg-ink"}`}>
        <Icon name={icon} className="h-1/2 w-1/2 text-white" strokeWidth={2} />
      </span>
    </span>
  );
}
