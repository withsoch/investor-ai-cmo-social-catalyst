import { Photo } from "@/components/ui/Photo";

/**
 * The inner-page version of the homepage collage: one photo on a bright,
 * tilted colour plate, with floating chips placed by the caller. Static
 * (server-rendered); the chips bob with the CSS float utilities.
 */
export function HeroPhoto({
  src,
  alt,
  imgClassName = "",
  plate = "bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)]",
  children,
}: {
  src: string;
  alt: string;
  imgClassName?: string;
  /** Background classes for the tilted plate behind the photo. */
  plate?: string;
  /** Absolutely positioned chips / badges, usually <FloatChip>s. */
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[29rem] lg:mr-0">
      <div className="relative px-4 pb-14 pt-10 sm:px-8">
        <div aria-hidden="true" className="absolute inset-x-6 bottom-8 top-5 sm:inset-x-10">
          <div className={`h-full w-full rotate-[5deg] rounded-[2.5rem] ${plate}`} />
        </div>
        <span aria-hidden="true" className="absolute bottom-2 right-3 h-20 w-20 rounded-full bg-lilac/70 blur-[2px]" />
        <Photo
          src={src}
          alt={alt}
          priority
          sizes="(min-width: 640px) 26rem, 90vw"
          className="aspect-[4/3] rounded-[2rem] shadow-[var(--shadow-lift)] ring-4 ring-white sm:aspect-[4/5]"
          imgClassName={imgClassName}
        />
        {children}
      </div>
    </div>
  );
}

/** A white floating chip for HeroPhoto (or any collage). Position via className. */
export function FloatChip({
  className = "",
  float = "animate-float-a",
  children,
}: {
  className?: string;
  float?: "animate-float-a" | "animate-float-b" | "animate-float-c";
  children: React.ReactNode;
}) {
  return (
    <div className={`absolute z-20 ${className}`}>
      <div className={`${float} rounded-2xl bg-white p-3 shadow-[var(--shadow-lift)] ring-1 ring-line`}>
        {children}
      </div>
    </div>
  );
}
