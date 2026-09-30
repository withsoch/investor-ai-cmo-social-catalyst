import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

import { SITE_URL } from "@/lib/seo";

/**
 * Every page and post, for search engines and AI crawlers. Built from the same
 * content the pages render from, so a new post is in the sitemap the moment
 * it is committed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "", "/about", "/services", "/packages", "/case-studies", "/case-studies/biola-babawale", "/case-studies/gaia-antonescu", "/case-studies/kaitlin-malaspina", "/case-studies/shahzad-akhtar", "/case-studies/soch-social-media", "/case-studies/soch-landing-page", "/case-studies/etz-riz", "/case-studies/shaping-wealth", "/blog", "/audit", "/book",
    
  ].map((route) => ({ url: `${SITE_URL}${route}` }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    ...(p.date ? { lastModified: p.date } : {}),
  }));

  return [...pages, ...posts];
}
