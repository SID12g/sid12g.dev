"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

interface Post {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tag: string[];
  };
  slug: string;
}

function PostSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 animate-pulse"
        >
          <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
          <div className="h-3 w-full bg-neutral-100 dark:bg-neutral-800/60 rounded mb-3" />
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 bg-neutral-100 dark:bg-neutral-800/60 rounded" />
            <div className="h-4 w-12 bg-neutral-100 dark:bg-neutral-800/60 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PostPreview() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts", "latest"],
    queryFn: async () => {
      const response = await fetch("/api/posts/latest");
      if (!response.ok) throw new Error("포스트를 불러오는데 실패했습니다.");
      const data = await response.json();
      return data.slice(0, 4);
    },
    staleTime: 60 * 60 * 1000,
  });

  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
        Posts
      </h2>
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-5" />
      {isLoading || !posts ? (
        <PostSkeleton />
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`https://blog.sid12g.dev/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                  {post.metadata.title}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 leading-relaxed">
                  {post.metadata.summary}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    {post.metadata.publishedAt}
                  </span>
                  <div className="flex gap-1">
                    {post.metadata.tag.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <Link
            href="https://blog.sid12g.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 mt-1 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
