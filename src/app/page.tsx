"use client";

import Wrapper from "@/components/Wrapper";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import ProfileImage from "@/../public/images/profile.png";
import EducationIcon from "@/../public/icons/education.svg";
import GithubIcon from "@/../public/icons/github.svg";
import MailIcon from "@/../public/icons/mail.svg";
import FlexBox from "@/components/FlexBox";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Gap height="52px" />
      <ProfileBox>
        <InfoBox>
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
          <FlexBox>
            <Image src={EducationIcon} alt="Education Icon" />
            <Gap width="4px" />
            <Text font_size="14px">Korea Digital Media High School</Text>
          </FlexBox>
          <Gap height="4px" />
          <FlexBox>
            <Image src={GithubIcon} alt="Github Icon" />
            <Gap width="4px" />
            <Text font_size="14px">@SID12g</Text>
          </FlexBox>
          <Gap height="4px" />
          <FlexBox>
            <Image src={MailIcon} alt="Mail Icon" />
            <Gap width="4px" />
            <Text font_size="14px">ad@sid12g.dev</Text>
          </FlexBox>
        </InfoBox>
        <Box width="140px" height="140px" border_radius="1000px">
          <Image
            src={ProfileImage}
            alt="Profile Image"
            width={140}
            height={140}
          />
        </Box>
      </ProfileBox>
      <Gap height="68px" />
      <IntroBox>
        <Text font_size="20px" line_height="28px">
          안녕하세요 😀
          <br />
          개발자 조성민입니다.
        </Text>
        <Gap height="16px" />
        <Text font_size="16px" line_height="24px" letter_spacing="-0.32px">
          저는 한국디지털미디어고등학교에 재학 중이며, 학업과 개발을 병행하며
          다양한 분야에 관심을 가지고 있습니다. 특히 개발, 경제, 금융에 큰
          흥미를 두고 있으며, 이에 대한 저의 생각을 블로그에서 공유하고
          있습니다.
        </Text>
      </IntroBox>
    </Wrapper>
  );
}

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
`;
