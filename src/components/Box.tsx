"use client";

import styled from "styled-components";

const Box = styled.div<{
  $width?: string;
  $height?: string;
  $background_color?: string;
  $border_radius?: string;
  $display?: string;
  $justify_content?: string;
  $align_items?: string;
  $flex_direction?: string;
  $flex_grow?: number;
  $flex_flow?: string;
  $gap?: string;
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$background_color};
  border-radius: ${(props) => props.$border_radius};
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justify_content};
  align-items: ${(props) => props.$align_items};
  flex-direction: ${(props) => props.$flex_direction};
  flex-grow: ${(props) => props.$flex_grow};
  flex-flow: ${(props) => props.$flex_flow};
  gap: ${(props) => props.$gap};
  overflow: hidden;
`;

export default Box;
