import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { Play } from "lucide-react";
import { SiYoutube } from "@icons-pack/react-simple-icons";
import { links } from "../data/profile";
import { videos, videosIntro, type Video } from "../data/videos";

const thumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const label = (v: Video) => v.title ?? "Watch on YouTube";

// If a thumbnail fails to load, hide it so only the dark tile shows.
const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.visibility = "hidden";
};

// Shows the thumbnail first and only loads YouTube's player when clicked,
// which keeps the page fast and free of YouTube tracking until then.
function LatestVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col gap-3.5">
      <div className="relative aspect-video overflow-hidden rounded-card bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title ?? "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={video.title ? `Play video: ${video.title}` : "Play video"}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <img src={thumbnail(video.id)} alt="" onError={hideOnError} className="absolute inset-0 size-full object-cover" />
            <span className="relative inline-flex size-[72px] items-center justify-center rounded-full bg-terracotta text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
              <Play size={26} fill="currentColor" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      {video.title && <span className="text-[19px] font-medium">{video.title}</span>}
    </div>
  );
}

function VideoListItem({ video }: { video: Video }) {
  return (
    <li>
      <a
        href={watchUrl(video.id)}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid grid-cols-[140px_minmax(0,1fr)] items-center gap-4"
      >
        <span className="aspect-video overflow-hidden rounded-xl bg-ink">
          <img src={thumbnail(video.id)} alt="" loading="lazy" onError={hideOnError} className="size-full object-cover" />
        </span>
        <span className="flex flex-col gap-1">
          <span className="font-medium transition-colors group-hover:text-blush">{label(video)}</span>
          {video.date && <span className="eyebrow text-[11px] text-blush">{video.date}</span>}
        </span>
      </a>
    </li>
  );
}

export function Videos() {
  const [latest, ...rest] = videos;
  const more = rest.slice(0, 3);

  return (
    <section id="videos" className="bg-cocoa py-24 text-on-dark md:py-30">
      <div className="container-page">
        <Reveal>
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
            <div className={more.length > 0 ? "grid gap-6 md:grid-cols-[1.6fr_1fr]" : ""}>
              <LatestVideo video={latest} />
              {more.length > 0 && (
                <ul className="flex flex-col gap-5" aria-label="More videos">
                  {more.map((v) => (
                    <VideoListItem key={v.id} video={v} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
