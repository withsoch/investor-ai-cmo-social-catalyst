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
  { value: "Built from 0", label: "Account, visuals and archive made from scratch" },
  { value: "4 pillars", label: "Every post tied to a content pillar" },
  { value: "1 system", label: "Templates that keep the grid consistent" },
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
    "Soch builds AI and automation systems for founders and small teams. The service is technical; the buyers usually aren't. Too shallow and you sound like every AI account, too deep and they stop reading. The account started with no audience, no visual language and no archive.",
  ],
  constraints: [
    { title: "Crowded category", body: "AI content is full of tool round-ups and hype. Standing out needed a point of view." },
    { title: "No visual identity", body: "No templates, palette or type hierarchy. Every post started blank." },
    { title: "Mixed audience", body: "Founders, operators and technical buyers read the same feed. One tone had to fit all three." },
  ],
  objective:
    "Make the grid proof of expertise: a founder who has never heard of Soch should see how the team thinks.",
};

const APPROACH = {
  title: "Four decisions that shaped everything else.",
  items: [
    { title: "Positioning came before posting", body: "The account argues one thing: automation fails because of unclear processes, not broken software. It sets the content apart from generic AI advice." },
    { title: "A locked visual system, not one-off graphics", body: "Two backgrounds, one accent colour, one type pairing, fixed margins. Posts are faster to make and the grid reads as one brand." },
    { title: "Teach the thinking, not the tool", body: "Tool tutorials expire and attract the wrong audience. Frameworks and mental models age well and attract buyers." },
    { title: "Format follows the message", body: "A contrast becomes a two-panel comparison, a process problem a workflow map, a mindset shift a carousel." },
  ],
};

const GALLERY = {
  title: "The system in the feed.",
  lead: "Posts and carousels from one system, alternating dark and cream so the grid has rhythm.",
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
    { title: "Category label", body: "A small coral eyebrow names the pillar." },
    { title: "Hook with one highlight", body: "A short, blunt line with one phrase in coral." },
    { title: "The reframe", body: "Two or three lines that turn the hook into a useful idea." },
    { title: "A visual argument", body: "A diagram, comparison or workflow map that proves the point." },
    { title: "Fixed footer", body: "The URL in the same spot on every post." },
  ],
};

const RANGE = {
  title: "Four pillars the calendar rotates through.",
  items: [
    { tag: "Diagnostic", title: "Why automations fail", body: "Names the real reason projects stall: messy human processes, not technology.", image: { src: `${IMG}/why-automations-fail.jpg`, alt: "Diagnostic pillar example post" } },
    { tag: "Framework", title: "What to automate first", body: "The 80/20 rule, ROI maths, workflow audits. Helps the reader decide.", image: { src: `${IMG}/80-20-rule.jpg`, alt: "Framework pillar example post" } },
    { tag: "Mindset", title: "Systems over prompts", body: "From typing prompts to building AI into background workflows. The core of the brand.", image: { src: `${IMG}/stop-typing-prompts.jpg`, alt: "Mindset pillar example post" } },
    { tag: "Use case", title: "Operations teardowns", body: "Manual admin, email blasts, spreadsheet updates. Shows the work without a sales pitch.", image: { src: `${IMG}/stop-email-blasts.jpg`, alt: "Use-case pillar example post" } },
  ],
};

const PROCESS = {
  title: "From pillar to published post.",
  steps: [
    { title: "Pillar pick", body: "Each calendar slot gets a pillar first." },
    { title: "Hook first", body: "Copy is written and cut before design." },
    { title: "Template build", body: "Layout picked from the system, visual drawn." },
    { title: "Caption + schedule", body: "Caption, hashtags and slot confirmed." },
    { title: "Review", body: "Results shape the next cycle." },
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
    { title: "Content strategy", body: "Positioning, four pillars and a rolling calendar." },
    { title: "Visual system", body: "Palette, type, layout rules and templates." },
    { title: "Design production", body: "Posts, carousels and Reel covers." },
    { title: "Copywriting", body: "Hooks, on-image copy and captions." },
    { title: "Daily publishing", body: "Scheduling, hashtags and posting." },
    { title: "Community management", body: "Comments and DMs handled." },
    { title: "Reporting", body: "Performance read against each pillar." },
    { title: "Profile build-out", body: "Bio, highlight covers and grid layout." },
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
      lead="Social media management and design for Soch, an AI automation agency: positioning, visuals, content and daily publishing, built from scratch."
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
        subtitle: "Get a quote. An inconsistent feed is usually a systems problem, and it's fixable.",
      }}
    />
  );
}
