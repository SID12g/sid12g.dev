"use client";

import styled from "styled-components";
import Gap from "@/components/Gap";

const ResponsiveGap = styled(Gap)<{
  $width?: string;
  $min_width?: string;
  $height?: string;
  $r_width?: string;
  $r_min_width?: string;
  $r_height?: string;
}>`
  width: ${(props) => props.$width};
  min-width: ${(props) => props.$min_width};
  height: ${(props) => props.$height};

  @media (max-width: 800px) {
    width: ${(props) => props.$r_width};
    min-width: ${(props) => props.$r_min_width};
    height: ${(props) => props.$r_height};
  }
`;

export default ResponsiveGap;
