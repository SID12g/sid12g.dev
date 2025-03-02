"use client";

import styled from "styled-components";
import Box from "@/components/Box";
import ContentFrame from "@/components/ContentFrame";

export default function Skill() {
  return (
    <ContentFrame title="Skill">
      <Box display="flex" flex_grow={1} flex_flow="wrap" gap="8px">
        <SkillPropertyChildren>Next.js</SkillPropertyChildren>
        <SkillPropertyChildren>React</SkillPropertyChildren>
        <SkillPropertyChildren>React Native</SkillPropertyChildren>
        <SkillPropertyChildren>Nest.js</SkillPropertyChildren>
        <SkillPropertyChildren>Spring Boot</SkillPropertyChildren>
        <SkillPropertyChildren>Swift</SkillPropertyChildren>
      </Box>
    </ContentFrame>
  );
}

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
