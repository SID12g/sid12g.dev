"use client";

import styled from "styled-components";
import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import { ProjectType } from "@/types/project.interface";
import Project from "@/components/project/Project";
import Banner from "@/components/Banner";
import background from "@/../public/images/project-background.jpg";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;

  @media (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <Wrapper>
      <Gap $height="100px" />
      <Banner
        background={background}
        title="Project"
        description="혼자, 함께 해왔던 프로젝트"
      />
      <Gap $height="40px" />
      <ProjectGrid>
        {projects.map((project: ProjectType, index: number) => (
          <Project key={index} project={project} />
        ))}
      </ProjectGrid>
    </Wrapper>
  );
}
