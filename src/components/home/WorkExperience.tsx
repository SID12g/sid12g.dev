"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ColorHighlight from "@/components/ColorHighlight";
import React from "react";
import ResponsiveGap from "@/components/ResponsiveGap";
import ContentFrame from "@/components/ContentFrame";
import DesktopOnly from "@/components/DesktopOnly";
import MobileOnly from "@/components/MobileOnly";

export default function WorkExperience() {
  return (
    <ContentFrame title="Work Experience">
      <Box $flex_grow={1}>
        <WorkChildren
          title="예시 1"
          date={
            <Text $font_size="16px" $letter_spacing="-0.32px">
              2024.12 ~{" "}
              <ColorHighlight $color="#007BFF">재직 중</ColorHighlight>
            </Text>
          }
          status="Frontend Developer"
          content={[
            "- React Native를 이용한 앱 구조 설계 및 개발",
            "- Next.js를 이용한 관리자 대시보드 및 상담 서비스 개발",
          ]}
        />
        <ResponsiveGap $height="32px" $r_height="20px" />
        <Box $width="100%" $height="1px" $background_color="#000000" />
        <ResponsiveGap $height="32px" $r_height="20px" />
        <WorkChildren
          title="예시 2"
          date={
            <Text $font_size="16px" $letter_spacing="-0.32px">
              2023.08 ~ 2024.08
            </Text>
          }
          status="Frontend Developer"
          content={[
            "- Next.js를 이용한 풀스택 웹 서비스 개발",
            "- GPT Fine-tuning을 통한 커리큘럼 제공 서비스 구현",
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

function WorkChildren({
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
          $font_size="20px"
          $font_weight="500"
          $line_height="24px"
          $letter_spacing="-0.4px"
        >
          {title}
        </Text>
        <DesktopOnly $max_width="800px">{date}</DesktopOnly>
      </PointWrapper>
      <Gap $height="4px" />
      <Text $font_size="18px" $line_height="22px" $letter_spacing="-0.36px">
        {status}
      </Text>
      <MobileOnly $max_width="800px">
        <Gap $height="8px" />
        {date}
      </MobileOnly>
      <Gap $height="12px" />
      {content.map((item, index) => (
        <React.Fragment key={index}>
          <Text $font_size="16px" $line_height="20px" $letter_spacing="-0.32px">
            {item}
          </Text>
          {index < content.length - 1 && <Gap $height="4px" />}
        </React.Fragment>
      ))}
    </Box>
  );
}
