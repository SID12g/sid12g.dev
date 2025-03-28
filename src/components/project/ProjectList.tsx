import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import { ProjectType } from "@/types/project.interface";
import Project from "@/components/project/Project";

export default function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <Wrapper>
      <Gap $height="100px" />
      <Text $font_size="24px" $font_weight="500" $line_height="32px">
        Projects
      </Text>
      <Gap $height="20px" />
      {projects.map((project: ProjectType, index: number) => (
        <Box key={index}>
          <Project project={project} />
          <Gap $height="12px" />
        </Box>
      ))}
    </Wrapper>
  );
}
