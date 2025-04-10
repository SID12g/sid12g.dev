"use client";

import styled from "styled-components";

const ProjectPageWrapper = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 648px) {
    width: calc(100% - 48px);
  }
`;

export default ProjectPageWrapper;
