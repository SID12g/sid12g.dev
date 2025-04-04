import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import Box from "@/components/Box";
import { ProjectType } from "@/types/project.interface";
import Project from "@/components/project/Project";
import Banner from "@/components/Banner";
import background from "@/../public/images/project-background.jpg";

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
      {projects.map((project: ProjectType, index: number) => (
        <Box key={index}>
          <Project project={project} />
          <Gap $height="12px" />
        </Box>
      ))}
    </Wrapper>
  );
}
