import Image from "next/image";
import Link from "next/link";
import Section from "./section";
import { getProjects } from "@/lib/projects";
import { getBlurDataUrl } from "next-image-blur";

export default async function ProjectPreview() {
  const projects = getProjects();
  const desktopMoreBg = projects[7];
  const desktopMoreBgBlurDataURL = await getBlurDataUrl(
    desktopMoreBg.meta.preview,
  );
  const mobileMoreBg = projects[8];
  const mobileMoreBgBlurDataURL = await getBlurDataUrl(
    mobileMoreBg.meta.preview,
  );

  return (
    <Section title="Projects">
      <div className="grid grid-cols-4 gap-3 max-[580px]:grid-cols-3 max-[480px]:gap-2">
        {projects.slice(0, 8).map(async (project, index) => {
          const blurDataURL = await getBlurDataUrl(project.meta.preview);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={index === 7 ? "hidden max-[580px]:block" : ""}
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 hover:opacity-80 transition-opacity">
                <Image
                  src={project.meta.preview}
                  width={256}
                  height={256}
                  alt={project.meta.title}
                  className="w-full h-full object-cover"
                  blurDataURL={blurDataURL}
                  placeholder="blur"
                />
              </div>
            </Link>
          );
        })}
        <Link href="/projects">
          <div className="aspect-square rounded-lg overflow-hidden relative flex items-center justify-center hover:opacity-80 transition-opacity bg-neutral-900 dark:bg-neutral-100">
            {desktopMoreBg && (
              <Image
                src={desktopMoreBg.meta.preview}
                width={256}
                height={256}
                alt="더보기"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.3] max-[580px]:hidden"
                blurDataURL={desktopMoreBgBlurDataURL}
                placeholder="blur"
              />
            )}
            {mobileMoreBg && (
              <Image
                src={mobileMoreBg.meta.preview}
                width={256}
                height={256}
                alt="더보기"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.3] hidden max-[580px]:block"
                blurDataURL={mobileMoreBgBlurDataURL}
                placeholder="blur"
              />
            )}
            <span className="text-sm text-white relative z-10">더보기</span>
          </div>
        </Link>
      </div>
    </Section>
  );
}
