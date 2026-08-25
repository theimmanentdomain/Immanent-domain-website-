import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Immanent Domain — Public Index",
  description: "The public index of The Immanent Domain: films, publications, performances, projects, texts, documents, and archive.",
  openGraph: {
    title: "The Immanent Domain — Public Index",
    description: "The public index of The Immanent Domain: films, publications, performances, projects, texts, documents, and archive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Immanent Domain — Public Index",
    description: "The public index of The Immanent Domain: films, publications, performances, projects, texts, documents, and archive.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

