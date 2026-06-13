import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video archive of The Immanent Domain.",
};

const sections = [
  "Interviews",
  "Performances",
  "Dispatches",
  "The Moment Is Yours",
  "Trailers",
  "Criticism",
  "Field Recordings",
];

export default function VideosPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">The Immanent Domain</span>
          <h1 className="page-title">Videos</h1>
          <p className="page-title__sub">
            Public video archive. Interviews, performances, dispatches, and field recordings.
          </p>
        </div>

        <div style={{ marginBottom: "var(--space-xl)" }}>
          <span className="section-label">Sections</span>
          <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)", marginTop: "var(--space-sm)" }}>
            {sections.map((s) => (
              <li
                key={s}
                style={{
                  borderBottom: "1px solid var(--rule)",
                  padding: "var(--space-sm) 0",
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-dim)",
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="prose-block">
          <p>
            The video archive is in active development.
            Recordings, interviews, and performances will be published here and on YouTube.
          </p>
          <p>
            Subscribe:{" "}
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
