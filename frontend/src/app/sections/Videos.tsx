import { SiYoutube } from "@icons-pack/react-simple-icons";
import { links } from "../data/profile";
import { videos, videosIntro } from "../data/videos";

export function Videos() {
  const [latest] = videos;

  return (
    <section id="videos" className="bg-cocoa py-24 text-on-dark md:py-30">
      <div className="container-page">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl tracking-tight md:text-5xl">I also make videos.</h2>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-on-dark-muted">{videosIntro}</p>
          </div>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream px-6 font-medium text-ink transition-colors hover:bg-peach"
          >
            <SiYoutube size={18} aria-hidden="true" />
            Visit {links.youtubeHandle}
          </a>
        </div>

        {latest && (
          <div className="aspect-video overflow-hidden rounded-card bg-ink">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${latest.id}`}
              title={latest.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="size-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
