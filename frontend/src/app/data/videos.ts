export type Video = {
  id: string; // the part after "watch?v=" in the YouTube URL
  title: string;
  date?: string;
};

export const videosIntro =
  "Vlogs with friends and family — my favorite way to stay creative and connect with people.";

// The first video is shown large; the next three are listed beside it.
// TODO: replace the title below with the real one, and add three more recent videos.
export const videos: Video[] = [{ id: "sRqddRkwlsk", title: "Latest vlog" }];
