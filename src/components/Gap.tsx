import styled from "styled-components";

const Gap = styled.div<{
  width?: string;
  height?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Gap;
