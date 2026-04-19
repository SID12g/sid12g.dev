import Profile from "@/components/profile";
import Intro from "@/components/intro";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import ProjectPreview from "@/components/project-preview";
import PostPreview from "@/components/post-preview";
import Links from "@/components/links";
import Skills from "@/components/skills";
import Contributions from "@/components/contributions";

export default function Page() {
  return (
    <section>
      <Profile />
      <div className="mt-10" />
      <Intro />
      <div className="mt-10" />
      <Education />
      <Skills />
      <Certifications />
      <ProjectPreview />
      <PostPreview />
      <Contributions />
      <Links />
    </section>
  );
}
