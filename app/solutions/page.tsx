import type { Metadata } from "next";
import { Channels, FinalCta, PageHero } from "@/components/pivot/Blocks";
import { CHANNELS } from "@/lib/product";

export const metadata: Metadata = {
  title: "Solutions | Social Catalyst",
  description: "LinkedIn, Instagram, Google Business, blog and more. One brand brain, every channel your buyers use.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Everywhere your buyers <span className="text-brand">already are</span>.</>}
        lead="Start with LinkedIn, where B2B trust is built. Add channels as you grow. One voice across all of them."
        chips={CHANNELS.filter((c) => c.status === "live").map((c) => ({ label: c.name, color: c.color }))}
      />
      <Channels heading={false} />
      <FinalCta />
    </>
  );
}
