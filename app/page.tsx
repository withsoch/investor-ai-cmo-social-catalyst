import { Hero } from "@/components/Hero";
import { ProofTicker } from "@/components/ProofTicker";
import { PlatformStrip } from "@/components/PlatformStrip";
import { Positioning } from "@/components/Positioning";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ClientResults } from "@/components/ClientResults";
import { PackagesPreview } from "@/components/PackagesPreview";
import { HowWeWork } from "@/components/HowWeWork";
import { Faq } from "@/components/Faq";
import { HomeCta } from "@/components/HomeCta";
import { BookButton } from "@/components/BookButton";
import { ClientAvatarStack } from "@/components/ClientAvatarStack";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/content";

// Full-bleed coloured bands are not wrapped in <Reveal>: fading a whole band
// in flashes white between sections. Each section reveals its own content.
export default function Home() {
  return (
    <>
      <Hero />
      <ProofTicker />
      <Positioning />
      <PlatformStrip />
      <ServicesGrid />
      <ClientResults />
      <HowWeWork />
      <PackagesPreview />
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-h2">Common questions.</h2>
            <div className="mt-8 rounded-3xl bg-lilac-soft p-6">
              <ClientAvatarStack size={40} />
              <p className="mt-4 text-[1.05rem] font-medium leading-snug text-ink">
                Still deciding? Ask us anything on a 30-minute call. No pitch.
              </p>
              <BookButton variant="dark" size="md" arrow className="mt-5">
                Get a quote
              </BookButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>
      <HomeCta />
    </>
  );
}
