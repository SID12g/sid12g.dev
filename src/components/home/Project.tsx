import Text from "@/components/Text";
import Box from "@/components/Box";
import ContentFrame from "@/components/ContentFrame";
import Link from "next/link";
import { sortProjects } from "@/utils/getProject";
import GridContainer from "@/components/home/GridContainer";
import Image from "next/image";
import getBlurImg from "@/utils/getBlurImg";
import MobileOnly from "../MobileOnly";

export default async function Project() {
  const blurImg = await getBlurImg(sortProjects[7].meta.preview);

  return (
    <ContentFrame title="Project">
      <GridContainer>
        {sortProjects.slice(0, 7).map(async (project, index) => {
          const blurImg = await getBlurImg(project.meta.preview);
          return (
            <Link key={index} href={`/project/${project.slug}`}>
              <Box
                key={index}
                $width="100%"
                $height="100%"
                $border_radius="8px"
                $aspect_ratio="1"
              >
                <Image
                  src={project.meta.preview}
                  width={512}
                  height={512}
                  alt="preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={blurImg}
                />
              </Box>
            </Link>
          );
        })}
        <MobileOnly $max_width="580px">
          <Link href={`/project/${sortProjects[7].slug}`}>
            <Box
              $width="100%"
              $height="100%"
              $border_radius="8px"
              $aspect_ratio="1"
            >
              <Image
                src={sortProjects[7].meta.preview}
                width={512}
                height={512}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={blurImg}
              />
            </Box>
          </Link>
        </MobileOnly>
        <Link href="/project">
          <Box
            $width="100%"
            $height="100%"
            $background_color="#000000"
            $border_radius="8px"
            $aspect_ratio="1"
            $display="flex"
            $justify_content="center"
            $align_items="center"
          >
            <Text
              $font_size="16px"
              $line_height="20px"
              $color="#ffffff"
              $letter_spacing="-0.32px"
            >
              더보기
            </Text>
          </Box>
        </Link>
      </GridContainer>
    </ContentFrame>
  );
}
