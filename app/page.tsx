import Link from "next/link";
import ClueText from "@/components/ClueText";

export default function Home() {
  return (
    <>
      <div className="masthead">
        <h1 className="masthead__title">Immanent Domain</h1>
        <div className="masthead__rule" />
        <p className="masthead__sub">A bastion for pirate artists in the Art War.</p>
      </div>

      <div className="site-wrapper">
        <div className="entrance-grid">
          <Link href="/magazine" className="entrance-block">
            <span className="entrance-block__label">Publication</span>
            <div className="entrance-block__title">Forget It, Jake, It&apos;s Chinatown</div>
            <div className="entrance-block__desc">The magazine. On persona, conversation, and the city as a haunted operating system.</div>
          </Link>
          <Link href="/map" className="entrance-block">
            <span className="entrance-block__label">Territory</span>
            <div className="entrance-block__title">The Map</div>
            <div className="entrance-block__desc">A Kabbalistic mapping of New York. Ten districts plus one hidden. Outer boroughs listed separately.</div>
          </Link>
          <Link href="/projects" className="entrance-block">
            <span className="entrance-block__label">Production</span>
            <div className="entrance-block__title">Projects</div>
            <div className="entrance-block__desc">Performances, films, and public programs. Some completed. Some in motion. Some in development.</div>
          </Link>
          <Link href="/submit" className="entrance-block">
            <span className="entrance-block__label">Contribution</span>
            <div className="entrance-block__title">Submit</div>
            <div className="entrance-block__desc">The magazine accepts writing, image, and hybrid work across its categories.</div>
          </Link>
        </div>

        <p style={{ fontSize: "0.8rem", color: "var(--fg-dim)", textAlign: "center", letterSpacing: "0.06em" }}>
          An intermedia institution operating in New York. Known in files as{" "}
          <ClueText token="jurisdiction">IMDO. The institution predates jurisdiction.</ClueText>
        </p>
      </div>
    </>
  );
}
