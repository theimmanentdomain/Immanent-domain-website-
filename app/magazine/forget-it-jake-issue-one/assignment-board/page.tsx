import type { Metadata } from "next";
import Link from "next/link";
import {
  assignmentClasses,
  magazineSections,
  firstAssignmentPool,
  submissionRequirements,
  assignmentLevels,
} from "@/lib/assignmentBoard";

export const metadata: Metadata = {
  title: "Assignment Board — The Scene Made Me Do It",
  description: "How to contribute to The Scene Made Me Do It. Assignment classes, sections, and submission format.",
};

export default function AssignmentBoardPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <span className="section-label">
            <Link href="/magazine" style={{ textDecoration: "none", color: "inherit" }}>The Scene Made Me Do It</Link>
            {" / "}
            <Link href="/magazine/forget-it-jake-issue-one" style={{ textDecoration: "none", color: "inherit" }}>Issue One</Link>
          </span>
          <h1 className="page-title">Assignment Board</h1>
          <p className="page-title__sub">
            How the magazine works. What it needs. How to request an assignment.
          </p>
        </div>

        <div className="prose-block" style={{ marginBottom: "var(--space-xxl)" }}>
          <p>
            The Scene Made Me Do It is a magazine with an editorial premise, not a submission inbox waiting to be filled.
            Assignments are given. Work is requested. The board below shows what the magazine needs and how to enter the process.
          </p>
        </div>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">Function</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
            The magazine documents the city as a living system: its performances, failures, fictions, territories, and technologies.
            It publishes work that has something at stake and a form that matches it.
            The Scene Made Me Do It does not publish opinion. It publishes intelligence.
          </p>
        </section>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">Assignment Classes</h2>
          {assignmentClasses.map((cls) => (
            <div key={cls.letter} className="assignment-class">
              <span className="assignment-class__letter">Class {cls.letter}</span>
              <h3 className="assignment-class__heading">{cls.name}</h3>
              <p className="assignment-class__purpose">{cls.purpose}</p>
              <ul className="assignment-class__list">
                {cls.types.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <p className="assignment-class__status">Status: {cls.status}</p>
            </div>
          ))}
        </section>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">Magazine Sections</h2>
          {magazineSections.map((sec) => (
            <div key={sec.name} className="assignment-class">
              <h3 className="assignment-class__heading">{sec.name}</h3>
              <p className="assignment-class__purpose">{sec.function}</p>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
                Needed: {sec.neededPieces} / Length: {sec.lengthRange}
              </p>
              <p className="assignment-class__status">Status: {sec.status}</p>
            </div>
          ))}
        </section>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">Contributor Levels</h2>
          <div className="assignment-levels">
            {assignmentLevels.map((level) => (
              <div key={level.title} className="assignment-level">
                <div className="assignment-level__title">{level.title}</div>
                <div className="assignment-level__desc">{level.description}</div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)" }}>{level.criteria}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">First Assignment Pool</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)", marginBottom: "var(--space-lg)" }}>
            Fifteen prompts. Pick one. Write toward it. The assignment is a direction, not a specification.
          </p>
          <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)" }}>
            {firstAssignmentPool.map((prompt, i) => (
              <li
                key={i}
                style={{
                  borderBottom: "1px solid var(--rule)",
                  padding: "var(--space-md) 0",
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-dim)",
                }}
              >
                {i + 1}. {prompt}
              </li>
            ))}
          </ul>
        </section>

        <section className="assignment-section">
          <h2 className="assignment-section__heading">Submission Format</h2>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)", marginBottom: "var(--space-lg)" }}>
            Send to{" "}
            <a href="mailto:theimmanentdomain@gmail.com">theimmanentdomain@gmail.com</a>
            {" "}with subject line: <em>Assignment Request: [Class] / [Section]</em>
          </p>
          <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)" }}>
            {submissionRequirements.map((req) => (
              <li
                key={req}
                style={{
                  borderBottom: "1px solid var(--rule)",
                  padding: "var(--space-sm) 0",
                  fontSize: "var(--text-sm)",
                  color: "var(--fg-dim)",
                }}
              >
                {req}
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/magazine/forget-it-jake-issue-one">&larr; Issue One</Link>
          {" "}&bull;{" "}
          <Link href="/submit">Submission guidelines</Link>
        </p>
      </div>
    </div>
  );
}
