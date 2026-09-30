import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { BookButton } from "@/components/BookButton";
import { AuditButton } from "@/components/AuditButton";
import { CtaBand } from "@/components/CtaBand";
import { InnerHero } from "@/components/InnerHero";
import { Icon } from "@/components/Icons";
import { Emphasis } from "@/components/ui/Emphasis";
import { SpinBadge } from "@/components/ui/SpinBadge";
import { CASE_STUDIES, CTAS, WORK_CASE_STUDIES, headlineMetric } from "@/lib/content";

/** Tint per stat box, so each card's numbers read as a colourful row. */
const STAT_TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft"];

export const metadata: Metadata = {
  title: "Case Studies: Client Results | Social Catalyst",
  description:
    "Real results from Social Catalyst client engagements across LinkedIn strategy, personal branding and go-to-market positioning, plus the Instagram, Reels, YouTube and landing-page work we produce.",
};

const CARDS = [
  {
    initials: "Gaia Ferrero - Byzantine Finance",
    image: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg",
    tags: ["LinkedIn Management"],
    title:
      "Turning a founder's LinkedIn into a consistent pipeline of qualified conversations",
    stats: [
      { value: "100%", label: "Posting consistency maintained" },
      { value: "4×", label: "Growth in profile views within 60 days" },
      { value: "12+", label: "Qualified inbound conversations in 90 days" },
    ],
    href: "/case-studies/gaia-antonescu",
  },
  {
    initials: "Biola Babawale - Cycle Together",
    image: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
    tags: ["Personal Branding & Community Growth"],
    title:
      "Giving a movement founder the LinkedIn presence her mission deserved",
    stats: [
      { value: "3×", label: "Follower growth in 60 days" },
      { value: "5+", label: "Partnership conversations opened" },
      { value: "100%", label: "Consistent weekly content maintained" },
    ],
    href: "/case-studies/biola-babawale",
  },
  {
    initials: "Shahzad Akhtar - Strateasy Consulting",
    image: "/images/case-studies/shahzad-akhtar.jpg",
    tags: ["Management Consulting"],
    title:
      "Turning 28 years of practitioner expertise into a LinkedIn presence that generates consulting pipeline",
    stats: [
      { value: "29%", label: "Outreach Reply Rate" },
      { value: "6×", label: "Profile Views in 60 Days" },
      { value: "11", label: "Qualified Conversations" },
    ],
    href: "/case-studies/shahzad-akhtar",
  },
  {
    initials: "Kaitlin Malaspina - Brenna & Co.",
    image: "/images/case-studies/kaitlin-malaspina.jpg",
    tags: ["Business Architecture"],
    title:
      "Making a distinctive offer legible: how a Private Operating House built the channel to match the work",
    stats: [
      { value: "3×", label: "Profile Views in 60 Days" },
      { value: "22%", label: "Outreach Reply Rate" },
      { value: "8", label: "Qualified Conversations" },
    ],
    href: "/case-studies/kaitlin-malaspina",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Case studies"
        title={
          <>
            Results that <Emphasis>speak for themselves.</Emphasis>
          </>
        }
        lead={
          <>
            A selection of client engagements across LinkedIn strategy,
            go-to-market positioning and personal brand builds, plus the
            content, design and video work we produce. Every number here is
            verified with the client.
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
        aside={
          // the four real clients, each with their headline number
          <div className="relative mx-auto w-full max-w-[30rem] px-3 pb-6 pt-8 sm:px-6 lg:mr-0">
            <div aria-hidden="true" className="absolute inset-x-6 bottom-0 top-12 rotate-[4deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)]" />
            <div className="relative grid grid-cols-2 gap-3">
              {CASE_STUDIES.map((cs, i) => {
                const m = headlineMetric(cs);
                return (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className={`group relative isolate aspect-[4/5] overflow-hidden rounded-3xl ring-4 ring-white shadow-[var(--shadow-lift)] ${i % 2 === 1 ? "translate-y-6" : ""}`}
                  >
                    <div className="absolute inset-0 -z-10" style={{ background: cs.accent }}>
                      <Photo
                        src={cs.image}
                        alt={cs.author}
                        priority
                        sizes="(min-width: 1024px) 14rem, 45vw"
                        className="h-full w-full"
                        imgClassName="object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="absolute inset-x-2 bottom-2 rounded-xl bg-white/95 px-2.5 py-1.5 shadow-[var(--shadow-card)] backdrop-blur">
                      <span className="block text-[1.05rem] font-semibold leading-none text-brand" style={{ fontFamily: "var(--font-display)" }}>
                        {m.value}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.62rem] leading-tight text-ink-soft">{cs.author}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="absolute -right-2 -top-2 z-20 sm:-right-4">
              <SpinBadge text="Verified with the client · " size={96} icon="check" />
            </div>
          </div>
        }
      />

      {/* ── Cards grid ── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {CARDS.map((card, i) => (
              <Reveal key={card.href} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:flex-row"
                >
                  {/* portrait */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-mist sm:aspect-auto sm:w-[40%]">
                    <Photo
                      src={card.image}
                      alt={card.initials}
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 40vw, 100vw"
                      className="h-full w-full sm:absolute sm:inset-0"
                      imgClassName="object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 p-6">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2
                        className="mt-4 text-[1.1rem] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-dark"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </h2>
                    </div>

                    <div className="grid w-full grid-cols-3 gap-2">
                      {card.stats.map((st, k) => (
                        <div key={st.label} className={`min-w-0 overflow-hidden rounded-xl p-3 ${STAT_TINTS[k % STAT_TINTS.length]}`}>
                          <p
                            className="whitespace-nowrap text-[1.3rem] font-bold leading-none tracking-tight text-ink"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {st.value}
                          </p>
                          <p className="mt-1 text-[11px] leading-[1.4] text-ink-soft">{st.label}</p>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
                      Read success story
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-1">
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content, design & video work ── */}
      <section className="border-t border-line bg-cream py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[0.8rem] font-semibold text-ink ring-1 ring-line">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
              Content, design &amp; video
            </span>
            <h2 className="text-h2 mt-5">
              The work, <Emphasis>up close.</Emphasis>
            </h2>
            <p className="lead mt-5 text-muted">
              Instagram feeds, Reels, YouTube thumbnails, landing pages and AI
              product visuals, with the system behind each one.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WORK_CASE_STUDIES.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href={`/case-studies/${w.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="overflow-hidden bg-mist">
                    <Photo
                      src={w.image}
                      alt={w.imageAlt}
                      ratio="16/9"
                      sizes="(min-width: 1024px) 36rem, (min-width: 640px) 50vw, 100vw"
                      imgClassName={`${w.imageFocus ?? "object-top"} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {w.scope.map((tag) => (
                          <span key={tag} className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted">
                        {w.client} · {w.platform}
                      </p>
                      <h3
                        className="mt-1.5 text-[1.1rem] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-dark"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {w.title}
                      </h3>
                      <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{w.summary}</p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
                      See the work
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-ink transition-transform duration-300 group-hover:translate-x-1">
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your results should be on this page"
        subtitle="Book a discovery call. We will be straight with you about what is achievable and how long it will take."
      />
    </>
  );
}
