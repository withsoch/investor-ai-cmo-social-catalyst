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
  { value: "4 formats", label: "Rotated deliberately so consecutive posts never look alike" },
  { value: "Film only", label: "The single step the creator has to be present for" },
  { value: "Ongoing", label: "Running as a continuous weekly engagement, not a project" },
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
    "etz.riz publishes about AI tooling, careers and building things with Claude. The subject matter is strong and the audience is real. The problem is arithmetic: short-form rewards frequency, and a founder who is doing the actual work cannot also generate ideas, write hooks and cut video every week.",
    "The other problem is repetition. AI content collapses into the same three formats very quickly. Without a system for varying format and angle, an account starts looking like it is posting the same Reel on a loop.",
  ],
  constraints: [
    { title: "Volume is the mechanic", body: "Short-form needs consistent output. One good Reel a month does nothing for reach." },
    { title: "The niche repeats itself", body: "AI content converges fast. Formats and angles have to be deliberately varied." },
    { title: "Founder time is the bottleneck", body: "The creator should only need to show up and film, not run the whole pipeline." },
  ],
  objective:
    "Take everything except being on camera off the creator's plate, and keep the output varied enough that no two weeks look the same.",
};

const APPROACH = {
  title: "Four rules that make the output repeatable.",
  lead: "Ideation is the part most people skip straight past. These four rules are what turn a topic into a Reel that has a reason to exist, and they are applied before any footage is shot or cut.",
  items: [
    { title: "One claim per Reel", body: "Every video makes a single specific claim, not a topic overview. “You can build a $20K/month app with zero coding” is a claim. “AI app builders” is a topic. Claims give the viewer a reason to stay; topics do not." },
    { title: "The first frame does the work", body: "The hook is written as on-screen text and is legible before a word is spoken, because most viewers decide during the thumbnail-sized first moment. Audio reinforces the caption rather than carrying it alone." },
    { title: "Promise, proof, path", body: "The caption stack is structured, not decorative: the claim, a line of credibility, and an explicit promise of how many steps follow. It sets expectations in three lines so the viewer knows exactly what they are staying for." },
    { title: "Rotate the format, not just the topic", body: "Talking head, POV skit, b-roll voiceover and designed carousel are all in rotation. The same idea lands differently in each, and rotating them is what stops the grid looking like a loop." },
  ],
  closer: "The creator films. Everything before and after that, from the idea to the export, is handled.",
};

const GALLERY = {
  title: "The grid, in rotation.",
  lead: "A cross-section of output. Talking head, skit, b-roll and designed carousel, each built to the same rules but deliberately different to look at.",
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
  lead: "Same three-line structure on every Reel, restyled to suit the footage behind it.",
  image: { src: `${IMG}/reverse-engineer-dream-life.jpg`, alt: "Reel frame showing the three-line caption stack" },
  ratio: "3/4",
  parts: [
    { title: "The claim", body: "Heaviest weight, highest contrast, top of the stack. Often framed as a breaking statement so it reads as news rather than advice." },
    { title: "The proof line", body: "One line establishing why the claim holds, whether that is a result, a timeframe or the specific tool involved." },
    { title: "The path", body: "An explicit count of what follows. Naming the number of steps converts curiosity into a reason to keep watching." },
    { title: "Contrast against footage", body: "Caption colour is chosen per Reel so text stays legible over whatever is behind it, from a gym floor to a snow-covered street." },
    { title: "Safe zone discipline", body: "Text stays clear of the areas the Instagram interface covers, so nothing important sits under the caption or share icons." },
  ],
  example: [
    { line: "BREAKING: You can reverse engineer your dream life using Claude.", note: "The claim. Specific, slightly outrageous, and provable." },
    { line: "The science of going viral. One Claude skill breaks it all down for you.", note: "The proof. Names the mechanism so the claim is not just noise." },
    { line: "Here’s exactly how, in 3 steps", note: "The path. A counted promise the rest of the Reel then delivers." },
  ],
};

const RANGE = {
  title: "Four formats doing four different jobs.",
  imageFocus: "object-[50%_60%]",
  lead: "Each format earns its place. Rotating them keeps the account watchable and gives every idea the treatment that suits it best.",
  items: [
    { tag: "Format 01 · Talking head", title: "Direct value delivery", body: "Camera-facing explanation with the hook stacked on screen. The workhorse format for anything instructional, and the one that builds recognition of the creator fastest.", image: { src: `${IMG}/20k-app.jpg`, alt: "Talking-head Reel example" } },
    { tag: "Format 02 · POV skit", title: "Relatability, no teaching", body: "Short observational bits about client work and corporate life. These carry no lesson on purpose. They exist to be shared, and they pull in viewers who would scroll past a tutorial.", image: { src: `${IMG}/client-meeting-skit.jpg`, alt: "POV skit Reel example" } },
    { tag: "Format 03 · B-roll voiceover", title: "Mood over instruction", body: "Atmospheric footage with a short caption and voiceover. Used for reflective or opinionated ideas that would feel heavy-handed delivered to camera.", image: { src: `${IMG}/token-limit.jpg`, alt: "B-roll voiceover Reel example" } },
    { tag: "Format 04 · Designed carousel", title: "Depth and saves", body: "Illustrated covers with a serif headline for step-by-step breakdowns. Carousels get saved and revisited in a way Reels do not, which makes them worth the extra design time.", image: { src: `${IMG}/carousel-resume.jpg`, alt: "Designed carousel cover example" } },
  ],
};

const PROCESS = {
  title: "Idea to export, without the creator project-managing it.",
  lead: "Ideas are sourced from what the creator is actually building and what the niche is arguing about that week, then written up as specific claims with the hook already drafted. Edits are cut for retention and checked with sound off as well as on.",
  steps: [
    { title: "Idea set", body: "Angles written as claims, with hooks drafted and formats assigned." },
    { title: "Script + shot list", body: "Script written to be spoken, plus exactly what to film." },
    { title: "Creator films", body: "The only step that needs the creator. Footage handed straight back." },
    { title: "Edit + captions", body: "Cut for pace, caption stack built, b-roll and overlays added." },
    { title: "Deliver", body: "Export, caption copy and hashtags supplied ready to post." },
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
    { title: "Video ideation", body: "Weekly angles written as specific claims, with the format assigned." },
    { title: "Hook writing", body: "On-screen hooks drafted and cut before filming begins." },
    { title: "Scripting", body: "Full scripts written to be spoken aloud, not read." },
    { title: "Shot lists", body: "Specific direction on what to film so nothing needs reshooting." },
    { title: "Editing", body: "Cut for pace and retention, with b-roll and screen recordings layered in." },
    { title: "Captions and text", body: "Burned-in captions and the styled caption stack, timed to speech." },
    { title: "Carousel design", body: "Illustrated covers and slides for the longer breakdowns." },
    { title: "Post copy", body: "Caption, hooks and hashtags supplied with every export." },
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
      lead="Ongoing video ideation, scripting and editing for etz.riz, a creator account covering AI, careers and building with Claude. Ideas in, edited Reels out."
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
        subtitle: "Get a quote. If you have the expertise but the posting keeps slipping, the problem is usually the pipeline rather than the ideas.",
      }}
    />
  );
}
