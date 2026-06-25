export interface ContributionItem {
  image: string;
  repository: string;
  repositoryHref: string;
  title: string;
  href: string;
  date: string;
}

export const contributions: ContributionItem[] = [
  {
    image: "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    repository: "toss/suspensive",
    repositoryHref: "https://github.com/toss/suspensive",
    title:
      "docs(suspensive.org): add punctuation marks to a document #1168",
    href: "https://github.com/toss/suspensive/pull/1168",
    date: "2024-08-01",
  },
  {
    image: "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    repository: "toss/suspensive",
    repositoryHref: "https://github.com/toss/suspensive",
    title:
      "docs(suspensive.org): modify punctuation marks and spaces in the document #1179",
    href: "https://github.com/toss/suspensive/pull/1179",
    date: "2024-08-03",
  },
  {
    image: "https://avatars.githubusercontent.com/u/3676859?s=128&v=4",
    repository: "shuding/nextra",
    repositoryHref: "https://github.com/shuding/nextra",
    title: "docs: fix meta tag theme color #3214",
    href: "https://github.com/shuding/nextra/pull/3214",
    date: "2024-09-09",
  },
];
