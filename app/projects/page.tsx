import Link from "next/link";
import { projects } from "@/lib/projects";

const sections = [
  { status: "upcoming" as const, label: "Upcoming" },
  { status: "in-development" as const, label: "In Development" },
  { status: "previous" as const, label: "Previous" },
];

export default function ProjectsPage() {
  return (
    <div className="site-wrapper">
    <div className="page-body">
      <h1 className="page-title">Projects</h1>

      {sections.map(({ status, label }) => {
        const items = projects.filter((p) => p.status === status);
        if (items.length === 0) return null;
        return (
          <div key={status} style={{ marginBottom: "3rem" }}>
            <span className="section-label">{label}</span>
            <ul className="project-list" style={{ borderTop: "1px solid var(--rule)" }}>
              {items.map((project) => (
                <li key={project.slug} className="project-list__item">
                  <div>
                    <div className="project-list__title">
                      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
                        {project.title}
                      </Link>
                    </div>
                    <div className="project-list__type">{project.type}</div>
                  </div>
                  <div className="project-list__status">{project.statusLabel}</div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
    </div>
  );
}
