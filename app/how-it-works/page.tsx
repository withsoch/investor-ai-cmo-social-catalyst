import type { Metadata } from "next";
import Link from "next/link";
import { Steps } from "@/components/pivot/Steps";
import { FinalCta, PageHero } from "@/components/pivot/Blocks";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/lib/product";
import { SoundLink } from "@/components/pivot/SoundLink";

export const metadata: Metadata = {
  title: "How it works | Social Catalyst",
  description: "Add your website. Social Catalyst drafts a month of posts in your voice. Swipe to approve, or turn on autopilot.",
};

const MORE = [
  { t: "Autopilot", d: "Plans the next two weeks, picks topics, writes and designs each post. You get an email the day before anything goes out." },
  { t: "One calendar", d: "Every approved post on one calendar across every channel. Drag to reschedule." },
  { t: "Designer", d: "Open any visual on a canvas. Every element is its own layer: move it, swap it, or replace it by hand." },
  { t: "Describe a post", d: "Have something specific to say? Describe it in a sentence and get a finished post with caption and image." },
  { t: "Analytics", d: "Reach, profile views and inbound conversations, tracked over time against what you posted." },
  { t: "Learns your taste", d: "Every approve, edit and skip feeds the next batch. Week four sounds more like you than week one." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title={<>Three inputs. A month of posts <span className="text-brand">in your voice</span>.</>}
        lead="No onboarding call, no brief. Two links and a 10-minute interview, then Social Catalyst writes in your voice and keeps going until you tell it to stop."
        chain
        chips={[{ label: "Website" }, { label: "LinkedIn" }, { label: "10-minute interview" }, { label: "You approve" }, { label: "We publish" }]}
      >
        <div className="mt-8 flex justify-center gap-3">
          <SoundLink href={CTA.start.href} className="rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-light">{CTA.start.label}</SoundLink>
          <Link href="/pricing" className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink/40">See pricing</Link>
        </div>
      </PageHero>
      <Steps />
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2">And everything around it</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MORE.map((m, i) => (
              <Reveal key={m.t} delay={(i % 3) * 0.05}>
                <div className="card-r h-full bg-cream p-6 ring-1 ring-line">
                  <h3 className="text-h3">{m.t}</h3>
                  <p className="mt-2 text-slate">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
