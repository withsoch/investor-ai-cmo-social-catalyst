import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/pivot/Blocks";
import { GetStartedForm } from "@/components/pivot/GetStartedForm";

export const metadata: Metadata = {
  title: "Get started | Social Catalyst",
  description: "Add your website and get your first month of posts.",
  robots: { index: false },
};

export default function GetStartedPage() {
  return (
    <PageHero
      eyebrow="Early access"
      title={<>Your first 10 posts, <span className="text-brand">on us</span>.</>}
      lead="Setup is three inputs: your website, your LinkedIn and a 10-minute voice interview. Start with the two links now."
    >
      <Suspense>
        <GetStartedForm />
      </Suspense>
    </PageHero>
  );
}
