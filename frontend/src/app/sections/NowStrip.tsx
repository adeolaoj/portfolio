import { Reveal } from "../components/Reveal";
import { now } from "../data/now";
import { skillGroups } from "../data/skills";

export function NowStrip() {
  return (
    <section aria-label="What I'm up to" className="container-page pt-6 pb-24 md:pb-30">
      <Reveal>
        <div className="grid border-y border-line border-t-ink md:grid-cols-3">
          {now.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-2.5 py-6 md:py-7 ${i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-7" : "md:pr-7"}`}
            >
              <span className="eyebrow text-terracotta-deep">{item.label}</span>
              <span className="text-lg leading-normal">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-x-8 gap-y-7 pt-9 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2.5">
              <span className="eyebrow text-[11px] text-ink-muted">{group.label}</span>
              <p className="leading-relaxed">
                {group.items.map((item, i) => (
                  <span key={item}>
                    {/* each skill (and the dot after it) stays on one line; lines only break between skills */}
                    <span className="whitespace-nowrap">
                      {item}
                      {i < group.items.length - 1 && " ·"}
                    </span>{" "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
