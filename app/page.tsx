import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClueText from "@/components/ClueText";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Immanent Domain",
  description: "An intermedia institution based in New York.",
};

export default function Home() {
  return (
    <>
      <div className="masthead">
        <Image
          src="/imdo-logo.png"
          alt="The Immanent Domain"
          width={110}
          height={110}
          className="masthead__logo"
          priority
        />
        <h1 className="masthead__title">The Immanent Domain</h1>
        <div className="masthead__rule" />
        <p className="masthead__sub">{site.tagline}</p>
      </div>

      <div className="site-wrapper">
        <div className="doctrine-block">
          {site.doctrine.map((line) => (
            <p key={line} className="doctrine-line">{line}</p>
          ))}
        </div>

        <div className="entrance-grid">
          <Link href="/magazine" className="entrance-block">
            <span className="entrance-block__label">Publication</span>
            <div className="entrance-block__title">The Scene Made Me Do It</div>
            <div className="entrance-block__desc">The magazine. Persona, conversation, and the city as a haunted operating system.</div>
          </Link>
          <Link href="/projects/cryptographic-map" className="entrance-block">
            <span className="entrance-block__label">Territory</span>
            <div className="entrance-block__title">The Cryptographic Map Project</div>
            <div className="entrance-block__desc">New York as Kabbalistic terrain. Ten districts plus one hidden.</div>
          </Link>
          <Link href="/gate" className="entrance-block">
            <span className="entrance-block__label">Initiation</span>
            <div className="entrance-block__title">The Gate</div>
            <div className="entrance-block__desc">A riddle. One answer. Not the answer you expect.</div>
          </Link>
          <Link href="/archive" className="entrance-block">
            <span className="entrance-block__label">Record</span>
            <div className="entrance-block__title">Archive</div>
            <div className="entrance-block__desc">Documents, fragments, field reports, noir records, and unclassifiable material.</div>
          </Link>
        </div>

        <nav className="home-links">
          <Link href="/magazine" className="home-link">Magazine</Link>
          <Link href="/map" className="home-link">Map</Link>
          <Link href="/projects" className="home-link">Projects</Link>
          <Link href="/events" className="home-link">Events</Link>
          <Link href="/archive" className="home-link">Archive</Link>
          <Link href="/submit" className="home-link">Submit</Link>
          <Link href="/about" className="home-link">About</Link>
        </nav>

        <p className="home-footnote">
          {site.institutionalLine}{" "}
          <ClueText token="jurisdiction">The institution predates jurisdiction.</ClueText>{" "}
          Known in files as IMDO.
        </p>
      </div>
    </>
  );
}
