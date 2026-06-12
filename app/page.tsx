import Link from "next/link";

export default function Home() {
  return (
    <div className="page-body">
      <div className="masthead">
        <h1 className="masthead__title">Immanent Domain</h1>
        <div className="masthead__rule" />
        <p className="masthead__sub">New York</p>
      </div>

      <hr />

      <div className="prose-block" style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px" }}>
        <p>
          Immanent Domain is an intermedia institution oriented toward a single
          task: to provide a response to the grand depressive miasma of the
          present.
        </p>
        <p>
          It produces the magazine <em>The Scene Made Me Do It</em>, along with
          performances, films, and public programs. Writing, image, sound,
          performance, design, publication, and atmosphere enter into one living
          corpus.
        </p>
        <p>
          The Immanent Domain enforces itself through force majeure: through
          atmosphere, symbol, event, attention, and felt inevitability.
        </p>
        <p>
          <Link href="/magazine">Read Issue One &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
