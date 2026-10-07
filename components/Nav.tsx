"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/osint", label: "OSINT" },
  { href: "/events", label: "Events" },
  { href: "/magazine", label: "Magazine" },
  { href: "/archive", label: "Archive" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link href="/" className="site-nav__mark" aria-label="The Immanent Domain">
        <Image src="/imdo-logo.png" alt="" width={28} height={28} />
        <span>THE IMMANENT DOMAIN</span>
      </Link>
      {primaryLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href || pathname.startsWith(href + "/") ? "active" : ""}
          aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
