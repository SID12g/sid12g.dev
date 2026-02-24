import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ProjectType } from "@/types/project";

const projectDir = "projects";

export function getProjects(): ProjectType[] {
  const projectFiles = fs.readdirSync(path.join(process.cwd(), projectDir));

  const allProjects: ProjectType[] = projectFiles
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), projectDir, filename),
        "utf-8",
      );
      const { data: frontMatter, content } = matter(fileContent);

      return {
        meta: frontMatter as ProjectType["meta"],
        slug: filename.replace(".mdx", ""),
        content,
      };
    });

  return allProjects.sort((a, b) => {
    return b.meta.order.localeCompare(a.meta.order);
  });
}
