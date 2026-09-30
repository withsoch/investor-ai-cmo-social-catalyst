import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Shaping Wealth YouTube: Thumbnails + Channel Branding | Social Catalyst Case Study",
  description:
    "How Social Catalyst designs every thumbnail for Shaping Wealth, Brian Portnoy's behavioural finance channel: one system that makes hour-long interviews read at phone size without looking like clickbait.",
};

const IMG = "/images/case-studies/shaping-wealth";

const FACTS = [
  { value: "Weekly", label: "Ongoing delivery alongside the channel's publishing schedule" },
  { value: "1 system", label: "Fixed rules that keep production fast and the channel page coherent" },
  { value: "End to end", label: "Brief, copy, editing, design and delivery handled without hand-holding" },
];

const META = [
  { label: "Client", value: "Shaping Wealth, behavioural finance" },
  { label: "Platform", value: "YouTube, long-form interviews" },
  { label: "Scope", value: "Thumbnails · Channel branding" },
  { label: "Engagement", value: "Managed end to end, ongoing" },
];

const STARTING = {
  title: "The hardest category on YouTube to make someone click.",
  paragraphs: [
    "Shaping Wealth, hosted by Brian Portnoy, publishes hour-long conversations about the psychology of money for financial advisers and wealth professionals. The source footage is two people talking. There is no action, no product, no demonstration. The subject matter is abstract: contentment, decision-making, narrative economics, client behaviour.",
    "A thumbnail in this category has to do the entire job on its own. It has to make an abstract idea feel concrete, and it has to do it without the exaggerated faces and shouting arrows that would cost the channel credibility with a professional audience.",
  ],
  constraints: [
    { title: "Talking heads only", body: "No b-roll or footage to pull from. Every thumbnail is built from a single portrait and type." },
    { title: "Abstract subjects", body: "Ideas like time horizons and mental accounting have no obvious image. The hook has to carry them." },
    { title: "A sceptical audience", body: "Advisers and CFAs disengage from clickbait. The design has to be bold without being cheap." },
  ],
  objective:
    "Give every episode a thumbnail that states one clear idea, reads at phone size, and still looks like it belongs to a serious channel about money.",
};

const APPROACH = {
  title: "Four rules every thumbnail follows.",
  lead: "The channel publishes weekly, so the design cannot be reinvented each time. These four rules are what make the thumbnails fast to produce and recognisable as a set.",
  items: [
    { title: "The hook is not the episode title", body: "Titles describe the conversation. Thumbnails have to sell one idea from inside it. The strongest tension in the episode gets pulled out and cut to a handful of words, which is where most of the work actually happens." },
    { title: "One highlight, doing one job", body: "A red block sits behind the single word or phrase the whole idea turns on. It gives the eye an entry point at thumbnail size and creates contrast without adding clutter. Never more than one per design." },
    { title: "The guest is the anchor", body: "Each guest is cut out, relit and placed against a background built for that episode. A real human face gives an abstract topic something to hold onto, and it makes the guest feel worth an hour of the viewer's time." },
    { title: "Fixed furniture, variable interior", body: "Channel watermark, host credit and guest name plate sit in the same positions every time. Those constants are what hold the grid together while backgrounds, colour and typography change episode to episode." },
  ],
  closer: "The test is simple. Shrink the thumbnail to the size of a phone tile. If the idea still lands, it ships.",
};

const GALLERY = {
  title: "One system, one channel.",
  lead: "A cross-section of episodes. Different guests, backgrounds and colour treatments, all built on the same rules so the channel page reads as one body of work.",
  ratio: "16/9",
  columns: 3 as const,
  images: [
    { src: `${IMG}/meir-statman.jpg`, alt: "Thumbnail: What do investors really want? With Meir Statman" },
    { src: `${IMG}/tim-maurer.jpg`, alt: "Thumbnail: Your financial plan isn't about money, with Tim Maurer" },
    { src: `${IMG}/death-of-star-managers.jpg`, alt: "Thumbnail: The death of star managers" },
    { src: `${IMG}/hal-hershfield.jpg`, alt: "Thumbnail: Your future self is a stranger, with Hal Hershfield" },
    { src: `${IMG}/abby-bussman.jpg`, alt: "Thumbnail: You spend more than you think, with Abby Bussman" },
    { src: `${IMG}/daniel-crosby.jpg`, alt: "Thumbnail: The freedom problem, with Daniel Crosby" },
    { src: `${IMG}/peter-atwater.jpg`, alt: "Thumbnail: What moves markets before data? With Peter Atwater" },
    { src: `${IMG}/mary-beth-storjohan.jpg`, alt: "Thumbnail: The hidden reason why women leave advisors, with Mary Beth Storjohan" },
    { src: `${IMG}/jason-pereira.jpg`, alt: "Thumbnail: The pattern every market repeats, with Jason Pereira" },
  ],
};

const ANATOMY = {
  title: "Six fixed parts, assembled every week.",
  lead: "Every element below appears in the same position on every thumbnail the channel publishes.",
  image: { src: `${IMG}/meir-statman.jpg`, alt: "Example thumbnail showing host credit, hook, red highlight, portrait, name plate and watermark" },
  ratio: "16/9",
  parts: [
    { title: "Host credit", body: "A small microphone icon and the host's name, top left. Builds the host as the constant across every episode." },
    { title: "The hook", body: "Three to six words, heavy weight, stacked on two or three lines so it survives being scaled down." },
    { title: "Red highlight", body: "One block behind the operative word. It is the first thing the eye finds and the reason the idea reads instantly." },
    { title: "Cut-out portrait", body: "Guest masked from the source frame, relit and edged so they separate cleanly from the background." },
    { title: "Guest name plate", body: "Credited in a fixed lower position. Names carry weight with this audience, so they are never buried." },
    { title: "Channel watermark", body: "Shaping Wealth logo locked to the top right corner on every asset, at the same size and opacity." },
  ],
};

const RANGE = {
  title: "Consistent, without being repetitive.",
  lead: "A rigid system can flatten a channel. Backgrounds and devices are varied deliberately so consecutive uploads never look like reruns of each other.",
  imageFocus: "object-center",
  items: [
    { tag: "Colour shift", title: "Accent variation", body: "Selected episodes move off red into green or teal. Sparing use keeps the channel palette recognisable while breaking up long runs of similar tiles.", image: { src: `${IMG}/jason-pereira.jpg`, alt: "Green accent variation thumbnail" } },
    { tag: "Light register", title: "Data as background", body: "For episodes about markets and money mechanics, a light chart-paper background with real financial iconography. Reads differently in the feed while keeping the same type hierarchy.", image: { src: `${IMG}/lawrence-yeo.jpg`, alt: "Light chart-paper background thumbnail: The trap of more" } },
    { tag: "Borrowed device", title: "The quote card", body: "Framing the hook as a social post gives the idea a source and a voice. Used for episodes built around a guest's known argument rather than a general topic.", image: { src: `${IMG}/annie-duke.jpg`, alt: "Quote-card thumbnail: Why winning requires quitting, with Annie Duke" } },
    { tag: "Texture", title: "Editorial and print cues", body: "Torn paper and newsprint signal reporting and research. Useful when the episode is about findings or data rather than opinion.", image: { src: `${IMG}/mary-beth-storjohan.jpg`, alt: "Torn-paper editorial thumbnail" } },
  ],
};

const PROCESS = {
  title: "The channel is the asset, not the upload.",
  lead: "Thumbnails are the visible part. The rest of the work is the set of conventions that make a channel page look designed rather than accumulated: watermark and credit rules, banner and profile treatment, playlist art, and checking every tile against the ones published either side of it.",
  steps: [
    { title: "Episode brief", body: "Guest, topic and the one argument worth pulling out." },
    { title: "Hook options", body: "Several angles written and cut before any design starts." },
    { title: "Portrait prep", body: "Frame selected, guest cut out, relit and edged." },
    { title: "Build + variants", body: "Design assembled in-system, alternates produced where useful." },
    { title: "Scale test", body: "Checked at phone size and against neighbouring uploads before delivery." },
  ],
  standards: [
    "1280 × 720, under 2MB",
    "Hook legible at 210px wide",
    "One highlight block only",
    "Watermark top right, fixed",
    "Guest always credited",
    "No text in the lower right",
    "Contrast checked against adjacent uploads",
    "Title and thumbnail never duplicate wording",
  ],
};

const DELIVERED = {
  title: "An ongoing design engagement, not a one-off.",
  items: [
    { title: "Thumbnail design", body: "Every episode, built in-system and delivered upload-ready." },
    { title: "Hook copywriting", body: "On-image copy written and cut from the episode itself." },
    { title: "Photo editing", body: "Guest cut-outs, relighting, edge work and colour matching." },
    { title: "Background design", body: "Custom background built per episode to suit the subject." },
    { title: "Channel branding", body: "Watermark rules, credit conventions, banner and profile treatment." },
    { title: "Playlist and section art", body: "Cover art designed to match the thumbnail system." },
    { title: "Grid management", body: "Channel page reviewed as a whole, not upload by upload." },
    { title: "Variants on request", body: "Alternate versions produced for testing or repurposing." },
  ],
};

export default function ShapingWealthPage() {
  return (
    <WorkCaseStudy
      slug="shaping-wealth"
      eyebrow="Thumbnail Design + Channel Branding"
      title={
        <>
          Making hour-long finance interviews <Emphasis>impossible to scroll past.</Emphasis>
        </>
      }
      lead="Ongoing thumbnail design and channel branding for Shaping Wealth, a behavioural finance channel hosted by Brian Portnoy. Every thumbnail on the channel is designed inside one system."
      facts={FACTS}
      hero={{
        ratio: "16/9",
        images: [
          { src: `${IMG}/hal-hershfield.jpg`, alt: "Shaping Wealth thumbnail: Your future self is a stranger" },
          { src: `${IMG}/annie-duke.jpg`, alt: "Shaping Wealth thumbnail: Why winning requires quitting" },
          { src: `${IMG}/peter-atwater.jpg`, alt: "Shaping Wealth thumbnail: What moves markets before data?" },
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
        title: "Need thumbnails that hold up at phone size?",
        subtitle: "Get a quote. If your click-through is soft or your channel page looks like a stack of unrelated uploads, that's a system problem, and it's fixable.",
      }}
    />
  );
}
