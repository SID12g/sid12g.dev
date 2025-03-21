import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Post from "@/components/post/Post";
import { PostType } from "@/types/post.interface";

export default function PostList({ posts }: { posts: PostType[] }) {
  return (
    <Wrapper>
      <Gap $height="100px" />
      <Text $font_size="24px" $font_weight="500" $line_height="32px">
        Posts
      </Text>
      <Gap $height="20px" />
      {posts.map((post: PostType, index: number) => (
        <Box key={index}>
          <Post post={post} />
          <Gap $height="12px" />
        </Box>
      ))}
    </Wrapper>
  );
}
