import Link from "next/link";
import Text from "@/components/Text";
import Gap from "@/components/Gap";
import { ProjectType } from "@/types/project.interface";
import Image from "next/image";
import Box from "@/components/Box";
import ImageWrapper from "@/components/project/ImageWrapper";
import ProjectWrapper from "@/components/project/ProjectWrapper";
import getBlurImg from "@/utils/getBlurImg";

export default async function Project({ project }: { project: ProjectType }) {
  const blurImg = await getBlurImg(project.meta.image);
  return (
    <ProjectWrapper>
      <Link href={`/project/${project.slug}`}>
        <ImageWrapper>
          <Image
            src={project.meta.image}
            alt="project"
            fill
            style={{
              transition: "all 0.3s",
              objectFit: "cover",
            }}
            placeholder="blur"
            blurDataURL={blurImg}
          />
        </ImageWrapper>
        <Gap $height="20px" />
        <Box $display="flex">
          <Gap $width="20px" />
          <Box>
            <Text
              $font_size="14px"
              $color="#4E5968"
              $line_height="22px"
              $letter_spacing="-0.28px"
            >{`${project.meta.date} · ${project.meta.team}`}</Text>
            <Gap $height="4px" />
            <Text
              $font_size="16px"
              $font_weight="500"
              $line_height="24px"
              $letter_spacing="-0.32px"
            >
              {project.meta.title}
            </Text>
            <Gap $height="4px" />
            <Text
              $font_size="14px"
              $line_height="22px"
              $letter_spacing="-0.28px"
            >
              {project.meta.description}
            </Text>
          </Box>
          <Gap $width="20px" />
        </Box>
        <Gap $height="20px" />
      </Link>
    </ProjectWrapper>
  );
}
