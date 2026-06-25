"use client";

import dynamic from "next/dynamic";
import PostsSkeleton from "./PostsSkeleton";

const Posts = dynamic(() => import("./section/Posts"), {
  ssr: false,
  loading: () => <PostsSkeleton />,
});

export default Posts;
