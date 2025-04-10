"use client";

import styled from "styled-components";

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;

  @media (min-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default ProjectGrid;
