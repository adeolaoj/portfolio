export type Video = {
  id: string; // the part after "youtu.be/" or "watch?v=" in the YouTube URL
  title?: string; // leave out to show "Watch on YouTube" instead
  date?: string; // e.g. "Sep 2026"
};

export const videosIntro =
  "Vlogs with friends and family — my favorite way to stay creative and connect with people.";

// The first video is shown large; the next three are listed beside it.
// TODO: add each video's title (and a date if you like).
export const videos: Video[] = [
  { id: "sRqddRkwlsk" },
  { id: "xTMuMe0ZcdE" },
  { id: "IK1QMaGnSvc" },
];
