import styled from "styled-components";

const Box = styled.div<{
  width?: string;
  height?: string;
  background_color?: string;
  border_radius?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background_color};
  border-radius: ${(props) => props.border_radius};
  overflow: hidden;
`;

export default Box;
