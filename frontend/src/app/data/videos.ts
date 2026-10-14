export type Video = {
  id: string; // the part after "youtu.be/" or "watch?v=" in the YouTube URL
  title?: string; // leave out to show "Watch on YouTube" instead
  date?: string; // e.g. "Sep 2026"
};

export const videosIntro =
  "Making vlogs with friends and family is my favorite way to stay creative and connect with people.";

// The first video is shown large; the next three are listed beside it.
// TODO: add each video's title (and a date if you like).
export const videos: Video[] = [
  { id: "xTMuMe0ZcdE", title: "ranking PRIME VIDEO romcoms | *SPOILERS*", date: "Sep 2026" },
  { id: "sRqddRkwlsk", title: "last week of fall classes at johns hopkins | final projects, ASA fashion show", date: "Jan 2025" },
  { id: "IK1QMaGnSvc", title: "vlogmas day one! | touring apartments, prepping for finals, hopkins day in the life", date: "Dec 2024" },
];
