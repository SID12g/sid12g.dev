"use client";

import styled from "styled-components";
import React from "react";
import Text from "@/components/Text";
import Box from "@/components/Box";
import ResponsiveGap from "@/components/ResponsiveGap";

export default function ContentFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <>
        <ResponsiveOuterSubject
          $font_size="20px"
          $font_weight="500"
          $line_height="24px"
          $letter_spacing="-0.4px"
          style={{ whiteSpace: "nowrap" }}
        >
          {title}
        </ResponsiveOuterSubject>
        <ResponsiveGap $height="0" $r_height="12px" />
        <Box $width="100%" $height="2px" $background_color="#000000" />
        <ResponsiveGap $height="32px" $r_height="20px" />
        <Box $display="flex">
          <ResponsiveInnerSubject>
            <Text
              $font_size="20px"
              $font_weight="500"
              $line_height="24px"
              $letter_spacing="-0.4px"
              style={{ whiteSpace: "nowrap" }}
            >
              {title}
            </Text>
          </ResponsiveInnerSubject>
          <ResponsiveGap
            $width="20px"
            $min_width="20px"
            $r_width="0px"
            $r_min_width="0"
          />
          {children}
        </Box>
      </>
    </>
  );
}

const ResponsiveOuterSubject = styled(Text)`
  @media (min-width: 801px) {
    display: none;
  }
`;

const ResponsiveInnerSubject = styled.div`
  width: 200px;
  min-width: 200px;
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;
