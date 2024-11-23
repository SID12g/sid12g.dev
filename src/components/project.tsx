import { sortProjects } from "@/utils/getProjects";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 auto-fit">
      {sortProjects.map((project, index) => (
        <Link key={index} className="mb-6" href={"/projects/" + project.slug}>
          <div className="rounded-2xl border border-border-color overflow-hidden">
            <Image
              className="aspect-video"
              src={project.meta.image}
              alt="project image"
              width={1920}
              height={1080}
            />
            <div className="flex h-24 items-center bg-primary-color">
              <Image
                className="w-14 h-14 rounded-md border border-border-color ml-5"
                src={project.meta.logo}
                alt="project logo image"
                width={256}
                height={256}
              />
              <div className="ml-3">
                <p className="text-lg">{project.meta.title}</p>
                <p className="text-sm">{project.meta.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
