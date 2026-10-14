import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProject, otherProjects, type Project } from "../data/projects";
import { links } from "../data/profile";

// Soft grounds the screenshots sit on, rotated across the cards.
const grounds = ["bg-blush", "bg-sage-light", "bg-olive-light"];

function projectHref(p: Project) {
  return p.demo ?? p.github;
}

function linkLabel(p: Project) {
  return p.demo ? "Live demo" : "GitHub";
}

// "BookMatch — AI book recommendations" -> "BookMatch"
function shortName(p: Project) {
  return p.title.split(" — ")[0];
}

function Screenshot({ project, ground, className = "" }: { project: Project; ground: string; className?: string }) {
  return (
    <div className={`${ground} flex p-4 md:p-5 ${className}`}>
      {project.screenshot ? (
        <img
          src={project.screenshot}
          alt={`Screenshot of ${shortName(project)}`}
          loading="lazy"
          className="size-full rounded-[10px] object-cover object-top shadow-sm"
        />
      ) : (
        // No screenshot yet: a quiet cover with the project's name.
        <div
          aria-hidden="true"
          className="flex size-full items-center justify-center rounded-[10px] bg-paper/55 p-4 text-center text-2xl font-semibold tracking-tight text-ink/70"
        >
          {shortName(project)}
        </div>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <a
      href={projectHref(project)}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-6 grid overflow-hidden rounded-feature border border-line bg-paper transition-colors hover:border-terracotta-deep md:grid-cols-[1.3fr_1fr]"
    >
      <Screenshot project={project} ground="bg-sage-light" className="aspect-[16/10] md:aspect-auto md:min-h-[400px] md:p-8" />
      <div className="flex flex-col justify-between gap-6 p-6 md:p-10">
        <div className="flex flex-col gap-4">
          <span className="eyebrow text-terracotta-deep">
            Featured · {project.kind}{project.year ? ` · ${project.year}` : ""}
          </span>
          <h3 className="text-[28px] leading-tight md:text-[32px]">{project.title}</h3>
          <p className="leading-relaxed text-ink-soft">{project.blurb}</p>
          {project.highlights && (
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-terracotta-deep" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <ul className="flex flex-wrap gap-2" aria-label="Built with">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full bg-peach px-3 py-1.5 text-[13px] text-ink-soft">
                {t}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-2 font-medium text-terracotta-deep">
            {project.demo ? "See it live" : "View on GitHub"}
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project, ground }: { project: Project; ground: string }) {
  return (
    <a
      href={projectHref(project)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col overflow-hidden rounded-card border border-line bg-paper transition-colors hover:border-terracotta-deep"
    >
      <Screenshot project={project} ground={ground} className="aspect-[16/10]" />
      <div className="flex grow flex-col gap-3 p-6">
        <div className="eyebrow flex justify-between text-[11px] text-ink-muted">
          <span>{project.kind}</span>
          <span>{linkLabel(project)} ↗</span>
        </div>
        <h3 className="text-[21px] leading-snug">{project.title}</h3>
        <p className="grow leading-relaxed text-ink-soft">{project.blurb}</p>
        <p className="text-sm text-ink-muted">{project.tech.join(" · ")}</p>
      </div>
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

        {featuredProject && <FeaturedCard project={featuredProject} />}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} ground={grounds[i % grounds.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
