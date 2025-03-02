"use client";

import styled, { keyframes } from "styled-components";
import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import ProfileImage from "@/../public/images/profile.png";
import EducationIcon from "@/../public/icons/education.svg";
import GithubIcon from "@/../public/icons/github.svg";
import MailIcon from "@/../public/icons/mail.svg";
import BackgroundImage from "@/../public/images/background.svg";
import PostIcon from "@/../public/icons/post.svg";
import LinkedinIcon from "@/../public/icons/linkedin.svg";
import HyperLink from "@/components/HyperLink";
import ColorHighlight from "@/components/ColorHighlight";

export default function Home() {
  return (
    <Wrapper>
      <Foreground>
        <Gap height="52px" />
        <ProfileBox />
        <Gap height="68px" />
        <InfoBox />
        <Gap height="32px" />
        <Box width="1024px" height="2px" background_color="#000000" />
        <Gap height="32px" />
        <Box display="flex">
          <Box width="200px">
            <Text
              font_size="20px"
              font_weight="500"
              line_height="24px"
              letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              Work Experience
            </Text>
          </Box>
          <Gap width="20px" />
          <Box flex_grow={1}>
            <WorkPropertyChildren />
            <Gap height="16px" />
            <Box width="100%" height="1px" background_color="#000000" />
            <Gap height="16px" />
            <WorkPropertyChildren />
          </Box>
        </Box>
        <Gap height="32px" />
        <Box width="1024px" height="2px" background_color="#000000" />
        <Gap height="32px" />
        <Box display="flex">
          <Box width="200px">
            <Text
              font_size="20px"
              font_weight="500"
              line_height="24px"
              letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              Education
            </Text>
          </Box>
          <Gap width="20px" />
          <Box flex_grow={1}>
            <EducationPropertyChildren />
            <Gap height="16px" />
            <Box width="100%" height="1px" background_color="#000000" />
            <Gap height="16px" />
            <EducationPropertyChildren />
          </Box>
        </Box>
        <Gap height="32px" />
        <Box width="1024px" height="2px" background_color="#000000" />
        <Gap height="32px" />
        <Box display="flex">
          <Box width="200px" display="flex" align_items="center">
            <Text
              font_size="20px"
              font_weight="500"
              line_height="24px"
              letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              Skill
            </Text>
          </Box>
          <Gap width="20px" />
          <Box display="flex" flex_grow={1} gap="8px">
            <SkillPropertyChildren>Next.js</SkillPropertyChildren>
            <SkillPropertyChildren>React</SkillPropertyChildren>
            <SkillPropertyChildren>React Native</SkillPropertyChildren>
            <SkillPropertyChildren>Nest.js</SkillPropertyChildren>
            <SkillPropertyChildren>Spring Boot</SkillPropertyChildren>
            <SkillPropertyChildren>Swift</SkillPropertyChildren>
          </Box>
        </Box>
        <Gap height="32px" />
        <Box width="1024px" height="2px" background_color="#000000" />
        <Gap height="32px" />
        <Box display="flex">
          <Box width="200px" display="flex">
            <Text
              font_size="20px"
              font_weight="500"
              line_height="24px"
              letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              Project
            </Text>
          </Box>
          <Gap width="20px" />
          <BoxWrapper>
            <Box width="200px" height="200px" background_color="red" />
            <Box width="200px" height="200px" background_color="blue" />
            <Box width="200px" height="200px" background_color="red" />
            <Box width="200px" height="200px" background_color="blue" />
            <Box width="200px" height="200px" background_color="red" />
            <Box width="200px" height="200px" background_color="blue" />
            <Box width="200px" height="200px" background_color="red" />
            <Box width="200px" height="200px" background_color="blue" />
          </BoxWrapper>
        </Box>
        <Gap height="32px" />
        <Box width="1024px" height="2px" background_color="#000000" />
        <Gap height="32px" />
        <Box display="flex">
          <Box width="200px">
            <Text
              font_size="20px"
              font_weight="500"
              line_height="24px"
              letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              Link
            </Text>
          </Box>
          <Gap width="20px" />
          <Box flex_grow={1}>
            <HyperLink href="https://post.sid12g.dev">
              <Box width="fit-content" display="flex" align_items="center">
                <Image src={PostIcon} alt="Post Icon" />
                <Gap width="4px" />
                <Text font_size="14px">https://post.sid12g.dev</Text>
              </Box>
            </HyperLink>
            <Gap height="8px" />
            <HyperLink href="https://www.linkedin.com/in">
              <Box display="flex" align_items="center">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
                <Gap width="4px" />
                <Text font_size="14px">https://www.linkedin.com/in</Text>
              </Box>
            </HyperLink>
          </Box>
        </Box>
        <Gap height="32px" />
        <Background>
          <Image src={BackgroundImage} alt="Background Image" />
        </Background>
      </Foreground>
    </Wrapper>
  );
}

function ProfileBox() {
  return (
    <Box display="flex" justify_content="space-between">
      <Box display="flex" flex_direction="column">
        <Text font_size="40px" font_weight="600" letter_spacing="0.8px">
          조성민
        </Text>
        <Gap height="8px" />
        <Text font_size="20px" letter_spacing="-0.04px">
          Fullstack Developer
        </Text>
        <Gap height="16px" />
        <Box width="100px" height="1px" background_color="#000000" />
        <Gap height="16px" />
        <HyperLink href="https://dimigo.hs.kr">
          <Box display="flex" align_items="center">
            <Image src={EducationIcon} alt="Education Icon" />
            <Gap width="4px" />
            <Text font_size="14px">Korea Digital Media High School</Text>
          </Box>
        </HyperLink>
        <Gap height="4px" />
        <HyperLink href="https://github.com/SID12g">
          <Box display="flex" align_items="center">
            <Image src={GithubIcon} alt="Github Icon" />
            <Gap width="4px" />
            <Text font_size="14px">@SID12g</Text>
          </Box>
        </HyperLink>
        <Gap height="4px" />
        <HyperLink href="mailto:ad@sid12g.dev">
          <Box display="flex" align_items="center">
            <Image src={MailIcon} alt="Mail Icon" />
            <Gap width="4px" />
            <Text font_size="14px">ad@sid12g.dev</Text>
          </Box>
        </HyperLink>
      </Box>
      <Box width="140px" height="140px" border_radius="1000px">
        <Image
          src={ProfileImage}
          alt="Profile Image"
          width={140}
          height={140}
        />
      </Box>
    </Box>
  );
}

function InfoBox() {
  return (
    <Box display="flex" flex_direction="column">
      <Text font_size="20px" line_height="28px">
        안녕하세요 😀
        <br />
        개발자 조성민입니다.
      </Text>
      <Gap height="16px" />
      <Text font_size="16px" line_height="24px" letter_spacing="-0.32px">
        저는 한국디지털미디어고등학교에 재학 중이며, 학업과 개발을 병행하며
        다양한 분야에 관심을 가지고 있습니다. 특히 개발, 경제, 금융에 큰 흥미를
        두고 있으며, 이에 대한 저의 생각을 블로그에서 공유하고 있습니다.
      </Text>
    </Box>
  );
}

function WorkPropertyChildren() {
  return (
    <Box>
      <Box display="flex" justify_content="space-between" align_items="center">
        <Text
          font_size="20px"
          font_weight="500"
          line_height="24px"
          letter_spacing="-0.4px"
        >
          Korea Digital Media High School
        </Text>
        <Text font_size="16px" letter_spacing="-0.32px">
          2021.01 ~ <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
        </Text>
      </Box>
      <Gap height="4px" />
      <Text font_size="18px" line_height="22px" letter_spacing="-0.36px">
        Principal
      </Text>
      <Gap height="12px" />
      <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
        - 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계
      </Text>
      <Gap height="4px" />
      <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
        - 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계
      </Text>
      <Gap height="4px" />
      <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
        - 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계
      </Text>
    </Box>
  );
}

function EducationPropertyChildren() {
  return (
    <Box>
      <Box display="flex" justify_content="space-between" align_items="center">
        <Text
          font_size="20px"
          font_weight="500"
          line_height="24px"
          letter_spacing="-0.4px"
        >
          Korea Digital Media High School
        </Text>
        <Text font_size="16px" letter_spacing="-0.32px">
          2021.01 ~ <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
        </Text>
      </Box>
      <Gap height="8px" />
      <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
        웹프로그래밍과
      </Text>
    </Box>
  );
}

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 360px;
  z-index: -1;
  animation: ${rotate} 60s linear infinite;
`;

const SkillPropertyChildren = styled.div`
  width: fit-content;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 16px;
  border-radius: 100px;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 32px;
  right: 0px;
  position: relative;
`;
