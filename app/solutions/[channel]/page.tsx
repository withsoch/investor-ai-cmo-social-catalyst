import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChannelChip, FinalCta, PageHero } from "@/components/pivot/Blocks";
import { CHANNELS, CTA, DEMO } from "@/lib/product";
import { PostCard } from "@/components/pivot/DemoParts";
import { SoundLink } from "@/components/pivot/SoundLink";

export function generateStaticParams() {
  return CHANNELS.map((c) => ({ channel: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ channel: string }> }): Promise<Metadata> {
  const { channel } = await params;
  const c = CHANNELS.find((x) => x.slug === channel);
  if (!c) return {};
  return { title: `${c.name} on autopilot | Social Catalyst`, description: `${c.line} ${c.pitch}` };
}

export default async function ChannelPage({ params }: { params: Promise<{ channel: string }> }) {
  const { channel } = await params;
  const c = CHANNELS.find((x) => x.slug === channel);
  if (!c) notFound();
  const related = CHANNELS.filter((x) => x.group === c.group && x.slug !== c.slug).slice(0, 3);
  const sample = c.slug === "linkedin-page" ? DEMO.posts[3] : DEMO.posts[0];

  return (
    <>
      <PageHero
        eyebrow={c.status === "live" ? "Live now" : "Coming soon"}
        title={<>{c.name}, <span className="text-brand">on autopilot</span>.</>}
        lead={c.line}
      >
        <div className="mt-8 flex justify-center gap-3">
          <SoundLink href={CTA.start.href} className="rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-ink hover:bg-brand-light">
            {c.status === "live" ? CTA.start.label : "Join the waitlist"}
          </SoundLink>
        </div>
      </PageHero>
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-h2">What it does</h2>
            <p className="lead mt-4">{c.pitch}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {c.formats.map((f) => (
                <span key={f} className="rounded-full bg-mist px-3 py-1 text-sm text-ink-soft">{f}</span>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <PostCard post={sample} brand={DEMO.brand} />
            <p className="mt-3 text-center text-xs text-muted">{DEMO.label}: {DEMO.brand.name} is fictional.</p>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-mist py-16">
          <div className="container-x">
            <h2 className="text-h3">Works well with</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <ChannelChip key={r.slug} c={r} />)}
            </div>
          </div>
        </section>
      )}
      <FinalCta />
    </>
  );
}
