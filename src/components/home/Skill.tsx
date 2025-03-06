"use client";

import styled from "styled-components";
import Box from "@/components/Box";
import ContentFrame from "@/components/ContentFrame";

export default function Skill() {
  return (
    <ContentFrame title="Skill">
      <Box display="flex" flex_grow={1} flex_flow="wrap" gap="8px">
        <SkillChildren>Next.js</SkillChildren>
        <SkillChildren>React</SkillChildren>
        <SkillChildren>React Native</SkillChildren>
        <SkillChildren>Nest.js</SkillChildren>
        <SkillChildren>Spring Boot</SkillChildren>
        <SkillChildren>Swift</SkillChildren>
      </Box>
    </ContentFrame>
  );
}

const SkillChildren = styled.div`
  width: fit-content;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 16px;
  border-radius: 100px;
  white-space: nowrap;
`;
