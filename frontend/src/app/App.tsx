import { useState } from "react";
import { SiRefinedgithub, SiYoutube} from '@icons-pack/react-simple-icons';
import LinkedinIcon from "./components/LinkedInIcon";
import { Mail, ExternalLink, Code, Briefcase, Earth, Star } from "lucide-react";
import { Card } from "./components/ui/card";
import { Typewriter } from "./components/Typewriter";
import { GlassCardDeck } from "./components/GlassCardDeck";
import Silk from "./components/Silk";


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
      description: "Built and deployed a responsive personal portfolio website to showcase projects, resume, and contact information using Flask and React. Designed a modern user interface using HTML, CSS, and JavaScript. Built chatbot widget for website using a custom-trained neural network (TensorFlow/Keras) with natural language processing (NLTK) and Flask for backend integration. Implemented responsive UI/UX with HTML/CSS/JavaScript and deployed via Flask server.",
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

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 bg-[#353990] -z-10">
          <Silk
            speed={2.0}
            scale={0.6}
            color="#002d97ff"
            noiseIntensity={1.5}
            rotation={0.6}
          />
      </div>
      
      {/* Header */}
      <header className="bg-transparent border-b border-border/50 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent font-semibold">Adeola Ojuade</h1>
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`transition-colors cursor-pointer text-sm uppercase tracking-wide ${
                  activeTab === "about"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                home
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`transition-colors cursor-pointer text-sm uppercase tracking-wide ${
                  activeTab === "projects"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                projects
              </button>
              <button
                onClick={() => setActiveTab("extras")}
                className={`transition-colors cursor-pointer text-sm uppercase tracking-wide ${
                  activeTab === "extras"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                extras
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* About Tab */}
        {activeTab === "about" && (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="min-h-[80vh] grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Category tags */}
                <div className="flex gap-4 text-sm">
                  <span className="text-white/70 rounded-full border border-white/30 backdrop-blur-lg shadow-md hover:scale-105 transition-all leading-tight bg-gray/30 py-1 px-3">student</span>
                  <span className="text-white/70 rounded-full border border-white/30 backdrop-blur-lg shadow-md hover:scale-105 transition-all leading-tight bg-gray/30 py-1 px-3">developer</span>
                  <span className="text-white/70 rounded-full border border-white/30 backdrop-blur-lg shadow-md hover:scale-105 transition-all leading-tight bg-gray/30 py-1 px-3">creator</span>
                </div>
                
                {/* Main heading */}
                <div>
                  <h1 className="text-6xl md:text-7xl mb-2 text-foreground leading-tight">
                    Hello, I'm
                  </h1>
                  <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-accent via-accent to-[#C4C9F2] bg-clip-text text-transparent leading-tight">
                    Adeola Ojuade
                  </h1>
                  <p className="text-xl text-primary h-8 mb-6">
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
                <p className="text-accent/90 leading-relaxed text-lg max-w-lg">
                  I'm a fourth year CS student passionate about developing user-centered products to create impact.
                  My biggest interests are AI, web development, and UI/UX design. When I'm not coding, you'll find me vlogging on my Youtube channel!
                </p>
                
                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a
                    href="mailto:adeolaojuade1@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-lg border border-white/30 bg-gray/5 text-white rounded-lg hover:shadow-lg hover:scale-105 hover:bg-white/20 transition-all font-medium"
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
                    className="inline-flex items-center gap-2 px-8 py-4 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              
              {/* What I Build */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 rounded-3xl blur-3xl"></div>
                  <GlassCardDeck />
                </div>
              </div>
            </section>
            
            {/* Skills Section */}
            <section className="space-y-6">
              <h2 className="text-3xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">What I Work With</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-br from-white/30 to-secondary/30 border border-border rounded-lg text-foreground hover:border-primary/40 hover:shadow-md transition-all cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education & Contact */}
            <section className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4 bg-gradient-to-br from-white/20 to-secondary/20 border-border backdrop-blur-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-foreground">Education</h3>
                <div>
                  <p className="text-foreground">Bachelor of Science in Computer Science • Johns Hopkins University</p>
                  <p className="text-muted-foreground">Expected Graduation: May 2026</p>
                  <p className="text-muted-foreground">Pursuing Masters' in the Fall</p>
                </div>
              </Card>
              <Card className="p-6 space-y-4 bg-gradient-to-br from-white/20 to-secondary/20 border-border backdrop-blur-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-foreground">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:adeolaojuade1@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    adeolaojuade1@gmail.com
                  </a>
                  <a
                    href="https://github.com/adeolaoj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <SiRefinedgithub size={20} />
                    github.com/adeolaoj
                  </a>
                  <a
                    href="https://linkedin.com/in/adeolaojuade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
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
              <h1 className="text-4xl text-foreground">Things I've Built 🚀</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
                      className="p-6 space-y-4 bg-white/10 backdrop-blur-lg border-border border-white/40 hover:border-primary/40 transition-all hover:shadow-lg hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between">
                        <Code className="text-primary" size={32} />
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
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
                              className="text-muted-foreground hover:text-primary transition-colors"
                              title="View Demo"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-foreground">{project.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 text-white/70 rounded-md text-sm"
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
              <h1 className="text-4xl text-foreground">Some Fun Stuff 🤗</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Outside of code, I explore my creative side through vlogging, design, and more!
              </p>
            </div>

            {/* YouTube Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-foreground">My YouTube Channel 📹</h2>
              </div>
              <Card className="p-6 bg-card/20 backdrop-blur-lg border-border hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
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
                <p className="text-foreground/80 mb-4">
                  I love vlogging and making fun videos with my friends and family. It's an outlet I use to connect with others :)
                </p>
                <a
                  href="https://www.youtube.com/@adeola_o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-foreground to-primary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  <SiYoutube size={20} />
                  Check out my channel? 👀
                </a>
              </Card>
            </section>
            {/*
              Fun Facts & Interests
              <section className="grid md:grid-cols-3 gap-6">
                <h2 className="text-3xl text-foreground">More About Me</h2>
                <Card className="p-6 space-y-3 bg-card border-border text-center hover:shadow-lg transition-all hover:scale-105">
                  <Earth className="text-primary mx-auto" size={40} />
                  <h3 className="text-xl text-black">Environmentalist 🌍</h3>
                  <p className="text-gray-600">
                    I've always been really passionate about sustainability and I hope to contribute to
                    technology that helps tacke the climate crisis 😄
                  </p>
                </Card>
                <Card className="p-6 space-y-3 bg-card border-border text-center hover:shadow-lg transition-all hover:scale-105">
                  <Briefcase className="text-accent mx-auto" size={40} />
                  <h3 className="text-xl text-foreground">Hackathon Junkie 🏆</h3>
                  <p className="text-muted-foreground">
                    8+ hackathons and counting! Nothing beats the rush of building something cool in 24 hours. 
                    Proudly snagged 2nd place at HackTech 2025!
                  </p>
                </Card>
                <Card className="p-6 space-y-3 bg-card border-border text-center hover:shadow-lg transition-all hover:scale-105">
                  <Star className="text-accent mx-auto" size={40} />
                  <h3 className="text-xl text-foreground">Open Source Fan 🌟</h3>
                  <p className="text-muted-foreground">
                    Contributing to projects that help developers worldwide is incredibly rewarding. 
                    Love being part of this amazing community!
                  </p>
                </Card>
              </section>
            */}
            {/* Current Interests */}
            <section className="space-y-6">
              <h2 className="text-3xl text-foreground">What I'm Exploring Right Now</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <h3 className="text-xl mb-3 text-foreground">Recommendation Systems 😍</h3>
                  <p className="text-foreground/70">
                    Currently teaching myself how to build recommendation systems using collaborative filtering and NLP techniques!
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/20 border-accent/20 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <h3 className="text-xl mb-3 text-foreground">Cloud Architecture ☁️</h3>
                  <p className="text-foreground/70">
                    Diving into AWS and learning how to build scalable, resilient systems.
                  </p>
                </Card>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 bg-grey-100 bg-opacity-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40">
              © 2026 Adeola Ojuade. Built with React & Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/adeolaoj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
              >
                <SiRefinedgithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/adeolaojuade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="mailto:adeolaojuade1@gmail.com"
                className="text-white/40 hover:text-primary transition-colors"
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