"use client";

import styled from "styled-components";
import Gap from "./Gap";

const ResponsiveGap = styled(Gap)<{
  width?: string;
  height?: string;
  r_width?: string;
  r_height?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media (max-width: 800px) {
    width: ${(props) => props.r_width};
    height: ${(props) => props.r_height};
  }
`;

export default ResponsiveGap;
