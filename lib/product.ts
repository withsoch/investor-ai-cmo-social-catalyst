// ------------------------------------------------------------------
//  Social Catalyst — product positioning (native-pivot branch)
//
//  Single source of copy for the self-serve product site: hero, the four
//  product steps, comparison, channels, the method, pricing, FAQs and
//  testimonials. The older agency copy still lives in lib/content.ts and
//  feeds the case-study and blog pages that were kept.
//
//  Honesty rules for this file:
//  - Testimonials and numbers are real Social Catalyst client results
//    (done-for-you engagements). Never add an invented metric or logo.
//  - The demo company (Northwind Ledger) is fictional and is always
//    labelled "Example" wherever it is shown.
//  - Channel status is "live" only for channels Social Catalyst delivers
//    today; everything else is "soon".
// ------------------------------------------------------------------

export const PRODUCT = {
  name: "Social Catalyst",
  tagline: "Marketing on autopilot for B2B founders.",
  heroPrefix: "Marketing for",
  heroAudiences: [
    "B2B founders",
    "SaaS founders",
    "consultants",
    "fintech startups",
    "agencies",
    "deep-tech teams",
    "solo operators",
  ],
  heroSub:
    "Social Catalyst writes and posts your LinkedIn and social in your voice. You approve with a swipe, or let it run on autopilot.",
  heroPlaceholder: "yourcompany.com",
  heroLinkedinPlaceholder: "linkedin.com/in/founder",
  heroButton: "Generate",
};

export const NAV_PRIMARY = [
  { label: "Solutions", href: "/solutions" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Method", href: "/method" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const CTA = {
  start: { label: "Get started", href: "/get-started" },
  sales: { label: "Contact sales", href: "/book" },
  login: { label: "Log in", href: "/get-started?login=1" },
};

/* ------------------------------------------------------------------ */
/*  The four product steps (homepage + /how-it-works)                  */
/* ------------------------------------------------------------------ */

export const STEPS = [
  {
    n: "01",
    title: "Add your website and LinkedIn.",
    body: "Two links. Your site tells us the offer, the proof and the people you sell to. Your LinkedIn tells us how you actually write: your last posts, what landed, what you comment on.",
    points: ["Your offer, in one line", "Your voice, from your own posts", "Colours, fonts and logo, pulled from your site"],
  },
  {
    n: "02",
    title: "Talk to it for ten minutes.",
    body: "A short voice interview replaces the discovery call. It asks what a good ghostwriter would: the stories behind the company, what you believe that your industry doesn't, who you want to reach. Take it whenever suits you.",
    points: ["Your stories, in your own words", "The opinions only you hold", "Read back to you to confirm"],
  },
  {
    n: "03",
    title: "We do the work.",
    body: "It builds a strategy pack, picks the themes worth owning, and drafts a month of posts in your voice. Founder posts for you, company posts for the page.",
    points: ["30 themes, five types", "A voice and archetype it writes with", "50+ posts, ready"],
  },
  {
    n: "04",
    title: "You approve. We publish.",
    body: "A never-empty deck of on-brand posts. Approve to schedule, skip to bin it. It learns your taste with every swipe and posts at the right time for each channel.",
    points: ["Swipe to approve", "One calendar, every channel", "Good times picked per channel"],
  },
  {
    n: "05",
    title: "Tell it what to change. It does it.",
    body: "Type what you want different, in plain words. Sharper hook, less salesy, add the customer story from last week. One post changes. Nothing else does.",
    points: ["Revise one post, not the batch", "Edit in place for free", "Your notes become the house style"],
  },
] as const;

/** The three onboarding inputs, shown wherever onboarding is described. */
export const ONBOARDING = [
  { k: "Website", d: "Your offer, proof and brand" },
  { k: "LinkedIn", d: "Your voice, from your own posts" },
  { k: "10-minute interview", d: "Your stories and opinions" },
] as const;

/* ------------------------------------------------------------------ */
/*  Demo company (fictional) — used by the scripted hero demo          */
/* ------------------------------------------------------------------ */

export type DemoPost = {
  id: string;
  style: string;
  channel: "linkedin" | "company" | "x" | "instagram";
  when: string;
  text: string;
};

export const DEMO = {
  domain: "northwindledger.com",
  linkedin: "linkedin.com/in/northwind-founder",
  /** The 10-minute voice interview, as the demo plays it. Fictional. */
  interview: {
    exchanges: [
      { q: "What's the moment you knew Northwind had to exist?", a: "Our first finance hire quit on day nine of month-end close. Not because it was hard. Because most of it was copying numbers." },
      { q: "What do you believe that most finance leaders don't?", a: "That the board deck is the least important thing finance makes. Decision speed is the job." },
      { q: "Anything you never want to post about?", a: "Competitors by name. And no fundraising humblebrags." },
    ],
    captured: ["2 stories", "3 opinions", "Buyer: Heads of Finance", "Off-limits: competitor names"],
  },
  label: "Example company",
  brand: {
    name: "Northwind Ledger",
    oneLiner: "Month-end close in two days for finance teams at 20–200 person startups.",
    icp: "Heads of Finance and first finance hires at Series A–B startups",
    archetype: "The Sage",
    voice: ["Plain-spoken", "Numerate", "Dry humour", "No hype"],
    colors: ["#0F2A3D", "#1E6F8C", "#F2B544", "#F5F1E8"],
    font: "IBM Plex Sans",
  },
  /** Progress steps for the hero preview. {site} and {linkedin} are filled with what was entered. */
  stages: [
    "Reading {site}",
    "Reading the founder's last 10 posts on {linkedin}",
    "Finding the offer and the buyer",
    "Learning the founder's voice",
    "Pulling colours, fonts and logo",
    "Building the strategy pack",
    "Drafting 52 posts",
  ],
  /**
   * Progress steps when live generation is on. Live mode reads the website
   * only (LinkedIn needs the product's scraper), so it says exactly that.
   */
  liveStages: [
    "Reading {site}",
    "Finding the offer and the buyer",
    "Pulling colours and fonts",
    "Choosing a voice and archetype",
    "Writing 3 sample posts",
  ],
  posts: [
    {
      id: "p1",
      style: "The Narrator",
      channel: "linkedin",
      when: "Tue 08:40",
      text:
        "Our first finance hire quit on day 9 of month-end close.\n\nNot because the work was hard. Because 70% of it was copying numbers between four tools that should have been talking to each other.\n\nWe built Northwind for her replacement. She has been here two years.",
    },
    {
      id: "p2",
      style: "The Teacher",
      channel: "linkedin",
      when: "Thu 09:15",
      text:
        "If your close takes more than five days, look at three places first:\n\n1. Bank feeds you reconcile by hand\n2. Accruals that live in someone's head\n3. Approvals that wait on Slack\n\nFix those and most teams get two days back. No new hire needed.",
    },
    {
      id: "p3",
      style: "The Puncher",
      channel: "linkedin",
      when: "Mon 07:55",
      text:
        "A spreadsheet is not a finance system.\n\nIt is a finance system's first draft that nobody ever finished.",
    },
    {
      id: "p4",
      style: "The Proof",
      channel: "company",
      when: "Wed 12:00",
      text:
        "Lumen Health closed March in 1.8 days. In January it took them 7.\n\nSame team of two. Same ERP. What changed: bank feeds, accruals and approvals moved into one place.",
    },
    {
      id: "p5",
      style: "The Thinker",
      channel: "linkedin",
      when: "Fri 10:30",
      text:
        "Board decks make finance look like reporting. The real job is decision speed.\n\nA CFO who knows the number on day 2 changes the plan. One who learns it on day 12 explains it.",
    },
  ] as DemoPost[],
  refine: {
    prompt: "Make the hook land harder and cut the last line.",
    before:
      "Our first finance hire quit on day 9 of month-end close.\n\nNot because the work was hard. Because 70% of it was copying numbers between four tools that should have been talking to each other.\n\nWe built Northwind for her replacement. She has been here two years.",
    after:
      "Day 9 of month-end close. Our first finance hire resigned.\n\nThe work wasn't hard. 70% of it was copying numbers between four tools that should have been talking to each other.\n\nWe built Northwind for whoever came next.",
  },
};

/* ------------------------------------------------------------------ */
/*  Comparison                                                         */
/* ------------------------------------------------------------------ */

export const COMPARE = {
  title: "Traditional marketing is a full-time job",
  titleAccent: "Social Catalyst does it for you",
  rows: [
    { label: "Content", old: "You write it, or brief someone who does", next: "Written from your site, your posts and a 10-minute interview" },
    { label: "Scheduling", old: "Copy, paste, post, repeat", next: "Automatic, at the right time per channel" },
    { label: "Platform know-how", old: "Learn every algorithm yourself", next: "Built in, per channel" },
    { label: "Team", old: "Agency or a hire", next: "None needed" },
    { label: "Cost", old: "Unpredictable", next: "Fixed, from $149/mo" },
    { label: "Your time", old: "Hours every week", next: "A 10-minute interview, then ten minutes a week" },
  ],
  options: [
    {
      name: "Agency",
      price: "$1.5–5k+",
      unit: "/month",
      lines: ["2–4 weeks to start", "Calls, briefs, approval rounds", "Locked into a retainer"],
      featured: false,
    },
    {
      name: "In-house hire",
      price: "$4.5–6k",
      unit: "/month",
      lines: ["2–3 months to ramp", "Recruiting and HR overhead", "One person, one point of failure"],
      featured: false,
    },
    {
      name: "Social Catalyst",
      price: "$149",
      unit: "/month",
      lines: ["Two minutes to start", "Approve from your phone", "Cancel anytime"],
      featured: true,
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Channels                                                           */
/* ------------------------------------------------------------------ */

export type ChannelStatus = "live" | "soon";
export type Channel = {
  slug: string;
  name: string;
  group: "organic" | "paid" | "beyond";
  status: ChannelStatus;
  formats: ("Text" | "Image" | "Video" | "Carousel")[];
  line: string;
  /** Longer copy for /solutions/[slug]. */
  pitch: string;
  color: string;
};

export const CHANNELS: Channel[] = [
  { slug: "linkedin", name: "LinkedIn (founder)", group: "organic", status: "live", formats: ["Text", "Image", "Carousel"], line: "Posts that sound like you, not a press release.", pitch: "Your personal profile is the highest-trust channel a B2B founder has. Social Catalyst writes founder posts in seven proven shapes, from story to teardown, and holds every one to a quality floor: a claim your buyer hasn't already accepted, that only you could make.", color: "#0A66C2" },
  { slug: "linkedin-page", name: "LinkedIn (company page)", group: "organic", status: "live", formats: ["Text", "Image", "Carousel"], line: "A company page people actually follow.", pitch: "Product news, customer proof and hiring posts for the page, written to support your founder posts rather than repeat them.", color: "#0A66C2" },
  { slug: "instagram", name: "Instagram", group: "organic", status: "live", formats: ["Image", "Carousel", "Video"], line: "Carousels and visuals in your brand kit.", pitch: "Designed carousels and single images in your colours and fonts, captioned for people who scroll fast.", color: "#C23FC2" },
  { slug: "google-business", name: "Google Business", group: "beyond", status: "live", formats: ["Text", "Image"], line: "Show up when buyers search your name.", pitch: "Weekly Google Business posts and review replies, so the first thing a prospect sees after your name is proof you're active.", color: "#4285F4" },
  { slug: "blog", name: "Blog & SEO", group: "beyond", status: "live", formats: ["Text", "Image"], line: "Keyword in, published article out.", pitch: "Search-led articles researched, written and published to your site, then cut down into social posts so one piece of thinking works everywhere.", color: "#1F8A66" },
  { slug: "x", name: "X", group: "organic", status: "soon", formats: ["Text", "Image"], line: "Short takes for a fast feed.", pitch: "Your strongest LinkedIn ideas rewritten for X: shorter, sharper, threaded when the idea needs room.", color: "#1A1A1A" },
  { slug: "threads", name: "Threads", group: "organic", status: "soon", formats: ["Text", "Image"], line: "Conversational, not corporate.", pitch: "Lighter, conversational posts for the Threads audience.", color: "#1A1A1A" },
  { slug: "bluesky", name: "Bluesky", group: "organic", status: "soon", formats: ["Text", "Image"], line: "Where the early adopters went.", pitch: "Posts tuned for Bluesky's technical, early-adopter crowd.", color: "#1185FE" },
  { slug: "youtube", name: "YouTube Shorts", group: "organic", status: "soon", formats: ["Video"], line: "Short video from your best ideas.", pitch: "Short scripted videos built from your highest-performing posts.", color: "#FF0000" },
  { slug: "facebook", name: "Facebook", group: "organic", status: "soon", formats: ["Text", "Image", "Video"], line: "For buyers who still live there.", pitch: "Page posts for the B2B audiences that still do their research on Facebook.", color: "#1877F2" },
  { slug: "tiktok", name: "TikTok", group: "organic", status: "soon", formats: ["Video"], line: "Founder-led video, scripted.", pitch: "Scripts and captions for founder-led short video.", color: "#1A1A1A" },
  { slug: "linkedin-ads", name: "LinkedIn Ads", group: "paid", status: "soon", formats: ["Text", "Image"], line: "Your best organic posts, boosted.", pitch: "The posts your audience already proved they like, turned into Thought Leader and sponsored ads aimed at your ICP.", color: "#0A66C2" },
  { slug: "google-ads", name: "Google Ads", group: "paid", status: "soon", formats: ["Text"], line: "Search ads written from your site.", pitch: "Search campaigns written from your offer and your buyers' words.", color: "#4285F4" },
  { slug: "meta-ads", name: "Meta Ads", group: "paid", status: "soon", formats: ["Image", "Video"], line: "Same brand brain, pointed at paid.", pitch: "Facebook and Instagram ads built from your brand kit and your best organic creative.", color: "#1877F2" },
  { slug: "newsletter", name: "Newsletter", group: "beyond", status: "soon", formats: ["Text"], line: "A weekly email your list opens.", pitch: "A weekly founder email assembled from the month's best thinking.", color: "#FF5C35" },
];


/* ------------------------------------------------------------------ */
/*  The method (our version of Native's Norn page)                     */
/* ------------------------------------------------------------------ */

export const METHOD = {
  eyebrow: "The Catalyst Method",
  title: "Most AI content is filler. Ours has a floor.",
  lead:
    "Social Catalyst runs on the pipeline we built writing LinkedIn for B2B founders by hand: months of prompt tuning, structured outputs instead of prose, and a quality test every post has to pass before you ever see it.",
  pipeline: [
    { k: "Read", d: "Your site, your last LinkedIn posts and your 10-minute interview become one strategy pack." },
    { k: "Position", d: "An ICP document: who buys, what they already believe, what would make them stop scrolling." },
    { k: "Theme", d: "30 themes across five types. Each has to be a position someone credible would argue with, not a category heading." },
    { k: "Idea", d: "Specific ideas under each theme, tied to your proof and your buyer's objections." },
    { k: "Write", d: "Posts in seven shapes, drafted, critiqued and rewritten in four stages." },
    { k: "Learn", d: "Every approve, edit and skip tunes the next batch to your taste." },
  ],
  styles: [
    { name: "The Narrator", d: "A story with a turn in it." },
    { name: "The Puncher", d: "One line that rearranges a belief." },
    { name: "The Teacher", d: "A playbook the reader can use today." },
    { name: "The Thinker", d: "A position, argued properly." },
    { name: "The Proof", d: "A result, and exactly how it happened." },
    { name: "The Learner", d: "What you got wrong, and what changed." },
    { name: "The Infographic", d: "One idea, drawn." },
  ],
  floor: [
    "The claim has to be one your reader hasn't already accepted.",
    "It has to be ownable by you specifically, not any founder in your category.",
    "Phrases that mark a post as generic on sight are banned outright.",
    "Rhythm varies. Uniform sentences are the clearest tell of machine writing.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Pricing (mirrors Native's tiers, per Riz)                          */
/* ------------------------------------------------------------------ */

export type Plan = {
  key: string;
  name: string;
  monthly: number | null;
  blurb: string;
  features: string[];
  extra?: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    key: "pro",
    name: "Pro",
    monthly: 149,
    blurb: "For a founder who wants to show up every week without writing.",
    features: ["1 brand", "50 posts a month", "Every live channel", "Swipe approval or full autopilot", "Analytics"],
    extra: "Extra brands $39/mo",
    cta: { label: "Get started with Pro", href: "/get-started?plan=pro" },
  },
  {
    key: "max",
    name: "Max",
    monthly: 249,
    blurb: "For founders running a personal brand and a company page.",
    features: ["3 brands", "150 posts a month", "5× AI allowance", "Everything in Pro", "Priority generation"],
    extra: "Extra brands $39/mo",
    cta: { label: "Get started with Max", href: "/get-started?plan=max" },
    featured: true,
  },
  {
    key: "agency",
    name: "Agency",
    monthly: 699,
    blurb: "For agencies and studios running clients' social.",
    features: ["10 client workspaces", "50 posts per workspace", "Per-client brand kits", "Named account manager"],
    extra: "Extra workspaces $69/mo",
    cta: { label: "Contact sales", href: "/book" },
  },
  {
    key: "enterprise",
    name: "Enterprise",
    monthly: null,
    blurb: "For multi-brand teams who want people as well as software.",
    features: ["Marketers embedded with your team", "Central brand control", "Custom volumes", "Custom contract terms"],
    cta: { label: "Contact sales", href: "/book" },
  },
];

export const PRICING_FAQ = [
  { q: "Do I need to write anything?", a: "No. Add your website and LinkedIn, then talk for ten minutes in a voice interview. Social Catalyst drafts the first month from that. After setup, most founders spend about ten minutes a week swiping through suggestions; on autopilot it's zero." },
  { q: "What is the 10-minute interview?", a: "A voice conversation that replaces the discovery call an agency would book. It asks for the stories behind your company, the opinions you hold that your industry doesn't, and who you want to reach, then reads back what it heard so you can correct it. Take it whenever suits you; stop halfway and it keeps what you said." },
  { q: "Will it sound like me?", a: "It writes from your own LinkedIn posts and your interview, in your words, and it learns from every edit and skip. You can also tell it what to change in plain words. Nothing posts in approval mode until you say yes." },
  { q: "What does autopilot actually do?", a: "It plans the next two weeks, picks topics, writes and designs each post, and emails you the day before anything goes out so you can pull it." },
  { q: "Which channels are live?", a: "LinkedIn (personal and company page), Instagram, Google Business and blog are live today. X, Threads, Bluesky, short video and paid ads are on the roadmap." },
  { q: "Can I cancel?", a: "Yes. Plans are month to month and you can cancel any time. Yearly billing saves 20%." },
  { q: "Is there a human involved?", a: "On Enterprise, yes: marketers work alongside your team. Every other plan is software, built by a team that ran this work by hand for B2B founders first." },
  { q: "Can I try it first?", a: "Yes. Every plan starts with a free preview: your first 10 posts, written in your voice, with no card. You only pick a plan when you want the full month." },
];

/* ------------------------------------------------------------------ */
/*  Proof — real Social Catalyst client results (done-for-you work)    */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS = [
  {
    name: "Gaia Ferrero",
    role: "Founder, Byzantine",
    quote: "I knew what good LinkedIn looked like. I just couldn't make it happen alongside everything else. Within a few weeks it felt like my profile finally sounded like me.",
    metric: "4×",
    metricLabel: "profile views in 60 days",
    photo: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb631aa9fc98e79ae2810_1714512298914.jpg",
    href: "/case-studies/gaia-antonescu",
  },
  {
    name: "Shahzad Akhtar",
    role: "Founder & MD, Strateasy Consulting",
    quote: "Before this, my entire pipeline came from people who already knew me. Now the content does the introduction.",
    metric: "29%",
    metricLabel: "outreach reply rate",
    photo: "/images/case-studies/shahzad-akhtar.jpg",
    href: "/case-studies/shahzad-akhtar",
  },
  {
    name: "Biola Babawale",
    role: "Founder, Cycle Together",
    quote: "I had so much to say about what we're building, but I couldn't figure out how to say it on LinkedIn in a way that felt right. Social Catalyst helped me find that voice, and then made sure it showed up every single week.",
    metric: "3×",
    metricLabel: "LinkedIn followers in 60 days",
    photo: "https://cdn.prod.website-files.com/68e7ded517d0693d2c345250/6a2fb8c5358ef1ae4b6b238c_1674503443215.jpg",
    href: "/case-studies/biola-babawale",
  },
  {
    name: "Kaitlin Malaspina",
    role: "Principal & Founder, Brenna & Co.",
    quote: "The positioning was always clear in my mind. What I had not built was the infrastructure to make it visible to founders before they were already in a conversation with me.",
    metric: "8",
    metricLabel: "qualified founder conversations",
    photo: "/images/case-studies/kaitlin-malaspina.jpg",
    href: "/case-studies/kaitlin-malaspina",
  },
];

export const ABOUT = {
  title: "Founders shouldn't have to be marketers.",
  story: [
    "Social Catalyst started as a service. From Tallinn, we ran LinkedIn and social by hand for B2B founders: strategy calls, ghostwritten posts, approval rounds, the lot.",
    "It worked. Founders got 3–6× the profile views and real pipeline from content. But the bottleneck was never the writing. It was the founder's time: briefing, reviewing, chasing.",
    "So we turned the process into software. The same pipeline, the same quality bar, without the calls. Add your website, swipe through a month of posts, get back to building the company.",
  ],
  values: [
    { t: "Default to autopilot", d: "If a founder has to remember to do it, we haven't finished building it." },
    { t: "A floor, not a ceiling", d: "Nothing generic ships. Every post has to say something only you could say." },
    { t: "Honest numbers", d: "We show real client results or nothing." },
    { t: "Baltic at heart, built for anywhere", d: "Made in Tallinn, one of the most digital places on earth." },
  ],
};
