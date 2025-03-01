import styled from "styled-components";

const Box = styled.div<{
  width?: string;
  height?: string;
  radius?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  overflow: hidden;
`;

export default Box;
