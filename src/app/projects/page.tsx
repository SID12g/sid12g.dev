import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { getBlurDataUrl } from "next-image-blur";

export const metadata = {
  title: "Projects",
  description: "혼자, 함께 해왔던 프로젝트",
  images: [
    {
      url: "https://sid12g.dev/images/og-image.png",
    },
  ],
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
        Projects
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
        혼자, 함께 해왔던 프로젝트
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {projects.map(async (project) => {
          const blurDataURL = await getBlurDataUrl(project.meta.image);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.meta.image}
                    alt={project.meta.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col transition-colors duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/50">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                    {project.meta.date} · {project.meta.team}
                  </p>
                  <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                    {project.meta.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
                    {project.meta.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
