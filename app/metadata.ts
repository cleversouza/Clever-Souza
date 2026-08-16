import type { Metadata } from "next";
import { routeSocialImage } from "./social-images";

const siteUrl = "https://www.cleversouza.com";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  keywords: string[] = [],
): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const socialImage = routeSocialImage(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: canonical,
      siteName: "Clever Souza",
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
