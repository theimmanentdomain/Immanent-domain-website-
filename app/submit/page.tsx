export default function SubmitPage() {
  const categories = [
    "Persona", "Conversation", "Downtown Anthropology", "Artificial Intelligence",
    "Performance", "Intermedia", "Field Reports", "Noir Documents",
    "False Neighborhoods", "Criticism", "Ritual Technologies",
  ];

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <h1 className="page-title">Submit</h1>

        <div className="prose-block">
          <p>
            The magazine is selective. It publishes writing, image, and hybrid work that has something
            at stake. Competence is not sufficient. The work must be doing something that only it can do.
          </p>
          <p>
            Essays, fragments, field reports, interviews, noir documents, posters, and forms that
            do not fit existing categories are all in scope. We are not interested in work that
            is primarily demonstrating its references.
          </p>

          <hr />

          <span className="section-label">Categories</span>
          <ul className="submit-categories">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>

          <hr />

          <p>
            Send inquiries and submissions to{" "}
            <a href="mailto:theimmanentdomain@gmail.com?subject=Submission">
              theimmanentdomain@gmail.com
            </a>
            {" "}with the subject line <em>Submission</em> and the category in the body.
          </p>
          <p style={{ color: "var(--fg-dim)", fontSize: "0.88rem" }}>
            Response time varies. Work is read. Silence is not indifference.
          </p>
        </div>
      </div>
    </div>
  );
}
