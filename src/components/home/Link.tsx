"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import Image from "next/image";
import PostIcon from "@/../public/icons/post.svg";
import LinkedinIcon from "@/../public/icons/linkedin.svg";
import HyperLink from "@/components/HyperLink";
import ResponsiveGap from "../ResponsiveGap";

export default function Link() {
  return (
    <>
      <ResponsiveOuterSubject
        font_size="20px"
        font_weight="500"
        line_height="24px"
        letter_spacing="-0.4px"
        style={{ whiteSpace: "nowrap" }}
      >
        Link
      </ResponsiveOuterSubject>
      <Gap height="12px" />
      <Box width="100%" height="2px" background_color="#000000" />
      <ResponsiveGap height="32px" r_height="20px" />
      <Box display="flex">
        <ResponsiveInnerSubject>
          <Text
            font_size="20px"
            font_weight="500"
            line_height="24px"
            letter_spacing="-0.4px"
            style={{ whiteSpace: "nowrap" }}
          >
            Link
          </Text>
        </ResponsiveInnerSubject>
        <ResponsiveGap width="20px" r_width="0" />
        <Box flex_grow={1}>
          <HyperLink href="https://post.sid12g.dev">
            <Box width="fit-content" display="flex" align_items="center">
              <Image src={PostIcon} alt="Post Icon" />
              <Gap width="4px" />
              <Text font_size="14px" letter_spacing="-0.14px">
                https://post.sid12g.dev
              </Text>
            </Box>
          </HyperLink>
          <Gap height="8px" />
          <HyperLink href="https://www.linkedin.com/in">
            <Box display="flex" align_items="center">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
              <Gap width="4px" />
              <Text font_size="14px" letter_spacing="-0.14px">
                https://www.linkedin.com/in
              </Text>
            </Box>
          </HyperLink>
        </Box>
      </Box>
    </>
  );
}

const ResponsiveOuterSubject = styled(Text)`
  @media (min-width: 800px) {
    display: none;
  }
`;

const ResponsiveInnerSubject = styled.div`
  width: 200px;
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;
