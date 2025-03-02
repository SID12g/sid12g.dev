"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ResponsiveGap from "../ResponsiveGap";

export default function Skill() {
  return (
    <>
      <ResponsiveOuterSubject
        font_size="20px"
        font_weight="500"
        line_height="24px"
        letter_spacing="-0.4px"
        style={{ whiteSpace: "nowrap" }}
      >
        Skill
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
            Skill
          </Text>
        </ResponsiveInnerSubject>
        <ResponsiveGap width="20px" r_width="0" />
        <Box display="flex" flex_grow={1} flex_flow="wrap" gap="8px">
          <SkillPropertyChildren>Next.js</SkillPropertyChildren>
          <SkillPropertyChildren>React</SkillPropertyChildren>
          <SkillPropertyChildren>React Native</SkillPropertyChildren>
          <SkillPropertyChildren>Nest.js</SkillPropertyChildren>
          <SkillPropertyChildren>Spring Boot</SkillPropertyChildren>
          <SkillPropertyChildren>Swift</SkillPropertyChildren>
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

const SkillPropertyChildren = styled.div`
  width: fit-content;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 16px;
  border-radius: 100px;
  white-space: nowrap;
`;
