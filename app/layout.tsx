import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Immanent Domain",
  description: "Forget It, Jake, It's Chinatown. An intermedia institution based in New York.",
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
        </div>
        <main>{children}</main>
        <div className="site-wrapper">
          <footer className="site-footer">
            &copy; {new Date().getFullYear()} Immanent Domain
          </footer>
        </div>
      </body>
    </html>
  );
}
