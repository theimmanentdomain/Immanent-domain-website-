export default function SubmissionsPage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Submissions</h1>

      <div className="prose-block">
        <p>
          Submit work for <em>The Scene Made Me Do It</em>.
        </p>

        <p>
          We are looking for writing and documents that understand the room
          they came from.
        </p>

        <p>
          Send essays, reports, interviews, fragments, reviews, alibis, photo
          essays, performance documents, and other records of cultural life as
          it actually occurs.
        </p>

        <p>
          Tell us what happened.<br />
          Tell us who was there.<br />
          Tell us what the room wanted.<br />
          Tell us what the official story will miss.
        </p>

        <hr />

        <p>
          <span className="section-label">What we accept</span>
          Essays — Scene reports — Interviews — Reviews — Critique —
          Fragments — Photo essays — Performance documents — Confessions —
          Alibis — Arguments — Marginalia
        </p>

        <hr />

        <p>
          <span className="section-label">What we want</span>
          Work with stakes, atmosphere, precision, and witness.
          No generic arts writing. No PR copy. No lifestyle coverage.
          No fake edge. No bland praise.
        </p>

        <hr />

        <p>
          <span className="section-label">How to submit</span>
          Send to{" "}
          <a href="mailto:theimmanentdomain@gmail.com?subject=SUBMISSION - The Scene Made Me Do It">
            theimmanentdomain@gmail.com
          </a>
          {" "}with subject line:{" "}
          <strong style={{ fontWeight: "normal", fontStyle: "italic" }}>
            SUBMISSION — The Scene Made Me Do It
          </strong>
        </p>

        <p>
          Include your name, the title of the piece, its form (essay, fragment,
          interview, etc.), and approximate length. No biography required at
          submission stage.
        </p>

        <p>
          We read on a rolling basis. Response time is four to eight weeks.
          We accept simultaneous submissions. Please notify us immediately
          if your work is accepted elsewhere.
        </p>
      </div>
    </div>
  );
}
