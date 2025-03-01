import styled from "styled-components";

const Text = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
}>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "#000000"};
  line-height: ${(props) => props.lineHeight || "normal"};
  letter-spacing: ${(props) => props.letterSpacing || "normal"};
  margin: 0;
`;

export default Text;
