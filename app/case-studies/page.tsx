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
import { CASE_STUDIES, CTAS, WORK_CASE_STUDIES, headlineMetric } from "@/lib/content";

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
    href: "/case-studies/gaia-antonescu",
  },
  {
    initials: "Biola Babawale - Cycle Together",
    image: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
    tags: ["Personal Branding & Community Growth"],
    title:
      "Giving a movement founder the LinkedIn presence her mission deserved",
    href: "/case-studies/biola-babawale",
  },
  {
    initials: "Shahzad Akhtar - Strateasy Consulting",
    image: "/images/case-studies/shahzad-akhtar.jpg",
    tags: ["Management Consulting"],
    title:
      "Turning 28 years of practitioner expertise into a LinkedIn presence that generates consulting pipeline",
    href: "/case-studies/shahzad-akhtar",
  },
  {
    initials: "Kaitlin Malaspina - Brenna & Co.",
    image: "/images/case-studies/kaitlin-malaspina.jpg",
    tags: ["Business Architecture"],
    title:
      "Making a distinctive offer legible: how a Private Operating House built the channel to match the work",
    href: "/case-studies/kaitlin-malaspina",
  },
];

/** One card shape for both kinds: photo, tags, byline, title and a link. */
type GridCard = {
  href: string;
  image: string;
  alt: string;
  /** object-position class for the 16:10 crop. */
  focus: string;
  tags: string[];
  byline: string;
  title: string;
  cta: string;
};

const RESULT_CARDS: GridCard[] = CARDS.map((c) => ({
  href: c.href,
  image: c.image,
  alt: c.initials,
  focus: "object-[50%_20%]",
  tags: c.tags,
  byline: c.initials.replace(" - ", " · "),
  title: c.title,
  cta: "Read success story",
}));

/** Work pieces that sit at the end of the grid rather than near the top. */
const WORK_LAST = ["soch-social-media", "soch-landing-page"];

const WORK_CARDS: GridCard[] = [
  ...WORK_CASE_STUDIES.filter((w) => !WORK_LAST.includes(w.slug)),
  ...WORK_CASE_STUDIES.filter((w) => WORK_LAST.includes(w.slug)),
].map((w) => ({
  href: `/case-studies/${w.slug}`,
  image: w.image,
  alt: w.imageAlt,
  focus: w.imageFocus ?? "object-top",
  tags: w.scope,
  byline: `${w.client} · ${w.platform}`,
  title: w.title,
  cta: "See the work",
}));

/**
 * Results and work mixed in a checkerboard: each pair of cards is one of
 * each, and every other pair is flipped, so on the two-column grid neither
 * column is all one kind. Whatever is left of the longer list follows.
 */
const ALL_CARDS: GridCard[] = [];
for (let row = 0; row < Math.max(RESULT_CARDS.length, WORK_CARDS.length); row++) {
  const pair = [RESULT_CARDS[row], WORK_CARDS[row]];
  if (row % 2) pair.reverse();
  ALL_CARDS.push(...pair.filter((c): c is GridCard => Boolean(c)));
}

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
          </div>
        }
      />

      {/* ── All case studies, results and work mixed ── */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ALL_CARDS.map((card, i) => (
              <Reveal key={card.href} delay={(i % 2) * 0.1} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="overflow-hidden bg-mist">
                    <Photo
                      src={card.image}
                      alt={card.alt}
                      ratio="16/10"
                      sizes="(min-width: 1024px) 36rem, (min-width: 640px) 50vw, 100vw"
                      imgClassName={`${card.focus} transition-transform duration-700 group-hover:scale-105`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-muted">
                        {card.byline}
                      </p>
                      <h2
                        className="mt-1.5 text-[1.1rem] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-dark"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {card.title}
                      </h2>
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 text-[14px] font-semibold text-ink">
                      {card.cta}
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
