import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { getBlurDataUrl } from "next-image-blur";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function getProject(slug: string) {
  const filePath = path.join(process.cwd(), "projects", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter, content } = matter(fileContent);
  return { frontMatter, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.frontMatter.title} | sid12g`,
    description: project.frontMatter.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { frontMatter, content } = project;

  const thumbnailBlurDataURL = await getBlurDataUrl(frontMatter.image);
  const iconBlurDataURL = await getBlurDataUrl(frontMatter.logo);

  return (
    <section>
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
        <Image
          src={frontMatter.image}
          alt={frontMatter.title}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
          placeholder="blur"
          blurDataURL={thumbnailBlurDataURL}
        />
      </div>

      {/* Project Info Card */}
      <div className="mt-5 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="flex items-center gap-4">
          <Image
            src={frontMatter.logo}
            alt={`${frontMatter.title} logo`}
            width={48}
            height={48}
            className="rounded-lg border border-neutral-200 dark:border-neutral-800"
            placeholder="blur"
            blurDataURL={iconBlurDataURL}
          />
          <div>
            <h1 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              {frontMatter.title}
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {frontMatter.description}
            </p>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-5 flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span>👥</span>
          <span>{frontMatter.team}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{frontMatter.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔗</span>
          <Link
            href={frontMatter.source}
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {frontMatter.source}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 h-[1px] bg-neutral-200 dark:bg-neutral-800" />

      {/* MDX Content */}
      <article className="prose mt-5">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </section>
  );
}
