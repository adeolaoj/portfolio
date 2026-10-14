export type ExperienceItem = {
  dates: string; // e.g. "2025 — Now"
  title: string; // role, or degree
  org: string; // company, or school
  summary?: string; // one line on impact
  location?: string;
};

// Newest first.
// TODO: add your roles above the degree:
//   { dates: "2025 — Now", title: "Software Engineer Intern", org: "Company", summary: "What shipped, who used it.", location: "City / Remote" },
export const experience: ExperienceItem[] = [
  {
    dates: "Class of 2026",
    title: "B.S. Computer Science",
    org: "Johns Hopkins University",
    summary: "8+ hackathons, including 2nd place at HackTech 2025.",
    location: "Baltimore, MD",
  },
];
