"use client";

import PostList from "@/components/post/PostList";
import PostSkeleton from "@/components/post/PostSkeleton";
import Box from "@/components/Box";
import Text from "@/components/Text";
import { PostType } from "@/types/post.interface";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const response = await fetch("/api/posts");

  if (!response.ok) {
    throw new Error("포스트를 불러오는데 실패했습니다.");
  }

  return response.json();
}

export default function Post() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <PostSkeleton />;
  }

  if (error) {
    return (
      <Box
        $height="calc(100vh - 84px)"
        $display="flex"
        $justify_content="center"
        $align_items="center"
      >
        <Text $font_size="20px" $color="red">
          포스트를 불러오는데 실패했습니다.
        </Text>
      </Box>
    );
  }

  return <PostList posts={posts || []} />;
}
