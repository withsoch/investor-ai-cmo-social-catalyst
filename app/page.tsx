import { Hero } from "@/components/pivot/Hero";
import { Steps } from "@/components/pivot/Steps";
import { Compare, Channels, MethodTeaser, Proof, FinalCta, ResultsStrip } from "@/components/pivot/Blocks";
import { Pricing } from "@/components/pivot/Pricing";

// Product homepage, in native.no's order: URL hero → real results → the four product steps
// → traditional vs us → channels → method → pricing → proof → CTA.
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
      <Proof />
      <FinalCta />
    </>
  );
}
