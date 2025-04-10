import PageWrapper from "@/components/PageWrapper";
import Gap from "@/components/Gap";
import Image from "next/image";
import BackgroundImage from "@/../public/images/background.svg";
import Profile from "@/components/home/Profile";
import WorkExperience from "@/components/home/WorkExperience";
import Education from "@/components/home/Education";
import ResponsiveGap from "@/components/ResponsiveGap";
import Skill from "@/components/home/Skill";
import Intro from "@/components/home/Intro";
import Project from "@/components/home/Project";
import Link from "@/components/home/Link";
import Contribute from "@/components/home/Contribute";
import Foreground from "@/components/home/Foreground";
import Background from "@/components/home/Background";
import RotateImageWrapper from "@/components/home/RotateImageWrapper";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <Foreground>
          <Gap $height="100px" />
          <Profile />
          <Gap $height="68px" />
          <Intro />
          <Gap $height="32px" />
          <WorkExperience />
          <Gap $height="32px" />
          <ResponsiveGap $height="0" $r_height="32px" />
          <Education />
          <Gap $height="32px" />
          <ResponsiveGap $height="0" $r_height="32px" />
          <Skill />
          <Gap $height="32px" />
          <ResponsiveGap $height="0" $r_height="32px" />
          <Project />
          <Gap $height="32px" />
          <ResponsiveGap $height="0" $r_height="32px" />
          <Contribute />
          <Gap $height="32px" />
          <ResponsiveGap $height="0" $r_height="32px" />
          <Link />
          <Gap $height="100px" />
        </Foreground>
      </PageWrapper>
      <Background>
        <RotateImageWrapper>
          <Image src={BackgroundImage} alt="Background Image" />
        </RotateImageWrapper>
      </Background>
    </>
  );
}
