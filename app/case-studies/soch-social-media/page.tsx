import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Soch Instagram: Social Media Management | Social Catalyst Case Study",
  description:
    "How Social Catalyst built Soch's Instagram from zero followers: positioning, four content pillars, a locked visual system, and day-to-day publishing for an AI automation agency.",
};

const IMG = "/images/case-studies/soch-social-media";

const FACTS = [
  { value: "Built from 0", label: "Account, visual system and content archive created from scratch" },
  { value: "4 pillars", label: "Every post produced against a defined strategic pillar" },
  { value: "1 system", label: "Templates that cut design time per post and keep the grid coherent" },
];

const META = [
  { label: "Client", value: "Soch, AI automation agency" },
  { label: "Platform", value: "Instagram @withsoch" },
  { label: "Scope", value: "Strategy · Design · Content · Publishing" },
  { label: "Role", value: "Social media manager + designer" },
];

const STARTING = {
  title: "A technical service, a non-technical buyer, and no audience to speak to.",
  paragraphs: [
    "Soch builds AI and automation systems for founders and small teams. The service is genuinely technical. The people who buy it are usually not. That combination makes social media harder than it looks: post too shallow and you sound like every other AI account, post too deep and the buyer stops reading.",
    "The account started with no audience, no visual language and no content archive to build on. Everything on the page today was designed and produced from scratch.",
  ],
  constraints: [
    { title: "Crowded category", body: "AI content is saturated with tool round-ups and hype. Standing out meant having a point of view, not more tips." },
    { title: "No visual identity", body: "No templates, no palette discipline, no type hierarchy. Every post was starting from a blank canvas." },
    { title: "Mixed audience", body: "Founders, operators and technical buyers all read the same feed. One tone had to work for all three." },
  ],
  objective:
    "Turn the Instagram account into proof of expertise, so that a founder who has never heard of Soch can scroll the grid and understand exactly how the team thinks.",
};

const APPROACH = {
  title: "Four decisions that shaped everything else.",
  lead: "Before a single post was designed, four things were settled. Every piece of content since has been produced against them, which is what keeps the feed coherent instead of decorative.",
  items: [
    { title: "Positioning came before posting", body: "The account argues one thing consistently: automation fails because of unclear processes, not broken software. That single position gives every post a spine and makes the content impossible to confuse with generic AI advice." },
    { title: "A locked visual system, not one-off graphics", body: "Two backgrounds, one accent colour, one type pairing, fixed margins. Designing inside constraints means posts are faster to produce, and the grid reads as one brand rather than a folder of unrelated images." },
    { title: "Teach the thinking, not the tool", body: "Tool tutorials expire and attract the wrong audience. Frameworks, diagnostics and mental models age well and attract buyers. Every post gives away reasoning the reader can apply immediately." },
    { title: "Format follows the message", body: "A contrast idea becomes a two-panel comparison. A process problem becomes a workflow map. A mindset shift becomes a carousel. The layout is chosen to carry the argument, not to fill a slot in the calendar." },
  ],
  closer: "The result is a feed where any single post makes sense on its own, and the whole grid still argues one thing.",
};

const GALLERY = {
  title: "The system in the feed.",
  lead: "Single posts and carousels produced under the same system. Dark and cream layouts alternate deliberately so the grid has rhythm when viewed as a whole.",
  ratio: "3/4",
  columns: 3 as const,
  images: [
    { src: `${IMG}/why-automations-fail.jpg`, alt: "Post: Why 80% of automations fail" },
    { src: `${IMG}/80-20-rule.jpg`, alt: "Post: The 80/20 rule of automation" },
    { src: `${IMG}/automation-roi.jpg`, alt: "Post: Stop guessing your automation ROI" },
    { src: `${IMG}/stop-typing-prompts.jpg`, alt: "Post: Stop typing prompts, start building background systems" },
    { src: `${IMG}/audit-before-you-automate.jpg`, alt: "Post: Audit before you automate" },
    { src: `${IMG}/automations-that-dont-break.jpg`, alt: "Carousel cover: How to build automations that don't break" },
    { src: `${IMG}/build-systems.jpg`, alt: "Reel cover: Build systems that run without you" },
    { src: `${IMG}/stop-email-blasts.jpg`, alt: "Post: Stop sending email blasts" },
    { src: `${IMG}/team-wasting-time.jpg`, alt: "Post: Your team is wasting time on admin" },
  ],
};

const ANATOMY = {
  title: "Every post carries the same five parts.",
  image: { src: `${IMG}/team-wasting-time.jpg`, alt: "Annotated example post: Your team is wasting time on admin" },
  ratio: "3/4",
  parts: [
    { title: "Category label", body: "A small coral eyebrow tells the reader which pillar they are in before they read the hook." },
    { title: "Hook with one highlight", body: "A short, confrontational statement. Exactly one phrase is set in coral so the eye knows where to land first." },
    { title: "The reframe", body: "Two or three lines that turn the hook into a useful idea. Short enough to survive Instagram compression." },
    { title: "A visual argument", body: "A diagram, comparison pair or workflow map that proves the point without extra copy. This is the part most accounts skip." },
    { title: "Fixed footer", body: "The URL sits in the same position on every post, so the brand cue is consistent across the grid." },
  ],
};

const RANGE = {
  title: "Four pillars the calendar rotates through.",
  lead: "Pillars stop the feed drifting into whatever felt interesting that week. Each one does a different job in the buying process, from creating awareness of a problem through to showing what working with Soch actually looks like.",
  items: [
    { tag: "Diagnostic", title: "Why automations fail", body: "Posts that name the real reason projects stall, usually undocumented or unstable human processes rather than technology. This pillar creates the problem awareness every other pillar depends on.", image: { src: `${IMG}/why-automations-fail.jpg`, alt: "Diagnostic pillar example post" } },
    { tag: "Framework", title: "What to automate first", body: "Prioritisation content: the 80/20 rule of automation, ROI maths, workflow audits. Gives the reader a way to make a decision, which is the fastest route to being seen as credible.", image: { src: `${IMG}/80-20-rule.jpg`, alt: "Framework pillar example post" } },
    { tag: "Mindset", title: "Systems over prompts", body: "The shift from typing prompts into a chat box to embedding AI into background workflows. This is the philosophical core of the brand and the pillar that differentiates it most sharply.", image: { src: `${IMG}/stop-typing-prompts.jpg`, alt: "Mindset pillar example post" } },
    { tag: "Use case", title: "Operations teardowns", body: "Concrete examples: manual admin, batch email blasts, spreadsheet updates, approval chasing. Shows the work without turning the feed into a sales pitch.", image: { src: `${IMG}/stop-email-blasts.jpg`, alt: "Use-case pillar example post" } },
  ],
};

const PROCESS = {
  title: "From pillar to published post.",
  steps: [
    { title: "Pillar pick", body: "Each slot on the calendar is assigned a pillar before any idea is written." },
    { title: "Hook first", body: "Copy is written and cut before design starts. Weak hooks get killed here." },
    { title: "Template build", body: "Layout chosen from the system, then the visual argument is drawn." },
    { title: "Caption + schedule", body: "Caption, hashtags and slot confirmed against the grid rhythm." },
    { title: "Review", body: "Performance read back against the pillar to shape the next cycle." },
  ],
  standards: [
    "Logo top-centre, fixed size",
    "Hook in 2 to 4 words per line",
    "Coral highlights key phrases only",
    "One diagram or panel pair per post",
    "URL locked to the footer",
    "Alternate dark and cream across the grid",
    "No stock photography",
    "No more than three type sizes",
  ],
};

const DELIVERED = {
  title: "Running the account, not just designing for it.",
  items: [
    { title: "Content strategy", body: "Positioning, four content pillars, and a rolling calendar mapped to them." },
    { title: "Visual system", body: "Palette, type hierarchy, layout rules and reusable templates for every format." },
    { title: "Design production", body: "Single posts, multi-slide carousels and Reel covers, all built in-system." },
    { title: "Copywriting", body: "Hooks, on-image copy and captions written to match the brand voice." },
    { title: "Daily publishing", body: "Scheduling, hashtag sets, posting and consistency management." },
    { title: "Community management", body: "Comments, DMs and engagement handled as part of the routine." },
    { title: "Reporting", body: "Performance reviewed against pillars so the calendar adapts to what works." },
    { title: "Profile build-out", body: "Bio, highlight covers and grid composition treated as one designed surface." },
  ],
};

export default function SochSocialMediaPage() {
  return (
    <WorkCaseStudy
      slug="soch-social-media"
      eyebrow="Social Media Management + Design"
      title={
        <>
          Building a brand presence <Emphasis>from zero followers.</Emphasis>
        </>
      }
      lead="Full social media management and design for Soch, an AI automation agency. Positioning, visual system, content production and day-to-day publishing, built from the ground up."
      facts={FACTS}
      hero={{
        ratio: "3/4",
        images: [
          { src: `${IMG}/automation-roi.jpg`, alt: "Soch Instagram post: Stop guessing your automation ROI" },
          { src: `${IMG}/audit-before-you-automate.jpg`, alt: "Soch Instagram post: Audit before you automate" },
          { src: `${IMG}/why-automations-fail.jpg`, alt: "Soch Instagram post: Why 80% of automations fail" },
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
        title: "Want a feed that argues one thing?",
        subtitle: "Get a quote. If your feed looks inconsistent or isn't bringing in the right audience, that's usually a systems problem, and it's fixable.",
      }}
    />
  );
}
