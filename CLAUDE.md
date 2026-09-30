# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Social Catalyst**, a social media marketing agency for B2B
and growing businesses — Instagram, LinkedIn (company pages and outreach),
Google Business Profile, review management, AI-produced images and video,
one-page websites, and paid social ads. Captions are written in Estonian and
English. Pricing is quote-based: no package prices appear on the site. Live at
`www.withsocialcatalyst.com`. Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS v4 · Motion.

There is no test suite and no test script — verification is `tsc --noEmit`,
`npm run lint`, and `npm run build`. Lint currently reports 7 known `<img>`
warnings in the case-study detail pages and no errors.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:3000
npm run build    # production build (also runs the TypeScript check)
npm start        # serve the production build (run build first)
npm run lint     # ESLint (flat config: eslint-config-next core-web-vitals + typescript)
npx tsc --noEmit -p tsconfig.json   # type-check only, faster than a full build
```

## Configuration

All three env vars are optional — set them in `.env.local` (there is no
`.env.example`); each has a fallback:

- `NEXT_PUBLIC_BOOKING_URL` — Cal.com/Calendly link every "Get a quote" button
  opens (defaults to a Cal.com slug), centralized as `BOOKING_URL` in
  `lib/content.ts`.
- `NEXT_PUBLIC_SCHEDULER_URL` — optional scheduler embed for `/book`; falls
  back to a styled contact card when unset (`SCHEDULER_URL` in `lib/content.ts`).
- `NEXT_PUBLIC_AUDIT_WEBHOOK_URL` — webhook the "Free Marketing Audit" form
  (`components/AuditModal.tsx`) posts to; falls back to a prefilled `mailto:`
  when unset.

## Architecture

**`lib/content.ts` is the single source of truth for copy.** Hero text, nav,
service categories, packages, pricing FAQs, process steps, stats, team,
case studies, client logos, and the audit/confirmation page copy all live
here as typed exports (`HERO`, `SITE`, `NAV`, `SERVICE_CATEGORIES`,
`PACKAGES`, `STEPS`, `CASE_STUDIES`, `PROOF_TICKER`, `HOME_CTA`, etc.). Pages
and components import from it rather than hardcoding copy, so a content
change is almost always a `lib/content.ts` edit, not a JSX edit.
`lib/channels.ts` similarly centralizes the platform list (Instagram/Google/
LinkedIn/Facebook/TikTok) shared by the homepage channels band, the footer,
and the dashboard mock (`components/SocialGrowthAnim.tsx`).

**Case studies are the one exception to that rule.** The four pages under
`app/case-studies/<slug>/page.tsx` (`gaia-antonescu`, `biola-babawale`,
`shahzad-akhtar`, `kaitlin-malaspina`) are real Social Catalyst client
engagements, each a fully standalone page with its own local
`HERO_STATS` / `META` / `PROBLEMS` / `FRAMEWORK` / `RESULTS` consts — not
data-driven. The `CASE_STUDIES` array in `lib/content.ts` is a *separate,
parallel* summary of the same four engagements that feeds the homepage:
`ClientResults` (the results cards), the hero's cycling result chip
(`HeroVisual`), the proof ticker (`PROOF_TICKER` is derived from it) and
`ClientAvatarStack` (used in many heroes and `CtaBand`) — plus the face grid in
the `/case-studies` hero and `MoreCaseStudies`, the "more results" strip each
detail page ends with. The `/case-studies` cards themselves still use their
own local `CARDS` array. Each entry's optional `highlight` index picks its headline
metric, read through `headlineMetric()`. If you add, remove, or reslug a case
study, or change a headline number, update both the standalone page and the
`CASE_STUDIES` entry, or the homepage and the detail page will drift apart.
**Content, design and video case studies are a second, separate set.** Four
more pages (`soch-social-media`, `soch-landing-page`, `etz-riz`,
`shaping-wealth`) show production work rather than results: each keeps its
copy in local consts and renders it through the shared layout
`components/WorkCaseStudy.tsx`, ending with `MoreWork` (the other work pieces)
instead of `MoreCaseStudies`. Their summaries live in `WORK_CASE_STUDIES` in
`lib/content.ts`, which feeds the "Content, design & video" grid on
`/case-studies` and `MoreWork`. They have no result metrics or client quotes,
so they are deliberately kept out of `CASE_STUDIES` and everything it feeds
(homepage results, ticker, hero chip, avatar stack). Never invent an outcome
number for them; the `facts` tiles are deliverables ("4 pillars", "Weekly").
Their images are samples of the work, in
`public/images/case-studies/<slug>/`. When adding one, add the page, the
`WORK_CASE_STUDIES` entry and the `app/sitemap.ts` route.
`components/Testimonials.tsx` (the old carousel) is currently unused. Two
client photos are local (`public/images/case-studies/`); the other two are
hotlinked from the Webflow CDN (`cdn.prod.website-files.com`) — check they
still resolve before relying on them.

**Homepage structure** (`app/page.tsx`), top to bottom: `Hero` →
`ProofTicker` → `Positioning` → `PlatformStrip` (the orange channels band,
`#channels`) → `ServicesGrid` (photo bento; photos come from
`SERVICE_CATEGORIES[].image`) → `ClientResults` (`#results`) → `HowWeWork` →
`PackagesPreview` → FAQ (inline) → `HomeCta`. Rules when editing it:
- Full-bleed coloured sections are not wrapped in an outer `<Reveal>` —
  fading a whole band flashes white. Each section reveals its own content.
- `HomeCta` is homepage-only; every other page ends with the shared `CtaBand`
  (same ink-and-aurora look; pass `audit={false}` where the free audit is
  already the page's main ask, as on `/audit`). `Stats` is used on About only.
- `SocialGrowthAnim` lives in the channels band with `toast={false}`, because
  the hero already shows its exported `NotificationToast`.
- Stock photos are atmosphere only and are never captioned as clients; faces
  tied to results are always the real `CASE_STUDIES` photos.

**Inner pages share one visual kit** so they match the homepage: every hero
is `InnerHero` (cream + `Aurora`, pulled up under the header, slots for
`eyebrow`/`title`/`lead`/`actions`/`footer`/`aside`), usually with `HeroPhoto`
+ `FloatChip`s as the aside and `Emphasis` for the italic orange phrase in the
title. `ui/Aurora` (`tone="cream" | "dark" | "brand"`) is the background glow for
any full-bleed band; `ProofPill` is the client-faces link. Case-study detail
pages don't use `InnerHero` (their heroes are bespoke) but share the cream +
`Aurora` hero background and the tilted colour plate behind the portrait.

**Booking and the audit modal are both global, not per-page.** `AuditModalProvider`
wraps the whole app in `app/layout.tsx`, so `useAuditModal()` (`context/AuditModalContext.tsx`)
and `<AuditButton>` (`components/AuditButton.tsx`) work from any component
without prop drilling — the modal itself (`components/AuditModal.tsx`) is
rendered once at the layout root. `<BookButton>` (`components/BookButton.tsx`)
is a plain link to `BOOKING_URL` and needs no provider. `components/BookAutoOpen.tsx`
watches for `?book=true` / `?audit=true` query params (used by outbound links)
and triggers the same two flows on page load.

**Design tokens live in `app/globals.css`** under a Tailwind v4 `@theme` block
(`--color-brand`, `--color-ink`, `--color-mist`, `--color-sun`,
`--color-lilac` plus `-soft` tints, channel-badge colors, etc.) — change
tokens there, not with inline hex values. UI surfaces stay flat; gradients,
glows and drifting blobs are allowed as background atmosphere only, via the
utilities in the same file (`animate-aurora-a/b/c`, `animate-marquee-reverse`,
`animate-spin-slow`, `btn-shine`, `bg-dots`), all disabled under
`prefers-reduced-motion`. Text on `bg-brand` is ink, never white (white on
brand orange fails contrast).

`components/StatCounter.tsx` (animated count-up, integer values only — see
its rounding) and `components/ui/Reveal.tsx` (scroll-triggered fade+rise,
respects reduced-motion) are the two animation primitives reused across
nearly every section and the case-study pages; `components/ui/Highlight.tsx`
(marker swipe) and `components/ui/SpinBadge.tsx` (rotating text badge) are
smaller homepage ones. **Never render different elements or text based on
`useReducedMotion()`** — it is `null` on the server, so that causes a
hydration mismatch. Render the same markup and hide motion with
`motion-reduce:` classes, or change the value after mount. In inline
`style={{ fontSize: "clamp(...)" }}`, put spaces around `+`/`-`
(`clamp(2rem, 1.5rem + 1vw, 3rem)`): without them the declaration is invalid
and silently dropped. Tailwind arbitrary classes add the spaces for you.

**Blog & SEO.** Posts are markdown files with frontmatter in `content/blog/`,
committed by the Soch SEO pipeline and parsed at build time by `lib/blog.ts`
(keep that file identical across the Soch sites, per its header). Images live
in `public/blog/`. Structured data helpers are in `lib/seo.ts`; `app/sitemap.ts`,
`app/robots.ts`, `app/llms.txt` and `app/opengraph-image.tsx` cover the
machine-readable files.

**Images**: `components/ui/Photo.tsx` wraps `next/image` with a fallback
prop so callers never branch on whether a real photo exists yet. See
`public/images/README.md` for the rules on which slots take owned photos
only. Remote image hosts must be allow-listed in `next.config.ts`'s
`images.remotePatterns` (currently just `cdn.prod.website-files.com`); the
case-study pages instead use plain `<img>` tags for their hotlinked photos,
so they bypass that allowlist entirely.
