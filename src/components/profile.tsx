import Image from "next/image";
import profile from "@/../public/images/profile.jpg";
import Info from "./info";

export default function Profile() {
  return (
    <div className="w-[350px] h-full bg-primary-color">
      <div className="ml-[56px] pt-[80px]">
        <Image
          className="w-[160px] h-[160px] rounded-full"
          src={profile}
          alt="profile image"
        />
        <p className="text-[32px] mt-[32px]">Sungmin Cho</p>
        <p className="text-[16px] mt-[8px]">Frontend Developer</p>
        <div className="mt-[16px]">
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
      </div>
    </div>
  );
}
