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
  params: Promise<{ title: string }>;
}) {
  const resolvedParams = await params;
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
            borderRadius: 20,
          }}
          placeholder="blur"
          blurDataURL={blurImg}
        />
        <Gap $height="20px" />
        <Box>
          <Text $font_size="20px" $font_weight="500" $letter_spacing="-0.4px">
            {props.frontMatter.title}
          </Text>
          <Gap $height="6px" />
          <Text
            $font_size="16px"
            $color="#4E5968"
            $letter_spacing="-0.32px"
          >{`${props.frontMatter.date} · ${props.frontMatter.team}`}</Text>
          <Gap $height="6px" />
          <Text $font_size="16px" $letter_spacing="-0.32px">
            {props.frontMatter.description}
          </Text>
        </Box>
        <Gap $height="20px" />
        <MDXRemoteWrapper>
          <MDXRemote source={props.content} />
        </MDXRemoteWrapper>
      </ProjectPageWrapper>
    </>
  );
}
