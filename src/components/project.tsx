import { sortProjects } from "@/utils/getProjects";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <div className="flex flex-wrap flex-col lg:flex-row justify-between text-font-color">
      {sortProjects.map((project, index) => (
        <Link
          key={index}
          className="lg:w-[48%] mb-[40px]"
          href={"/projects/" + project.slug}
        >
          <div className="rounded-[16px] border-[1px] border-border-color overflow-hidden">
            <Image
              className="aspect-video"
              src={project.meta.image}
              alt="project image"
              width={1920}
              height={1080}
            />
            <div className="flex h-[92px] items-center bg-primary-color">
              <Image
                className="w-[52px] h-[52px] rounded-[10px] border-[1px] border-border-color ml-[20px]"
                src={project.meta.logo}
                alt="project logo image"
                width={256}
                height={256}
              />
              <div className="ml-[12px]">
                <p className="text-[18px]">{project.meta.title}</p>
                <p className="text-[14px]">{project.meta.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
