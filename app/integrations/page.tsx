import type { Metadata } from "next";
import { FinalCta, PageHero } from "@/components/pivot/Blocks";
import { Integrations } from "@/components/pivot/Integrations";
import { INTEGRATIONS } from "@/lib/product";

export const metadata: Metadata = {
  title: "Integrations | Social Catalyst",
  description: "Coming soon: connect Fireflies, Otter, Slack, HubSpot and more, and Social Catalyst turns what happened this week into posts in your voice.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow={INTEGRATIONS.eyebrow}
        title={<>It already <span className="text-brand">heard your week</span>.</>}
        lead={INTEGRATIONS.lead}
        chips={INTEGRATIONS.groups.map((g) => ({ label: g.k, color: g.color }))}
      />
      <Integrations heading={false} />
      <FinalCta title="Start with your links today. Connect your week when it ships." />
    </>
  );
}
