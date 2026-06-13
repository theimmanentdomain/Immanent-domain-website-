import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit",
  description: "The Immanent Domain magazine accepts work that contains evidence of life, pressure, voice, intelligence, and necessity.",
};

const categories = [
  "Essays",
  "Field Reports",
  "Conversations",
  "Images",
  "Performance Documents",
  "Noir Documents",
  "Criticism",
  "Fragments",
  "Useful Trouble",
];

export default function SubmitPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <h1 className="page-title">Submit</h1>
        </div>

        <div className="prose-block">
          <p>
            The magazine is selective. Work must contain evidence of life, pressure, voice, intelligence, and necessity.
            Competence without necessity is not sufficient.
          </p>
          <p>
            The magazine publishes writing, image, and hybrid work across eleven categories.
            It is interested in what only a particular piece can do.
            Demonstrating references is not the work.
          </p>

          <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

          <span className="section-label">Accepted Forms</span>
          <ul className="submit-categories">
            {categories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>

          <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />

          <p>
            Send to{" "}
            <a href="mailto:theimmanentdomain@gmail.com?subject=Submission">
              theimmanentdomain@gmail.com
            </a>{" "}
            with the subject line <em>Submission</em> and the category in the body.
          </p>
          <p style={{ color: "var(--fg-dim)", fontSize: "var(--text-sm)" }}>
            Response time varies. Work is read.
          </p>
        </div>
      </div>
    </div>
  );
}
