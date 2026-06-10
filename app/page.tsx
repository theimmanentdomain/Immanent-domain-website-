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
          Immanent Domain is a cultural house for artists, neighbors,
          operators, and witnesses.
        </p>
        <p>
          The magazine is <em>The Scene Made Me Do It</em>. The first issue
          gathers essays, interviews, fragments, reports, and alibis from the
          rooms where culture still happens before it becomes content.
        </p>
        <p>
          This is not a platform.<br />
          This is headquarters.
        </p>
        <p>
          <Link href="/magazine">Read Issue One &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
