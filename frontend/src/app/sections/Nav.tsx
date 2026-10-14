import { SiRefinedgithub, SiYoutube } from "@icons-pack/react-simple-icons";
import LinkedinIcon from "../components/LinkedInIcon";
import { links, navItems, profile } from "../data/profile";

const iconLink =
  "inline-flex size-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-peach hover:text-ink";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cream/90 backdrop-blur-md">
      <nav aria-label="Primary" className="container-page flex h-18 items-center justify-between gap-6">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 text-[15px] text-ink-soft md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-terracotta-deep">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a className={iconLink} href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiRefinedgithub size={19} />
          </a>
          <a className={iconLink} href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a className={iconLink} href={links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <SiYoutube size={20} />
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="ml-3 inline-flex min-h-10 items-center rounded-full bg-terracotta px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover"
            >
              Résumé
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
