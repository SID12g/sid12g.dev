"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ResponsiveGap from "../ResponsiveGap";

export default function Project() {
  return (
    <>
      <ResponsiveOuterSubject
        font_size="20px"
        font_weight="500"
        line_height="24px"
        letter_spacing="-0.4px"
        style={{ whiteSpace: "nowrap" }}
      >
        Project
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
            Project
          </Text>
        </ResponsiveInnerSubject>
        <ResponsiveGap width="20px" r_width="0" />
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
    </>
  );
}

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 32px;
  right: 0;
  position: relative;
`;

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
