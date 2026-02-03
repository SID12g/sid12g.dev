import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "post.sid12g.dev",
      "blog.sid12g.dev",
    ],
  },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
