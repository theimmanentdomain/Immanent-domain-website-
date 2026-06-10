import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Immanent Domain",
  description: "An independent magazine of culture, criticism, and ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#000" }}>
      <body>
        <div className="site-wrapper">
          <Nav />
          <main>{children}</main>
          <footer className="site-footer">
            &copy; {new Date().getFullYear()} Immanent Domain. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
