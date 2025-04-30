"use client";

import styled, { keyframes } from "styled-components";
import PageWrapper from "@/components/PageWrapper";
import Gap from "@/components/Gap";
import Box from "@/components/Box";
import Banner from "@/components/Banner";
import background from "@/../public/images/post-background.jpg";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonBox = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 16px;
`;

const PostSkeletonWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 16px;
`;

export default function PostSkeleton() {
  return (
    <PageWrapper>
      <Gap $height="100px" />
      <Banner
        background={background}
        title="Post"
        description="기술, 경험 그리고 다양한 이야기"
      />
      <Gap $height="40px" />
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Box key={index}>
          <PostSkeletonWrapper>
            <SkeletonBox
              style={{ width: "100px", height: "22px", marginBottom: "4px" }}
            />
            <Gap $height="4px" />
            <SkeletonBox
              style={{ width: "70%", height: "24px", marginBottom: "4px" }}
            />
            <Gap $height="4px" />
            <SkeletonBox style={{ width: "90%", height: "22px" }} />
          </PostSkeletonWrapper>
          <Gap $height="12px" />
        </Box>
      ))}
    </PageWrapper>
  );
}
