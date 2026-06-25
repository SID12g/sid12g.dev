import Activities from "@/components/section/Activities";
import Certifications from "@/components/section/Certifications";
import Contributions from "@/components/section/Contributions";
import Education from "@/components/section/Education";
import Info from "@/components/section/Info";
import Intro from "@/components/section/Intro";
import PostsLoader from "@/components/PostsLoader";
import Profile from "@/components/section/Profile";
import Stack from "@/components/section/Stacks";
import Projects from "@/components/section/Projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Profile />
      <Intro />
      <Education />
      <Activities />
      <Stack />
      <Certifications />
      <Projects />
      <PostsLoader />
      <Contributions />
      <Info />
    </div>
  );
}
