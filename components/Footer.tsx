import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icons";
import { SITE } from "@/lib/content";
import { CHANNELS, CTA, NAV_PRIMARY, PRODUCT } from "@/lib/product";
import { NewsletterForm } from "@/components/pivot/NewsletterForm";
import { SoundLink } from "@/components/pivot/SoundLink";

/**
 * Product footer, laid out like native.no's: dense link columns grouped by
 * product / channels / company.
 */
export function Footer() {
  const organic = CHANNELS.filter((c) => c.group === "organic").slice(0, 6);
  const beyond = CHANNELS.filter((c) => c.group !== "organic").slice(0, 6);

  return (
    <footer className="bg-charcoal text-white/70">
      <div className="container-x">
        {/* closing band: one big line, the newsletter, the main CTA */}
        <div className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,1.4rem+3vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Marketing on autopilot.
              <br />
              <span className="text-brand">You run the company.</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white/70">
              One email a week: what&apos;s working on LinkedIn for B2B founders, with real posts and numbers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo imgClassName="h-11 w-auto" light />
            <p className="mt-4 text-sm leading-relaxed text-white/60">{PRODUCT.tagline}</p>
            <SoundLink
              href={CTA.start.href}
              className="mt-5 inline-flex rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-ink hover:bg-brand-light"
            >
              {CTA.start.label}
            </SoundLink>
          </div>

          <FooterCol title="Product">
            {NAV_PRIMARY.map((n) => (
              <FooterLink key={n.href} href={n.href}>{n.label}</FooterLink>
            ))}
            <FooterLink href={CTA.sales.href}>{CTA.sales.label}</FooterLink>
          </FooterCol>

          <FooterCol title="Organic">
            {organic.map((c) => (
              <FooterLink key={c.slug} href={`/solutions/${c.slug}`}>{c.name}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Search & paid">
            {beyond.map((c) => (
              <FooterLink key={c.slug} href={`/solutions/${c.slug}`}>{c.name}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/case-studies">Case studies</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href={`mailto:${SITE.email}`}>Contact</FooterLink>
          </FooterCol>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-5 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Social Catalyst · Tallinn, Estonia</p>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Catalyst on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white/80 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Icon name="social" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-3 flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/60 transition-colors hover:text-brand-light">
        {children}
      </Link>
    </li>
  );
}
