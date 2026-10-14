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
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="fill-terracotta-deep">
          <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0z" />
        </svg>
        <h2 className="text-[clamp(2.75rem,6.4vw,5.5rem)] leading-none tracking-[-0.04em]">Let's build something.</h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-14 items-center rounded-full bg-terracotta px-8 text-[17px] font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover"
        >
          {profile.email}
        </a>

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
