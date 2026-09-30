import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Bruto Bakehouse: AI Product Visuals | Social Catalyst Case Study",
  description:
    "An AI visual catalog for Bruto Bakehouse: two phone photos of their cookies turned into 17 studio, lifestyle and candid visuals for delivery apps, Instagram and story ads, with no shoot.",
};

const IMG = "/images/case-studies/bruto-bakehouse";

// Every image on this page except the two references is AI-generated, and the
// alt text says so: the candid set is built to look like customer photos, so
// it must never read as real ones.
const FACTS = [
  { value: "2 photos in", label: "Phone shots of two cookies, the only inputs" },
  { value: "17 visuals out", label: "Studio, lifestyle and candid AI renders" },
  { value: "3 packages", label: "Delivery listings, Instagram and story ads" },
];

const META = [
  { label: "Brand", value: "Bruto Bakehouse, cookie bakery" },
  { label: "Output", value: "AI visual catalog" },
  { label: "Scope", value: "Studio · Lifestyle · Candid" },
  { label: "Year", value: "2026" },
];

const STARTING = {
  title: "Every new cookie needs a new set of pictures.",
  paragraphs: [
    "Every Bruto flavour needs images for three places: a clean Wolt and Bolt Food listing, something warmer for Instagram, and something real-looking for story ads. The usual route is a shoot for every drop. This catalog starts from a phone photo and builds the rest with AI.",
  ],
  constraints: [
    { title: "Three channels, three looks", body: "Delivery apps want studio shots, Instagram lifestyle, story ads candid." },
    { title: "Shoots don't scale with flavours", body: "A shoot per new cookie is slow and expensive, so new flavours get weak pictures." },
    { title: "The cookie has to stay the cookie", body: "Customers order what they see, so every render must show the real bake." },
  ],
  objective:
    "Turn two phone photos into a package for every channel, with no shoot and the same cookie throughout.",
};

const APPROACH = {
  title: "Four steps from snapshot to catalog.",
  items: [
    { title: "Start from a phone photo", body: "A quick phone shot of a fresh bake, in its box or on a table. No lighting, styling or set." },
    { title: "Lock the product's identity", body: "The cookie's recipe identity is locked first, so it stays the same bake in every scene." },
    { title: "Build the rest around it", body: "Surfaces, props, light and setting are built around it, in each placement's ratio." },
    { title: "Package by channel", body: "Renders grouped into three packages: the listing, the feed and the story ad." },
  ],
  closer: "Every catalog image is AI-generated from the two phone photos below.",
};

const GALLERY = {
  title: "Seventeen visuals, no shoot.",
  lead: "All AI-generated from two phone photos, in three packages.",
  caption: "Package 1 · Studio assets",
  note: "Clean backgrounds and product lighting in 4:5, for Wolt, Bolt Food and web menus.",
  ratio: "4/5",
  columns: 3 as const,
  images: [
    { src: `${IMG}/studio-01.jpg`, alt: "AI render: chocolate chip cookie on white marble, shot from above" },
    { src: `${IMG}/studio-02.jpg`, alt: "AI render: close-up of a double chocolate cookie with milk chocolate chunks" },
    { src: `${IMG}/studio-03.jpg`, alt: "AI render: double chocolate cookie on white marble" },
    { src: `${IMG}/studio-04.jpg`, alt: "AI render: double chocolate cookie from above, with scattered chips" },
    { src: `${IMG}/studio-05.jpg`, alt: "AI render: close-up of a cookie with melted chocolate chunks" },
    { src: `${IMG}/studio-06.jpg`, alt: "AI render: chocolate chip cookie on marble in soft light" },
    { src: `${IMG}/studio-07.jpg`, alt: "AI render: close-up of a cookie topped with a chocolate-dipped banana slice" },
    { src: `${IMG}/studio-08.jpg`, alt: "AI render: banana and chocolate cookie from above, with banana chips" },
    { src: `${IMG}/studio-09.jpg`, alt: "AI render: banana and chocolate cookie in hard side light" },
  ],
  more: [
    {
      caption: "Package 2 · Lifestyle imagery",
      note: "Warm kitchens, breakfast tables and café counters, for Instagram.",
      ratio: "4/5",
      columns: 5 as const,
      images: [
        { src: `${IMG}/lifestyle-cozy-kitchen-morning.jpg`, alt: "AI render: cookies on a plate in morning kitchen light" },
        { src: `${IMG}/lifestyle-old-town-cafe-table.jpg`, alt: "AI render: cookies with lattes on an old town café table" },
        { src: `${IMG}/lifestyle-warm-coffee-side.jpg`, alt: "AI render: broken berry cookies on white linen" },
        { src: `${IMG}/lifestyle-artisanal-bakery-setup.jpg`, alt: "AI render: cookies on a wooden board in a bakery set-up" },
        { src: `${IMG}/lifestyle-rustic-wood.jpg`, alt: "AI render: cookies with chocolate drizzle on a rustic wooden table" },
      ],
    },
    {
      caption: "Package 3 · Raw assets",
      note: "Candid-style renders for Meta and TikTok stories. These are AI-generated, not customer photos.",
      ratio: "4/5",
      columns: 3 as const,
      images: [
        { src: `${IMG}/candid-shop-counter.jpg`, alt: "AI render in a candid style: a hand breaking a double chocolate cookie over its box" },
        { src: `${IMG}/candid-customer-box.jpg`, alt: "AI render in a candid style: a cookie in its box beside an iced coffee" },
        { src: `${IMG}/candid-coffee-side.jpg`, alt: "AI render in a candid style: two hands pulling apart a gooey cookie" },
      ],
    },
  ],
};

const ANATOMY = {
  label: "The input",
  title: "Two raw phone shots. That's the whole brief.",
  lead: "The only real photos on the page; the catalog above was built from them.",
  image: { src: `${IMG}/references.jpg`, alt: "The two raw phone photos: a double chocolate cookie in its Bruto box, and a classic New York cookie in its box on a table" },
  ratio: "1224/636",
  parts: [
    { title: "Reference A: double chocolate, in the box", body: "The double chocolate cookie in Bruto's packaging." },
    { title: "Reference B: classic New York, on a table", body: "The classic New York cookie, boxed, on a table." },
    { title: "What gets locked", body: "Each cookie's recipe identity, what a customer recognises." },
    { title: "What gets built", body: "Surface, props, light, scene and framing, in each placement's ratio." },
  ],
};

const PROCESS = {
  title: "Phone photo in, full catalog out.",
  steps: [
    { title: "Phone photo", body: "A quick shot of a fresh bake." },
    { title: "Identity lock", body: "Recipe identity fixed first." },
    { title: "Scene build", body: "Studio, lifestyle and candid scenes built around it." },
    { title: "Package", body: "Grouped for listings, feed and stories." },
  ],
  standards: [
    "Original 4:5 ratio kept",
    "Clean backgrounds, crisp textures",
    "Professional product lighting",
    "The same cookie in every render",
    "Built for Wolt, Bolt Food and web menus",
    "Candid style for Meta and TikTok stories",
    "No photographer, props or set",
  ],
};

const DELIVERED = {
  title: "What's in the catalog.",
  items: [
    { title: "Studio e-commerce visuals", body: "9 renders on clean backgrounds with product lighting." },
    { title: "Lifestyle campaign imagery", body: "5 scenes, from a kitchen morning to rustic wood." },
    { title: "Candid raw assets", body: "3 AI customer-style snaps for stories." },
    { title: "Channel-ready formats", body: "Each render in its placement's ratio." },
  ],
};

export default function BrutoBakehousePage() {
  return (
    <WorkCaseStudy
      slug="bruto-bakehouse"
      eyebrow="AI Product Visuals"
      title={
        <>
          Two phone photos in. <Emphasis>Seventeen visuals out.</Emphasis>
        </>
      }
      lead="An AI visual catalog for Bruto Bakehouse: two phone photos of their cookies, turned into studio, lifestyle and candid assets, without a shoot."
      facts={FACTS}
      hero={{
        ratio: "4/5",
        images: [
          { src: `${IMG}/studio-01.jpg`, alt: "AI render of a Bruto chocolate chip cookie on white marble" },
          { src: `${IMG}/reference-b-classic-new-york.jpg`, alt: "One of the two raw phone photos the catalog started from: a classic New York cookie" },
          { src: `${IMG}/lifestyle-old-town-cafe-table.jpg`, alt: "AI render: Bruto cookies on a café table with lattes" },
        ],
      }}
      meta={META}
      starting={STARTING}
      approach={APPROACH}
      gallery={GALLERY}
      anatomy={ANATOMY}
      process={PROCESS}
      delivered={DELIVERED}
      cta={{
        title: "Want your menu to look like this?",
        subtitle: "Get a quote. We'll tell you straight what AI visuals can do for your menu.",
      }}
    />
  );
}
