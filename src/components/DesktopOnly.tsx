"use client";

import styled from "styled-components";

const DesktopOnly = styled.div<{ $max_width: string }>`
  @media (max-width: ${(props) => props.$max_width}) {
    display: none;
  }
`;

export default DesktopOnly;
