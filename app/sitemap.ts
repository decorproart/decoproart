import type { MetadataRoute } from "next";
import { locales, posts, projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://decoproart.com";
  const staticRoutes = ["", "/services", "/portfolio", "/blog", "/about", "/contacts"];
  return locales.flatMap((locale) => [
    ...staticRoutes.map((path) => ({ url: `${base}/${locale}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${base}/${locale}/portfolio/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...posts.map((post) => ({ url: `${base}/${locale}/blog/${post.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ]);
}
