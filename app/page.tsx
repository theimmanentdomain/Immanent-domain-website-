import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClueText from "@/components/ClueText";

export const metadata: Metadata = {
  title: "The Immanent Domain",
  description: "A New York-rooted art collective, magazine, archive, and initiatory game.",
};

export default function Home() {
  return (
    <>
      <div className="masthead">
        <Image
          src="/imdo-logo.jpg"
          alt="The Immanent Domain"
          width={110}
          height={110}
          className="masthead__logo"
          priority
        />
        <h1 className="masthead__title">The Immanent Domain</h1>
        <div className="masthead__rule" />
        <p className="masthead__sub">A bastion for pirate artists in the Art War.</p>
      </div>

      <div className="site-wrapper">
        <div className="entrance-grid">
          <Link href="/magazine" className="entrance-block">
            <span className="entrance-block__label">Publication</span>
            <div className="entrance-block__title">Forget It, Jake, It&apos;s Chinatown</div>
            <div className="entrance-block__desc">The magazine. Persona, conversation, and the city as a haunted operating system.</div>
          </Link>
          <Link href="/map" className="entrance-block">
            <span className="entrance-block__label">Territory</span>
            <div className="entrance-block__title">The Map</div>
            <div className="entrance-block__desc">New York as Kabbalistic terrain. Ten districts plus one hidden.</div>
          </Link>
          <Link href="/projects" className="entrance-block">
            <span className="entrance-block__label">Production</span>
            <div className="entrance-block__title">Projects</div>
            <div className="entrance-block__desc">Performances, films, and public programs.</div>
          </Link>
          <Link href="/submit" className="entrance-block">
            <span className="entrance-block__label">Offering</span>
            <div className="entrance-block__title">Submit</div>
            <div className="entrance-block__desc">The magazine accepts work that contains evidence of life.</div>
          </Link>
        </div>

        <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", textAlign: "center", letterSpacing: "0.1em", paddingBottom: "var(--space-xl)" }}>
          An intermedia institution operating in New York.{" "}
          Known in files as IMDO.{" "}
          <ClueText token="jurisdiction">The institution predates jurisdiction.</ClueText>
        </p>
      </div>
    </>
  );
}
