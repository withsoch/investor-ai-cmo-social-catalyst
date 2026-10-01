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
  { value: "1 CTA", label: "One conversion goal, repeated" },
  { value: "4 case studies", label: "Different sectors, one template" },
  { value: "Ongoing", label: "Updated as the offer evolves" },
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
    "Visitors arrive from ads and outbound with no awareness of the brand, and the only conversion that matters is booking a free AI strategy call. What Soch builds is technical; the reader is a business owner who only cares what manual work costs them.",
  ],
  constraints: [
    { title: "No brand recognition", body: "Credibility has to land on the first screen." },
    { title: "Technical service, plain buyer", body: "Automation and agents mean nothing to the reader. Hours and cost do." },
    { title: "One conversion goal", body: "A single CTA repeated, not a menu of options." },
  ],
  objective:
    "In one scroll, show a business owner what manual work costs them, that it's fixable, and get the call booked.",
};

const APPROACH = {
  title: "Four decisions in the space above the fold.",
  items: [
    { title: "Borrowed credibility, placed first", body: "The partner network badge sits above the headline, where an unknown brand's credibility will actually be read." },
    { title: "The headline names the delivery model", body: "“Done-For-You” answers the fear that this becomes another project to manage." },
    { title: "The subhead quantifies the cost", body: "“Business owners like you lose 25 to 30 hours a week to manual ops work”: a number the reader can check against their own week." },
    { title: "The switching objection is removed early", body: "“…on the stack you already use” rules out a migration, new software and retraining." },
  ],
};

const GALLERY = {
  title: "The page and the video.",
  lead: "The first screen and its embedded VSL, on one four-colour system.",
  ratio: "16/9",
  columns: 2 as const,
  images: [
    // both are 16:9 files (the screenshot padded with its own cream), so neither is cropped
    { src: `${IMG}/landing-hero-16x9.jpg`, alt: "Soch landing page first screen: Done-For-You AI Automation for Businesses" },
    { src: `${IMG}/vsl-frame.jpg`, alt: "Soch VSL frame with coral burned-in captions" },
  ],
};

const ANATOMY = {
  title: "Every section earns its place or comes out.",
  image: { src: `${IMG}/landing-hero.jpg`, alt: "Soch landing page navbar, credibility badge, headline and subhead" },
  ratio: "16/7",
  parts: [
    { title: "Navbar · always visible", body: "Black bar, logo and the coral booking CTA." },
    { title: "Credibility badge · trust", body: "Partner network association in mono caps inside a pill." },
    { title: "Headline + subhead · the promise", body: "The delivery model and the cost of inaction in two sentences." },
    { title: "VSL · the pitch", body: "Responsive video with the full argument for those who'd rather watch." },
    { title: "Case studies · proof", body: "Four engagements across different sectors." },
    { title: "Questions before the call · objections", body: "Handles hesitations right before the ask." },
    { title: "WhatsApp CTA · low-friction path", body: "A lighter route for visitors not ready to book a call." },
    { title: "Thank-you page · post-conversion", body: "Built to the same system." },
  ],
};

const RANGE = {
  title: "Under three minutes to make the argument, and proof that can be skimmed.",
  items: [
    { tag: "VSL script", title: "Problem before solution", body: "Opens on a failure the viewer recognises, names why it happens, then the mechanism, the offer and the single CTA." },
    { tag: "VSL edit", title: "Captions carry the hook", body: "Burned-in captions with key phrases in coral, dead air cut and a responsive embed for mobile." },
    { tag: "Case study cards", title: "Sector spread over volume", body: "Physical Therapy First, Be London, Aesthetics Lab and The Fifth Avenue Hotel: four industries, so visitors find themselves." },
    { tag: "Case study cards", title: "Same shape every time, built to extend", body: "Client and sector, manual process, what was built, outcome, action. New cards drop in without redesign." },
  ],
};

const PROCESS = {
  title: "Standards on the video and the build.",
  steps: [
    { title: "Cold-open problem", body: "Straight into the failure." },
    { title: "Named mechanism", body: "Explains why it breaks." },
    { title: "Coral captions", body: "Emphasis matched to the page." },
    { title: "Sound-off legible", body: "Readable without audio." },
    { title: "One CTA", body: "Same ask as the page." },
  ],
  standards: [
    "Plain HTML + CSS",
    "Deployed on Vercel",
    "Responsive video embed",
    "Coral for CTAs only",
    "Logo locked at 180px",
    "Landing and thank-you pages match",
    "Tested locally before deploy",
    "No framework, no build step",
  ],
};

const DELIVERED = {
  title: "Copy, design, video and the build.",
  items: [
    { title: "Landing page copy", body: "Headline, subhead, sections and CTA labels." },
    { title: "Page design", body: "Layout, palette, type and components." },
    { title: "VSL ideation", body: "The angle and argument." },
    { title: "VSL scripting", body: "Full script, problem first." },
    { title: "VSL editing", body: "Paced cut with coral burned-in captions." },
    { title: "Video embedding", body: "Hosted and embedded in the hero." },
    { title: "Case study design", body: "Four cards on one reusable structure." },
    { title: "Front-end build", body: "HTML and CSS, deployed and maintained." },
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
      lead="Ongoing content and design for a B2B AI automation agency's audit landing page: the VSL, case studies, page copy and layout."
      facts={FACTS}
      hero={{
        ratio: "16/9",
        images: [
          { src: `${IMG}/landing-hero.jpg`, alt: "Soch audit landing page first screen", ratio: "5/2" },
          { src: `${IMG}/vsl-frame.jpg`, alt: "Soch VSL embedded on the landing page" },
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
        subtitle: "Get a quote. If paid traffic isn't booking calls, it's usually the order of the argument, not the design.",
      }}
    />
  );
}
