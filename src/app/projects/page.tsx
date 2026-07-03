import Separator from "@/components/Separator";
import { getProjects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects • sid12g",
  description: "sid12g의 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-muted font-jetbrains-mono hover:text-primary transition-colors duration-150"
      >
        ← HOME
      </Link>
      <div className="h-8" />
      <Separator title="PROJECTS" />
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex flex-col gap-4 px-5 py-6 rounded-2xl border border-faint bg-muted-5 hover:border-accent hover:bg-hover transition-colors duration-150"
          >
            <div className="flex flex-row">
              <div className="w-[120px] h-[120px] flex-shrink-0 rounded-md overflow-hidden mr-4">
                <Image
                  src={project.meta.preview}
                  alt="Project Image"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <p className="text-base sm:text-lg font-semibold">
                    {project.meta.title}
                  </p>
                  <p className="text-sm sm:text-base text-muted font-medium">
                    {project.meta.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.meta.stacks.split(",").map((tag) => (
                    <span
                      className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint w-fit flex flex-row gap-3 items-center"
                      key={tag}
                    >
                      <div className="bg-accent w-[6px] h-[6px] rounded-full" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
