import type { MetadataRoute } from "next";
import { projects, site } from "@/content/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.baseUrl;

  const routes = ["/", "/work", "/experience", "/about", "/contact", "/resume"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
