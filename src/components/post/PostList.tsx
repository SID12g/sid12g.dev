import PageWrapper from "@/components/PageWrapper";
import Gap from "@/components/Gap";
import Box from "@/components/Box";
import Post from "@/components/post/Post";
import { PostType } from "@/types/post.interface";
import Banner from "@/components/Banner";
import background from "@/../public/images/post-background.jpg";

export default function PostList({ posts }: { posts: PostType[] }) {
  return (
    <PageWrapper>
      <Gap $height="100px" />
      <Banner
        background={background}
        title="Post"
        description="기술, 경험 그리고 다양한 이야기"
      />
      <Gap $height="40px" />
      {posts.map((post: PostType, index: number) => (
        <Box key={index}>
          <Post post={post} />
          <Gap $height="12px" />
        </Box>
      ))}
    </PageWrapper>
  );
}
