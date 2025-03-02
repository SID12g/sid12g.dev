"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ResponsiveGap from "@/components/ResponsiveGap";
import ContentFrame from "@/components/ContentFrame";

export default function Project() {
  return (
    <ContentFrame title="Project">
      project
      {/* <BoxWrapper>
        <Box width="200px" height="200px" background_color="red" />
        <Box width="200px" height="200px" background_color="blue" />
        <Box width="200px" height="200px" background_color="red" />
        <Box width="200px" height="200px" background_color="blue" />
        <Box width="200px" height="200px" background_color="red" />
        <Box width="200px" height="200px" background_color="blue" />
        <Box width="200px" height="200px" background_color="red" />
        <Box width="200px" height="200px" background_color="blue" />
      </BoxWrapper> */}
    </ContentFrame>
  );
}

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 32px;
  right: 0;
  position: relative;
`;
