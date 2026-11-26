type Media = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  publishedAt: string;
  status: 'draft' | 'published';
  transcript: string;
  references: { title: string; url: string }[];
  bookSlugs?: string[];
};

export type Episode = Media & { host: string; guests: string[]; audioUrl: string };
export type ProjectVideo = Media & { format: string; youtubeId: string; captionsReviewed: boolean };

const podcastEpisodes: Episode[] = [];
const projectVideos: ProjectVideo[] = [];

function available<T extends Media>(records: T[]) {
  return records.filter(item => item.status === 'published' && Date.parse(item.publishedAt) <= Date.now() && item.transcript.trim())
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export const episodes = () => available(podcastEpisodes).filter(item => item.audioUrl.startsWith('https://'));
export const videos = () => available(projectVideos).filter(item => item.captionsReviewed && /^[\w-]{11}$/.test(item.youtubeId));
