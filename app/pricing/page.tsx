import type { Metadata } from "next";
import { Pricing } from "@/components/pivot/Pricing";
import { Compare, FinalCta, PageHero } from "@/components/pivot/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/pivot/FaqList";
import { PRICING_FAQ } from "@/lib/product";

export const metadata: Metadata = {
  title: "Pricing | Social Catalyst",
  description: "From $149 a month. 50 posts, every live channel, swipe approval or full autopilot. Cancel anytime.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Less than one agency call. <span className="text-brand">Every month.</span></>}
        lead="Fixed price, month to month, cancel anytime. Yearly billing saves 20%."
        chips={[{ label: "Free preview: 10 posts, no card" }, { label: "Cancel anytime" }, { label: "20% off yearly" }]}
      />
      <div className="-mt-10">
        <Pricing heading={false} />
      </div>
      <Compare />
      <section className="bg-cream py-20 sm:py-28">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-h2">Questions</h2>
          </Reveal>
          <FaqList items={PRICING_FAQ} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
