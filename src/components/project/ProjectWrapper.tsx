"use client";

import styled from "styled-components";

const ProjectWrapper = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    background-color: rgba(216, 216, 216, 0.3);
  }

  &:hover img {
    filter: brightness(90%);
    transform: scale(1.02);
  }
`;

export default ProjectWrapper;
