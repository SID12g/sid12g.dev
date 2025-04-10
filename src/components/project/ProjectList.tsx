import PageWrapper from "@/components/PageWrapper";
import Gap from "@/components/Gap";
import { ProjectType } from "@/types/project.interface";
import Project from "@/components/project/Project";
import Banner from "@/components/Banner";
import background from "@/../public/images/project-background.jpg";
import ProjectGrid from "./ProjectGrid";

export default function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
