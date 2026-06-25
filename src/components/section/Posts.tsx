import Separator from "@/components/Separator";
import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <Separator title="POSTS" />
      <div className="flex flex-col gap-5">
        <PostItem
          title="My First Post"
          description="This is a description of my first post."
          date="2024-06-01"
          tags={["tag1", "tag2"]}
          href="/posts/my-first-post"
        />
        <PostItem
          title="My First Post"
          description="This is a description of my first post."
          date="2024-06-01"
          tags={["tag1", "tag2"]}
          href="/posts/my-first-post"
        />
      </div>
    </div>
  );
}

function PostItem({
  title,
  description,
  date,
  tags,
  href,
}: {
  title: string;
  description: string;
  date: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-4 px-5 py-6 rounded-2xl border border-faint bg-muted-5">
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">{title}</p>
          <p className="text-sm text-muted">{description}</p>
        </div>
        <div className="flex flew-row items-center justify-between">
          <p className="text-sm text-muted font-jetbrains-mono">{date}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint w-fit"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
