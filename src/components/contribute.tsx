import { getBlurDataUrl } from "next-image-blur";
import Section from "./section";
import Image from "next/image";

const contributes = [
  {
    href: "https://github.com/toss/suspensive/pull/1168",
    avatar: "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    content:
      "docs(suspensive.org): add punctuation marks to a document #1168 (24.08.01)",
    blur: await getBlurDataUrl(
      "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    ),
  },
  {
    href: "https://github.com/toss/suspensive/pull/1179",
    avatar: "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    content:
      "docs(suspensive.org): modify punctuation marks and spaces in the document #1179 (24.08.03)",
    blur: await getBlurDataUrl(
      "https://avatars.githubusercontent.com/u/25682207?s=128&v=4",
    ),
  },
  {
    href: "https://github.com/shuding/nextra/pull/3214",
    avatar: "https://avatars.githubusercontent.com/u/3676859?s=128&v=4",
    content: "docs: fix meta tag theme color #3214 (24.09.09)",
    blur: await getBlurDataUrl(
      "https://avatars.githubusercontent.com/u/3676859?s=128&v=4",
    ),
  },
];

export default function Contribute() {
  return (
    <Section title="Contribute">
      <div className="flex flex-col gap-2.5">
        {contributes.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 group"
          >
            <Image
              src={item.avatar}
              alt="avatar"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full shrink-0"
              blurDataURL={item.blur}
              placeholder="blur"
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              {item.content}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
