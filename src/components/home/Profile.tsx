"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import ProfileImage from "@/../public/images/profile.png";
import EducationIcon from "@/../public/icons/education.svg";
import GithubIcon from "@/../public/icons/github.svg";
import MailIcon from "@/../public/icons/mail.svg";
import HyperLink from "@/components/HyperLink";

export default function Profile() {
  return (
    <ProfileWrapper>
      <Box $display="flex" $flex_direction="column">
        <Text $font_size="40px" $font_weight="600" $letter_spacing="0.8px">
          조성민
        </Text>
        <Gap $height="8px" />
        <Text $font_size="20px" $letter_spacing="-0.04px">
          Fullstack Developer
        </Text>
        <Gap $height="16px" />
        <Box $width="100px" $height="1px" $background_color="#000000" />
        <Gap $height="16px" />
        <HyperLink href="https://dimigo.hs.kr">
          <Box $display="flex" $align_items="center">
            <Image src={EducationIcon} alt="Education Icon" />
            <Gap $width="4px" />
            <Text $font_size="14px" $letter_spacing="-0.14px">
              Korea Digital Media High School
            </Text>
          </Box>
        </HyperLink>
        <Gap $height="4px" />
        <HyperLink href="https://github.com/SID12g">
          <Box $display="flex" $align_items="center">
            <Image src={GithubIcon} alt="Github Icon" />
            <Gap $width="4px" />
            <Text $font_size="14px" $letter_spacing="-0.14px">
              @SID12g
            </Text>
          </Box>
        </HyperLink>
        <Gap $height="4px" />
        <HyperLink href="mailto:ad@sid12g.dev">
          <Box $display="flex" $align_items="center">
            <Image src={MailIcon} alt="Mail Icon" />
            <Gap $width="4px" />
            <Text $font_size="14px" $letter_spacing="-0.14px">
              ad@sid12g.dev
            </Text>
          </Box>
        </HyperLink>
      </Box>
      <ProfileImageWrapper>
        <Image
          src={ProfileImage}
          alt="Profile Image"
          width={140}
          height={140}
          placeholder="blur"
        />
        <Gap $height="32px" />
      </ProfileImageWrapper>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 824px) {
    flex-direction: column-reverse;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 1000px;
  overflow: hidden;

  @media (max-width: 824px) {
    margin-bottom: 52px;
  }

  @media (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
