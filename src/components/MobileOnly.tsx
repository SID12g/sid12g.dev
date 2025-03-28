"use client";

import styled from "styled-components";

const MobileOnly = styled.div<{ $max_width: string }>`
  display: none;

  @media (max-width: ${(props) => props.$max_width}) {
    display: block;
  }
`;

export default MobileOnly;
