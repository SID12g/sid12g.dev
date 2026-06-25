"use client";

import Separator from "@/components/Separator";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";

interface Post {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tag: string[];
  };
  slug: string;
}

async function fetchLatestPosts(): Promise<Post[]> {
  const res = await fetch("/api/posts/latest");
  if (!res.ok) throw new Error("포스트를 불러오는데 실패했습니다.");
  const data: Post[] = await res.json();
  return data.slice(0, 4);
}

export default function Posts() {
  const { data: posts } = useSuspenseQuery({
    queryKey: ["posts", "latest"],
    queryFn: fetchLatestPosts,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <div>
      <Separator title="POSTS" />
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <PostItem
            key={post.slug}
            title={post.metadata.title}
            description={post.metadata.summary}
            date={post.metadata.publishedAt}
            tags={post.metadata.tag}
            href={`https://blog.sid12g.dev/posts/${post.slug}`}
          />
        ))}
        <Link
          href="https://blog.sid12g.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 rounded-lg border border-faint bg-muted-5 text-center hover:border-accent hover:bg-white-10 transition-colors duration-150"
        >
          <span className="text-sm font-medium">더보기 →</span>
        </Link>
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
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-4 px-5 py-6 rounded-2xl border border-faint bg-muted-5 hover:border-accent hover:bg-white-10 transition-colors duration-150"
    >
      <div className="flex flex-col gap-2">
        <span className="text-sm sm:text-base font-medium">{title}</span>
        <span className="text-xs sm:text-sm text-muted">{description}</span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <span className="text-xs text-muted font-jetbrains-mono">{date}</span>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((tag) => (
            <span
              className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint w-fit"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
