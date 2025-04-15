import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortProjects } from "@/utils/getProject";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXRemoteWrapper from "@/components/project/MDXRemoteWrapper";
import Image from "next/image";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import ProjectPageWrapper from "@/components/project/ProjectPageWrapper";
import getBlurImg from "@/utils/getBlurImg";
import Box from "@/components/Box";
import TeamIcon from "@/../public/icons/team.svg";
import DateIcon from "@/../public/icons/date.svg";
import SourceIcon from "@/../public/icons/source.svg";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeCodeTitles from "rehype-code-titles";

const options: any = {
  mdxOptions: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme: "github-light",
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
};

export async function generateStaticParams() {
  return sortProjects.map((project) => ({
    slug: project.slug,
  }));
}

async function getPost(title: string) {
  const markdownFile = fs.readFileSync(
    path.join("projects", title + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    title,
    content,
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ title: string }> | undefined;
}) {
  const resolvedParams = await Promise.resolve(params || { title: "" });
  const title = resolvedParams.title;
  const props = await getPost(title);
  const blurImg = await getBlurImg(props.frontMatter.image);
  return (
    <>
      <ProjectPageWrapper>
        <Gap $height="100px" />
        <Image
          src={props.frontMatter.image}
          alt="thumbnail"
          width={1920}
          height={1080}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            border: "1px solid #e0e0e0",
            borderRadius: 20,
          }}
          placeholder="blur"
          blurDataURL={blurImg}
        />
        <Gap $height="20px" />
        <Box
          $background_color="#ffffff"
          $border_radius="20px"
          $border="1px solid #e0e0e0"
        >
          <Gap $height="20px" />
          <Box $display="flex" $align_items="center">
            <Gap $width="20px" />
            <Image
              src={props.frontMatter.logo}
              alt="logo"
              width={60}
              height={60}
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: 8,
              }}
            />
            <Gap $width="16px" />
            <Box>
              <Text
                $font_size="20px"
                $font_weight="500"
                $letter_spacing="-0.4px"
              >
                {props.frontMatter.title}
              </Text>
              <Gap $height="6px" />
              <Text $font_size="16px" $letter_spacing="-0.32px">
                {props.frontMatter.description}
              </Text>
            </Box>
            <Gap $width="20px" />
          </Box>
          <Gap $height="20px" />
        </Box>
        <Gap $height="20px" />

        <Box $display="flex">
          <Gap $width="20px" />
          <Box $display="flex" $flex_direction="column">
            <Box
              $display="flex"
              $align_items="center"
              $overflow_x="scroll !important"
            >
              <Image src={TeamIcon} alt="team" width={20} height={20} />
              <Gap $width="6px" />
              <Text
                $font_size="16px"
                $color="#4E5968"
                $letter_spacing="-0.32px"
              >
                {props.frontMatter.team}
              </Text>
            </Box>
            <Gap $height="8px" />
            <Box
              $display="flex"
              $align_items="center"
              $overflow_x="scroll !important"
            >
              <Image src={DateIcon} alt="date" width={20} height={20} />
              <Gap $width="6px" />
              <Text
                $font_size="16px"
                $color="#4E5968"
                $letter_spacing="-0.32px"
              >
                {props.frontMatter.date}
              </Text>
            </Box>
            <Gap $height="8px" />
            <Box
              $display="flex"
              $align_items="center"
              $overflow_x="scroll !important"
            >
              <Image src={SourceIcon} alt="source" width={20} height={20} />
              <Gap $width="6px" style={{ flexShrink: 0 }} />

              <Link
                href={props.frontMatter.source}
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  flexShrink: 1,
                }}
              >
                <Text
                  $font_size="16px"
                  $color="#4E5968"
                  $letter_spacing="-0.32px"
                >
                  {props.frontMatter.source}
                </Text>
              </Link>
            </Box>
          </Box>
          <Gap $width="20px" />
        </Box>
        <Gap $height="20px" />
        <Box $width="100%" $height="1px" $background_color="#e5e7eb;" />
        {/* <Gap $height="20px" /> */}
        <MDXRemoteWrapper>
          <MDXRemote source={props.content} options={options} />
        </MDXRemoteWrapper>
      </ProjectPageWrapper>
    </>
  );
}
