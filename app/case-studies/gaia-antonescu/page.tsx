import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Aurora";
import { MoreCaseStudies } from "@/components/MoreCaseStudies";
import { CtaBand } from "@/components/CtaBand";
import { StatCounter } from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "Gaia Ferrero, Byzantine | Social Catalyst Case Study",
  description:
    "How Social Catalyst rebuilt Gaia Ferrero's LinkedIn presence from the ground up, generating 100% posting consistency, 4× profile view growth, and 12+ qualified inbound conversations in 90 days.",
};

const HERO_STATS = [
  { num: 100, suffix: "%", label: "Posting consistency maintained" },
  { num: 4, suffix: "×", label: "Growth in profile views within 60 days" },
  { num: 12, suffix: "+", label: "Qualified inbound conversations in first 90 days" },
];

const META = [
  { label: "Industry", value: "Strategy & Advisory" },
  { label: "Region", value: "Europe" },
  { label: "Duration", value: "12 weeks" },
  {
    label: "Service",
    value:
      "LinkedIn Profile Optimisation · Content Writing & Posting · Lead Generation & Outreach",
  },
];

const PROBLEMS = [
  "Gaia's profile wasn't converting. The headline described her role rather than her value. The About section was a company description, not a founder story. There was no clear point of view, nothing that told a prospective client why Gaia specifically, why Byzantine specifically. Visitors landed and left with no strong reason to reach out.",
  "Content was inconsistent and reactive. When she had a thought worth sharing, she'd post. Most weeks, nothing went out. There was no strategy, no rhythm, and no system for turning her genuine expertise into material that reached the right people. The algorithm punishes inconsistency, and it was.",
  "Outreach had never been tried systematically. Conversations were happening, but only through warm introductions. There was no process for expanding into adjacent founder communities and decision-makers who didn't already know her name.",
];

const FRAMEWORK = [
  {
    no: "01",
    title: "Audit & Positioning",
    body: "We spent the first two weeks understanding Gaia's business, her clients, her voice, and what Byzantine does differently. We interviewed her, reviewed her past work, and mapped the founder communities she most wanted to reach. From this we built her LinkedIn positioning: a clear, specific point of view that makes the right people stop scrolling and the wrong people self-select out. Everything downstream was built on this foundation.",
  },
  {
    no: "02",
    title: "Profile Overhaul",
    body: "We rewrote every section from scratch. The headline became value-first and specific. The About section became a founder story: why Byzantine exists, what Gaia believes, and what a client can expect. The Featured section was rebuilt to showcase the work. Keywords were embedded throughout for discoverability without the profile reading like it was written for an algorithm. It now reads like Gaia wrote it on her best day.",
  },
  {
    no: "03",
    title: "Content Engine",
    body: "We built a content calendar anchored in three pillars drawn from the positioning work, each designed to attract a different type of engagement from the same target audience. We ghostwrite every post in Gaia's voice, put it through a review round with her, and publish on a consistent three-times-per-week schedule. Within 30 days, impressions tripled. Within 60, profile views had grown 4×.",
  },
  {
    no: "04",
    title: "Outreach Sequencing",
    body: "We built a targeted outreach system using Sales Navigator to identify founder-profile connections in Gaia's target segments. Connection requests are personalised and non-salesy, the goal is conversation, not pitch. Follow-up sequences are human-written and context-aware. Within 90 days, 12 qualified conversations had been initiated through outreach alone.",
  },
];

const RESULTS = [
  {
    num: 100,
    suffix: "%",
    headline: "Posting consistency maintained.",
    body: "Three posts per week, every week, for the full engagement, no missed weeks.",
  },
  {
    num: 4,
    suffix: "×",
    headline: "Growth in profile views within 60 days.",
    body: "From the profile overhaul and content engine going live simultaneously.",
  },
  {
    num: 12,
    suffix: "+",
    headline: "Qualified inbound conversations in 90 days.",
    body: "Founders and decision-makers matching Byzantine's ideal client profile, through content and outreach combined.",
  },
];

export default function GaiaAntonescuPage() {
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
              LinkedIn Management
            </span>

            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              Turning a founder&rsquo;s LinkedIn into a consistent pipeline of
              qualified conversations
            </h1>

            <p
              className="animate-fade-up lead mt-6 text-muted"
              style={{ animationDelay: "210ms" }}
            >
              Gaia Ferrero, Founder of Byzantine, was showing up inconsistently
              on LinkedIn. We rebuilt her presence from the ground up,
              profile, content, and outreach, turning it into a channel that
              generates qualified conversations every week, without her spending
              hours on it.
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
                src="https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg"
                alt="Gaia Ferrero"
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
                  Gaia had built Byzantine into a respected boutique strategy firm
                  through referrals and reputation. She knew LinkedIn mattered:
                  her clients were there, her peers were there, and the conversations
                  she wanted to be part of were happening there daily. But LinkedIn had
                  always felt like a chore. She&rsquo;d post sporadically when she had
                  time, struggle to know what to say, and watch the engagement flatline.
                  Her profile still read like a CV from three years ago.
                </p>
                <p>
                  She came to Social Catalyst not because she didn&rsquo;t understand LinkedIn, but
                  because she understood it well enough to know she wasn&rsquo;t doing it
                  justice. She needed a partner who could take full ownership of her
                  presence, strategy, content, and outreach, so she could
                  stay focused on running the business. We started with a full audit
                  before touching anything. You don&rsquo;t fix what you haven&rsquo;t
                  properly diagnosed.
                </p>
              </div>

              <div className="mt-10 aspect-[16/8] w-full overflow-hidden rounded">
                <img
                  src="https://cdn.prod.website-files.com/68e7ded717d0693d2c34536a/69a67f324415b174eb9108c9_Case%20Study%202%20(Gaia%27s).png"
                  alt="Byzantine case study"
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
                      I knew what good LinkedIn looked like. I just couldn&rsquo;t
                      make it happen alongside everything else. Handing it to Social Catalyst
                      was the right call. Within a few weeks it felt like my
                      profile finally sounded like me.
                    </p>
                    <figcaption className="mt-5 border-t border-dashed border-line pt-5">
                      <span className="block text-sm font-semibold text-ink">
                        Gaia Ferrero
                      </span>
                      <span className="block text-xs text-muted">
                        Founder, Byzantine
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

      <MoreCaseStudies current="gaia-antonescu" />

      <CtaBand
        title="Your results could be the next case study"
        subtitle="Get a quote. We'll be straight with you about what is achievable for your business and how long it will take."
      />
    </div>
  );
}
