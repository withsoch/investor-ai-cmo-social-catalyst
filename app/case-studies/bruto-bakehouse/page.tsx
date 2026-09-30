import type { Metadata } from "next";
import { WorkCaseStudy } from "@/components/WorkCaseStudy";
import { Emphasis } from "@/components/ui/Emphasis";

export const metadata: Metadata = {
  title: "Bruto Bakehouse: AI Product Visuals | Social Catalyst Case Study",
  description:
    "A sample AI visual catalog for Bruto Bakehouse: two phone photos of their cookies turned into 17 studio, lifestyle and candid visuals for delivery apps, Instagram and story ads, with no shoot.",
};

const IMG = "/images/case-studies/bruto-bakehouse";

// Every image on this page except the two references is AI-generated, and the
// alt text says so: the candid set is built to look like customer photos, so
// it must never read as real ones.
const FACTS = [
  { value: "2 photos in", label: "Raw smartphone shots of two cookies, the only inputs" },
  { value: "17 visuals out", label: "Studio, lifestyle and candid renders built from them" },
  { value: "3 packages", label: "One each for delivery listings, Instagram and story ads" },
];

const META = [
  { label: "Brand", value: "Bruto Bakehouse, cookie bakery" },
  { label: "Output", value: "AI visual catalog" },
  { label: "Scope", value: "Studio · Lifestyle · Candid" },
  { label: "Engagement", value: "Sample catalog, made on spec, 2026" },
];

const STARTING = {
  title: "Every new cookie needs a new set of pictures.",
  paragraphs: [
    "A bakery like Bruto lives on its menu, and every flavour needs images for three very different places: a clean shot for the Wolt and Bolt Food listing, something warmer for Instagram, and something that looks real enough to work in a story ad.",
    "The traditional route is a shoot for every drop: a photographer, a stylist, props and a day of production. This catalog tests a different one. Start from a quick phone photo of the cookie, and build everything else with AI, with zero logistical overhead.",
  ],
  constraints: [
    { title: "Three channels, three looks", body: "Delivery apps want clean studio shots, Instagram wants lifestyle, and story ads work best when they look candid." },
    { title: "Shoots don't scale with flavours", body: "Booking a set every time a new cookie launches is slow and expensive, so new flavours go out with weak pictures." },
    { title: "The cookie has to stay the cookie", body: "Customers order what they see. Every render has to show the real bake, not a generic cookie." },
  ],
  objective:
    "Turn two phone photos into a complete visual package for every channel, without a shoot, and without the cookie changing from one image to the next.",
};

const APPROACH = {
  title: "Four steps from snapshot to catalog.",
  items: [
    { title: "Start from a phone photo", body: "The input is a quick smartphone shot of a fresh bake, in its box or on a table. No lighting kit, no styling, no set." },
    { title: "Lock the product's identity", body: "The cookie's recipe identity is locked in first, so it reads as the same bake in every scene it is placed in." },
    { title: "Build the rest around it", body: "Surfaces, props, light and setting are constructed around the locked cookie, in the exact aspect ratio each placement needs." },
    { title: "Package by channel", body: "The renders are grouped into three packages, each tuned to where it will run: the listing, the feed or the story ad." },
  ],
  closer: "Every image in the catalog below is AI-generated from the two phone photos further down this page.",
};

const GALLERY = {
  title: "Seventeen visuals, no shoot.",
  lead: "All AI-generated from two raw phone photos, and grouped into the three packages the catalog was built around.",
  caption: "Package 1 · Studio assets",
  note: "Clean backgrounds, crisp textures and professional product lighting, in the original 4:5 portrait ratio. Built for Wolt, Bolt Food and web menu listings.",
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
      note: "The cookies placed in warm kitchens, cosy breakfast tables and styled café counters: visual stories that build brand desire on Instagram.",
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
      note: "Candid-style renders that look like organic customer snaps, for Meta and TikTok stories where raw authenticity builds trust. These are AI-generated, not customer photos.",
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
  lead: "These are the only real photos on the page. Everything in the catalog above was built from them.",
  image: { src: `${IMG}/references.jpg`, alt: "The two raw phone photos: a double chocolate cookie in its Bruto box, and a classic New York cookie in its box on a table" },
  ratio: "1224/636",
  parts: [
    { title: "Reference A: double chocolate, in the box", body: "A raw phone shot of the double chocolate cookie in Bruto's own packaging." },
    { title: "Reference B: classic New York, on a table", body: "A second raw shot of the classic New York cookie, in its box on a table." },
    { title: "What gets locked", body: "The recipe identity of each cookie: what a customer recognises when the order arrives." },
    { title: "What gets built", body: "Everything else: the surface, props, light, scene and framing, in the aspect ratio each placement needs." },
  ],
};

const PROCESS = {
  title: "Phone photo in, full catalog out.",
  steps: [
    { title: "Phone photo", body: "A quick smartphone shot of a fresh bake. No set-up needed." },
    { title: "Identity lock", body: "The cookie's recipe identity is fixed before anything else is generated." },
    { title: "Scene build", body: "Studio, lifestyle and candid scenes built around it, in the right ratio." },
    { title: "Package", body: "Renders grouped by channel: listings, the feed and story ads." },
  ],
  standards: [
    "Original 4:5 portrait ratio preserved",
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
    { title: "Studio e-commerce visuals", body: "9 renders across the range, on clean backgrounds with professional product lighting." },
    { title: "Lifestyle campaign imagery", body: "5 scenes: a kitchen morning, an old town café table, a coffee-side spread, a bakery set-up and a rustic wood shot." },
    { title: "Candid raw assets", body: "3 customer-style snaps: at the counter, in the box and beside a coffee." },
    { title: "Channel-ready formats", body: "Every render built in the ratio its placement needs, ready for listings and the feed." },
  ],
};

export default function BrutoBakehousePage() {
  return (
    <WorkCaseStudy
      slug="bruto-bakehouse"
      eyebrow="AI Product Visuals · Sample catalog"
      title={
        <>
          Two phone photos in. <Emphasis>Seventeen visuals out.</Emphasis>
        </>
      }
      lead="A sample AI visual catalog made for Bruto Bakehouse: two quick phone photos of their cookies, turned into studio, lifestyle and candid assets for delivery apps, Instagram and story ads, without a shoot."
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
        subtitle: "Get a quote. Tell us what you sell and where it's listed, and we'll be straight with you about what AI visuals can do for it.",
      }}
    />
  );
}
