import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Performances, films, and public programs from The Immanent Domain.",
};

const sections = [
  { status: "upcoming" as const, label: "Upcoming" },
  { status: "in-development" as const, label: "In Development" },
  { status: "previous" as const, label: "Previous" },
];

export default function ProjectsPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="page-title-block">
          <h1 className="page-title">Projects</h1>
        </div>

        {sections.map(({ status, label }) => {
          const items = projects.filter((p) => p.status === status);
          if (items.length === 0) return null;
          return (
            <div key={status} style={{ marginBottom: "var(--space-xxl)" }}>
              <span className="section-label">{label}</span>
              <div style={{ borderTop: "1px solid var(--rule)" }}>
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
