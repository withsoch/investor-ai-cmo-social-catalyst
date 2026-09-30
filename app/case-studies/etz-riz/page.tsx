import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "etz.riz Instagram Reels: Content + Editing | Social Catalyst Case Study",
  description:
    "How Social Catalyst runs weekly Reel ideation, scripting and editing for etz.riz, a creator account on AI and careers: four rotating formats, and the creator only has to film.",
};

const IMG = "/images/case-studies/etz-riz";

const FACTS = [
  { value: "4 formats", label: "Rotated so posts never look alike" },
  { value: "Film only", label: "The only step the creator does" },
  { value: "Ongoing", label: "A weekly engagement, not a project" },
];

const META = [
  { label: "Client", value: "etz.riz, creator account" },
  { label: "Platform", value: "Instagram Reels + carousels" },
  { label: "Scope", value: "Ideation · Scripting · Editing" },
  { label: "Engagement", value: "Ongoing, weekly output" },
];

const STARTING = {
  title: "A creator with the expertise, and no time to make the volume.",
  paragraphs: [
    "etz.riz publishes about AI tooling, careers and building with Claude. Short-form rewards frequency, and a founder doing the actual work can't also write hooks and cut video every week. AI content also collapses into the same few formats fast, so without variety the account looks like one Reel on a loop.",
  ],
  constraints: [
    { title: "Volume is the mechanic", body: "Short-form needs consistent output; one Reel a month does nothing." },
    { title: "The niche repeats itself", body: "AI content converges fast, so formats and angles must vary." },
    { title: "Founder time is the bottleneck", body: "The creator should only have to film." },
  ],
  objective:
    "Take everything but filming off the creator's plate, with no two weeks looking the same.",
};

const APPROACH = {
  title: "Four rules that make the output repeatable.",
  items: [
    { title: "One claim per Reel", body: "“You can build a $20K/month app with zero coding” is a claim; “AI app builders” is a topic. Every video makes a claim." },
    { title: "The first frame does the work", body: "The hook is on-screen text, legible before a word is spoken." },
    { title: "Promise, proof, path", body: "The caption stack is the claim, a line of credibility, and how many steps follow." },
    { title: "Rotate the format, not just the topic", body: "Talking head, POV skit, b-roll voiceover and designed carousel all rotate." },
  ],
};

const GALLERY = {
  title: "The grid, in rotation.",
  lead: "Talking head, skit, b-roll and carousel: same rules, different looks.",
  ratio: "3/4",
  columns: 3 as const,
  images: [
    { src: `${IMG}/reverse-engineer-dream-life.jpg`, alt: "Reel: Breaking, you can reverse engineer your dream life using Claude" },
    { src: `${IMG}/20k-app.jpg`, alt: "Reel: You can build a $20K/month app with zero coding" },
    { src: `${IMG}/claude-indeed.jpg`, alt: "Reel: Breaking, you can connect Claude to Indeed" },
    { src: `${IMG}/unrejectable-resume.jpg`, alt: "Reel: How to make your resume unrejectable" },
    { src: `${IMG}/client-meeting-skit.jpg`, alt: "POV skit: Me in every client meeting" },
    { src: `${IMG}/ten-lessons.jpg`, alt: "Reel: 10 lessons I learned the hard way" },
    { src: `${IMG}/token-limit.jpg`, alt: "B-roll Reel: Life after token limit" },
    { src: `${IMG}/carousel-dream-life.jpg`, alt: "Carousel cover: How to reverse engineer your dream life using Claude" },
    { src: `${IMG}/carousel-resume.jpg`, alt: "Carousel cover: How to make your resume unrejectable" },
  ],
};

const ANATOMY = {
  title: "The caption stack is the whole script.",
  image: { src: `${IMG}/reverse-engineer-dream-life.jpg`, alt: "Reel frame showing the three-line caption stack" },
  ratio: "3/4",
  parts: [
    { title: "The claim", body: "Heaviest weight, top of the stack, often framed as breaking news." },
    { title: "The proof line", body: "One line on why it holds: a result, timeframe or tool." },
    { title: "The path", body: "A count of the steps that follow." },
    { title: "Contrast against footage", body: "Caption colour picked per Reel to stay legible over the footage." },
    { title: "Safe zone discipline", body: "Text kept clear of Instagram's interface overlays." },
  ],
  example: [
    { line: "BREAKING: You can reverse engineer your dream life using Claude.", note: "The claim: specific and provable." },
    { line: "The science of going viral. One Claude skill breaks it all down for you.", note: "The proof: names the mechanism." },
    { line: "Here’s exactly how, in 3 steps", note: "The path: a counted promise." },
  ],
};

const RANGE = {
  title: "Four formats doing four different jobs.",
  imageFocus: "object-[50%_60%]",
  items: [
    { tag: "Format 01 · Talking head", title: "Direct value delivery", body: "Camera-facing explanation with the hook on screen. The workhorse for anything instructional.", image: { src: `${IMG}/20k-app.jpg`, alt: "Talking-head Reel example" } },
    { tag: "Format 02 · POV skit", title: "Relatability, no teaching", body: "Short bits about client work and corporate life, made to be shared, with no lesson.", image: { src: `${IMG}/client-meeting-skit.jpg`, alt: "POV skit Reel example" } },
    { tag: "Format 03 · B-roll voiceover", title: "Mood over instruction", body: "Atmospheric footage with a short caption and voiceover, for reflective or opinionated ideas.", image: { src: `${IMG}/token-limit.jpg`, alt: "B-roll voiceover Reel example" } },
    { tag: "Format 04 · Designed carousel", title: "Depth and saves", body: "Illustrated covers with a serif headline for step-by-step breakdowns that get saved.", image: { src: `${IMG}/carousel-resume.jpg`, alt: "Designed carousel cover example" } },
  ],
};

const PROCESS = {
  title: "Idea to export, without the creator project-managing it.",
  steps: [
    { title: "Idea set", body: "Claims, hooks and formats set." },
    { title: "Script + shot list", body: "A spoken script and what to film." },
    { title: "Creator films", body: "The only step that needs the creator." },
    { title: "Edit + captions", body: "Paced cut, captions, b-roll and overlays." },
    { title: "Deliver", body: "Export, caption and hashtags, ready to post." },
  ],
  standards: [
    "1080 × 1920, 9:16",
    "Hook legible in frame one",
    "Captions inside the safe zone",
    "Burned-in captions throughout",
    "No dead air over 0.3s",
    "Checked muted and unmuted",
    "Format rotated against the last post",
    "Delivered ready to publish",
  ],
};

const DELIVERED = {
  title: "A content function, not a video edit.",
  items: [
    { title: "Video ideation", body: "Weekly claims with formats assigned." },
    { title: "Hook writing", body: "On-screen hooks, written before filming." },
    { title: "Scripting", body: "Scripts written to be spoken." },
    { title: "Shot lists", body: "Clear direction on what to film." },
    { title: "Editing", body: "Paced cuts with b-roll and screen recordings." },
    { title: "Captions and text", body: "Burned-in captions timed to speech." },
    { title: "Carousel design", body: "Covers and slides for longer breakdowns." },
    { title: "Post copy", body: "Caption and hashtags with every export." },
  ],
};

export default function EtzRizPage() {
  return (
    <WorkCaseStudy
      slug="etz-riz"
      eyebrow="Content, Scripting + Editing"
      title={
        <>
          Turning one creator into a <Emphasis>publishing engine.</Emphasis>
        </>
      }
      lead="Ongoing Reel ideation, scripting and editing for etz.riz, a creator account on AI, careers and building with Claude."
      facts={FACTS}
      hero={{
        ratio: "3/4",
        images: [
          { src: `${IMG}/unrejectable-resume.jpg`, alt: "etz.riz Reel: How to make your resume unrejectable" },
          { src: `${IMG}/carousel-dream-life.jpg`, alt: "etz.riz carousel cover: How to reverse engineer your dream life" },
          { src: `${IMG}/claude-indeed.jpg`, alt: "etz.riz Reel: You can connect Claude to Indeed" },
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
        title: "Want the content function without hiring one?",
        subtitle: "Get a quote. If posting keeps slipping, it's usually the pipeline, not the ideas.",
      }}
    />
  );
}
