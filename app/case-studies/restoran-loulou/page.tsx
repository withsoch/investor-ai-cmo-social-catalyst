import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Restoran Loulou: AI Product Visuals | Social Catalyst Case Study",
  description:
    "A sample AI visual catalog for Restoran Loulou: 17 studio, lifestyle and candid visuals of its brunch and specialty coffee for delivery apps, Instagram and story ads, built without a physical set-up.",
};

const IMG = "/images/case-studies/restoran-loulou";

// Every image on this page is AI-generated, and the alt text says so: the
// candid set is built to look like guests' photos, so it must never read as
// real ones.
const FACTS = [
  { value: "17 visuals", label: "Studio, lifestyle and candid renders in one catalog" },
  { value: "3 packages", label: "One each for delivery listings, Instagram and story ads" },
  { value: "No set-up", label: "Every scene built with AI, without props or a physical set" },
];

const META = [
  { label: "Brand", value: "Restoran Loulou, brunch & specialty coffee" },
  { label: "Output", value: "AI visual catalog" },
  { label: "Scope", value: "Studio · Lifestyle · Candid" },
  { label: "Engagement", value: "Sample catalog, made on spec, 2026" },
];

const STARTING = {
  title: "Brunch and coffee sell on how they look.",
  paragraphs: [
    "Restoran Loulou serves trendy brunches, specialty coffee and cocktails. On delivery apps, on Instagram and in story ads, the food has to look as good on a screen as it does on the table.",
    "Producing that the traditional way means a styled shoot for every placement. This catalog shows the alternative: chic, magazine-grade visual storytelling built with AI, without a physical set-up.",
  ],
  constraints: [
    { title: "Three placements, three looks", body: "Menu listings want clean studio shots, Instagram wants styled scenes, and story ads work best when they look like a guest's phone photo." },
    { title: "No set, no stylist", body: "Every scene, from a linen breakfast spread to a busy dining room, has to be built without props or a physical set-up." },
    { title: "One product, one brand", body: "Across every image the hero product has to stay recognisably the same, so the catalog reads as one restaurant." },
  ],
  objective:
    "Show what Loulou's menu could look like across every channel, in one catalog, before a single shoot is booked.",
};

const APPROACH = {
  title: "Four decisions behind the catalog.",
  items: [
    { title: "One hero product", body: "A single croissant carries the whole catalog. Keeping one product constant lets the scenes change freely while the brand stays recognisable." },
    { title: "Studio first", body: "Clean, crisply lit menu shots come first, because the delivery listing is where a customer decides whether to order." },
    { title: "Scenes, not backdrops", body: "The lifestyle renders place the plate in a story: breakfast on linen, a latte beside an open book, a pavement table, a café counter." },
    { title: "Candid on purpose", body: "The raw package looks like a guest's phone photo in a busy dining room, because raw authenticity is what builds trust in Meta and TikTok stories." },
  ],
};

const GALLERY = {
  title: "A full campaign, without a set.",
  lead: "Every image here is AI-generated, grouped into the three packages the catalog was built around.",
  caption: "Package 1 · Studio assets",
  note: "Clean backgrounds, crisp textures and professional product lighting, built for Wolt, Bolt Food and web menu listings to maximise order conversion.",
  ratio: "4/5",
  columns: 3 as const,
  images: [
    { src: `${IMG}/studio-01.jpg`, alt: "AI render: croissant with a latte, iced coffee and cake on a window table" },
    { src: `${IMG}/studio-02.jpg`, alt: "AI render: croissants scattered on a dark surface with cinnamon" },
    { src: `${IMG}/studio-03.jpg`, alt: "AI render: close-up of a croissant beside a matcha latte" },
    { src: `${IMG}/studio-04.jpg`, alt: "AI render: croissant with black coffee and jam on a dark wooden table" },
    { src: `${IMG}/studio-05.jpg`, alt: "AI render: croissant on a café chair beside a takeaway cup" },
    { src: `${IMG}/studio-06.jpg`, alt: "AI render: croissant on a plate beside a salad" },
    { src: `${IMG}/studio-07.jpg`, alt: "AI render: croissant with a matcha latte on a dark table" },
    { src: `${IMG}/studio-08.jpg`, alt: "AI render: croissant and cappuccino on a round wooden table" },
    { src: `${IMG}/studio-09.jpg`, alt: "AI render: croissant and black coffee on a board with coffee beans" },
  ],
  more: [
    {
      caption: "Package 2 · Lifestyle imagery",
      note: "The plate placed in styled breakfast tables and café scenes: visual stories that build brand desire on Instagram.",
      ratio: "4/5",
      columns: 4 as const,
      images: [
        { src: `${IMG}/lifestyle-breakfast-linen.jpg`, alt: "AI render: croissant with berries and yoghurt on linen, with flowers" },
        { src: `${IMG}/lifestyle-book-and-latte.jpg`, alt: "AI render: croissant and a latte beside an open book" },
        { src: `${IMG}/lifestyle-pavement-table.jpg`, alt: "AI render: a hand holding a latte at a pavement table with a croissant" },
        { src: `${IMG}/lifestyle-cafe-table.jpg`, alt: "AI render: croissant with coffee and an iced drink on a café table" },
      ],
    },
    {
      caption: "Package 3 · Raw assets",
      note: "Candid-style renders that look like a guest's phone photo, for Meta and TikTok stories where raw authenticity builds trust. These are AI-generated, not guests' photos.",
      ratio: "9/16",
      columns: 4 as const,
      images: [
        { src: `${IMG}/candid-01.jpg`, alt: "AI render in a candid style: croissant, coffee, eggs and salad in a busy dining room" },
        { src: `${IMG}/candid-02.jpg`, alt: "AI render in a candid style: croissant beside bacon and eggs" },
        { src: `${IMG}/candid-03.jpg`, alt: "AI render in a candid style: croissant and coffee with diners in the background" },
        { src: `${IMG}/candid-04.jpg`, alt: "AI render in a candid style: croissant and black coffee by a window" },
      ],
    },
  ],
};

const PROCESS = {
  title: "Built without a physical set-up.",
  steps: [
    { title: "One hero product", body: "The croissant is fixed first, so every scene shows the same plate." },
    { title: "Studio set", body: "Clean, crisply lit menu shots for delivery apps and the web menu." },
    { title: "Lifestyle scenes", body: "Linen breakfasts, books, pavement tables and café counters for Instagram." },
    { title: "Candid snaps", body: "Busy-dining-room, phone-style shots for Meta and TikTok stories." },
  ],
  standards: [
    "No physical set-up",
    "Clean backgrounds, crisp textures",
    "Professional product lighting",
    "The same hero product in every render",
    "Built for Wolt, Bolt Food and web menus",
    "Styled scenes for Instagram",
    "Candid style for Meta and TikTok stories",
  ],
};

const DELIVERED = {
  title: "What's in the catalog.",
  items: [
    { title: "Studio e-commerce visuals", body: "9 renders with clean backgrounds, crisp textures and professional lighting, for Wolt, Bolt Food and web menus." },
    { title: "Lifestyle campaign imagery", body: "4 styled scenes, from breakfast on linen to a pavement table, for Instagram." },
    { title: "Candid raw assets", body: "4 guest-style snaps in a busy dining room, in a vertical format for stories." },
    { title: "One consistent look", body: "The same hero product across all 17 images, so the catalog reads as one restaurant." },
  ],
};

export default function RestoranLoulouPage() {
  return (
    <WorkCaseStudy
      slug="restoran-loulou"
      eyebrow="AI Product Visuals · Sample catalog"
      title={
        <>
          A full brunch campaign, <Emphasis>without a single set-up.</Emphasis>
        </>
      }
      lead="A sample AI visual catalog made for Restoran Loulou: its brunch and specialty coffee rendered as studio menu shots, styled lifestyle scenes and candid dining-room snaps, all without a physical set-up."
      facts={FACTS}
      hero={{
        ratio: "4/5",
        images: [
          { src: `${IMG}/studio-01.jpg`, alt: "AI render: croissant with a latte and iced coffee on a window table" },
          { src: `${IMG}/lifestyle-breakfast-linen.jpg`, alt: "AI render: croissant with berries on linen" },
          { src: `${IMG}/candid-01.jpg`, alt: "AI render in a candid style: croissant and coffee in a busy dining room" },
        ],
      }}
      meta={META}
      starting={STARTING}
      approach={APPROACH}
      gallery={GALLERY}
      process={PROCESS}
      delivered={DELIVERED}
      cta={{
        title: "Want visuals like these without a shoot?",
        subtitle: "Get a quote. Tell us what you serve and where it's listed, and we'll be straight with you about what AI visuals can do for it.",
      }}
    />
  );
}
