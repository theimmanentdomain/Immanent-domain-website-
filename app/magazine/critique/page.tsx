export default function CritiquePage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Critique</h1>

      <div className="prose-block" style={{ marginBottom: "3rem" }}>
        <p>
          Critique is a first-class category at Immanent Domain. It is close
          reading of work in the world: performance, film, text, image, event.
          The standard is precision, consequence, and the capacity to say
          something true about what the work is doing.
        </p>
        <p>
          Through rigorous critique, Immanent Domain tests whether a work
          possesses spirit, craft, transmission, coherence, consequence, and
          contribution. It reads works as dialectical counterpoint to one
          another. It asks what each piece adds, clarifies, intensifies, or
          corrects.
        </p>
        <p>
          In this framework, intention holds limited authority. Intention
          changes. The impact of a completed work stabilizes once it enters the
          world. The task of criticism is to identify whether contact has
          occurred and whether the work opens onto essence rather than merely
          presenting surface.
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
