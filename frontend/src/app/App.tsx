import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { NowStrip } from "./sections/NowStrip";
import { Work } from "./sections/Work";
import { Experience } from "./sections/Experience";
import { Videos } from "./sections/Videos";
import { Contact } from "./sections/Contact";

// One scrolling page. Content lives in ./data; each section is in ./sections.
export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-30"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <NowStrip />
        <Work />
        <Experience />
        <Videos />
      </main>
      <Contact />
    </div>
  );
}
