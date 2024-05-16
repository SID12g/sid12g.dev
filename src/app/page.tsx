import Profile from "@/components/profile";
import Project from "@/components/project";
import iphone from "@/../public/images/iphone.jpeg";
import apple from "@/../public/images/apple.jpg";

export default function Home() {
  return (
    <main className="w-full flex flex-col sm:flex-row">
      <Profile />
      <div className="w-full flex flex-wrap flex-col lg:flex-row justify-between mt-[40px] sm:ml-[350px]">
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
    </main>
  );
}
