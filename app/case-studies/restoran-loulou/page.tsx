import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Restoran Loulou: AI Product Visuals | Social Catalyst Case Study",
  description:
    "An AI visual catalog for Restoran Loulou: 17 studio, lifestyle and candid visuals of its brunch and specialty coffee for delivery apps, Instagram and story ads, built without a physical set-up.",
};

const IMG = "/images/case-studies/restoran-loulou";

// Every image on this page is AI-generated, and the alt text says so: the
// candid set is built to look like guests' photos, so it must never read as
// real ones.
const FACTS = [
  { value: "17 visuals", label: "Studio, lifestyle and candid AI renders" },
  { value: "3 packages", label: "Delivery listings, Instagram and story ads" },
  { value: "No set-up", label: "Every scene built with AI, no props or set" },
];

const META = [
  { label: "Brand", value: "Restoran Loulou, brunch & specialty coffee" },
  { label: "Output", value: "AI visual catalog" },
  { label: "Scope", value: "Studio · Lifestyle · Candid" },
  { label: "Year", value: "2026" },
];

const STARTING = {
  title: "Brunch and coffee sell on how they look.",
  paragraphs: [
    "Restoran Loulou serves brunch, specialty coffee and cocktails, and the food has to look as good on screen as on the table. The usual route is a styled shoot per placement. This catalog builds magazine-grade visuals with AI instead, without a physical set-up.",
  ],
  constraints: [
    { title: "Three placements, three looks", body: "Listings want studio shots, Instagram styled scenes, story ads a guest's phone look." },
    { title: "No set, no stylist", body: "Every scene, from linen breakfast to busy dining room, built without props or a set." },
    { title: "One product, one brand", body: "The hero product stays the same in every image, so it reads as one restaurant." },
  ],
  objective:
    "One consistent, magazine-grade look for Loulou's menu across every channel, without a shoot.",
};

const APPROACH = {
  title: "Four decisions behind the catalog.",
  items: [
    { title: "One hero product", body: "A single croissant carries the catalog, so scenes can change while the brand stays recognisable." },
    { title: "Studio first", body: "Crisply lit menu shots first: the delivery listing is where customers decide." },
    { title: "Scenes, not backdrops", body: "Breakfast on linen, a latte beside a book, a pavement table, a café counter." },
    { title: "Candid on purpose", body: "The raw package looks like a guest's phone photo, for Meta and TikTok stories." },
  ],
};

const GALLERY = {
  title: "A full campaign, without a set.",
  lead: "Every image here is AI-generated, in three packages.",
  caption: "Package 1 · Studio assets",
  note: "Clean backgrounds and product lighting, for Wolt, Bolt Food and web menus.",
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
      note: "Styled breakfast tables and café scenes, for Instagram.",
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
      note: "Candid-style renders for Meta and TikTok stories. These are AI-generated, not guests' photos.",
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
    { title: "One hero product", body: "The croissant is fixed first." },
    { title: "Studio set", body: "Crisp menu shots for delivery apps and web." },
    { title: "Lifestyle scenes", body: "Styled scenes for Instagram." },
    { title: "Candid snaps", body: "Phone-style shots for stories." },
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
    { title: "Studio e-commerce visuals", body: "9 clean, crisply lit renders for Wolt, Bolt Food and web menus." },
    { title: "Lifestyle campaign imagery", body: "4 styled scenes for Instagram." },
    { title: "Candid raw assets", body: "4 AI guest-style snaps, vertical for stories." },
    { title: "One consistent look", body: "The same hero product across all 17 images." },
  ],
};

export default function RestoranLoulouPage() {
  return (
    <WorkCaseStudy
      slug="restoran-loulou"
      eyebrow="AI Product Visuals"
      title={
        <>
          A full brunch campaign, <Emphasis>without a single set-up.</Emphasis>
        </>
      }
      lead="An AI visual catalog for Restoran Loulou: brunch and coffee as studio, lifestyle and candid shots, without a physical set-up."
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
        subtitle: "Get a quote. We'll tell you straight what AI visuals can do for your menu.",
      }}
    />
  );
}
