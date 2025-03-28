"use client";

import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 580px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export default GridContainer;
