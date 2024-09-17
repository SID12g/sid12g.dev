import Image from "next/image";
import profile from "@/../public/images/profile.jpg";
import Info from "./info";
import next from "@/../public/icons/next.svg";
import react from "@/../public/icons/react.svg";
import nest from "@/../public/icons/nest.svg";
import spring from "@/../public/icons/spring.svg";

export default function Profile({ sticky }: { sticky: boolean }) {
  return (
    <div
      className={
        "min-w-[350px] md:h-[100vh] top-0 bottom-0 bg-primary-color text-font-color" +
        `${sticky ? " md:sticky" : ""}`
      }
    >
      <div className="min-w-[294px] ml-[56px] pt-[60px] md:pt-[80px]">
        <Image
          className="w-[160px] h-[160px] rounded-full"
          src={profile}
          alt="profile image"
        />
        <p className="text-[32px] mt-[32px]">Sungmin Cho</p>
        <p className="text-[16px] mt-[8px]">Frontend Developer</p>
        <div className="mt-[32px]">
          <p className="mb-[12px] text-subtitle-color">info</p>
          <Info
            href="https://dimigo.hs.kr"
            icon="🎓"
            content="Korea Digital Media High School"
          />
          <Info href="mailto:ad@sid12g.dev" icon="✉️" content="ad@sid12g.dev" />
          <Info href="https://github.com/SID12g" icon="🐱" content="@SID12g" />
          <Info
            href="https://discord.com/users/469102848840433664"
            icon="💬"
            content="@sid12g"
          />
          <Info
            href="https://post.sid12g.dev"
            icon="🔗"
            content="https://post.sid12g.dev"
          />
        </div>
        <div className="mt-[24px]">
          <p className="mb-[12px] text-subtitle-color">skills</p>
          <div className="flex items-center">
            <Image className="mr-[16px]" src={next} alt="skill image" />
            <Image className="mr-[16px]" src={react} alt="skill image" />
            <Image className="mr-[16px]" src={nest} alt="skill image" />
            <Image className="mr-[16px]" src={spring} alt="skill image" />
          </div>
        </div>
      </div>
      <div className="h-[60px]" />
    </div>
  );
}
