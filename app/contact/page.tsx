export default function ContactPage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Contact</h1>

      <div className="prose-block">
        <p>
          For general inquiries, correspondence, and press:{" "}
          <a href="mailto:hello@immanentdomain.com">hello@immanentdomain.com</a>
        </p>

        <p>
          For submissions:{" "}
          <a href="mailto:submissions@immanentdomain.com">
            submissions@immanentdomain.com
          </a>
          . Please review the{" "}
          <a href="/submissions">submissions guidelines</a> before writing.
        </p>

        <hr />

        <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
          We read all correspondence. We cannot guarantee individual replies.
        </p>
      </div>
    </div>
  );
}
