# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Social Catalyst**, a marketing agency for restaurants, cafes and
shisha lounges — Instagram, Google Business Profile, review management, AI
content, one-page websites, Wolt & Bolt Food listings, and paid ads. Piloting
in Tallinn, Estonia. Next.js 16 (App Router) · React 19 · TypeScript ·
Tailwind CSS v4 · Motion.

There is no test suite and no test script — verification is `tsc --noEmit`,
`npm run lint`, and `npm run build`.

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

Copy `.env.example` to `.env.local` before relying on live behavior:

- `NEXT_PUBLIC_BOOKING_URL` — Cal.com/Calendly link every "Get a quote" button
  opens (defaults to a placeholder Cal.com slug), centralized as `BOOKING_URL`
  in `lib/content.ts`.
- `NEXT_PUBLIC_SCHEDULER_URL` — optional scheduler embed for `/book`; falls
  back to a styled contact card when unset (`SCHEDULER_URL` in `lib/content.ts`).
- `NEXT_PUBLIC_AUDIT_WEBHOOK_URL` — webhook the "Free Venue Audit" form
  (`components/AuditModal.tsx`) posts to; falls back to a prefilled `mailto:`
  when unset.

## Architecture

**`lib/content.ts` is the single source of truth for copy.** Hero text, nav,
service categories, packages, pricing FAQs, process steps, stats, team,
testimonials, client logos, and the audit/confirmation page copy all live
here as typed exports (`HERO`, `SITE`, `NAV`, `SERVICE_CATEGORIES`,
`PACKAGES`, `STEPS`, `CASE_STUDIES`, etc.). Pages and
components import from it rather than hardcoding copy, so a content change
is almost always a `lib/content.ts` edit, not a JSX edit. `lib/channels.ts`
similarly centralizes the platform list (Instagram/Google/LinkedIn/Facebook/
TikTok) shared by the homepage platform strip, footer, and hero animation.

**Case studies are the one exception to that rule.** The four pages under
`app/case-studies/<slug>/page.tsx` (`gaia-antonescu`, `biola-babawale`,
`shahzad-akhtar`, `kaitlin-malaspina`) are real Social Catalyst client
engagements, each a fully standalone page with its own local
`HERO_STATS` / `META` / `PROBLEMS` / `FRAMEWORK` / `RESULTS` consts — not
data-driven. The `CASE_STUDIES` array in `lib/content.ts` is a *separate,
parallel* summary of the same four engagements that only feeds the homepage
carousel (`components/Testimonials.tsx`) and its case-study links. If you
add, remove, or reslug a case study, update both the standalone page and the
`CASE_STUDIES` entry, or the carousel and the detail page will drift apart.
Two of the case-study photos are hotlinked from LinkedIn's CDN with
signed URLs that expire; check they still resolve before relying on them.

**Booking and the audit modal are both global, not per-page.** `AuditModalProvider`
wraps the whole app in `app/layout.tsx`, so `useAuditModal()` (`context/AuditModalContext.tsx`)
and `<AuditButton>` (`components/AuditButton.tsx`) work from any component
without prop drilling — the modal itself (`components/AuditModal.tsx`) is
rendered once at the layout root. `<BookButton>` (`components/BookButton.tsx`)
is a plain link to `BOOKING_URL` and needs no provider. `components/BookAutoOpen.tsx`
watches for `?book=true` / `?audit=true` query params (used by outbound links)
and triggers the same two flows on page load.

**Design tokens live in `app/globals.css`** under a Tailwind v4 `@theme` block
(`--color-brand`, `--color-ink`, `--color-mist`, channel-badge colors, etc.) —
change tokens there, not with inline hex values. The homepage adds `--color-sun`
/ `--color-lilac` (plus `-soft` tints) and a set of atmosphere utilities in the
same file (`animate-aurora-a/b/c` drifting glows, `animate-marquee-reverse`,
`animate-spin-slow`, `btn-shine`, `bg-dots`), all disabled under
`prefers-reduced-motion`. Text on `bg-brand` is ink, never white (contrast).
`components/StatCounter.tsx` (animated count-up, integer values only — see
its rounding) and `components/ui/Reveal.tsx` (scroll-triggered fade+rise,
respects reduced-motion) are the two animation primitives reused across
nearly every section and the case-study pages.

**Images**: `components/ui/Photo.tsx` wraps `next/image` with a fallback
prop so callers never branch on whether a real photo exists yet — most
client/team photos are still absent placeholders. Remote image hosts must be
allow-listed in `next.config.ts`'s `images.remotePatterns` (currently just
`cdn.prod.website-files.com`); the case-study pages instead use plain
`<img>` tags for their hotlinked photos, so they bypass that allowlist
entirely.
