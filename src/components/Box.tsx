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
  $position?: string;
  $gap?: string;
  $aspect_ratio?: string;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $z_index?: string;
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
  position: ${(props) => props.$position};
  gap: ${(props) => props.$gap};
  aspect-ratio: ${(props) => props.$aspect_ratio};
  overflow: hidden;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  z-index: ${(props) => props.$z_index};
`;

export default Box;
