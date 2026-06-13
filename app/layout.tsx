import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "The Immanent Domain",
    template: "%s | The Immanent Domain",
  },
  description: "A New York-rooted art collective, magazine, archive, and initiatory game.",
  openGraph: {
    title: "The Immanent Domain",
    description: "A New York-rooted art collective, magazine, archive, and initiatory game.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: "#000" }}>
      <body>
        <div className="site-wrapper">
          <Nav />
        </div>
        <main>{children}</main>
        <div className="site-wrapper">
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
