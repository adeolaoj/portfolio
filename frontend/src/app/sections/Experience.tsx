import { experience } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="container-page py-24 md:py-30">
      <h2 className="mb-10 text-4xl tracking-tight md:text-5xl">Where I've worked</h2>
      <ol className="border-t border-ink">
        {experience.map((item) => (
          <li
            key={`${item.title}-${item.org}`}
            className="grid gap-1 border-b border-line py-7 md:grid-cols-[200px_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
          >
            <span className="eyebrow text-ink-muted">{item.dates}</span>
            <div className="flex flex-col gap-1.5">
              <span className="text-[21px] font-semibold">
                {item.title} · {item.org}
              </span>
              {item.summary && <span className="leading-relaxed text-ink-soft">{item.summary}</span>}
            </div>
            {item.location && <span className="eyebrow text-ink-muted">{item.location}</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
