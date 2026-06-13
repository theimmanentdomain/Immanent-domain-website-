import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Observation format for The Immanent Domain field correspondents.",
};

const fields = [
  { label: "Sphere", note: "Which district or zone of the map" },
  { label: "Location", note: "Specific address or intersection" },
  { label: "Date", note: "Exact date of observation" },
  { label: "Observed fact", note: "What you saw, heard, or found. No interpretation." },
  { label: "Overheard phrase", note: "A verbatim fragment, if available" },
  { label: "Object", note: "One object that was present" },
  { label: "Interpretation", note: "What you think it means" },
  { label: "Question", note: "What the observation leaves open" },
];

export default function FieldNotesPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "640px" }}>
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Field Notes</h1>
          <p className="page-title__sub">
            Format for observation reports from the field. Eight fields. Brevity required.
          </p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xl)" }}>
          <p>
            Field notes are observation documents submitted by Immanent Domain correspondents.
            They are not essays. They are not opinions. They are structured observations
            submitted in the format below.
          </p>
          <p>
            The field is anywhere you pay attention outside the building.
          </p>
        </div>

        <table className="field-table" style={{ width: "100%", marginBottom: "var(--space-xl)" }}>
          <tbody>
            {fields.map(({ label, note }) => (
              <tr key={label} className="field-row">
                <td className="field-row__label">{label}</td>
                <td className="field-row__value" style={{ color: "var(--fg-dim)" }}>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="prose-block">
          <p>
            Send completed field notes to{" "}
            <a href="mailto:theimmanentdomain@gmail.com?subject=Field Note">theimmanentdomain@gmail.com</a>
            {" "}with subject line: <em>Field Note: [Sphere] / [Date]</em>
          </p>
          <p>
            Field notes may be published in the magazine, added to the archive, or held in the internal record.
            You will be notified which.
          </p>
        </div>
      </div>
    </div>
  );
}
