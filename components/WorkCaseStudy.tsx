import { Reveal } from "@/components/ui/Reveal";
import { Aurora } from "@/components/ui/Aurora";
import { Photo } from "@/components/ui/Photo";
import { MoreWork } from "@/components/MoreWork";
import { CtaBand } from "@/components/CtaBand";

export type WorkImage = {
  src: string;
  alt: string;
  /** Overrides the section's aspect ratio for this one image, e.g. a wide page screenshot. */
  ratio?: string;
};

type Item = { title: string; body: string };

export type WorkCaseStudyProps = {
  slug: string;
  eyebrow: string;
  /** h1 - wrap the closing phrase in <Emphasis>. */
  title: React.ReactNode;
  lead: string;
  /**
   * Factual tiles about the engagement ("4 pillars", "Weekly"). These are
   * deliverables, not results - never put an unverified outcome number here.
   */
  facts: { value: string; label: string }[];
  /** First image is the main portrait; up to two more float around it. */
  hero: { images: WorkImage[]; ratio: string };
  meta: { label: string; value: string }[];
  starting: {
    title: string;
    paragraphs: string[];
    constraints: Item[];
    objective: string;
  };
  approach: { title: string; lead?: string; items: Item[]; closer?: string };
  anatomy?: {
    title: string;
    lead?: string;
    parts: Item[];
    image: WorkImage;
    ratio: string;
    /** Optional worked example beside the parts, e.g. a written-out caption stack. */
    example?: { line: string; note: string }[];
  };
  gallery: {
    title: string;
    lead: string;
    images: WorkImage[];
    ratio: string;
    columns: 2 | 3 | 4;
  };
  range?: {
    title: string;
    lead?: string;
    items: (Item & { tag: string; image?: WorkImage })[];
    /** object-position for the card images; defaults to the top of the frame. */
    imageFocus?: string;
  };
  process: { title: string; lead?: string; steps: Item[]; standards: string[] };
  delivered: { title: string; items: Item[] };
  cta: { title: string; subtitle: string };
};

/** Tint per fact tile, matching the /case-studies cards. */
const TINTS = ["bg-peach", "bg-lilac-soft", "bg-sun-soft"];

const GALLERY_COLS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

const display = { fontFamily: "var(--font-display)" };

/** Side-labelled section, the same rhythm as the results case-study pages. */
function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[11rem_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">
              {label}
            </span>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Frame({ image, ratio, sizes, priority, className = "" }: {
  image: WorkImage;
  ratio: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[1.25rem] bg-mist shadow-[var(--shadow-lift)] ring-4 ring-white ${className}`}>
      <Photo src={image.src} alt={image.alt} ratio={image.ratio ?? ratio} sizes={sizes} priority={priority} imgClassName="object-top" />
    </div>
  );
}

/**
 * Layout for a content / design / video case study: the work itself is the
 * proof, so the page leads with it rather than with outcome numbers. Each page
 * under app/case-studies/<slug>/ keeps its own copy in local consts and passes
 * it in here.
 */
export function WorkCaseStudy(p: WorkCaseStudyProps) {
  const [main, ...floating] = p.hero.images;
  const { range } = p;
  const landscape = ratioOf(p.hero.ratio) > 1;

  return (
    <div className="bg-white">
      {/* ── Hero ── pulled up under the sticky header, like every other hero */}
      <section className="relative -mt-[4.5rem] overflow-hidden bg-cream pb-16 pt-[8.5rem] sm:pb-20 sm:pt-[9.5rem] lg:pb-28 lg:pt-[11.5rem]">
        <Aurora tone="cream" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="animate-fade-up inline-flex items-center rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold text-white">
              {p.eyebrow}
            </span>
            <h1
              className="animate-fade-up mt-5 text-display text-[clamp(2rem,1.2rem+2.6vw,3.1rem)]"
              style={{ animationDelay: "140ms" }}
            >
              {p.title}
            </h1>
            <p className="animate-fade-up lead mt-6 text-muted" style={{ animationDelay: "210ms" }}>
              {p.lead}
            </p>
            <div className="animate-fade-up mt-10 divide-y divide-line" style={{ animationDelay: "280ms" }}>
              {p.facts.map((f) => (
                <div key={f.value} className="py-4">
                  <span
                    className="block leading-none text-ink"
                    style={{ ...display, fontSize: "clamp(1.6rem, 1.3rem + 0.9vw, 2.1rem)", fontWeight: 600, letterSpacing: "-0.022em" }}
                  >
                    {f.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-slate">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* the work, on the tilted colour plate every case-study hero shares */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            {landscape ? (
              // wide work: the main piece, with the others tucked in below it
              <div className="relative mx-auto max-w-[36rem] px-2 pb-6 pt-6 sm:px-5 lg:mr-0">
                <div aria-hidden="true" className="absolute inset-x-5 bottom-4 top-10 rotate-[4deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)] sm:inset-x-8" />
                <span aria-hidden="true" className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-lilac/70" />
                <Frame image={main} ratio={p.hero.ratio} priority sizes="(min-width: 1024px) 34rem, 90vw" className="relative rounded-[1.75rem]" />
                {floating.length > 0 && (
                  <div className={`relative -mt-8 flex gap-4 px-4 sm:-mt-10 ${floating.length > 1 ? "justify-center" : "justify-end"}`}>
                    {floating.map((img, i) => (
                      <div key={img.src} className={`w-[46%] ${i % 2 ? "mt-5 rotate-[4deg]" : "-rotate-[4deg]"}`}>
                        <Frame image={img} ratio={p.hero.ratio} sizes="(min-width: 1024px) 15rem, 42vw" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative mx-auto max-w-[27rem] px-2 pb-10 pt-6 sm:px-5 lg:mr-0">
                <div aria-hidden="true" className="absolute inset-x-5 bottom-4 top-10 rotate-[4deg] rounded-[2.5rem] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-light)_45%,var(--color-sun)_100%)] sm:inset-x-8" />
                <span aria-hidden="true" className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-lilac/70" />
                <div className={`relative ${floating.length ? "mx-[10%]" : ""}`}>
                  <Frame image={main} ratio={p.hero.ratio} priority sizes="(min-width: 1024px) 28rem, 85vw" className="rounded-[2rem]" />
                </div>
                {floating[0] && (
                  <div className="absolute -left-1 bottom-2 z-10 w-[40%] -rotate-[5deg] sm:-left-3">
                    <Frame image={floating[0]} ratio={p.hero.ratio} sizes="(min-width: 1024px) 12rem, 38vw" />
                  </div>
                )}
                {floating[1] && (
                  <div className="absolute -right-1 top-2 z-10 w-[36%] rotate-[5deg] sm:-right-3">
                    <Frame image={floating[1]} ratio={p.hero.ratio} sizes="(min-width: 1024px) 11rem, 34vw" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Meta bar ── */}
      <hr className="border-line" />
      <div className="container-x">
        <dl className="flex flex-col divide-y divide-line sm:flex-row sm:divide-x sm:divide-y-0">
          {p.meta.map((f) => (
            <div key={f.label} className="flex-1 py-5 sm:px-8 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-[0.68rem] font-bold uppercase tracking-widest text-muted">{f.label}</dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ── The starting point ── */}
      <Section label="The starting point">
        <Reveal>
          <h2 className="text-h2">{p.starting.title}</h2>
          <div className="mt-8 max-w-3xl space-y-5 text-[1rem] leading-relaxed text-slate">
            {p.starting.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {p.starting.constraints.map((c, i) => (
              <div key={c.title} className="rounded-2xl bg-cream p-6 ring-1 ring-line">
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                  Constraint {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-ink" style={display}>{c.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-3 rounded-2xl bg-ink p-7 sm:p-8">
            <span className="text-[0.68rem] font-bold uppercase tracking-widest text-sun">The objective</span>
            <p className="mt-3 text-[1.1rem] font-medium leading-relaxed text-white" style={display}>
              {p.starting.objective}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── The approach ── */}
      <Section label="The approach">
        <Reveal>
          <h2 className="text-h2">{p.approach.title}</h2>
          {p.approach.lead && <p className="mt-6 max-w-3xl text-[1rem] leading-relaxed text-slate">{p.approach.lead}</p>}
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {p.approach.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04}>
              <div className="grid gap-2 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                <span className="text-sm font-bold text-brand" style={display}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[1.05rem] font-semibold leading-snug text-ink" style={display}>{it.title}</h3>
                  <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-slate">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {p.approach.closer && (
          <Reveal>
            <p className="mt-8 max-w-3xl border-l-4 border-brand pl-5 text-[1.05rem] font-medium leading-relaxed text-ink" style={display}>
              {p.approach.closer}
            </p>
          </Reveal>
        )}
      </Section>

      {/* ── Selected work ── full-bleed band, so each piece reveals on its own */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
        <Aurora tone="dark" />
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[0.8rem] font-semibold text-white ring-1 ring-white/15">
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-brand" />
              Selected work
            </span>
            <h2 className="text-h2 mt-5 !text-white">{p.gallery.title}</h2>
            <p className="lead mt-5 !text-white/75">{p.gallery.lead}</p>
          </Reveal>
          <div className={`mt-12 grid gap-4 ${GALLERY_COLS[p.gallery.columns]}`}>
            {p.gallery.images.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 0.06}>
                <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Photo
                    src={img.src}
                    alt={img.alt}
                    ratio={p.gallery.ratio}
                    sizes={p.gallery.columns === 2 ? "(min-width: 640px) 45vw, 90vw" : "(min-width: 1024px) 22rem, 45vw"}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Anatomy ── */}
      {p.anatomy && (
        <Section label="Anatomy">
          <Reveal>
            <h2 className="text-h2">{p.anatomy.title}</h2>
            {p.anatomy.lead && <p className="mt-6 max-w-3xl text-[1rem] leading-relaxed text-slate">{p.anatomy.lead}</p>}
          </Reveal>
          <div className={`mt-10 grid items-start gap-10 ${ratioOf(p.anatomy.ratio) > 1 ? "" : "lg:grid-cols-[18rem_1fr] lg:gap-12"}`}>
            <Reveal className={ratioOf(p.anatomy.ratio) > 1 ? "max-w-2xl" : "lg:sticky lg:top-28"}>
              <Frame image={p.anatomy.image} ratio={p.anatomy.ratio} sizes="(min-width: 1024px) 36rem, 90vw" className="ring-1 ring-line" />
            </Reveal>
            <div>
              <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {p.anatomy.parts.map((part, i) => (
                  <Reveal key={part.title} as="li" delay={(i % 2) * 0.05} className="flex gap-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[0.98rem] font-semibold leading-snug text-ink" style={display}>{part.title}</h3>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate">{part.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              {p.anatomy.example && (
                <Reveal>
                  <div className="mt-10 divide-y divide-line rounded-2xl bg-cream ring-1 ring-line">
                    {p.anatomy.example.map((ex) => (
                      <div key={ex.line} className="p-5 sm:p-6">
                        <p className="text-[1.02rem] font-semibold leading-snug text-ink" style={display}>{ex.line}</p>
                        <p className="mt-1.5 text-[0.85rem] text-muted">{ex.note}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* ── Range ── */}
      {range && (
        <Section label="Range">
          <Reveal>
            <h2 className="text-h2">{range.title}</h2>
            {range.lead && <p className="mt-6 max-w-3xl text-[1rem] leading-relaxed text-slate">{range.lead}</p>}
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {range.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.06} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-line">
                  {it.image && (
                    <Photo src={it.image.src} alt={it.image.alt} ratio="16/9" sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw" imgClassName={range.imageFocus ?? "object-top"} />
                  )}
                  <div className="p-6">
                    <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">{it.tag}</span>
                    <h3 className="mt-2 text-base font-semibold leading-snug text-ink" style={display}>{it.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">{it.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── Process ── */}
      <Section label="How it runs">
        <Reveal>
          <h2 className="text-h2">{p.process.title}</h2>
          {p.process.lead && <p className="mt-6 max-w-3xl text-[1rem] leading-relaxed text-slate">{p.process.lead}</p>}
        </Reveal>
        <Reveal delay={0.05}>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {p.process.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-cream p-6 ring-1 ring-line">
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-brand">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[0.95rem] font-semibold leading-snug text-ink" style={display}>{s.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-slate">{s.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 text-[0.68rem] font-bold uppercase tracking-widest text-muted">Standards on every piece</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.process.standards.map((s) => (
              <li key={s} className="rounded-full bg-white px-3.5 py-1.5 text-[0.82rem] font-medium text-ink ring-1 ring-line">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ── Delivered ── */}
      <Section label="What we deliver">
        <Reveal>
          <h2 className="text-h2">{p.delivered.title}</h2>
        </Reveal>
        <div className="mt-10 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {p.delivered.items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 0.05}>
              <div className="border-b border-line py-5">
                <h3 className="text-[0.98rem] font-semibold text-ink" style={display}>{it.title}</h3>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-slate">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {p.facts.map((f, i) => (
              <div key={f.value} className={`rounded-2xl p-6 ${TINTS[i % TINTS.length]}`}>
                <p className="text-[1.6rem] font-bold leading-none tracking-tight text-ink" style={display}>{f.value}</p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-soft">{f.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <MoreWork current={p.slug} />

      <CtaBand title={p.cta.title} subtitle={p.cta.subtitle} />
    </div>
  );
}

/** "16/9" -> 1.78, so layouts can tell landscape work from portrait. */
function ratioOf(ratio: string) {
  const [w, h] = ratio.split("/").map(Number);
  return h ? w / h : 1;
}
