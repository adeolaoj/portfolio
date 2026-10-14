import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { SiRefinedgithub, SiYoutube } from "@icons-pack/react-simple-icons";
import LinkedinIcon from "../components/LinkedInIcon";
import { links, navItems, profile } from "../data/profile";

const iconLink =
  "inline-flex size-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-peach hover:text-ink";

const resumeButton =
  "inline-flex min-h-10 items-center rounded-full bg-terracotta px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover";

const socials = [
  { label: "GitHub", href: links.github, icon: <SiRefinedgithub size={19} aria-hidden="true" /> },
  { label: "LinkedIn", href: links.linkedin, icon: <LinkedinIcon size={18} /> },
  { label: "YouTube", href: links.youtube, icon: <SiYoutube size={20} aria-hidden="true" /> },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  // The page can't scroll while the menu is open, so remember the section
  // and jump to it once the menu has closed.
  const pendingHref = useRef<string | null>(null);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        aria-label="Open menu"
        className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
      >
        <Menu size={18} aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/30 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          onCloseAutoFocus={(e) => {
            const href = pendingHref.current;
            if (!href) return;
            pendingHref.current = null;
            e.preventDefault();
            const target = document.querySelector<HTMLElement>(href);
            target?.scrollIntoView();
            history.replaceState(null, "", href);
          }}
          className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col gap-8 bg-cream p-4 shadow-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right motion-reduce:animate-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="eyebrow text-ink-muted">Menu</Dialog.Title>
            <Dialog.Close
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong text-ink"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">Jump to a section of the page</Dialog.Description>

          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      pendingHref.current = item.href;
                      setOpen(false);
                    }}
                    className="flex min-h-14 items-center text-2xl font-medium tracking-tight transition-colors hover:text-terracotta-deep"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className={`${resumeButton} min-h-12 justify-center text-base`}>
                Résumé
              </a>
            )}
            <div className="flex gap-1">
              {socials.map((s) => (
                <a key={s.label} className={iconLink} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cream/90 backdrop-blur-md">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6 md:h-18">
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

        <div className="hidden items-center gap-1 md:flex">
          {socials.map((s) => (
            <a key={s.label} className={iconLink} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className={`${resumeButton} ml-3`}>
              Résumé
            </a>
          )}
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
