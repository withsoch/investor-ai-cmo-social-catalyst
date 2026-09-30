import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Soch Landing Page + VSL | Social Catalyst Case Study",
  description:
    "How Social Catalyst wrote, designed and built Soch's audit landing page and VSL: one conversion goal, a sub-three-minute video, and case-study cards built to one reusable structure.",
};

const IMG = "/images/case-studies/soch-landing-page";

const FACTS = [
  { value: "1 CTA", label: "A single conversion goal, repeated rather than diluted" },
  { value: "4 case studies", label: "Sector spread, built on one extensible template" },
  { value: "Ongoing", label: "Copy, sections and proof updated as the offer evolves" },
];

const META = [
  { label: "Client", value: "Soch, B2B automation agency" },
  { label: "Asset", value: "Audit landing page + VSL" },
  { label: "Scope", value: "Copy · Design · VSL · Case studies" },
  { label: "Engagement", value: "Ongoing, iterative" },
];

const STARTING = {
  title: "Cold traffic, a technical service, and exactly one thing worth measuring.",
  paragraphs: [
    "Traffic reaches this page from ads and outbound with no prior awareness of the brand. There is one conversion event that matters: booking a free AI strategy call. Everything on the page either moves a visitor toward that or gets cut.",
    "The difficulty is the mismatch. What Soch builds is genuinely technical. The person reading is a business owner who does not care how it is built, only what it costs them to keep doing things by hand.",
  ],
  constraints: [
    { title: "No brand recognition", body: "The page has to establish credibility in the first screen, before any scrolling happens." },
    { title: "Technical service, plain buyer", body: "Automation, agents and integrations mean nothing to the reader. Hours and cost do." },
    { title: "One conversion goal", body: "A single CTA repeated, not a menu of options. Every extra choice is a reason to leave." },
  ],
  objective:
    "Make a business owner who has never heard of Soch understand the cost of their own manual work, believe it can be fixed, and book a call, in one scroll.",
};

const APPROACH = {
  title: "Four decisions in the space above the fold.",
  items: [
    { title: "Borrowed credibility, placed first", body: "The partner network badge sits above the headline rather than in a logo strip further down. For an unknown brand, third-party association is the fastest credibility available, so it goes where it will actually be read." },
    { title: "The headline names the delivery model", body: "“Done-For-You” answers the objection a business owner has before they have finished reading, which is whether this becomes another project they have to manage." },
    { title: "The subhead quantifies the cost", body: "A specific number is doing the persuading, not an adjective: “Business owners like you lose 25 to 30 hours a week to manual ops work.” The reader can check it against their own week, and that is what makes the claim stick." },
    { title: "The switching objection is removed early", body: "Closing on “…on the stack you already use” defuses the assumption that automation means a migration, new software and retraining the team." },
  ],
};

const GALLERY = {
  title: "The page and the video.",
  lead: "The first screen visitors land on, and the VSL embedded in it, both built to the same four-colour system.",
  ratio: "16/9",
  columns: 2 as const,
  images: [
    { src: `${IMG}/landing-hero.jpg`, alt: "Soch landing page first screen: Done-For-You AI Automation for Businesses" },
    { src: `${IMG}/vsl.jpg`, alt: "Soch VSL frame with coral burned-in captions" },
  ],
};

const ANATOMY = {
  title: "Every section earns its place or comes out.",
  lead: "The page is short on purpose. Sections are ordered to answer objections in the order a sceptical reader raises them, and the same CTA repeats rather than introducing alternatives.",
  image: { src: `${IMG}/landing-hero.jpg`, alt: "Soch landing page navbar, credibility badge, headline and subhead" },
  ratio: "16/7",
  parts: [
    { title: "Navbar · always visible", body: "Black bar, logo, and the booking CTA in coral. The conversion action is on screen from the first pixel." },
    { title: "Credibility badge · trust", body: "Partner network association, set in mono caps inside a pill so it reads as a credential rather than a marketing line." },
    { title: "Headline + subhead · the promise", body: "States the delivery model and quantifies the cost of inaction in two sentences." },
    { title: "VSL · the pitch", body: "Responsive video embed carrying the full argument for anyone who would rather watch than read." },
    { title: "Case studies · proof", body: "Four engagements across different sectors, so most visitors find something close to their own situation." },
    { title: "Questions before the call · objections", body: "Handles the hesitations that would otherwise stop a booking, positioned immediately before the ask." },
    { title: "WhatsApp CTA · low-friction path", body: "A second, lighter route for visitors not ready to put a call on their calendar." },
    { title: "Thank-you page · post-conversion", body: "Built to the same system, so the experience does not fall apart after the booking." },
  ],
};

const RANGE = {
  title: "Under three minutes to make the argument, and proof that can be skimmed.",
  lead: "The VSL was ideated, scripted and edited in-house, deliberately short because a cold visitor is deciding whether to keep watching every few seconds. The case studies below it are written and designed to one structure.",
  items: [
    { tag: "VSL script", title: "Problem before solution", body: "Opens on a specific failure the viewer recognises, names why it happens, then introduces the mechanism. The offer arrives only after the problem has been made concrete, and the script closes on the single CTA the page is built around." },
    { tag: "VSL edit", title: "Captions carry the hook", body: "Burned-in captions throughout, with key phrases set in the brand coral so the argument is followable with sound off. Pace tightened to remove dead air, and the player embedded responsively so it holds up on mobile." },
    { tag: "Case study cards", title: "Sector spread over volume", body: "Four recognisable businesses across different industries (Physical Therapy First, Be London, Aesthetics Lab, The Fifth Avenue Hotel) beat a long list from one sector, because the visitor is looking for themselves rather than counting logos." },
    { tag: "Case study cards", title: "Same shape every time, built to extend", body: "Client and sector, the manual process, what was built, the outcome, the action. A reader who skims one card has learned how to read the rest, and new case studies drop into the template without redesign." },
  ],
};

const PROCESS = {
  title: "Standards on the video and the build.",
  lead: "The page is plain HTML and CSS deployed on Vercel. No framework, because nothing here needs one, and a lighter page loads faster for paid traffic.",
  steps: [
    { title: "Cold-open problem", body: "Straight into the failure, no logo sting." },
    { title: "Named mechanism", body: "Explains why it breaks." },
    { title: "Coral captions", body: "Emphasis matched to the page." },
    { title: "Sound-off legible", body: "Readable without audio." },
    { title: "One CTA", body: "Same ask as the page." },
  ],
  standards: [
    "Plain HTML + CSS",
    "Deployed on Vercel",
    "Responsive video embed",
    "Coral reserved for CTAs only",
    "Logo locked at 180px",
    "Landing and thank-you pages kept identical",
    "Tested locally before deploy",
    "No framework, no build step",
  ],
};

const DELIVERED = {
  title: "Copy, design, video and the build.",
  items: [
    { title: "Landing page copy", body: "Headline, subhead, section copy and every CTA label." },
    { title: "Page design", body: "Layout, palette, type hierarchy and component styling." },
    { title: "VSL ideation", body: "The angle and argument the video needs to make." },
    { title: "VSL scripting", body: "Full script written to be spoken, structured problem first." },
    { title: "VSL editing", body: "Cut for pace, burned-in captions with brand-coloured emphasis." },
    { title: "Video embedding", body: "Hosted and embedded responsively in the hero." },
    { title: "Case study design", body: "Four cards written and designed to one reusable structure." },
    { title: "Front-end build", body: "HTML and CSS implementation, deployed and maintained." },
  ],
};

export default function SochLandingPagePage() {
  return (
    <WorkCaseStudy
      slug="soch-landing-page"
      eyebrow="Landing Page, VSL, Copy + Design"
      title={
        <>
          One page with one job: <Emphasis>book the call.</Emphasis>
        </>
      }
      lead="Ongoing content and design for the audit landing page of a B2B AI automation agency. VSL ideation, scripting and editing, case study design, and the page copy and layout it all sits inside."
      facts={FACTS}
      hero={{
        ratio: "16/9",
        images: [
          { src: `${IMG}/landing-hero.jpg`, alt: "Soch audit landing page first screen", ratio: "5/2" },
          { src: `${IMG}/vsl.jpg`, alt: "Soch VSL embedded on the landing page" },
        ],
      }}
      meta={META}
      starting={STARTING}
      approach={APPROACH}
      gallery={GALLERY}
      anatomy={ANATOMY}
      range={RANGE}
      process={PROCESS}
      delivered={DELIVERED}
      cta={{
        title: "Need a page that converts cold traffic?",
        subtitle: "Get a quote. If you're paying for traffic and the page isn't booking calls, the problem is usually the order of the argument rather than the design.",
      }}
    />
  );
}
