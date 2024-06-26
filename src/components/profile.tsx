import Image from "next/image";
import profile from "@/../public/images/profile.jpg";
import Info from "./info";
import next from "@/../public/images/next.svg";
import react from "@/../public/images/react.svg";
import nest from "@/../public/images/nest.svg";

export default function Profile() {
  return (
    <div className="min-w-[350px] h-full bg-primary-color md:fixed text-font-color">
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
          </div>
        </div>
      </div>
      <div className="h-[60px]" />
    </div>
  );
}
