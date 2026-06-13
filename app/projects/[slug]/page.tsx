import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import TagList from "@/components/TagList";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="site-wrapper">
      <div className="page-body">
        <div className="project-header">
          <div className="project-header__status">{project.statusLabel}</div>
          <h1 className="project-header__title">{project.title}</h1>
          <div className="project-header__type">{project.type}</div>
          {project.sephirah && (
            <div style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginTop: "var(--space-sm)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {project.sephirah}
            </div>
          )}
        </div>

        <div className="prose-block">
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {project.contactLine && (
            <p style={{ marginTop: "var(--space-xl)", color: "var(--fg-dim)", fontSize: "var(--text-sm)" }}>
              {project.contactLine}
            </p>
          )}
        </div>

        <TagList tags={project.tags} />

        <hr style={{ borderColor: "var(--rule)", margin: "var(--space-xl) 0" }} />
        <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-dim)" }}>
          <Link href="/projects">&larr; All Projects</Link>
        </p>
      </div>
    </div>
  );
}
