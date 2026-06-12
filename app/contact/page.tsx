export default function ContactPage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Contact</h1>

      <div className="prose-block">
        <p>
          <a href="mailto:theimmanentdomain@gmail.com">
            theimmanentdomain@gmail.com
          </a>
        </p>

        <hr />

        <p>
          <span className="section-label">Submissions</span>
          Subject line:{" "}
          <a href="mailto:theimmanentdomain@gmail.com?subject=SUBMISSION - The Scene Made Me Do It">
            SUBMISSION — The Scene Made Me Do It
          </a>
          <br />
          See the{" "}
          <a href="/submissions">submissions page</a>{" "}
          before writing.
        </p>

        <p>
          <span className="section-label">Project Inquiry</span>
          Subject line:{" "}
          <a href="mailto:theimmanentdomain@gmail.com?subject=PROJECT INQUIRY">
            PROJECT INQUIRY
          </a>
        </p>

        <p>
          <span className="section-label">Event Inquiry</span>
          Subject line:{" "}
          <a href="mailto:theimmanentdomain@gmail.com?subject=EVENT INQUIRY">
            EVENT INQUIRY
          </a>
        </p>

        <p>
          <span className="section-label">General</span>
          Subject line:{" "}
          <a href="mailto:theimmanentdomain@gmail.com?subject=IMMANENT DOMAIN">
            IMMANENT DOMAIN
          </a>
        </p>

        <hr />

        <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
          We read everything. We cannot guarantee a reply to every message.
        </p>
      </div>
    </div>
  );
}
