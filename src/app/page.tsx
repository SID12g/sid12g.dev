import Profile from "@/components/profile";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Detail from "@/components/detail";

export default function Home() {
  return (
    <main className="w-full flex flex-col md:flex-row">
      <Profile sticky={true} />
      <div className="md:w-[calc(100%-350px)] mt-[40px] md:mt-[60px] pl-[4%] pr-[4%]">
        <p className="mb-[20px] text-subtitle-color">projects</p>
        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          <Project />
        </div>
        <Footer />
      </div>
    </main>
  );
}
