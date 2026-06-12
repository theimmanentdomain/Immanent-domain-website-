import { projects, getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="page-body">
      <div className="project-header">
        <div className="project-header__status">{project.statusLabel}</div>
        <h1 className="project-header__title">{project.title}</h1>
        <div className="project-header__type">{project.type}</div>
      </div>

      <div className="prose-block">
        {project.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        {project.contactLine && (
          <p style={{ marginTop: "2rem", color: "var(--fg-dim)", fontSize: "0.85rem" }}>
            {project.contactLine}
          </p>
        )}
      </div>
    </div>
  );
}
