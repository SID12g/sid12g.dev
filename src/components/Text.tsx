import styled from "styled-components";

const Text = styled.p<{
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

export default Text;
