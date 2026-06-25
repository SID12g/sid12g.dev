import Separator from "@/components/Separator";
import Link from "next/link";

interface Post {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    tag: string[];
  };
  slug: string;
}

async function getLatestPosts(): Promise<Post[]> {
  const response = await fetch("https://blog.sid12g.dev/api/posts/latest", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`포스트를 불러오는데 실패했습니다. ${response.status}`);
  }

  const data: Post[] = await response.json();
  return data.slice(0, 4);
}

export default async function Posts() {
  let posts: Post[] = [];

  try {
    posts = await getLatestPosts();
  } catch {
    return null;
  }

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
        >
          <div className="py-3 rounded-lg border border-faint bg-muted-5 text-center">
            <p className="text-base font-medium">더보기 →</p>
          </div>
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
