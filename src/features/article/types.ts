export interface Article {
  slug: string;
  title: string;
  author?: { slug: string; name: string; photoUrl?: string };
  country?: { slug: string; name: string; photoUrl?: string };
  contentType?: { slug: string; name: string; photoUrl?: string };
  date: number;
  duration: number;
  shortText?: string;
  fullText: any;
}
