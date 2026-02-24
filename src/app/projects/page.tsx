import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Project",
  description: "혼자, 함께 해왔던 프로젝트",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
        Project
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        혼자, 함께 해왔던 프로젝트
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.meta.image}
                  alt={project.meta.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  {project.meta.date} · {project.meta.team}
                </p>
                <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {project.meta.title}
                </h2>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {project.meta.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
