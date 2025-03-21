"use client";

import styled, { keyframes } from "styled-components";
import Wrapper from "@/components/Wrapper";
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

export default function Home() {
  return (
    <>
      <Wrapper>
        <Foreground>
          <Gap height="100px" />
          <Profile />
          <Gap height="68px" />
          <Intro />
          <Gap height="32px" />
          <WorkExperience />
          <Gap height="32px" />
          <ResponsiveGap height="0" r_height="32px" />
          <Education />
          <Gap height="32px" />
          <ResponsiveGap height="0" r_height="32px" />
          <Skill />
          <Gap height="32px" />
          <ResponsiveGap height="0" r_height="32px" />
          <Project />
          <Gap height="32px" />
          <ResponsiveGap height="0" r_height="32px" />
          <Contribute />
          <Gap height="32px" />
          <ResponsiveGap height="0" r_height="32px" />
          <Link />
          <Gap height="100px" />
        </Foreground>
      </Wrapper>
      <Background>
        <RotateImageWrapper>
          <Image src={BackgroundImage} alt="Background Image" />
        </RotateImageWrapper>
      </Background>
    </>
  );
}

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  width: 100%;
  height: 1100px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 460px;
  z-index: -1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateImageWrapper = styled.div`
  animation: ${rotate} 60s linear infinite;
`;
