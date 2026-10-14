import { useState } from "react";
import { SiRefinedgithub, SiYoutube} from '@icons-pack/react-simple-icons';
import LinkedinIcon from "./components/LinkedInIcon";
import { Mail, ExternalLink, Code } from "lucide-react";
import { Card } from "./components/ui/card";
import { Typewriter } from "./components/Typewriter";


type Tab = "about" | "projects" | "extras";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const projects = [
    {
      title: "AI Book Recommendation System 🚧",
      description: "Currently building a full-stack book-recommendation web app that suggests books based on user preferences using collaborative filtering and NLP techniques. Ive completed the frontend using React. Implementing a Flask backend!",
      tech: ["React", "Vite", "Typescript"],
      github: "https://github.com/adeolaoj/book-match",
    },
    {
      title: "AI-Powered Student Study Planner",
      description: "Worked with a team to build a full-stack web application that generates AI-driven study plans, quizzes, and summaries for students. Integrated OpenAI's GPT-4 API for content generation and Firebase for user authentication and data storage.",
      tech: ["Python", "Next.js", "Langchain", "Firebase", "Render"],
      demo: "https://atlas-frontend-ok1k.onrender.com/",
    },
    {
      title: "Ask Adeola - A Chatbot For My Personal Website",
      description: "Built a chatbot widget that answers questions about me using a custom-trained neural network (TensorFlow/Keras) with natural language processing (NLTK) and Flask for backend integration. Implemented responsive UI/UX with HTML/CSS/JavaScript and deployed via Flask server.",
      tech: ["Python", "Tensorflow", "NLTK", "Flask", "React"],
      github: "https://github.com/adeolaoj/portfolio-chatbot",
    },
    {
      title: "OOTD - A Virtual Closet Mobile Application",
      description: "Developed a closet mobile application in Android Studio. The app allows users to view and organize their closet virtually and create and save outfits for future reference.",
      tech: ["Android Studio", "Java", "Firebase"],
      github: "https://github.com/adeolaoj/OOTD-app",
    },
  ];

  const skills = [
    "Java", "Python", "JavaScript", "TypeScript", "C++",
    "React", "Node.js", "Express", "Firebase",
    "TensorFlow", "PyTorch", "Git", "Docker", "Figma",
    "Adobe Creative Suite", "Agile Methodologies",
  ];

  const tabClass = (tab: Tab) =>
    `transition-colors cursor-pointer eyebrow min-h-11 ${
      activeTab === tab
        ? "text-terracotta-deep"
        : "text-ink-muted hover:text-ink"
    }`;

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur-md">
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-ink">Adeola Ojuade</h1>
            <nav className="flex gap-8">
              <button onClick={() => setActiveTab("about")} className={tabClass("about")}>
                home
              </button>
              <button onClick={() => setActiveTab("projects")} className={tabClass("projects")}>
                projects
              </button>
              <button onClick={() => setActiveTab("extras")} className={tabClass("extras")}>
                extras
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-page py-12">
        {/* About Tab */}
        {activeTab === "about" && (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="min-h-[70vh] flex flex-col justify-center">
              <div className="space-y-8 max-w-3xl">
                {/* Category tags */}
                <div className="flex gap-3 text-sm">
                  <span className="rounded-full border border-line-strong px-3 py-1 text-ink-soft">student</span>
                  <span className="rounded-full border border-line-strong px-3 py-1 text-ink-soft">developer</span>
                  <span className="rounded-full border border-line-strong px-3 py-1 text-ink-soft">creator</span>
                </div>

                {/* Main heading */}
                <div>
                  <h1 className="text-6xl md:text-7xl mb-2 text-ink leading-tight">
                    Hello, I'm
                  </h1>
                  <h1 className="text-6xl md:text-7xl mb-6 text-sage leading-tight">
                    Adeola Ojuade
                  </h1>
                  <p className="text-xl text-terracotta-deep h-8 mb-6">
                    <Typewriter
                      texts={[
                        "Computer Science Student",
                        "AI Developer",
                        "UI/UX Enthusiast",
                        "Full-Stack Developer",
                        "Problem Solver",
                      ]}
                      typingSpeed={80}
                      deletingSpeed={50}
                      pauseDuration={2000}
                    />
                  </p>
                </div>

                {/* Description */}
                <p className="text-ink-soft leading-relaxed text-lg max-w-lg">
                  I'm a fourth year CS student passionate about developing user-centered products to create impact.
                  My biggest interests are AI, web development, and UI/UX design. When I'm not coding, you'll find me vlogging on my Youtube channel!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:adeolaojuade1@gmail.com"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-terracotta px-7 font-medium text-primary-foreground transition-colors hover:bg-terracotta-hover"
                  >
                    <Mail size={20} />
                    Get in touch
                  </a>
                  <a
                    href="#learn-more"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
                    }}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-strong px-7 font-medium text-ink transition-colors hover:border-ink"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-6">
              <h2 className="text-3xl text-ink">What I Work With</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-ink-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education & Contact */}
            <section className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4 rounded-card border-line bg-paper">
                <h3 className="text-xl text-ink">Education</h3>
                <div>
                  <p className="text-ink">Bachelor of Science in Computer Science • Johns Hopkins University</p>
                  <p className="text-ink-muted">Expected Graduation: May 2026</p>
                  <p className="text-ink-muted">Pursuing Masters' in the Fall</p>
                </div>
              </Card>
              <Card className="p-6 space-y-4 rounded-card border-line bg-paper">
                <h3 className="text-xl text-ink">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:adeolaojuade1@gmail.com"
                    className="flex items-center gap-3 text-ink-soft hover:text-terracotta-deep transition-colors"
                  >
                    <Mail size={20} />
                    adeolaojuade1@gmail.com
                  </a>
                  <a
                    href="https://github.com/adeolaoj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-soft hover:text-terracotta-deep transition-colors"
                  >
                    <SiRefinedgithub size={20} />
                    github.com/adeolaoj
                  </a>
                  <a
                    href="https://linkedin.com/in/adeolaojuade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-soft hover:text-terracotta-deep transition-colors"
                  >
                    <LinkedinIcon size={20} />
                    linkedin.com/in/adeolaojuade
                  </a>
                </div>
              </Card>
            </section>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl text-ink">Things I've Built 🚀</h1>
              <p className="text-ink-muted max-w-2xl mx-auto">
                Here are some projects I'm proud of! Each one has taught me something new
                and pushed me to grow as a developer.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => {
                const link = project.demo || project.github;
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card
                      className="p-6 space-y-4 h-full rounded-card border-line bg-paper transition-colors hover:border-terracotta-deep"
                    >
                      <div className="flex items-start justify-between">
                        <Code className="text-sage" size={32} />
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink-muted hover:text-terracotta-deep transition-colors"
                              title="View on GitHub"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <SiRefinedgithub size={20} />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink-muted hover:text-terracotta-deep transition-colors"
                              title="View Demo"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-ink">{project.title}</h3>
                        <p className="text-ink-soft leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-peach px-3 py-1 text-sm text-ink-soft"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Extras Tab */}
        {activeTab === "extras" && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl text-ink">Some Fun Stuff 🤗</h1>
              <p className="text-ink-muted max-w-2xl mx-auto">
                Outside of code, I explore my creative side through vlogging, design, and more!
              </p>
            </div>

            {/* YouTube Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-ink">My YouTube Channel 📹</h2>
              </div>
              <Card className="p-6 rounded-feature border-0 bg-cocoa text-on-dark">
                <div className="aspect-video bg-ink rounded-card overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/sRqddRkwlsk?si=qnamGeRrAu_wEejo"
                    title="YouTube video player featuring Adeola's vlog"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-on-dark-muted mb-4">
                  I love vlogging and making fun videos with my friends and family. It's an outlet I use to connect with others :)
                </p>
                <a
                  href="https://www.youtube.com/@adeola_o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-cream px-6 font-medium text-ink transition-colors hover:bg-peach"
                >
                  <SiYoutube size={20} />
                  Check out my channel? 👀
                </a>
              </Card>
            </section>
            {/*
              Fun Facts & Interests (hidden). Content to reuse later:
              - Environmentalist: passionate about sustainability and technology that helps tackle the climate crisis.
              - Hackathon Junkie: 8+ hackathons and counting, 2nd place at HackTech 2025.
              - Open Source Fan: enjoys contributing to projects that help developers worldwide.
            */}
            {/* Current Interests */}
            <section className="space-y-6">
              <h2 className="text-3xl text-ink">What I'm Exploring Right Now</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 rounded-card border-line bg-paper">
                  <h3 className="text-xl mb-3 text-ink">Recommendation Systems 😍</h3>
                  <p className="text-ink-soft">
                    Currently teaching myself how to build recommendation systems using collaborative filtering and NLP techniques!
                  </p>
                </Card>
                <Card className="p-6 rounded-card border-line bg-paper">
                  <h3 className="text-xl mb-3 text-ink">Cloud Architecture ☁️</h3>
                  <p className="text-ink-soft">
                    Diving into AWS and learning how to build scalable, resilient systems.
                  </p>
                </Card>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-line bg-peach">
        <div className="container-page py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ink-muted">
              © 2026 Adeola Ojuade. Built with React & Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/adeolaoj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-muted hover:text-terracotta-deep transition-colors"
              >
                <SiRefinedgithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/adeolaojuade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink-muted hover:text-terracotta-deep transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="mailto:adeolaojuade1@gmail.com"
                aria-label="Email"
                className="text-ink-muted hover:text-terracotta-deep transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
