import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { jsonLd, SITE_URL as SEO_SITE_URL } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuditModalProvider } from "@/context/AuditModalContext";
import { AuditModal } from "@/components/AuditModal";
import { BookAutoOpen } from "@/components/BookAutoOpen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Geometric sans for headlines and the wordmark. Poppins is not a variable
// font on Google Fonts, so every weight we use has to be requested explicitly.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// The live domain. metadataBase resolves every canonical and og:url against
// this, so it has to match what the site is actually served on.
const SITE_URL = "https://www.withsocialcatalyst.com";

/** Who the site is, for search engines and AI answer engines. */
const SITE_ENTITY = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Social Catalyst",
  url: SEO_SITE_URL,
  description: "Social Catalyst is marketing on autopilot for B2B founders: LinkedIn and social posts written in your voice, approved with a swipe.",
  sameAs: ["https://www.linkedin.com/company/social-catalyst/"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logos/favicon-icon.png",
    shortcut: "/logos/favicon-icon.png",
    apple: "/logos/favicon-icon.png",
  },
  title: {
    default: "Social Catalyst: Marketing on autopilot for B2B founders",
    template: "%s",
  },
  description:
    "Social Catalyst writes and posts your LinkedIn and social in your voice. Add your website, swipe to approve, or run it on autopilot. From $149 a month.",
  keywords: [
    "AI LinkedIn ghostwriter",
    "LinkedIn content for founders",
    "AI social media marketing",
    "founder-led marketing",
    "B2B LinkedIn automation",
    "marketing on autopilot",
    "AI content in your voice",
  ],
  openGraph: {
    title: "Social Catalyst: Marketing on autopilot for B2B founders",
    description:
      "Social Catalyst writes and posts your LinkedIn and social in your voice. Add your website, swipe to approve, or run it on autopilot. From $149 a month.",
    url: SITE_URL,
    siteName: "Social Catalyst",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Catalyst: Marketing on autopilot for B2B founders",
    description:
      "Social Catalyst writes and posts your LinkedIn and social in your voice. Add your website, swipe to approve, or run it on autopilot. From $149 a month.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(SITE_ENTITY) }}
        />
        <AuditModalProvider>
          <BookAutoOpen />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AuditModal />
        </AuditModalProvider>
      </body>
    </html>
  );
}
