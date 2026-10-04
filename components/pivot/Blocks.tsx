import Link from "next/link";
import { SoundLink } from "@/components/pivot/SoundLink";
import { CHANNELS, COMPARE, CTA, METHOD, TESTIMONIALS, type Channel } from "@/lib/product";
import { Reveal } from "@/components/ui/Reveal";

/* ------------------------------------------------------------------ */
/*  Traditional vs Social Catalyst                                     */
/* ------------------------------------------------------------------ */

export function Compare() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2">
            {COMPARE.title}
            <br />
            <span className="text-brand">{COMPARE.titleAccent}</span>
          </h2>
        </Reveal>

        {/* phones: one card per row of the comparison */}
        <div className="mt-10 flex flex-col gap-3 md:hidden">
          {COMPARE.rows.map((r) => (
            <div key={r.label} className="card-r bg-cream p-4 ring-1 ring-line">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">{r.label}</p>
              <p className="mt-2 text-sm text-slate line-through decoration-ink/25">{r.old}</p>
              <p className="mt-1 flex gap-2 text-sm font-semibold text-ink">
                <span className="text-leaf" aria-hidden>✓</span>
                {r.next}
              </p>
            </div>
          ))}
        </div>

        <Reveal delay={0.05} className="mt-12 hidden md:block">
          <div className="panel overflow-hidden ring-1 ring-line">
            <div className="grid grid-cols-[minmax(6rem,0.7fr)_1fr_1fr] bg-mist text-sm font-semibold text-ink">
              <div className="p-4 sm:p-5" />
              <div className="p-4 text-muted sm:p-5">Traditional marketing</div>
              <div className="bg-forest p-4 text-white sm:p-5">Social Catalyst</div>
            </div>
            {COMPARE.rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[minmax(6rem,0.7fr)_1fr_1fr] border-t border-line text-sm">
                <div className="p-4 font-semibold text-ink sm:p-5">{r.label}</div>
                <div className="p-4 text-slate line-through decoration-ink/20 sm:p-5">{r.old}</div>
                <div className="bg-forest/[0.04] p-4 font-medium text-ink sm:p-5">{r.next}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {COMPARE.options.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.06}>
              <div
                className={`card-r flex h-full flex-col p-6 ${
                  o.featured ? "bg-brand text-ink shadow-[0_24px_50px_-28px_rgba(201,53,15,0.7)]" : "bg-mist ring-1 ring-line"
                }`}
              >
                <p className="text-sm font-semibold">{o.name}</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-4xl font-medium text-ink">
                  {o.price}
                  <span className="text-base font-normal opacity-70">{o.unit}</span>
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-sm">
                  {o.lines.map((l) => (
                    <li key={l} className="flex gap-2">
                      <span aria-hidden>{o.featured ? "✓" : "·"}</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Channels                                                           */
/* ------------------------------------------------------------------ */

export function ChannelChip({ c }: { c: Channel }) {
  return (
    <Link
      href={`/solutions/${c.slug}`}
      className="card-r group flex h-full flex-col gap-3 bg-white p-5 ring-1 ring-line transition hover:-translate-y-0.5 hover:ring-ink/30"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2.5">
          <span className="h-3 w-3 rounded-full" style={{ background: c.color }} />
          <span className="font-semibold text-ink">{c.name}</span>
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[0.68rem] font-semibold ${
            c.status === "live" ? "bg-leaf/15 text-leaf" : "bg-mist text-muted"
          }`}
        >
          {c.status === "live" ? "Live" : "Soon"}
        </span>
      </div>
      <p className="text-sm text-slate">{c.line}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {c.formats.map((f) => (
          <span key={f} className="rounded-md bg-mist px-2 py-0.5 text-[0.7rem] text-ink-soft">
            {f}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function Channels({ heading = true }: { heading?: boolean }) {
  const live = CHANNELS.filter((c) => c.status === "live");
  const soon = CHANNELS.filter((c) => c.status === "soon");
  return (
    <section id="channels" className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2">All your marketing, on autopilot</h2>
            <p className="lead mt-4">Start where B2B trust is built. One brand brain, written for how each channel works.</p>
          </Reveal>
        )}

        <div className="mt-12 flex items-baseline justify-between gap-2">
          <h3 className="text-h3">Live today</h3>
          <p className="text-sm text-slate">{live.length} channels, one voice across all of them.</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {live.map((c) => (
            <ChannelChip key={c.slug} c={c} />
          ))}
        </div>

        <div className="card-r mt-8 bg-white/70 p-5 ring-1 ring-line sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-semibold text-ink">On the roadmap</p>
            <p className="text-sm text-slate">Same brand brain, pointed at more places.</p>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {soon.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/solutions/${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-ink-soft ring-1 ring-line transition hover:ring-ink/30"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Results strip — real client numbers, right under the hero          */
/* ------------------------------------------------------------------ */

export function ResultsStrip() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-x grid grid-cols-2 divide-line py-8 lg:grid-cols-4 lg:divide-x">
        {TESTIMONIALS.map((t) => (
          <Link key={t.name} href={t.href} className="group flex items-center gap-3 px-2 py-3 lg:px-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.photo} alt="" className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white" loading="lazy" />
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-display)] text-2xl leading-none text-ink">
                {t.metric} <span className="text-sm font-normal text-slate">{t.metricLabel}</span>
              </p>
              <p className="mt-1 truncate text-xs text-muted group-hover:text-brand-dark">{t.name}, {t.role.split(",").pop()?.trim()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Method teaser (homepage)                                           */
/* ------------------------------------------------------------------ */

export function MethodTeaser() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-28">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/25 blur-3xl" aria-hidden />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold text-sun">{METHOD.eyebrow}</p>
          <h2 className="text-h2 mt-3 !text-white">{METHOD.title}</h2>
          <p className="lead mt-5 !text-white/75">{METHOD.lead}</p>
          <SoundLink href="/method" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-cream">
            How the method works <span aria-hidden>→</span>
          </SoundLink>
        </Reveal>
        <Reveal delay={0.1}>
          <ol className="grid gap-3 sm:grid-cols-2">
            {METHOD.pipeline.map((s, i) => (
              <li key={s.k} className="card-r bg-white/[0.06] p-5 ring-1 ring-white/10">
                <p className="text-xs font-semibold text-sun">0{i + 1}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg text-white">{s.k}</p>
                <p className="mt-1 text-sm text-white/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Closing CTA                                                        */
/* ------------------------------------------------------------------ */

export function FinalCta({ title = "Get back to building the company." }: { title?: string }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="panel relative overflow-hidden bg-brand px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sun/50 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-brand-deep/40 blur-3xl" aria-hidden />
          <h2 className="text-h2 relative mx-auto max-w-2xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-lg text-ink/80">
            Add your website. Swipe through a month of posts. Ten minutes a week, or none.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <SoundLink href={CTA.start.href} className="rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:bg-ink-soft">
              {CTA.start.label}
            </SoundLink>
            <SoundLink href={CTA.sales.href} className="rounded-xl bg-white/90 px-6 py-3.5 text-sm font-semibold text-ink hover:bg-white">
              {CTA.sales.label}
            </SoundLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Shared inner-page hero: cream, big title, optional lead + slot. */
export function PageHero({
  eyebrow,
  title,
  lead,
  chips,
  chain = false,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** A row under the lead that gives each page its own signature. */
  chips?: { label: string; color?: string }[];
  /** Join the chips with arrows, for a sequence. */
  chain?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-peach blur-3xl" aria-hidden />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sun-soft blur-3xl" aria-hidden />
      <div className="container-x relative text-center">
        {eyebrow && <p className="text-sm font-semibold text-brand-dark">{eyebrow}</p>}
        <h1 className="text-display mx-auto mt-3 max-w-4xl">{title}</h1>
        {lead && <p className="lead mx-auto mt-5 max-w-2xl">{lead}</p>}
        {chips && (
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2">
            {chips.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {chain && i > 0 && <span className="text-brand" aria-hidden>→</span>}
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-[0_6px_16px_-12px_rgba(20,30,25,0.4)] ring-1 ring-line">
                  {c.color && <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />}
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </section>
  );
}
