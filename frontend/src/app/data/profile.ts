// Who I am and how to reach me. Used by the nav, hero and contact sections.

export const profile = {
  name: "Adeola Ojuade",
  firstName: "Adeola",
  email: "adeolaojuade1@gmail.com",

  // Shown under the name in the hero; cycles through in order.
  roles: [
    "Software engineer",
    "AI & machine learning",
    "Full-stack developer",
    "UI/UX designer",
    "Creator",
  ],

  status: "Open to full-time roles",

  // TODO: rewrite in your own voice (and mention the master's program once confirmed).
  intro:
    "I study Computer Science at Johns Hopkins and love building user-centered products that create impact. I work across AI, full-stack web and UI/UX — and when I'm not coding, I'm vlogging on YouTube.",

  // TODO: add the résumé PDF to public/ and set this to "/resume.pdf".
  // The Résumé buttons stay hidden while this is null.
  resumeUrl: null as string | null,
};

export const links = {
  github: "https://github.com/adeolaoj",
  linkedin: "https://www.linkedin.com/in/adeolaojuade",
  youtube: "https://www.youtube.com/@adeola_o",
  youtubeHandle: "@adeola_o",
};

// Anchor links in the nav, in page order.
export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];
