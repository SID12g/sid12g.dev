"use client";

import styled from "styled-components";

const ColorHighlight = styled.span<{
  $color?: string;
}>`
  color: ${(props) => props.$color || "#000000"};
`;

export default ColorHighlight;
