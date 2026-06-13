import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="card">
      <span className="card__label">{project.statusLabel}</span>
      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
        <div className="card__title">{project.title}</div>
      </Link>
      <div className="card__subtitle">{project.type}</div>
      <div className="card__desc">{project.shortDescription}</div>
    </li>
  );
}
