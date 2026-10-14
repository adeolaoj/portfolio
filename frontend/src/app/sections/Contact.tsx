import { Reveal } from "../components/Reveal";
import { links, profile } from "../data/profile";

export function Contact() {
  const footerLinks = [
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "YouTube", href: links.youtube },
    ...(profile.resumeUrl ? [{ label: "Résumé", href: profile.resumeUrl }] : []),
  ];

  return (
    <footer id="contact" className="bg-peach">
      <div className="container-page flex flex-col items-center gap-6 pt-24 pb-10 text-center md:pt-30">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="text-[clamp(2.75rem,6.4vw,5.5rem)] leading-none tracking-[-0.04em]">Let's build something.</h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-14 items-center rounded-full bg-terracotta px-8 text-[17px] font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover"
          >
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-16 flex w-full flex-wrap justify-between gap-6 border-t border-line-strong pt-6 text-sm text-ink-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <ul className="flex flex-wrap gap-6">
            {footerLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-terracotta-deep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
