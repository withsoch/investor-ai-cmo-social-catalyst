import Link from "next/link";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { Icon } from "@/components/Icons";
import { HERO } from "@/lib/content";

/** Real client faces + the proof line, as a pill linking to the results. */
export function ProofPill({ href = "/case-studies" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex max-w-full items-center gap-3 rounded-full bg-white/75 py-1.5 pl-1.5 pr-4 ring-1 ring-line backdrop-blur transition-colors hover:bg-white"
    >
      <ClientAvatarStack size={34} className="shrink-0" />
      <span className="text-[0.8rem] leading-snug text-ink-soft">
        {HERO.proofLine}
        <Icon
          name="arrow"
          className="ml-1 inline h-3.5 w-3.5 text-brand transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
