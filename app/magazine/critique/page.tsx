export default function CritiquePage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Critique</h1>

      <div className="prose-block" style={{ marginBottom: "3rem" }}>
        <p>
          Critique is a first-class category at Immanent Domain. It is not review in the
          consumer sense — not a guide to what to see or skip. It is close reading of work
          in the world: performance, film, text, image, event. The standard is precision,
          consequence, and the capacity to say something true about what the work is doing.
        </p>
        <p>
          Criticism that earns its place changes how the reader sees the work. It is an act
          of transmission in its own right — a secondary artifact that, at its best, does to
          the reader what the original work did, or reveals why it failed to.
        </p>
        <p>
          Critique pieces are published in the magazine and archived here.
          Submissions are open. See the{" "}
          <a href="/submissions">submissions page</a> for guidelines.
        </p>
      </div>

      <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.5rem" }}>
        <span className="section-label">Forthcoming</span>
        <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem", marginTop: "0.5rem" }}>
          Critique pieces will appear here as they are published.
        </p>
      </div>
    </div>
  );
}
