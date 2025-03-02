"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1084px) {
    width: calc(100% - 80px);
  }

  @media (max-width: 824px) {
    width: calc(100% - 40px);
  }
`;

export default Wrapper;
