/**
 * Background atmosphere for a full-bleed section: three slow, blurred colour
 * blobs and a faint dot grid. Purely decorative, sits behind the content -
 * the parent must be `relative overflow-hidden` and its content `relative`.
 * Motion switches off under prefers-reduced-motion (see globals.css).
 */
type Tone = "cream" | "dark" | "brand";

const BLOBS: Record<Tone, [string, string, string]> = {
  cream: ["bg-brand/25", "bg-sun/45", "bg-lilac/30"],
  dark: ["bg-brand/40", "bg-lilac/30", "bg-sun/25"],
  brand: ["bg-sun/50", "bg-brand-light", "bg-lilac/25"],
};

const DOTS: Record<Tone, string> = {
  cream: "[--dot:rgba(28,43,38,0.1)] [mask-image:radial-gradient(65%_60%_at_50%_45%,black,transparent)]",
  dark: "[--dot:rgba(255,255,255,0.07)]",
  brand: "opacity-60 [--dot:rgba(28,43,38,0.14)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]",
};

export function Aurora({ tone = "cream", dots = true }: { tone?: Tone; dots?: boolean }) {
  const [a, b, c] = BLOBS[tone];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className={`animate-aurora-a absolute -left-[12%] -top-[22%] h-[32rem] w-[32rem] rounded-full blur-[100px] ${a}`} />
      <div className={`animate-aurora-b absolute -right-[10%] top-[4%] h-[30rem] w-[30rem] rounded-full blur-[100px] ${b}`} />
      <div className={`animate-aurora-c absolute -bottom-[32%] left-[32%] hidden h-[28rem] w-[28rem] rounded-full blur-[110px] sm:block ${c}`} />
      {dots && <div className={`bg-dots absolute inset-0 ${DOTS[tone]}`} />}
    </div>
  );
}
