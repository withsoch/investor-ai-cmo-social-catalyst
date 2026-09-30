import { Icon } from "@/components/Icons";
import { PROOF_TICKER } from "@/lib/content";

function Row({ items, className }: { items: string[]; className: string }) {
  return (
    <div className="pause-on-hover flex overflow-hidden">
      {/* two identical copies make the -50% marquee loop seamless; the copy is hidden from AT */}
      <div className={`flex w-max shrink-0 ${className}`}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-center">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-6 whitespace-nowrap pr-6">
                <span>{t}</span>
                <Icon name="spark" className="h-5 w-5 shrink-0" strokeWidth={1.8} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/**
 * Two crossing ribbons of proof between the hero and the first section:
 * client numbers on orange, service promises on ink, running opposite ways.
 */
export function ProofTicker() {
  const clientProof = PROOF_TICKER;
  const reversed = [...PROOF_TICKER].reverse();
  return (
    <section aria-label="Results and promises" className="relative overflow-hidden bg-cream py-10 sm:py-12">
      <div className="relative -mx-[5%] w-[110%]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[1.6deg] bg-ink py-3.5 text-[1rem] font-medium text-white/85 sm:text-[1.1rem]"
        >
          <Row items={reversed} className="animate-marquee-reverse" />
        </div>
        <div className="relative -rotate-[2deg] bg-brand py-4 text-[1.1rem] font-semibold text-ink shadow-[0_18px_40px_-20px_rgba(20,30,25,0.45)] sm:text-[1.25rem]">
          <Row items={clientProof} className="animate-marquee" />
        </div>
      </div>
    </section>
  );
}
