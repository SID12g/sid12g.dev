export interface PostType {
  meta: {
    title: string;
    date: string;
    description: string;
    image: string;
    tag: string;
  };
  slug: string;
  url: string;
}
