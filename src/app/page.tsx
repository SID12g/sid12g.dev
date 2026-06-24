import Intro from "@/components/intro/Intro";
import Profile from "@/components/profile/Profile";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <Profile />
      <Intro />
    </div>
  );
}
