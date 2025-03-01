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
          <Text fontSize="40px" fontWeight="600" letterSpacing="0.8px">
            조성민
          </Text>
          <Gap height="8px" />
          <Text fontSize="20px" letterSpacing="-0.04px">
            Fullstack Developer
          </Text>
          <Gap height="16px" />
          <Box width="100px" height="1px" background="#000000" />
          <Gap height="16px" />
          <FlexBox>
            <Image src={EducationIcon} alt="Education Icon" />
            <Gap width="4px" />
            <Text fontSize="14px">Korea Digital Media High School</Text>
          </FlexBox>
          <Gap height="4px" />
          <FlexBox>
            <Image src={GithubIcon} alt="Github Icon" />
            <Gap width="4px" />
            <Text fontSize="14px">@SID12g</Text>
          </FlexBox>
          <Gap height="4px" />
          <FlexBox>
            <Image src={MailIcon} alt="Mail Icon" />
            <Gap width="4px" />
            <Text fontSize="14px">ad@sid12g.dev</Text>
          </FlexBox>
        </InfoBox>
        <Box width="140px" height="140px" radius="1000px">
          <Image src={ProfileImage} alt="Profile Image" />
        </Box>
      </ProfileBox>
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
