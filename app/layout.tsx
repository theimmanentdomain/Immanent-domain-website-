import type { Metadata } from "next";
import { identity, siteUrl } from "@/lib/seo";
import "./globals.css";
import "./agency.css";
import "./panels.css";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Immanent Domain | New York Arts Agency",
  description: "The Immanent Domain (IMDO) is an independent arts agency in New York. Publications, events, and collaborative projects, founded by Edward Pankov.",
  robots: { index: process.env.NODE_ENV === "production" && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production"), follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identity).replace(/</g, "\\u003c") }} /><Nav />{children}<SiteFooter /></body></html>;
}
