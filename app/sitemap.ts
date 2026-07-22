import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, priority: 1, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/produkt`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/demo`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/dla-instytucji`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/pomoc-teraz`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/baza-wiedzy`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/misja`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/polityka-prywatnosci`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${siteUrl}/zasady-korzystania`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((route) => ({ ...route, lastModified }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/baza-wiedzy/${article.slug}`,
    lastModified,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...articleRoutes];
}
