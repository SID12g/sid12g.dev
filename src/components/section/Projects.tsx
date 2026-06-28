import Separator from "@/components/Separator";
import { getProjects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = getProjects().slice(0, 4);

  return (
    <div>
      <Separator title="PROJECTS" />
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectItemView
            key={project.slug}
            href={`/projects/${project.slug}`}
            image={project.meta.preview}
            title={project.meta.title}
            description={project.meta.description}
            tags={project.meta.stacks.split(",")}
          />
        ))}
        <Link
          href="/projects"
          className="py-3 rounded-lg border border-faint bg-muted-5 text-center hover:border-accent hover:bg-white-10 transition-colors duration-150"
        >
          <span className="text-sm sm:text-base font-medium">더보기 →</span>
        </Link>
      </div>
    </div>
  );
}

function ProjectItemView({
  href,
  image,
  title,
  description,
  tags,
}: {
  href: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-4 px-5 py-6 rounded-2xl border border-faint bg-muted-5 hover:border-accent hover:bg-white-10 transition-colors duration-150"
    >
      <div className="flex flex-row">
        <div className="w-[120px] h-[120px] flex-shrink-0 rounded-md overflow-hidden mr-4">
          <Image
            src={image}
            alt="Project Image"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-base sm:text-lg font-semibold">{title}</p>
            <p className="text-sm sm:text-base text-muted font-medium">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
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
  );
}
