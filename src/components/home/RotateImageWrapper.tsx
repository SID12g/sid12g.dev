"use client"

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateImageWrapper = styled.div`
  animation: ${rotate} 60s linear infinite;
`;

export default RotateImageWrapper
