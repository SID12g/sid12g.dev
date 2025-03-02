"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ColorHighlight from "@/components/ColorHighlight";
import React from "react";
import ResponsiveGap from "@/components/ResponsiveGap";
import ContentFrame from "@/components/ContentFrame";

export default function WorkExperience() {
  return (
    <ContentFrame title="Work Experience">
      <Box flex_grow={1}>
        <WorkPropertyChildren
          title="Korea Digital Media High School"
          date={
            <Text font_size="16px" letter_spacing="-0.32px">
              2021.01 ~ <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
            </Text>
          }
          status="Principal"
          content={[
            "- 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계",
            "- 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계",
          ]}
        />
        <ResponsiveGap height="32px" r_height="20px" />
        <Box width="100%" height="1px" background_color="#000000" />
        <ResponsiveGap height="32px" r_height="20px" />
        <WorkPropertyChildren
          title="Another Experience"
          date={
            <Text font_size="16px" letter_spacing="-0.32px">
              2021.01 ~ <ColorHighlight color="#007BFF">재직 중</ColorHighlight>
            </Text>
          }
          status="Developer"
          content={[
            "- Another project description",
            "- Another project description",
          ]}
        />
      </Box>
    </ContentFrame>
  );
}

const PointWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

function WorkPropertyChildren({
  title,
  date,
  status,
  content,
}: {
  title: string;
  date: React.ReactNode;
  status: string;
  content: string[];
}) {
  return (
    <Box>
      <PointWrapper>
        <Text
          font_size="20px"
          font_weight="500"
          line_height="24px"
          letter_spacing="-0.4px"
        >
          {title}
        </Text>
        {date}
      </PointWrapper>
      <Gap height="4px" />
      <Text font_size="18px" line_height="22px" letter_spacing="-0.36px">
        {status}
      </Text>
      <Gap height="12px" />
      {content.map((item, index) => (
        <React.Fragment key={index}>
          <Text font_size="16px" line_height="20px" letter_spacing="-0.32px">
            {item}
          </Text>
          {index < content.length - 1 && <Gap height="4px" />}
        </React.Fragment>
      ))}
    </Box>
  );
}
