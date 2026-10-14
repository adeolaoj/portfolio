export type Project = {
  title: string;
  kind: string; // small label above the title, e.g. "Team project"
  blurb: string;
  tech: string[];
  github?: string;
  demo?: string;
  // Path under public/, e.g. "/projects/book-match.png" (16:10 works best).
  screenshot?: string;
  // The one project shown as the large card at the top of "Things I've built".
  featured?: boolean;
  year?: string;
};

// TODO: add your newest, strongest project here with `featured: true`.
export const projects: Project[] = [
  {
    title: "BookMatch — AI book recommendations",
    kind: "In progress",
    blurb:
      "A full-stack app that recommends books from your taste using collaborative filtering and NLP. React frontend done; Flask backend in progress.",
    tech: ["React", "TypeScript", "Vite", "Flask"],
    github: "https://github.com/adeolaoj/book-match",
  },
  {
    title: "Atlas — AI study planner",
    kind: "Team project",
    blurb:
      "A web app that generates AI-driven study plans, quizzes and summaries for students, using GPT-4 for content and Firebase for auth and storage.",
    tech: ["Next.js", "Python", "LangChain", "Firebase", "Render"],
    demo: "https://atlas-frontend-ok1k.onrender.com/",
  },
  {
    title: "Ask Adeola — portfolio chatbot",
    kind: "Side project",
    blurb:
      "A chatbot widget that answers questions about me, built on a custom-trained neural network with NLTK and a Flask backend.",
    tech: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
    github: "https://github.com/adeolaoj/portfolio-chatbot",
  },
  {
    title: "OOTD — virtual closet app",
    kind: "Mobile app",
    blurb:
      "An Android app to organize your closet virtually and create and save outfits for later.",
    tech: ["Android Studio", "Java", "Firebase"],
    github: "https://github.com/adeolaoj/OOTD-app",
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
