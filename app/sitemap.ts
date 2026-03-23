import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcus-wiman.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified },
    { url: `${siteUrl}/flowscape`, lastModified },
    { url: `${siteUrl}/sxc`, lastModified },
    { url: `${siteUrl}/projekt-vita`, lastModified },
  ];
}
