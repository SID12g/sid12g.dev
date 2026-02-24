import Profile from "@/components/profile";
import Intro from "@/components/intro";
import Education from "@/components/education";
import Skill from "@/components/skill";
import ProjectPreview from "@/components/project-preview";
import Contribute from "@/components/contribute";
import Links from "@/components/links";

export default function Page() {
  return (
    <section>
      <Profile />
      <div className="mt-10" />
      <Intro />
      <div className="mt-10" />
      <Education />
      <Skill />
      <ProjectPreview />
      <Contribute />
      <Links />
    </section>
  );
}
