import { ArrowDown } from "lucide-react";
import { Typewriter } from "../components/Typewriter";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="top" className="container-page pt-20 pb-16 md:pt-28 md:pb-22">
      <p className="mb-4 text-[22px] text-ink-soft md:text-[28px]">Hello, my name is</p>
      <h1 className="mb-6 text-[clamp(5.5rem,15vw,13.75rem)] leading-[0.85] font-bold tracking-[-0.055em] text-sage">
        {profile.firstName}
        <span className="text-terracotta">.</span>
      </h1>
      <p className="mb-5 min-h-12 text-[clamp(1.5rem,3vw,2.5rem)] font-medium tracking-tight text-terracotta-deep">
        <Typewriter texts={profile.roles} typingSpeed={80} deletingSpeed={45} pauseDuration={1800} />
      </p>
      <p className="eyebrow mb-12 inline-flex items-center gap-2.5 text-ink-muted">
        <span className="size-2 rounded-full bg-olive" aria-hidden="true" />
        {profile.status}
      </p>

      <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <p className="max-w-[620px] text-lg leading-relaxed text-ink-soft md:text-[22px]">{profile.intro}</p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a
            href="#work"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-terracotta px-6 font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover"
          >
            See my work
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 items-center rounded-full border border-line-strong px-6 font-medium transition-colors hover:border-ink"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
