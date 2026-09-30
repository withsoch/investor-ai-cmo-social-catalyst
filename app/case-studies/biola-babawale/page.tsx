import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Aurora";
import { MoreCaseStudies } from "@/components/MoreCaseStudies";
import { CtaBand } from "@/components/CtaBand";
import { StatCounter } from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "Biola Babawale, Cycle Together | Social Catalyst Case Study",
  description:
    "How Social Catalyst gave Cycle Together founder Biola Babawale the LinkedIn presence her mission deserved: 3× follower growth, 5+ partnership conversations, and 100% content consistency.",
};

const HERO_STATS = [
  { num: 3, suffix: "×", label: "Growth in LinkedIn followers in 60 days" },
  { num: 5, suffix: "+", label: "Partnership conversations opened through LinkedIn outreach" },
  { num: 100, suffix: "%", label: "Consistent weekly content maintained throughout engagement" },
];

const META = [
  { label: "Industry", value: "Sport, Wellness & Community" },
  { label: "Region", value: "United Kingdom" },
  { label: "Duration", value: "10 weeks" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Personal Branding Strategy · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS = [
  "Biola's LinkedIn profile wasn't telling her story. The headline led with job title. The About section listed activities without communicating the mission or the why. There was no clear articulation of what Cycle Together is, who it's for, or why Biola is the person building it. Visitors came and left without understanding the depth of what she was doing.",
  "Content had been tried and abandoned. Biola had the ideas, she thinks clearly and cares deeply about the space, but converting that into a consistent LinkedIn presence felt overwhelming on top of everything else she was running. Posts went out in bursts and then went quiet for weeks. The inconsistency was costing her visibility and credibility with the exact audience she needed to build.",
  "Partnership outreach was happening informally: conversations through mutual connections, emails that didn't always land, and no systematic way to reach the corporate wellness teams and sport organisations who would benefit from partnering with Cycle Together. The opportunity was there. The process to capture it wasn't.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Mission-Led Positioning",
    body: "We started by getting deep on the mission. Cycle Together isn't a product, it's a movement, and Biola's LinkedIn needed to feel like one. We ran a positioning session to extract the core beliefs, the community story, and the specific language Biola uses when she talks about inclusion and access in sport. This became the foundation for everything: profile, content, and outreach.",
  },
  {
    no: "02",
    title: "Profile Rebuild",
    body: "We rebuilt the profile around the mission, not the CV. The headline became a clear statement of what Cycle Together does and who it's for. The About section opened with the founding story: the moment Biola knew cycling needed to change, and moved into what the community has become and where it's going. The result was a profile that any corporate wellness lead, sport organisation, or community funder could land on and immediately understand.",
  },
  {
    no: "03",
    title: "Content Voice & Calendar",
    body: "We developed three content pillars for Biola: community stories from the ground, perspective pieces on inclusion in sport, and founder reflections on building something that matters. Every post is ghostwritten in her voice, warm, direct, and grounded in real experience. We publish twice a week on a fixed schedule. Within 60 days, follower growth had tripled against the previous 60-day baseline.",
  },
  {
    no: "04",
    title: "Partnership Outreach",
    body: "We built a targeted outreach list of corporate wellness teams, sport governing bodies, and community sport funders using Sales Navigator. Connection requests led with the mission: what Cycle Together does, why it matters, and what a partnership could look like, without asking for anything in the first message. Within the engagement period, five substantive partnership conversations were initiated through LinkedIn outreach alone.",
  },
];

const RESULTS = [
  {
    num: 3,
    suffix: "×",
    headline: "Follower growth in 60 days.",
    body: "Measured against the previous 60-day baseline before the engagement began.",
  },
  {
    num: 5,
    suffix: "+",
    headline: "Partnership conversations opened.",
    body: "With corporate wellness teams, sport organisations, and community funders, through LinkedIn outreach alone.",
  },
  {
    num: 100,
    suffix: "%",
    headline: "Consistent weekly content maintained.",
    body: "Two posts per week, every week, for the full engagement, in a voice that sounds like Biola wrote it herself.",
  },
];

export default function BiolaBabawale() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      {/* pulled up under the sticky header, like every other hero */}
      <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pb-16 pt-[8.5rem] sm:pb-20 sm:pt-[9.5rem] lg:pb-28 lg:pt-[11.5rem]">
        <Aurora tone="cream" />
        <div className="container-x relative grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

          {/* left column */}
          <div>
            <span
              className="animate-fade-up inline-flex items-center rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white"
              style={{ animationDelay: "0ms" }}
            >
              Personal Branding &amp; Community Growth
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Giving a movement founder the LinkedIn presence her mission deserved
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Biola Babawale founded Cycle Together to make cycling more inclusive
              and accessible, but the community she was building offline
              wasn&rsquo;t reflected in her LinkedIn presence. We rebuilt her
              profile, developed her content voice, and helped her reach the right
              people in sport, wellness, and corporate partnerships.
            </p>

            {/* stat rows */}
            <div
              className="animate-fade-up mt-10 divide-y divide-line"
              style={{ animationDelay: "280ms" }}
            >
              {HERO_STATS.map((s) => (
                <div key={s.suffix + s.num} className="flex items-baseline gap-5 py-5">
                  <StatCounter
                    num={s.num}
                    suffix={s.suffix}
                    className="shrink-0 leading-none text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem, 1.6rem + 1.6vw, 2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                    }}
                  />
                  <span className="text-sm text-slate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right column - portrait */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative mx-auto max-w-[27rem] px-2 pb-4 pt-2 sm:px-5 lg:mr-0">
            <div aria-hidden="true" className="absolute inset-x-5 bottom-0 top-8 rotate-[4deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)] sm:inset-x-8" />
            <span aria-hidden="true" className="absolute -bottom-2 right-0 h-20 w-20 rounded-full bg-lilac/70" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] ring-4 ring-white">
              <img
                src="https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg"
                alt="Biola Babawale"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Thin rule ── */}
      <hr className="border-line" />

      {/* ── Meta bar ── */}
      <div className="container-x">
        <dl className="flex flex-col divide-y divide-line border-b border-line sm:flex-row sm:divide-x sm:divide-y-0">
          {META.map((f) => (
            <div key={f.label} className="flex-1 py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Overview ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Overview
              </span>
            </div>

            <Reveal>
              <h2 className="text-h2">The context behind the work.</h2>
              <div className="mt-8 space-y-5 text-[1rem] leading-relaxed text-slate">
                <p>
                  Biola built Cycle Together from a personal belief: that cycling
                  should be for everyone, regardless of background, ability, or budget.
                  What started as a grassroots community initiative had grown into
                  something with real momentum: events, partnerships, and a growing
                  following of people who shared her vision. But on LinkedIn, none of
                  that came through.
                </p>
                <p>
                  Her profile read like a professional CV, not a founder story. Her
                  content was sporadic and unfocused. And the people she most needed to
                  reach, corporate sponsors, sport and wellness organisations,
                  community funders, and like-minded founders, had no easy way
                  to find her or understand what Cycle Together stood for. She came to
                  Social Catalyst to fix that. Not to grow follower numbers for their own sake, but
                  to make her LinkedIn presence do actual work for her mission.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <img
                  src="https://cdn.prod.website-files.com/68e7ded717d0693d2c34536a/69a67b9de1d72ffdf6c29f9a_Case%20Study%201%20(Biola%27s).png"
                  alt="Cycle Together case study"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
                />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                The Problem
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">What they came to us with.</h2>
              </Reveal>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">

                <Reveal delay={0.05}>
                  <div className="divide-y divide-line">
                    {PROBLEMS.map((text, i) => (
                      <div key={i} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                        <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                        <p className="text-[0.975rem] leading-relaxed text-slate">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <figure className="rounded border-l-4 border-brand bg-cream p-6 lg:sticky lg:top-28 lg:self-start">
                    <span
                      className="block text-[3.5rem] leading-none text-brand opacity-25"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p
                      className="-mt-2 text-[1.05rem] italic leading-relaxed text-ink"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      I had so much to say about what we&rsquo;re building, but I
                      couldn&rsquo;t figure out how to say it on LinkedIn in a way
                      that felt right. Social Catalyst helped me find that voice, and
                      then made sure it showed up every single week.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Biola Babawale
                      </span>
                      <span className="block text-xs text-muted">
                        Founder, Cycle Together
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Our Framework ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Our Framework
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">How we solved it.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid divide-y divide-line overflow-hidden rounded border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {FRAMEWORK.slice(0, 3).map((step) => (
                    <div key={step.no} className="bg-cream p-7">
                      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                        Step {step.no}
                      </span>
                      <h3
                        className="mt-3 text-base font-semibold leading-snug text-ink"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-3 grid overflow-hidden rounded border border-line sm:grid-cols-[10rem_1fr]">
                  <div className="flex items-center justify-center border-b border-line bg-cream px-8 py-6 sm:border-b-0 sm:border-r">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                      Step {FRAMEWORK[3].no}
                    </span>
                  </div>
                  <div className="bg-cream p-7">
                    <h3
                      className="text-base font-semibold leading-snug text-ink"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {FRAMEWORK[3].title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-slate">
                      {FRAMEWORK[3].body}
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="border-t border-line py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">

            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
                Results
              </span>
            </div>

            <div>
              <Reveal>
                <h2 className="text-h2">What shipped.</h2>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                  {RESULTS.map((r) => (
                    <div
                      key={r.suffix + r.num}
                      className="border-t-2 border-brand bg-white p-7 lg:p-9"
                    >
                      <StatCounter
                        num={r.num}
                        suffix={r.suffix}
                        className="block leading-none text-ink"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.6rem, 2rem + 1.5vw, 3.4rem)",
                          fontWeight: 600,
                          letterSpacing: "-0.022em",
                        }}
                      />
                      <p className="mt-4 text-base font-semibold text-ink">
                        {r.headline}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">
                        {r.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <MoreCaseStudies current="biola-babawale" />

      <CtaBand
        title="Your results could be the next case study"
        subtitle="Get a quote. We'll be straight with you about what is achievable for your business and how long it will take."
      />
    </div>
  );
}
