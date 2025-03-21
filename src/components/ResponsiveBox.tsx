"use client";

import styled from "styled-components";

const ResponsiveBox = styled.div<{
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

  $r_width?: string;
  $r_height?: string;
  $r_background_color?: string;
  $r_border_radius?: string;
  $r_display?: string;
  $r_justify_content?: string;
  $r_align_items?: string;
  $r_flex_direction?: string;
  $r_flex_grow?: number;
  $r_flex_flow?: string;
  $r_gap?: string;
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

  @media (max-width: 800px) {
    width: ${(props) => props.$r_width};
    height: ${(props) => props.$r_height};
    background-color: ${(props) => props.$r_background_color};
    border-radius: ${(props) => props.$r_border_radius};
    display: ${(props) => props.$r_display};
    justify-content: ${(props) => props.$r_justify_content};
    align-items: ${(props) => props.$r_align_items};
    flex-direction: ${(props) => props.$r_flex_direction};
    flex-grow: ${(props) => props.$r_flex_grow};
    flex-flow: ${(props) => props.$r_flex_flow};
    gap: ${(props) => props.$r_gap};
  }
`;

export default ResponsiveBox;
