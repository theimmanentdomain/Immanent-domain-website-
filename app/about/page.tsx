export default function About() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <h1 className="page-title">About</h1>

        <div className="prose-block">
          <p>
            Immanent Domain is an intermedia institution based in New York. It publishes the magazine
            <em> Forget It, Jake, It&apos;s Chinatown</em> and produces performances, films, and public programs.
          </p>
          <p>
            Writing, image, sound, performance, design, publication, and atmosphere enter into one living corpus.
            The institution does not separate criticism from production, or theory from practice. Each project
            is also a document. Each document is also a project.
          </p>
          <p>
            The name comes from the legal doctrine of eminent domain, the state&apos;s power to seize private
            property for public use. Immanent Domain inverts this: a force that operates from within,
            that cannot be seized because it was never external to begin with.
          </p>
          <p>
            The institution takes the art war seriously. It does not romanticize marginality. It intends
            to win on its own terms, which are different from the terms being offered.
          </p>
          <p>
            The full statement of intent is in the <a href="/manifesto">Declaration of Intent</a>.
            The map of the territory is at <a href="/map">The Map</a>.
          </p>

          <hr />

          <p style={{ fontSize: "0.88rem", color: "var(--fg-dim)" }}>
            Contact: <a href="mailto:theimmanentdomain@gmail.com">theimmanentdomain@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
