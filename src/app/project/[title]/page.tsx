import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { use } from "react";
import { sortProjects } from "@/utils/getProject";

export async function generateStaticParams() {
  return sortProjects.map((project) => ({
    slug: project.slug,
  }));
}

function getPost({ title }: { title: string }) {
  const markdownFile = fs.readFileSync(
    path.join("projects", title + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    title,
    content,
  };
}

export default function Project({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const props = getPost(use(params));
  return <>{props.content}</>;
}
