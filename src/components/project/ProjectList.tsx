import { sortProjects } from "@/utils/getProject";
import Project from "@/components/project/Project";

export default function ProjectList() {
  return sortProjects.map((project, index) => (
    <Project key={index} project={project} />
  ));
}
