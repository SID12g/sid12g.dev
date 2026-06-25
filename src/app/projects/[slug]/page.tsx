import { mdxComponents } from "@/components/mdx-components";
import MediaPreview from "@/components/MediaPreview";
import Separator from "@/components/Separator";
import { getProjectAssets, getProjects } from "@/utils/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.meta.title} • sid12g`,
    description: project.meta.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);
  if (!project) notFound();

  const { meta, content } = project;
  const assets = getProjectAssets(slug);

  return (
    <div className="flex flex-col gap-8">
      <Link
        href="/projects"
        className="text-sm text-muted font-jetbrains-mono hover:text-primary transition-colors duration-150"
      >
        ← PROJECTS
      </Link>

      {/* 썸네일 */}
      <div className="w-full rounded-2xl overflow-hidden border border-faint">
        <Image
          src={meta.image}
          alt={`${meta.title} thumbnail`}
          width={1200}
          height={630}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* 로고 | 프로젝트명, 설명 */}
      <div className="flex flex-row gap-4 items-center">
        <div className="w-[64px] h-[64px] rounded-xl overflow-hidden border border-faint flex-shrink-0">
          <Image
            src={meta.logo}
            alt={`${meta.title} logo`}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{meta.title}</p>
          <p className="text-sm text-muted font-medium">{meta.description}</p>
        </div>
      </div>

      {/* 팀 여부, 날짜, 소스 */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint flex flex-row gap-2 items-center">
          <div className="bg-accent w-[6px] h-[6px] rounded-full" />
          {meta.team}
        </span>
        <span className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint flex flex-row gap-2 items-center">
          <div className="bg-accent w-[6px] h-[6px] rounded-full" />
          {meta.date}
        </span>
        {meta.source && (
          <a
            href={meta.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted font-jetbrains-mono px-3 py-[6px] bg-muted-15 rounded-full border border-faint flex flex-row gap-2 items-center hover:border-accent hover:text-primary transition-colors duration-150"
          >
            <div className="bg-accent w-[6px] h-[6px] rounded-full" />
            Source ↗
          </a>
        )}
      </div>

      <div className="w-full h-[1px] bg-white-10" />

      {/* MDX 콘텐츠 */}
      <article className="prose-custom">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>

      {/* 에셋 갤러리 */}
      {assets.length > 0 && (
        <div>
          <Separator title="ASSETS" />
          <div className="flex flex-row overflow-x-auto gap-x-6 scrollbar-thumb-primary">
            {assets.map((asset) => (
              <MediaPreview
                key={asset.url}
                src={asset.url}
                name={asset.name}
                type={asset.type}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
