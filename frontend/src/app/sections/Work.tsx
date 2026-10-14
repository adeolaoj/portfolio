import { ArrowUpRight } from "lucide-react";
import { featuredProject, otherProjects, type Project } from "../data/projects";
import { links } from "../data/profile";

function projectHref(p: Project) {
  return p.demo ?? p.github;
}

function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3 rounded-card border border-line bg-paper p-6 transition-colors hover:border-terracotta-deep"
    >
      <div className="eyebrow flex justify-between text-[11px] text-ink-muted">
        <span>{project.kind}</span>
        <span>{project.demo ? "Live demo ↗" : "GitHub ↗"}</span>
      </div>
      <h3 className="text-[21px] leading-snug">{project.title}</h3>
      <p className="grow leading-relaxed text-ink-soft">{project.blurb}</p>
      <p className="text-sm text-ink-muted">{project.tech.join(" · ")}</p>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="bg-peach py-24 md:py-30">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl tracking-tight md:text-5xl">Things I've built</h2>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-terracotta-deep"
          >
            All repositories on GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        {featuredProject && (
          <div className="mb-6">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
