import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectType } from "@/types/project.interface";

const projectDir = "projects";
const projectFiles = fs.readdirSync(path.join(process.cwd(), projectDir));

const allProjects: ProjectType[] = projectFiles.map((filename) => {
  const fileContent = fs.readFileSync(path.join(projectDir, filename), "utf-8");
  const { data: frontMatter } = matter(fileContent);

  return {
    meta: frontMatter as ProjectType["meta"],
    slug: filename.replace(".mdx", ""),
    content: fileContent,
  };
});

const sortProjects = allProjects.sort((a, b) => {
  const dateA = a.meta.order.toLowerCase();
  const dateB = b.meta.order.toLowerCase();
  return dateB.localeCompare(dateA);
});
export { sortProjects };
