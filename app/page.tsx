import Link from "next/link";

export default function Home() {
  return (
    <div className="page-body">
      <div className="masthead">
        <h1 className="masthead__title">Immanent Domain</h1>
        <div className="masthead__rule" />
        <p className="masthead__sub">An independent magazine of culture, criticism, and ideas</p>
      </div>

      <hr />

      <div className="prose-block" style={{ margin: "0 auto", textAlign: "center", maxWidth: "560px" }}>
        <p>
          Immanent Domain is a journal for writing that refuses easy categories.
          We publish criticism, essays, fiction, and reported work on culture,
          politics, and the texture of lived experience.
        </p>
        <p>
          Our first issue,{" "}
          <em>The Scene Made Me Do It</em>, is available now.
        </p>
        <p>
          <Link href="/magazine">Read Issue One &rarr;</Link>
        </p>
      </div>
    </div>
  );
}
