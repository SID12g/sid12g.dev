import PostList from "@/components/post/PostList";
import { PostType } from "@/types/post.interface";

export const dynamic = "force-dynamic";

export default async function Post() {
  try {
    const response = await fetch("https://post.sid12g.dev/api/posts/latest");

    if (!response.ok) {
      return <div>Response Status != Ok</div>;
    }

    const posts: PostType[] = await response.json();

    return <PostList posts={posts} />;
  } catch (error) {
    console.error("문제가 발생했습니다.", error);
    return <div>문제가 발생했습니다.</div>;
  }
}
