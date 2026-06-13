"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/magazine", label: "Magazine" },
  { href: "/projects", label: "Projects" },
  { href: "/archive", label: "Archive" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      <Link href="/" className="site-nav__mark" aria-label="The Immanent Domain">
        <Image src="/imdo-logo.png" alt="" width={28} height={28} />
      </Link>
      {primaryLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href || pathname.startsWith(href + "/") ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
