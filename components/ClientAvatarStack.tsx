import { Avatar } from "@/components/ui/Avatar";
import { CASE_STUDIES } from "@/lib/content";

/**
 * Overlapping faces of the real clients behind the case studies. These are
 * owned photos of named clients, so this is only ever used next to copy
 * about those results - never as generic "happy customers".
 */
export function ClientAvatarStack({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`flex items-center ${className}`}>
      {CASE_STUDIES.map((cs, i) => (
        <Avatar
          key={cs.slug}
          src={cs.image}
          name={cs.author}
          initials={cs.initials}
          accent={cs.accent}
          size={size}
          objectPosition="50% 25%"
          className={`ring-2 ring-white ${i > 0 ? "-ml-3" : ""}`}
        />
      ))}
    </span>
  );
}
