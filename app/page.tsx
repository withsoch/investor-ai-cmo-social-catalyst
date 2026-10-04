import { Hero } from "@/components/pivot/Hero";
import { Steps } from "@/components/pivot/Steps";
import { Compare, Channels, MethodTeaser, FinalCta, ResultsStrip } from "@/components/pivot/Blocks";
import { ClientResults } from "@/components/ClientResults";
import { Pricing } from "@/components/pivot/Pricing";

// Product homepage, in native.no's order: URL hero → real results → the five product steps
// → traditional vs us → channels → method → pricing → client results (the original site's hover-to-expand cards) → CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <ResultsStrip />
      <Steps />
      <Compare />
      <Channels />
      <MethodTeaser />
      <Pricing />
      <ClientResults />
      <FinalCta />
    </>
  );
}
