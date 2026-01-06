import { useState } from "react";
import { Mail, Github, Linkedin, Youtube, ExternalLink, Code, Briefcase, Coffee, Star } from "lucide-react";
import { Card } from "./components/ui/card";
import { Typewriter } from "./components/Typewriter";
import headshot from '../images/Headshot.JPG';

type Tab = "about" | "projects" | "extras";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const projects = [
    {
      title: "Machine Learning Image Classifier",
      description: "Built a CNN-based image classifier using TensorFlow and Keras that achieves 94% accuracy on the CIFAR-10 dataset. Implemented data augmentation and transfer learning techniques.",
      tech: ["Python", "TensorFlow", "Keras", "NumPy"],
      github: "https://github.com/yourusername/ml-classifier",
    },
    {
      title: "Task Management Web App",
      description: "Full-stack task management application with real-time updates, user authentication, and collaborative features. Responsive design with drag-and-drop functionality.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://demo-link.com",
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web tool to visualize sorting and pathfinding algorithms. Features step-by-step animation controls and performance metrics display.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      github: "https://github.com/yourusername/algo-viz",
      demo: "https://demo-link.com",
    },
    {
      title: "Discord Bot Assistant",
      description: "Custom Discord bot with moderation features, music playback, and custom commands. Serves over 500 users across multiple servers.",
      tech: ["Python", "Discord.py", "PostgreSQL"],
      github: "https://github.com/yourusername/discord-bot",
    },
  ];

  const skills = [
    "Python", "JavaScript", "TypeScript", "Java", "C++",
    "React", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "TensorFlow", "PyTorch", "Git", "Docker", "AWS"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 bg-[#ffffff] -z-10"></div>
      
      {/* Header */}
      <header className="bg-transparent border-b border-border/50 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl bg-gradient-to-r from-accent via-[#00B4B9] to-accent bg-clip-text text-transparent font-semibold">Adeola Ojuade</h1>
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
                  <span className="text-muted-foreground rounded-full border border-orange-400 py-1 px-3">student</span>
                  <span className="text-muted-foreground rounded-full border border-orange-400 py-1 px-3">developer</span>
                  <span className="text-muted-foreground rounded-full border border-orange-400 py-1 px-3">creator</span>
                </div>
                
                {/* Main heading */}
                <div>
                  <h1 className="text-6xl md:text-7xl mb-2 text-foreground leading-tight">
                    Hello, I'm
                  </h1>
                  <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-accent via-accent to-[#00B4B9] bg-clip-text text-transparent leading-tight">
                    Adeola Ojuade
                  </h1>
                  <p className="text-xl text-accent/80 h-8 mb-6">
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
                <p className="text-foreground/70 leading-relaxed text-lg max-w-lg">
                  I'm a fourth year CS student passionate about developing user-centered products to create impact.
                  My biggest interests are AI, web development, and UI/UX design. When I'm not coding, you'll find me vlogging on my Youtube channel!
                </p>
                
                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a
                    href="mailto:adeolaojuade1@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-[#00B4B9] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium"
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
              
              {/* Hero Image */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Gradient backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                  
                  {/* Image container */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10 backdrop-blur-sm border border-border/50 shadow-2xl">
                    <img
                      src={headshot}
                      alt="Adeola's Headshot"
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
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
                    className="px-4 py-2 bg-gradient-to-br from-white to-secondary/30 border border-border rounded-lg text-foreground hover:border-primary/40 hover:shadow-md transition-all cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education & Contact */}
            <section className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-secondary/20 border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-foreground">Education</h3>
                <div>
                  <p className="text-foreground">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">University Name</p>
                  <p className="text-muted-foreground">Expected Graduation: May 2026</p>
                  <p className="text-muted-foreground mt-2">GPA: 3.8/4.0</p>
                </div>
              </Card>
              <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-accent/10 border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-foreground">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:alex.chen@email.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    alex.chen@email.com
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    github.com/yourusername
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                    linkedin.com/in/yourusername
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
                Here are some projects I'm really proud of! Each one taught me something new 
                and pushed me to grow as a developer.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-6 space-y-4 bg-card border-border hover:border-primary/40 transition-all hover:shadow-lg hover:scale-[1.02]"
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
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="View Demo"
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
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Extras Tab */}
        {activeTab === "extras" && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl text-foreground">The Fun Stuff ✨</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Life's not just about code! Here are some other things that make me, well... me!
              </p>
            </div>

            {/* YouTube Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Youtube className="text-primary" size={32} />
                <h2 className="text-3xl text-foreground">My YouTube Channel 📹</h2>
              </div>
              <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-foreground/80 mb-4">
                  I love sharing what I learn! My channel is all about making programming fun and 
                  accessible for everyone. Whether you're just starting out or looking to level up 
                  your skills, there's something here for you. Come hang out! 🎉
                </p>
                <a
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Youtube size={20} />
                  Subscribe & Join the Community!
                </a>
              </Card>
            </section>

            {/* Fun Facts & Interests */}
            <section className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-3 bg-card border-border text-center hover:shadow-lg transition-all hover:scale-105">
                <Coffee className="text-accent mx-auto" size={40} />
                <h3 className="text-xl text-foreground">Coffee Lover ☕</h3>
                <p className="text-muted-foreground">
                  Fueling my code with ~4 cups daily! My go-to? Cold brew with a splash of oat milk. 
                  It's basically my debugging juice! 😄
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

            {/* Current Interests */}
            <section className="space-y-6">
              <h2 className="text-3xl text-foreground">What I'm Geeking Out Over Right Now 🤓</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <h3 className="text-xl mb-3 text-foreground">Rust Programming 🦀</h3>
                  <p className="text-foreground/70">
                    Falling in love with Rust! The speed, safety, and that feeling when the code 
                    finally compiles... *chef's kiss*. Currently building a CLI tool for file management!
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/20 border-accent/20 hover:shadow-lg transition-all hover:scale-[1.02]">
                  <h3 className="text-xl mb-3 text-foreground">Cloud Architecture ☁️</h3>
                  <p className="text-foreground/70">
                    Diving into AWS and learning how to build scalable, resilient systems. 
                    Working towards that Solutions Architect cert! The cloud is wild! 🚀
                  </p>
                </Card>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2026 Adeola Ojuade. Built with React & Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a
                href="mailto:alex.chen@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
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