"use client";

import styled from "styled-components";
import Link from "next/link";
import Text from "@/components/Text";
import Gap from "@/components/Gap";
import { ProjectType } from "@/types/project.interface";
import Image from "next/image";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <ProjectWrapper>
      <Link href={`https://v2.sid12g.dev/project/${project.slug}`}>
        <Image
          src={project.meta.image}
          alt="project"
          width={512}
          height={292}
        />
        <ProjectProperty>
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
          <Text $font_size="14px" $line_height="22px" $letter_spacing="-0.28px">
            {project.meta.description}
          </Text>
        </ProjectProperty>
      </Link>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  width: 512px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    background-color: rgba(216, 216, 216, 0.3);
  }
`;

const ProjectProperty = styled.div`
  padding: 20px;
`;
