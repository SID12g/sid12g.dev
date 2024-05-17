import Profile from "@/components/profile";
import Project from "@/components/project";
import iphone from "@/../public/images/iphone.jpeg";
import apple from "@/../public/images/apple.jpg";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col md:flex-row">
      <Profile />
      <div className="md:w-[calc(100%-350px)] md:ml-[350px] mt-[40px] md:mt-[60px] pl-[4%] pr-[4%]">
        <p className="mb-[20px] text-subtitle-color">projects</p>
        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
          <Project
            href="?aaa"
            image={iphone}
            logo={apple}
            name="iPhone 15 Pro"
            description="새로운 혁신의 시작"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}
