import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const baseUrl = "https://ai-engineering-hub-lovat.vercel.app";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      siteName: siteConfig.name,
      url: `${baseUrl}${path}`,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
