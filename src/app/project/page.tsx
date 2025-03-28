import ProjectList from "@/components/project/ProjectList";
import { sortProjects } from "@/utils/getProject";

export default function Project() {
  return <ProjectList projects={sortProjects} />;
}
