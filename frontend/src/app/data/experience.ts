export type ExperienceItem = {
  dates: string; // e.g. "2025 — Now"
  title: string; // role, or degree
  org: string; // company, or school
  summary?: string; // one line on impact
  location?: string;
};

// Newest first
export const experience: ExperienceItem[] = [
  {
    dates: "Class of 2026",
    title: "B.S. Computer Science",
    org: "Johns Hopkins University",
    location: "Baltimore, MD",
  },
];
