"use client";

import styled from "styled-components";
import Link from "next/link";
import Text from "@/components/Text";
import Gap from "@/components/Gap";
import { PostType } from "@/types/post.interface";

export default function Post({ post }: { post: PostType }) {
  return (
    <Link href={post.url}>
      <PostWrapper>
        <Text
          font_size="14px"
          color="#4E5968"
          line_height="22px"
          letter_spacing="-0.28px"
        >{`${post.meta.date} · ${post.meta.tag}`}</Text>
        <Gap height="4px" />
        <Text
          font_size="16px"
          font_weight="500"
          line_height="24px"
          letter_spacing="-0.32px"
        >
          {post.meta.title}
        </Text>
        <Gap height="4px" />
        <Text font_size="14px" line_height="22px" letter_spacing="-0.28px">
          {post.meta.description}
        </Text>
      </PostWrapper>
    </Link>
  );
}

const PostWrapper = styled.div`
  border: 1px solid #ededed;
  padding: 24px;
  border-radius: 16px;
`;
