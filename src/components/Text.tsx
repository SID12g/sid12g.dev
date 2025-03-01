import styled from "styled-components";

const Text = styled.p<{
  font_size?: string;
  font_weight?: string;
  color?: string;
  line_height?: string;
  letter_spacing?: string;
}>`
  font-size: ${(props) => props.font_size || "16px"};
  font-weight: ${(props) => props.font_weight || "400"};
  color: ${(props) => props.color || "#000000"};
  line-height: ${(props) => props.line_height || "normal"};
  letter-spacing: ${(props) => props.letter_spacing || "normal"};
  margin: 0;
`;

export default Text;
