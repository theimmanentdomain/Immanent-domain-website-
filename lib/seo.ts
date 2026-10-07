import type { Metadata } from "next";
import { site } from "./site";
export const siteUrl = "https://immanent-domain-website.vercel.app";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = siteUrl + (path === "/" ? "/" : path.replace(/\/$/, "") + "/");
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "The Immanent Domain", type: "website", locale: "en_US" },
    twitter: { card: "summary", title, description },
  };
}
export const identity = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": siteUrl + "/#agency", name: site.name,
      alternateName: ["Immanent Domain", "IMDO"], url: siteUrl + "/",
      description: "An independent arts agency in New York, founded by Edward Pankov. Publications, live events, and collaborative art projects.",
      email: site.contact, logo: siteUrl + "/imdo-logo.png",
      founder: { "@type": "Person", name: "Edward Pankov" },
      sameAs: [site.social.instagram, site.social.substack, site.social.youtube] },
    { "@type": "WebSite", "@id": siteUrl + "/#website", url: siteUrl + "/",
      name: site.name, alternateName: ["Immanent Domain", "IMDO"],
      publisher: { "@id": siteUrl + "/#agency" } },
  ],
};
