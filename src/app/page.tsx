import Activities from "@/components/section/Activities";
import Certifications from "@/components/section/Certifications";
import Education from "@/components/section/Education";
import Intro from "@/components/section/Intro";
import Profile from "@/components/section/Profile";
import Stack from "@/components/section/Stacks";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Profile />
      <Intro />
      <Education />
      <Activities />
      <Stack />
      <Certifications />
    </div>
  );
}
