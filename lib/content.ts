// ------------------------------------------------------------------
//  Social Catalyst - single source of content & config.
//  Copy, services, packages, process, proof and the scheduler/booking
//  links all live here so the client can update everything from one file.
// ------------------------------------------------------------------

import type { IconName } from "@/components/Icons";

export const HERO = {
  eyebrow: "Social media marketing for B2B and growing businesses",
  /** headline + headlineEmphasis is the stable h1 sentence screen readers get. */
  headline: "Get more of the right people ",
  headlineEmphasis: "finding you first.",
  /** Visual h1: the prefix stays put, the last word cycles. */
  rotatingPrefix: "finding you",
  rotating: ["first.", "on Google.", "on LinkedIn.", "on Instagram."],
  lead: "We manage your digital presence, so the people looking for what you do find you first. You set the vision. We handle the rest.",
  /** Shown under the audit button. All three are promises the audit already makes. */
  microcopy: ["Free", "Read by a person", "Back within 24 hours"],
  proofLine: "Real results for founders in the UK, US, Europe & Pakistan",
  /** Stock photo - atmosphere only, never captioned as a client. */
  photo: {
    src: "/Service Images/ai-content-feature-team.webp",
    alt: "A small team gathered round a laptop, smiling at what's on screen",
  },
};

export const SITE = {
  name: "Social Catalyst",
  tagline:
    "Instagram, LinkedIn, Google and reviews marketing for B2B and growing businesses.",
  // Placeholder contact details, replace before launch.
  email: "riz@soovita.com",
  linkedin: "https://www.linkedin.com/company/social-catalyst/",
};

/**
 * Where every "Get a quote" CTA sends people. Centralised here so it's
 * defined once instead of duplicated across every booking button.
 * Replace with the real Cal.com / Calendly link, or set
 * NEXT_PUBLIC_BOOKING_URL to override without a code change.
 */
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://cal.com/consult-with-riz/marketing-discovery-call";

/**
 * Where the CTAs send people to schedule via an embedded calendar.
 * Replace with your real Calendly / TidyCal link and the embed lights up
 * automatically. Until then a styled fallback card is shown.
 */
export const SCHEDULER_URL = process.env.NEXT_PUBLIC_SCHEDULER_URL ?? "";

export const CTAS = {
  primary: { label: "Get a quote", href: "/book" },
  secondary: { label: "Get a Free Marketing Audit", href: "/audit" },
};

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

// ------------------------------------------------------------------
//  Services grouped into the 7 categories we sell. No prices here:
//  pricing only ever appears at the package level, on /packages.
// ------------------------------------------------------------------

export type Service = { title: string; description: string };

export type ServiceCategory = {
  slug: string;
  icon: IconName;
  name: string;
  /** One line of framing shown on the home page card and the /services chapter header. */
  blurb: string;
  /** 2–3 short highlights for the home page card preview. */
  highlights: string[];
  /** Full list, with descriptions, shown on the /services page. */
  services: Service[];
  /** Photo for the homepage bento card, rooted at public/. Omit for a colour tile. */
  image?: string;
  imageAlt?: string;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "social-media",
    image: "/Service Images/social-media-phone.webp",
    imageAlt: "Checking a business's social feed on a phone",
    icon: "social",
    name: "Social Media",
    blurb: "Your feed stays busy every week without you touching it.",
    highlights: [
      "8 to 20 posts a month, written and scheduled for you",
      "Captions written in Estonian and English",
    ],
    services: [
      {
        title: "Instagram Essentials",
        description:
          "Eight posts a month, written, designed and scheduled. Your page stops looking like a business that might have shut down.",
      },
      {
        title: "Instagram Standard",
        description:
          "12 posts, 12 stories and 2 short videos a month. You see the whole month on one calendar and approve it in about 20 minutes.",
      },
      {
        title: "Instagram Plus",
        description:
          "20 posts, daily stories and 4 short videos a month. People who follow you see you most days, which is when they start reaching out.",
      },
      {
        title: "TikTok Channel",
        description:
          "Eight videos a month, cut the way the app rewards, using formats already working in your space. Reaches people who have never heard of you.",
      },
      {
        title: "Facebook Page",
        description:
          "Your Instagram content mirrored to Facebook, with your page details and hours kept right. Catches the part of your audience that still lives there.",
      },
      {
        title: "LinkedIn Presence",
        description:
          "Eight posts a month on your company page, aimed at the people who actually buy. That is where inbound calls and warm introductions come from.",
      },
      {
        title: "Inbox & Comments",
        description:
          "We answer your DMs and comments Monday to Friday, usually within a few hours. Nobody asking a question gets left on read.",
      },
      {
        title: "Estonian + English Captions",
        description:
          "Every caption written twice, once in Estonian and once in English. Local and international contacts both read it properly and both reach out.",
      },
    ],
  },
  {
    slug: "google",
    image: "/Service Images/google-maps-phone.webp",
    imageAlt: "A Google Maps business listing open on a phone",
    icon: "pin",
    name: "Google",
    blurb: "Show up when someone nearby searches for what you do.",
    highlights: [
      "Profile claimed, verified and fully built out",
      "Every review answered within 24 hours",
    ],
    services: [
      {
        title: "Google Business Profile Setup",
        description:
          "We claim your profile, verify it and fill every field Google offers: hours, services, photos, categories. You stop being hard to find.",
      },
      {
        title: "Google Profile Management",
        description:
          "A Google post every week, fresh photos monthly, hours and details always right. Google ranks active listings above dormant ones.",
      },
      {
        title: "Review Replies",
        description:
          "Every review answered inside 24 hours, in Estonian or English. Difficult ones handled calmly, and we check with you before replying to those.",
      },
      {
        title: "Google Maps Visibility",
        description:
          "A one-off deep pass on categories, service area, photos and the words in each field. Moves you up the map for searches near you.",
      },
    ],
  },
  {
    slug: "reviews",
    image: "/Service Images/reviews-customer-rating.webp",
    imageAlt: "A phone with a five-star customer review above it",
    icon: "star",
    name: "Reviews",
    blurb: "Get the reviews you are owed, without anyone feeling awkward.",
    highlights: ["Follow-up emails, a client-facing ask and a team script"],
    services: [
      {
        title: "Review Generation System",
        description:
          "A follow-up email after every project, a simple ask and a short script for your team. Your rating stops being decided by the two clients who complained.",
      },
    ],
  },
  {
    slug: "ai-content",
    image: "/Service Images/ai-content-team-meeting.webp",
    imageAlt: "A team talking through ideas in their office",
    icon: "image",
    name: "AI Content",
    blurb: "Photos and video of your business, without booking a shoot day.",
    highlights: ["10 to 25 custom images a month", "Short videos, no film crew needed"],
    services: [
      {
        title: "Custom Images a Month",
        description:
          "Professional-looking images of your product, team and workspace every month, produced from what you already have. No photographer, no downtime.",
      },
      {
        title: "Short Videos a Month",
        description:
          "Short videos built for the feed, the kind that normally need a crew and a full day. You get them monthly without pulling your team off the job.",
      },
      {
        title: "Seasonal Campaign Pack",
        description:
          "12 images and 2 videos on one theme for a launch, a campaign or a new offer. Ready the week before you need them, not the week after.",
      },
    ],
  },
  {
    slug: "foundations",
    image: "/Service Images/foundations-website-laptop.webp",
    imageAlt: "A one-page website open on a laptop",
    icon: "globe",
    name: "Foundations",
    blurb: "The profile, brand and website you never got round to.",
    highlights: ["Instagram profile rebuilt properly", "A one-page website on your own domain"],
    services: [
      {
        title: "Instagram Profile Build",
        description:
          "Bio, highlights, buttons and pinned posts rebuilt from scratch. Someone landing on your page can see what you do and get in touch in two taps.",
      },
      {
        title: "Brand Basics Kit",
        description:
          "Your colours, your fonts and a set of reusable post templates. Everything you publish afterwards looks like the same business.",
      },
      {
        title: "One-Page Website",
        description:
          "One fast page on your own domain: services, photos, contact details, location. Somewhere to send people that is not a social profile.",
      },
      {
        title: "Website Updates",
        description:
          "Changed your services or your details? We update the page, up to two changes a month. Hosting, security and domain renewal are in the price.",
      },
    ],
  },
  {
    slug: "linkedin-leadgen",
    image: "/Service Images/linkedin-laptop.webp",
    imageAlt: "Typing an outreach message on a laptop",
    icon: "target",
    name: "LinkedIn & Lead Gen",
    blurb: "LinkedIn outreach that actually starts conversations.",
    highlights: ["Full profile & company page rebuild", "Ongoing outreach, tracked and reported"],
    services: [
      {
        title: "LinkedIn Profile & Outreach Build",
        description:
          "Founder and company page rebuilt properly, plus a connection and messaging sequence written for your actual buyers. Not a template with your name swapped in.",
      },
      {
        title: "Outreach Campaign Management",
        description:
          "Weekly connection requests, follow-ups and replies tracked every month. Your pipeline stops depending on referrals alone.",
      },
    ],
  },
  {
    slug: "growth",
    icon: "trend",
    name: "Ads & Reporting",
    blurb: "Paid reach, and a report you can read in two minutes.",
    highlights: ["Instagram, Facebook & LinkedIn ads management", "A one-page report, in plain language"],
    services: [
      {
        title: "Paid Social Ads",
        description:
          "Setup, targeting and weekly changes across Meta and LinkedIn, based on what is actually converting. You pay the platform directly for the budget, so you see what it really costs.",
      },
      {
        title: "Monthly Report",
        description:
          "One page, plain words: who saw you, who opened your profile, and how many people asked to get in touch.",
      },
    ],
  },
];

// ------------------------------------------------------------------
//  Packages: the only place prices appear on the public site.
//  All prices are "starting from" and excl. VAT.
// ------------------------------------------------------------------

export type Package = {
  slug: string;
  name: string;
  audience: string;
  outcome: string;
  popular?: boolean;
  track: "core" | "specialist";
  features: string[];
};

export const PACKAGES: Package[] = [
  {
    slug: "essentials",
    name: "Essentials",
    audience: "For a small business or startup with no time to spare.",
    outcome: "Your feed and your Google listing stop looking abandoned.",
    track: "core",
    features: [
      "6 posts a month, photos included",
      "Your Google listing kept current",
      "Every review answered",
    ],
  },
  {
    slug: "starter",
    name: "Starter",
    audience: "For a business with almost nothing online yet.",
    outcome: "Get found on Google, and post twice a week without doing it.",
    track: "core",
    features: [
      "Instagram profile rebuilt properly",
      "Google Business Profile claimed, verified and built out",
      "8 Instagram posts a month",
      "10 custom images a month",
      "Every Google review answered within 24 hours",
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    audience: "For a business that posts sometimes and knows it should do more.",
    outcome: "Show up on every channel your buyers already use, in two languages.",
    popular: true,
    track: "core",
    features: [
      "Instagram profile rebuild plus brand basics kit (colours, fonts, templates)",
      "Google Business Profile setup and ongoing management",
      "A one-page website, free on a 6-month term",
      "12 Instagram posts, 12 stories, 2 short videos a month",
      "10 custom images a month",
      "Every Google review answered within 24 hours",
      "Captions written in Estonian and English",
      "Monthly plain-language performance report",
    ],
  },
  {
    slug: "outbound-led",
    name: "Outbound-Led",
    audience: "For a business where most new clients come from outreach and referrals.",
    outcome: "Get more replies out of the outreach you're already sending.",
    track: "specialist",
    features: [
      "Full LinkedIn profile and company page rebuild",
      "Ongoing outreach campaign management",
      "25 custom images a month",
      "Review system: follow-up emails, client-facing ask, team script",
      "Google Business Profile setup and management",
      "Monthly plain-language performance report",
    ],
  },
  {
    slug: "full",
    name: "Full",
    audience: "For an owner with two or three business lines, or big plans for one.",
    outcome: "Every channel that brings people in, run by one team.",
    track: "specialist",
    features: [
      "Everything above: Instagram (top tier), TikTok, brand kit, website, the full Google suite, LinkedIn outreach, review system",
      "25 custom images and 2 short videos a month",
      "Paid Instagram, Facebook and LinkedIn ads management",
      "Monthly plain-language performance report",
    ],
  },
];

export const PACKAGE_TERMS = [
  { value: "6 mo", label: "Minimum term, then 30 days' notice" },
  { value: "100%", label: "Posts approved by you before going live" },
];

export const PACKAGE_FINE_PRINT = [
  "All quotes in EUR, excluding VAT.",
  "Minimum term: 6 months, then month to month with 30 days' notice.",
  "You approve every post before it goes live. Nothing is published without your sign-off.",
  "Website: one page, two rounds of changes, domain registered in your name.",
  "Ad budget, where it applies, is paid by you directly to Meta and is not in the package price.",
];

export type FaqItem = { q: string; a: string };

export const PRICING_FAQS: FaqItem[] = [
  {
    q: "Why is there a one-off setup fee?",
    a: "The first month is much heavier than the ones after it. Rebuilding your Instagram profile, claiming and building a Google listing, or rebuilding your LinkedIn is real one-time work. The setup fee pays for that build. The monthly fee pays for running it afterwards.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Six months on every package, then month to month with 30 days' notice. Marketing for a growing business takes a few months to show up in leads and orders. Six months is about the shortest honest window to judge it in.",
  },
  {
    q: "Can I move to a different package later?",
    a: "Yes. Most businesses start on Essentials or Starter and move up once the basics are working. Tell us what changed and we'll requote the difference.",
  },
  {
    q: "Is the ad budget included in the Full package price?",
    a: "No. The Full package fee covers running your ads: setup, targeting, weekly changes. Whatever you spend on the ads themselves goes from you straight to the platform, on top of that.",
  },
  {
    q: "Which package is right for my business?",
    a: "If most of your new clients already come from outreach and referrals, start with Outbound-Led. If you're barely online yet, start with Essentials or Starter. If you're not sure, get a quote. We'll ask a few questions about your business and name one honestly, even if it's the cheapest one.",
  },
];

// ------------------------------------------------------------------
//  How we work
// ------------------------------------------------------------------

export type Step = {
  no: string;
  icon: IconName;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    no: "01",
    icon: "audit",
    title: "Audit & Quick Wins",
    description:
      "We read your Instagram, your Google listing and your LinkedIn by hand, then fix the free things first, the ones that change how you show up this week.",
  },
  {
    no: "02",
    icon: "pin",
    title: "Get Found on Google",
    description:
      "We claim, verify and fill out your Google Business Profile, so the person searching for what you do actually sees you.",
  },
  {
    no: "03",
    icon: "image",
    title: "Look Active, Every Week",
    description:
      "Photos, posts, stories and review replies on a fixed schedule, written for your business in Estonian and English.",
  },
  {
    no: "04",
    icon: "trend",
    title: "Turn Views Into Leads",
    description:
      "LinkedIn outreach running, reviews coming in steadily, and a one-page report showing profile visits and inquiries.",
  },
];

export const STATS = [
  { value: "5", label: "Platforms & channels run under one plan" },
  { value: "24h", label: "Every Google review answered within" },
  { value: "10+", label: "Custom images delivered, every month" },
  { value: "100%", label: "Posts approved by you before going live" },
];

// ------------------------------------------------------------------
//  Team
// ------------------------------------------------------------------

export type TeamMember = {
  name: string;
  role: string;
  /** One or two sentences. Who they are, what they actually do here. */
  bio: string;
  /** Photo rooted at public/, e.g. "/images/team/mahad.jpg". */
  photo?: string;
  /** Fallback disc when there is no photo yet. */
  initials: string;
  accent: string;
};

// Add real people here. The About page team section renders nothing at all
// while this is empty, so the page is never left with a heading over
// whitespace. Photos go in public/images/team/ - see that folder's README.
export const TEAM: TeamMember[] = [];

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  region: string;
  duration: string;
  scope: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
  authorRole: string;
  accent: string;
  initials: string;
  /** Index into `metrics` of the headline number used on the homepage. Defaults to 0. */
  highlight?: number;
  /**
   * Client photo rooted at public/, e.g. "/images/clients/northline-team.jpg".
   * Falls back to the accent panel with the initials glyph.
   *
   * This is captioned with a named client, so it takes an owned photo of that
   * client only - a stock photo here would be a false claim about a client.
   */
  image?: string;
};

// Real Social Catalyst client engagements, reused here with
// internal sign-off (see conversation). Each slug has its own full page
// under app/case-studies/<slug>/page.tsx (not driven by this array) - the
// entries below only feed the homepage carousel (components/Testimonials.tsx)
// and its "linked case study" hrefs, so keep slugs and headline numbers in
// sync with those page files if either changes.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "gaia-antonescu",
    company: "Gaia Ferrero, Byzantine",
    industry: "Strategy & Advisory",
    region: "Europe",
    duration: "12 weeks",
    scope: "LinkedIn Management",
    metrics: [
      { value: "100%", label: "Posting consistency maintained" },
      { value: "4×", label: "Growth in profile views within 60 days" },
      { value: "12+", label: "Qualified inbound conversations in 90 days" },
    ],
    quote:
      "I knew what good LinkedIn looked like. I just couldn't make it happen alongside everything else. Handing it to Social Catalyst was the right call. Within a few weeks it felt like my profile finally sounded like me.",
    author: "Gaia Ferrero",
    authorRole: "Founder, Byzantine",
    accent: "#1f7a8c",
    initials: "GF",
    highlight: 1,
    image:
      "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg",
  },
  {
    slug: "biola-babawale",
    company: "Biola Babawale, Cycle Together",
    industry: "Sport, Wellness & Community",
    region: "United Kingdom",
    duration: "10 weeks",
    scope: "Personal Branding & Community Growth",
    metrics: [
      { value: "3×", label: "Follower growth in 60 days" },
      { value: "5+", label: "Partnership conversations opened" },
      { value: "100%", label: "Consistent weekly content maintained" },
    ],
    quote:
      "I had so much to say about what we're building, but I couldn't figure out how to say it on LinkedIn in a way that felt right. Social Catalyst helped me find that voice, and then made sure it showed up every single week.",
    author: "Biola Babawale",
    authorRole: "Founder, Cycle Together",
    accent: "#1f8a66",
    initials: "BB",
    image:
      "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
  },
  {
    slug: "shahzad-akhtar",
    company: "Shahzad Akhtar, Strateasy Consulting",
    industry: "Management Consulting",
    region: "Pakistan",
    duration: "5 months (ongoing)",
    scope: "Management Consulting",
    metrics: [
      { value: "29%", label: "Outreach Reply Rate" },
      { value: "6×", label: "Profile Views in 60 Days" },
      { value: "11", label: "Qualified Conversations" },
    ],
    quote:
      "I had the credentials, the track record, the institutional relationships. What I did not have was a way to make any of it visible to the right people without being in the room first. Every engagement still started from zero.",
    author: "Shahzad Akhtar",
    authorRole: "Founder & Managing Director, Strateasy Consulting",
    accent: "#103129",
    initials: "SA",
    image:
      "/images/case-studies/shahzad-akhtar.jpg",
  },
  {
    slug: "kaitlin-malaspina",
    company: "Kaitlin Malaspina, Brenna & Co.",
    industry: "Business Architecture & Operational Stewardship",
    region: "United States",
    duration: "12 weeks",
    scope: "Business Architecture",
    metrics: [
      { value: "3×", label: "Profile Views in 60 Days" },
      { value: "22%", label: "Outreach Reply Rate" },
      { value: "8", label: "Qualified Conversations" },
    ],
    quote:
      "The positioning was always clear in my mind. The offer was differentiated. What I had not built was the infrastructure to make both of those things visible to founders before they were already in a conversation with me.",
    author: "Kaitlin Malaspina",
    authorRole: "Principal & Founder, Brenna & Co.",
    accent: "#1f7a8c",
    initials: "KM",
    image:
      "/images/case-studies/kaitlin-malaspina.jpg",
  },
];

/** The headline metric of a case study, per its `highlight` index. */
export function headlineMetric(cs: CaseStudy) {
  return cs.metrics[cs.highlight ?? 0] ?? cs.metrics[0];
}

export type WorkCaseStudy = {
  slug: string;
  client: string;
  /** What the account or asset is, e.g. "AI automation agency". */
  sector: string;
  platform: string;
  scope: string[];
  title: string;
  /** Sample of the actual work, rooted at public/. */
  image: string;
  imageAlt: string;
  /** CSS aspect-ratio of `image`, so cards crop it sensibly. */
  imageRatio: string;
  /** object-position class for the wide card crop; defaults to "object-top". */
  imageFocus?: string;
};

// Content, design and video engagements. Unlike CASE_STUDIES these carry no
// result metrics or client quotes (none were supplied), so they stay out of
// the homepage results cards, proof ticker and avatar stack. Each slug has its
// own page under app/case-studies/<slug>/page.tsx built on
// components/WorkCaseStudy.tsx; this summary feeds their cards in the mixed
// /case-studies grid and the MoreWork strip at the foot of those pages.
export const WORK_CASE_STUDIES: WorkCaseStudy[] = [
  {
    slug: "soch-social-media",
    client: "Soch",
    sector: "AI automation agency",
    platform: "Instagram",
    scope: ["Social Media Management", "Design"],
    title: "Building an Instagram presence from zero followers",
    image: "/images/case-studies/soch-social-media/why-automations-fail.jpg",
    imageAlt: "Soch Instagram post: Why 80% of automations fail",
    imageRatio: "3/4",
  },
  {
    slug: "soch-landing-page",
    client: "Soch",
    sector: "B2B automation agency",
    platform: "Landing page + VSL",
    scope: ["Landing Page", "VSL", "Copy & Design"],
    title: "One page with one job: book the call",
    image: "/images/case-studies/soch-landing-page/landing-hero.jpg",
    imageAlt: "Soch audit landing page: Done-For-You AI Automation for Businesses",
    imageRatio: "16/9",
  },
  {
    slug: "etz-riz",
    client: "etz.riz",
    sector: "Creator account",
    platform: "Instagram Reels",
    scope: ["Ideation", "Scripting", "Video Editing"],
    title: "Turning one creator into a publishing engine",
    image: "/images/case-studies/etz-riz/unrejectable-resume.jpg",
    imageAlt: "etz.riz Reel: How to make your resume unrejectable",
    imageRatio: "3/4",
    imageFocus: "object-[50%_62%]",
  },
  {
    slug: "shaping-wealth",
    client: "Shaping Wealth",
    sector: "Behavioural finance channel",
    platform: "YouTube",
    scope: ["Thumbnail Design", "Channel Branding"],
    title: "Making hour-long finance interviews impossible to scroll past",
    image: "/images/case-studies/shaping-wealth/hal-hershfield.jpg",
    imageAlt: "Shaping Wealth thumbnail: Your Future Self Is A Stranger, with Hal Hershfield",
    imageRatio: "16/9",
  },
  // Every image in the two below is AI-generated (the candid sets are built to
  // look like customer photos), so keep that labelling visible on the pages.
  {
    slug: "bruto-bakehouse",
    client: "Bruto Bakehouse",
    sector: "Cookie bakery",
    platform: "AI product visuals",
    scope: ["AI Product Visuals", "Food & Beverage"],
    title: "Two phone photos in, seventeen visuals out",
    image: "/images/case-studies/bruto-bakehouse/studio-01.jpg",
    imageAlt: "AI render of a chocolate chip cookie on white marble",
    imageRatio: "4/5",
    imageFocus: "object-center",
  },
  {
    slug: "restoran-loulou",
    client: "Restoran Loulou",
    sector: "Brunch & specialty coffee",
    platform: "AI product visuals",
    scope: ["AI Product Visuals", "Food & Beverage"],
    title: "A full brunch campaign, without a single set-up",
    image: "/images/case-studies/restoran-loulou/studio-01.jpg",
    imageAlt: "AI render of a croissant with a latte and iced coffee on a window table",
    imageRatio: "4/5",
    imageFocus: "object-center",
  },
];

/**
 * Homepage proof ticker. Client numbers are derived from CASE_STUDIES so the
 * ribbon can never disagree with the case-study pages; the rest are promises
 * every package already makes.
 */
export const PROOF_TICKER: string[] = [
  ...CASE_STUDIES.map((cs) => {
    const m = headlineMetric(cs);
    return `${m.value} ${m.label.toLowerCase()}`;
  }),
  "Every Google review answered within 24h",
  "You approve 100% of posts",
  "Captions in Estonian + English",
  "5 channels, one plan",
];

// NOTE: Placeholder client roster, invented names, rendered as text wordmarks
// (not fabricated logo art) until a real client roster exists.
export type ClientLogo = {
  name: string;
  /**
   * Real logo artwork rooted at public/, e.g. "/images/logos/ashcombe.svg".
   * While absent, LogoMarquee keeps rendering the name as a text wordmark.
   */
  logo?: string;
};

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Kalamaja Kitchen" },
  { name: "Levant Lounge" },
  { name: "Boulevard Café" },
  { name: "Kadaka Grill" },
  { name: "Vana Sadam Bistro" },
  { name: "Nordic Shisha Bar" },
  { name: "Tuvi Café" },
  { name: "Merepiiri Grill" },
];

// ------------------------------------------------------------------
//  Free Marketing Audit: landing page (/audit) and post-submit (/confirmation)
// ------------------------------------------------------------------

/** What we hand back. Rendered as a numbered editorial grid, not icon tiles. */
export const AUDIT_DELIVERABLES: { title: string; body: string }[] = [
  {
    title: "Profile & listing teardown",
    body: "Your Instagram bio, highlights and pinned posts, read next to your Google listing and marked against what makes a prospect pick you over a competitor.",
  },
  {
    title: "Content review",
    body: "Your last ten posts. The hooks, the formats, how often you post, and the specific gaps costing you reach. Named, with examples pulled from your own feed.",
  },
  {
    title: "Google & LinkedIn gaps",
    body: "Where you sit on Google Maps for searches nearby, and if you're active on LinkedIn, how your profile, posts and outreach compare to accounts that convert.",
  },
  {
    title: "90-day plan",
    body: "The jobs in the order we would do them, biggest first. Yours to keep and run, with us or without us.",
  },
];

export const AUDIT_STEPS: { title: string; body: string }[] = [
  {
    title: "Send us your links",
    body: "Your Instagram, your Google listing, and your LinkedIn page if you have one. Under a minute on your phone. Nothing to install, no call to book.",
  },
  {
    title: "We read it by hand",
    body: "A person on our team goes through your profiles and listings. No scoring tool, no scraped dashboard, no templated export.",
  },
  {
    title: "You get the plan in 24 hours",
    body: "A written breakdown in your inbox: what is working, what is costing you, and what to fix first.",
  },
];

/** Things we deliberately do not do in the free audit: the honest differentiator strip. */
export const AUDIT_EXCLUSIONS = [
  "No ad spend recommendations",
  "No generic scoring tool",
  "No templated report",
  "No obligation to work with us",
];

export const AUDIT_FAQS: FaqItem[] = [
  {
    q: "Is the audit actually free?",
    a: "Yes. No trial, no card, no call to sit through. We do it because a written plan is the most honest sample of our work we can hand you. If you want help running it, ask for a quote. If you'd rather run it yourself, take it and go.",
  },
  {
    q: "What do you need from me?",
    a: "A link to your Instagram or your Google listing, and an email address to send the report to. If you're on LinkedIn as well, add that link and we'll cover it too.",
  },
  {
    q: "How long does it take?",
    a: "The report lands within 24 hours of you sending it. If it's been longer, email riz@soovita.com and we'll chase it. A person reads every submission, so now and then one gets stuck behind another.",
  },
  {
    q: "Will this just be a pitch?",
    a: "No. It's a plan you can act on without us. There is one line at the end offering a quote. Everything above that line is work.",
  },
  {
    q: "Which platforms do you look at?",
    a: "Instagram, Google Business Profile, Facebook, and LinkedIn if you have one. Send the ones you actually use.",
  },
];

/** Homepage closing call to action. */
export const HOME_CTA = {
  title: "See what's costing you customers, free.",
  subtitle:
    "Send us your Instagram and Google links. We'll read them by hand and send back a written plan within 24 hours. Takes under a minute, no call needed.",
};

/** Post-submit sequence shown on /confirmation. */
export const CONFIRMATION_STEPS: { title: string; body: string }[] = [
  {
    title: "A person reads your profiles and listings",
    body: "Instagram, your Google listing, and your LinkedIn if you sent one. Every section, by hand.",
  },
  {
    title: "The full breakdown lands in your inbox",
    body: "What is working, what is costing you, and what to fix first, specific to your business, within 24 hours.",
  },
  {
    title: "Get a quote, or take the plan and run",
    body: "A quote is 30 minutes where we go through the findings and decide what is worth doing first. Entirely your call.",
  },
];

export const CONFIRMATION_FAQS: FaqItem[] = [
  {
    q: "What does the audit actually cover?",
    a: "Your Instagram, your Google Business Profile, and your LinkedIn if you sent one. You get a written breakdown of what is working, what is costing you customers, and what to fix first.",
  },
  {
    q: "How does working together work?",
    a: "We start by going through the audit findings together. From there most businesses pick a package covering the channels that matter most to them. You approve everything before it goes live.",
  },
  {
    q: "What should I have ready?",
    a: "Nothing. Just check your inbox within 24 hours. If you want to move faster, get a quote now and we'll go through the findings on a call.",
  },
];

export const FAQS: FaqItem[] = [
  {
    q: "I paid an agency before and got a monthly PDF for it.",
    a: "That's a fair thing to hold against us. Two differences you can check for yourself: you approve every post before it goes live, so you see the work as it happens instead of reading a summary a month later. And the report is one page that says how many people asked Google for your contact details. If the work stops, you'll notice in week one, not in month six.",
  },
  {
    q: "How long before I see anything?",
    a: "Google can move inside two weeks, because that part is just becoming findable: claimed profile, right categories, real photos. Content and reviews take longer, usually two to three months before it shows up in inquiries. Anyone promising you next Tuesday is guessing.",
  },
  {
    q: "What if it doesn't work?",
    a: "Then after six months you still own a rebuilt Google profile, a claimed listing, a stack of new reviews and a few hundred posts. That's the floor. The honest part: we can make you easy to find and worth choosing. We can't fix an offer that doesn't hold up once someone's tried it, and we'll tell you on the call if we think that's the real problem.",
  },
  {
    q: "Do I have to be on TikTok, or run ads?",
    a: "No to both. TikTok sits on two of the five packages and plenty of businesses skip it. Paid ads only sit on the Full package, and the budget goes from you straight to the platform so you see the real cost. For most B2B businesses, LinkedIn, Google and a steady content calendar do more than either.",
  },
  {
    q: "How much of my week does this take?",
    a: "About 20 minutes a month approving the content calendar, plus one 30-minute call at the start. You don't write captions, pick photos or answer reviews. We will ask how your business talks, once, so the captions sound like you in both Estonian and English. If a month needs more than that from you, we've built it wrong.",
  },
];
