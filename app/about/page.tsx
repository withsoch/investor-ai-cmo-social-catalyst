import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { InnerHero } from "@/components/InnerHero";
import { HeroPhoto, FloatChip } from "@/components/HeroPhoto";
import { ProofPill } from "@/components/ProofPill";
import { PlatformMark } from "@/components/PlatformIcons";
import { Icon, type IconName } from "@/components/Icons";
import { Avatar } from "@/components/ui/Avatar";
import { Photo } from "@/components/ui/Photo";
import { Emphasis } from "@/components/ui/Emphasis";
import { Highlight } from "@/components/ui/Highlight";
import { SpinBadge } from "@/components/ui/SpinBadge";
import { CTAS, TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Social Catalyst runs Instagram, LinkedIn, Google and reviews for B2B and growing businesses.",
};

/** Card tints for the principles grid, in order. */
const TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft", "bg-mist"];

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Substance over shortcuts",
    body: "Fake followers, review-bombing your own page, boosted engagement pods. We don't take any of those shortcuts. Every account we run is real posts, real replies and a real Google listing, done properly, every week.",
  },
  {
    icon: "chat",
    title: "Your voice, not a template",
    body: "We learn how your business talks and write every caption to sound like you, so your customers feel spoken to. We never publish a template with your name swapped in.",
  },
  {
    icon: "target",
    title: "Leads, not vanity",
    body: "Follower counts show up in every report because they're useful context. They are not the goal. The goal is a booked call, a qualified lead, or someone reaching out because your listing came up first.",
  },
  {
    icon: "spark",
    title: "A small number of businesses, done properly",
    body: "We take a limited number of businesses at a time, on purpose. If something isn't working, a package, a platform, a listing, we say so and change it, rather than let it quietly underperform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerHero
        eyebrow="About Social Catalyst"
        title={
          <>
            Built for B2B and growing businesses <Emphasis>like yours.</Emphasis>
          </>
        }
        lead={
          <>
            Most marketing agencies serve everyone with the same generic
            playbook: a content calendar, a posting schedule, and not much
            else. We built Social Catalyst to treat Google, reviews and
            LinkedIn outreach as seriously as the Instagram feed, because
            that&apos;s where B2B business actually gets decided.
          </>
        }
        actions={
          <>
            <BookButton variant="primary" size="lg" arrow className="btn-shine shadow-[0_18px_34px_-14px_var(--color-brand)]">
              {CTAS.primary.label}
            </BookButton>
            <AuditButton variant="secondary" size="lg" className="cursor-pointer bg-white/80">
              {CTAS.secondary.label}
            </AuditButton>
          </>
        }
        footer={<ProofPill />}
        aside={
          <HeroPhoto
            src="/Service Images/about-hero-team-meeting.webp"
            alt="A small team talking around a table in their office"
            imgClassName="object-[55%_center]"
          >
            <FloatChip className="-left-2 top-2 hidden sm:block" float="animate-float-a">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">Every caption</p>
              <p className="mt-1.5 flex items-center gap-1.5">
                <span className="rounded-md bg-ink px-2 py-0.5 text-[0.72rem] font-bold text-white">EE</span>
                <span className="text-[0.72rem] text-muted">+</span>
                <span className="rounded-md bg-brand px-2 py-0.5 text-[0.72rem] font-bold text-white">EN</span>
                <span className="ml-1 text-[0.78rem] font-semibold text-ink">Written twice</span>
              </p>
            </FloatChip>
            <FloatChip className="-left-1 bottom-1 sm:-left-6" float="animate-float-c">
              <div className="flex items-center gap-2.5">
                <PlatformMark id="google" size="sm" />
                <div>
                  <p className="text-[0.75rem] font-semibold leading-tight text-ink">Every review answered</p>
                  <p className="text-[0.68rem] leading-tight text-muted">Within 24 hours</p>
                </div>
              </div>
            </FloatChip>
            <div className="absolute -top-1 right-0 z-30 sm:-right-3">
              <SpinBadge text="Real posts · Real replies · " size={100} />
            </div>
          </HeroPhoto>
        }
      />

      {/* mission */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Why we exist</span>
            <h2 className="text-h2 mt-5">The problem we kept seeing</h2>
            <div className="mt-6 space-y-4 text-slate">
              <p>
                Most social media services sell posts. They write content,
                schedule it, and call it done, one channel at a time. For a
                growing business, that&apos;s rarely the real bottleneck. The
                bottleneck is a Google listing nobody claimed, reviews nobody
                answered, and a LinkedIn page that hasn&apos;t been touched
                since it was set up.
              </p>
              <p>
                The businesses that grow are not the ones posting the most.
                They&apos;re the ones that are easy to find, that answer
                their reviews the same day, and whose LinkedIn outreach
                actually starts conversations. That doesn&apos;t come from a
                content calendar alone. It comes from treating Google,
                reviews and outreach as seriously as the Instagram feed.
              </p>
              <p className="font-medium text-ink">
                Social Catalyst was built to do that work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="relative overflow-hidden rounded-3xl bg-lilac-soft p-8 sm:p-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-10 select-none text-[11rem] leading-none text-lilac/40"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &rdquo;
              </span>
              <p
                className="relative text-[1.6rem] leading-snug text-ink"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                &ldquo;We don&apos;t just make your feed look busy. We make you{" "}
                <Highlight>easy to find</Highlight>{" "}
                and easy to do business with.&rdquo;
              </p>
              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-dashed border-ink/15 pt-6">
                {/* the name is right beside this, so the photo is decorative
                    here and the fallback disc stays out of the a11y tree */}
                <Avatar
                  src="https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/694e751734d7a4afc68e2e60_Rizwan%20founder.webp"
                  name={TEAM[0]?.name ?? "The Social Catalyst team"}
                  initials="S"
                  size={64}
                  captioned
                  objectPosition="50% 20%"
                />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-ink">
                    The Social Catalyst team
                  </span>
                  <span className="block text-xs text-muted">
                    Your B2B marketing partners
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* team - renders nothing at all while TEAM is empty, so the page is
          never left with a heading over whitespace */}
      {TEAM.length > 0 && (
        <section className="border-t border-line bg-mist py-20 sm:py-24 lg:py-28">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">The team</span>
              <h2 className="text-h2 mt-5">
                The people who will actually be running your account.
              </h2>
              <p className="lead mt-5">
                Not an account manager who forwards your emails to someone else.
                You will know who is posting, who is answering your reviews, and
                who to call when something needs changing.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={(i % 3) * 0.08}>
                  <Photo
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Social Catalyst`}
                    ratio="1/1"
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    className="w-full rounded-2xl bg-cream ring-1 ring-line"
                    fallback={
                      <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-cream ring-1 ring-line">
                        <Avatar
                          name={m.name}
                          initials={m.initials}
                          accent={m.accent}
                          size={72}
                          captioned
                        />
                      </div>
                    }
                  />
                  <h3 className="text-h3 mt-5">{m.name}</h3>
                  <p className="mt-1 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-brand">
                    {m.role}
                  </p>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-slate">
                    {m.bio}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Stats />

      {/* values - tinted cards, one accent per principle */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="text-h2 mt-5">
              Principles that shape <Highlight>every business</Highlight> we run.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1} className="h-full">
                <article
                  className={`group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5 sm:p-8 ${TINTS[i % TINTS.length]}`}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon name={v.icon} className="h-6 w-6 text-brand" strokeWidth={1.7} />
                  </span>
                  <h3 className="text-h3 mt-5">{v.title}</h3>
                  <p className="mt-2.5 text-[0.975rem] leading-relaxed text-slate">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to stop looking inactive"
        subtitle="Get a quote. Thirty minutes, free, and we'll tell you honestly which package fits your business, even if it's the cheapest one."
      />
    </>
  );
}
