import { now } from "../data/now";
import { skillGroups } from "../data/skills";

export function NowStrip() {
  return (
    <section aria-label="What I'm up to" className="container-page pt-6 pb-24 md:pb-30">
      <div className="grid border-y border-line border-t-ink md:grid-cols-3">
        {now.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col gap-2.5 py-6 md:py-7 ${i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-7" : "md:pr-7"}`}
          >
            <span className="eyebrow text-terracotta-deep">✦ {item.label}</span>
            <span className="text-lg leading-normal">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 pt-9 md:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2.5">
            <span className="eyebrow text-[11px] text-ink-muted">{group.label}</span>
            <span className="leading-relaxed">{group.items.join(" · ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
