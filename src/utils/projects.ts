import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ProjectMeta {
  title: string;
  description: string;
  image: string;
  logo: string;
  preview: string;
  team: string;
  date: string;
  source: string;
  order: string;
}

interface Project {
  meta: ProjectMeta;
  slug: string;
  content: string;
}

const projectDir = "projects";

export function getProjects(): Project[] {
  const projectFiles = fs.readdirSync(path.join(process.cwd(), projectDir));

  const allProjects: Project[] = projectFiles
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), projectDir, filename),
        "utf-8",
      );
      const { data: frontMatter, content } = matter(fileContent);

      return {
        meta: frontMatter as Project["meta"],
        slug: filename.replace(".mdx", ""),
        content,
      };
    });

  return allProjects.sort((a, b) => {
    return b.meta.order.localeCompare(a.meta.order);
  });
}
