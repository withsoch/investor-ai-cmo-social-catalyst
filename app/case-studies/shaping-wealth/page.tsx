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
  { value: "Weekly", label: "Delivered alongside the publishing schedule" },
  { value: "1 system", label: "Fixed rules that keep the channel page coherent" },
  { value: "End to end", label: "Brief, copy, editing, design and delivery" },
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
    "Shaping Wealth, hosted by Brian Portnoy, publishes hour-long conversations about the psychology of money for financial advisers. The footage is two people talking, and the subjects are abstract. The thumbnail has to make the idea concrete without the exaggerated faces and arrows that would cost credibility.",
  ],
  constraints: [
    { title: "Talking heads only", body: "No b-roll. Every thumbnail is one portrait and type." },
    { title: "Abstract subjects", body: "Time horizons and mental accounting have no obvious image. The hook carries them." },
    { title: "A sceptical audience", body: "Advisers and CFAs tune out clickbait. The design must be bold, not cheap." },
  ],
  objective:
    "One clear idea per thumbnail, readable at phone size, on a serious channel about money.",
};

const APPROACH = {
  title: "Four rules every thumbnail follows.",
  items: [
    { title: "The hook is not the episode title", body: "Titles describe the conversation; thumbnails sell one idea from it, cut to a handful of words." },
    { title: "One highlight, doing one job", body: "A red block sits behind the one word the idea turns on. Never more than one per design." },
    { title: "The guest is the anchor", body: "Each guest is cut out, relit and placed on a background built for that episode." },
    { title: "Fixed furniture, variable interior", body: "Watermark, host credit and name plate stay fixed while backgrounds, colour and type change." },
  ],
};

const GALLERY = {
  title: "One system, one channel.",
  lead: "Different guests and colours, all built on the same rules.",
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
  image: { src: `${IMG}/meir-statman.jpg`, alt: "Example thumbnail showing host credit, hook, red highlight, portrait, name plate and watermark" },
  ratio: "16/9",
  parts: [
    { title: "Host credit", body: "A microphone icon and the host's name, top left." },
    { title: "The hook", body: "Three to six heavy words, stacked on two or three lines." },
    { title: "Red highlight", body: "One block behind the operative word, where the eye lands first." },
    { title: "Cut-out portrait", body: "Guest masked, relit and edged to stand off the background." },
    { title: "Guest name plate", body: "Credited in a fixed lower position, never buried." },
    { title: "Channel watermark", body: "Logo locked top right at the same size and opacity." },
  ],
};

const RANGE = {
  title: "Consistent, without being repetitive.",
  imageFocus: "object-center",
  items: [
    { tag: "Colour shift", title: "Accent variation", body: "Selected episodes move off red into green or teal to break up long runs.", image: { src: `${IMG}/jason-pereira.jpg`, alt: "Green accent variation thumbnail" } },
    { tag: "Light register", title: "Data as background", body: "Market episodes get a light chart-paper background with financial iconography.", image: { src: `${IMG}/lawrence-yeo.jpg`, alt: "Light chart-paper background thumbnail: The trap of more" } },
    { tag: "Borrowed device", title: "The quote card", body: "The hook framed as a social post, for episodes built on a guest's known argument.", image: { src: `${IMG}/annie-duke.jpg`, alt: "Quote-card thumbnail: Why winning requires quitting, with Annie Duke" } },
    { tag: "Texture", title: "Editorial and print cues", body: "Torn paper and newsprint for episodes about findings rather than opinion.", image: { src: `${IMG}/mary-beth-storjohan.jpg`, alt: "Torn-paper editorial thumbnail" } },
  ],
};

const PROCESS = {
  title: "The channel is the asset, not the upload.",
  steps: [
    { title: "Episode brief", body: "Guest, topic and the one argument to pull out." },
    { title: "Hook options", body: "Several angles written before design." },
    { title: "Portrait prep", body: "Frame selected, guest cut out, relit and edged." },
    { title: "Build + variants", body: "Built in-system, with alternates where useful." },
    { title: "Scale test", body: "Checked at phone size and against neighbouring uploads." },
  ],
  standards: [
    "1280 × 720, under 2MB",
    "Hook legible at 210px wide",
    "One highlight block only",
    "Watermark top right, fixed",
    "Guest always credited",
    "No text in the lower right",
    "Contrast checked against neighbours",
    "Title and thumbnail never duplicate wording",
  ],
};

const DELIVERED = {
  title: "An ongoing design engagement, not a one-off.",
  items: [
    { title: "Thumbnail design", body: "Every episode, delivered upload-ready." },
    { title: "Hook copywriting", body: "On-image copy drawn from the episode." },
    { title: "Photo editing", body: "Cut-outs, relighting and colour matching." },
    { title: "Background design", body: "A custom background per episode." },
    { title: "Channel branding", body: "Watermark, credits, banner and profile." },
    { title: "Playlist and section art", body: "Cover art matching the thumbnails." },
    { title: "Grid management", body: "The channel page reviewed as a whole." },
    { title: "Variants on request", body: "Alternates for testing or repurposing." },
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
      lead="Ongoing thumbnail design and channel branding for Shaping Wealth, Brian Portnoy's behavioural finance channel, all built in one system."
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
        subtitle: "Get a quote. Soft click-through or a messy channel page is a system problem, and it's fixable.",
      }}
    />
  );
}
