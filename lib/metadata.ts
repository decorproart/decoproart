import type { Metadata } from "next";
import type { Locale } from "@/lib/site-data";

export function localizedMetadata(
  locale: Locale,
  title: string,
  description: string,
  path = "",
  image = "/og.png",
): Metadata {
  const canonical = `/${locale}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: `/ru${path}`,
        en: `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      title,
      description,
      url: canonical,
      siteName: "DECOPROART",
      images: [{ url: image, width: 1731, height: 909, alt: "DECOPROART" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
