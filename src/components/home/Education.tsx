"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ColorHighlight from "@/components/ColorHighlight";
import React from "react";
// import ResponsiveGap from "@/components/ResponsiveGap";
import ContentFrame from "@/components/ContentFrame";
import Link from "next/link";

export default function Education() {
  return (
    <ContentFrame title="Education">
      <Box $flex_grow={1}>
        <EducationChildren
          href="https://dimigo.hs.kr/"
          title="Korea Digital Media High School"
          date={
            <Text $font_size="16px" $letter_spacing="-0.32px">
              2023.03 ~{" "}
              <ColorHighlight $color="#007BFF">재학 중</ColorHighlight>
            </Text>
          }
          status="Web Programming"
        />
        {/* <ResponsiveGap $height="32px" $r_height="20px" />
        <Box $width="100%" $height="1px" $background_color="#000000" />
        <ResponsiveGap $height="32px" $r_height="20px" />
        <EducationChildren
          title="Another Experience"
          date={
            <Text $font_size="16px" $letter_spacing="-0.32px">
              2021.01 ~ <ColorHighlight $color="#007BFF">재직 중</ColorHighlight>
            </Text>
          }
          status="Developer"
        /> */}
      </Box>
    </ContentFrame>
  );
}

function EducationChildren({
  href,
  title,
  date,
  status,
}: {
  href: string;
  title: string;
  date: React.ReactNode;
  status: string;
}) {
  return (
    <Box>
      <PointWrapper>
        <Link href={href}>
          <Text
            $font_size="20px"
            $font_weight="500"
            $line_height="24px"
            $letter_spacing="-0.4px"
          >
            {title}
          </Text>
        </Link>
        {date}
      </PointWrapper>
      <Gap $height="4px" />
      <Text $font_size="18px" $line_height="22px" $letter_spacing="-0.36px">
        {status}
      </Text>
    </Box>
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
