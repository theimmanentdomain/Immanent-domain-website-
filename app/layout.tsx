import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Immanent Domain",
  description: "The Immanent Domain is an independent cultural-intelligence agency and brokerage providing creative solutions for small business, cultural intelligence, and private consultation by request.",
  openGraph: {
    title: "The Immanent Domain",
    description: "Creative solutions for small business, cultural intelligence, and private consultation by request.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Immanent Domain",
    description: "Creative solutions for small business, cultural intelligence, and private consultation by request.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

