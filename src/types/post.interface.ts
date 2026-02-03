export interface PostType {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tag: string[];
  };
  slug: string;
}
