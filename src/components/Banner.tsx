"use client";

import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Banner() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        ""
      ) : (
        <Wrapper>
          현재 포트폴리오를 다시 개발하고 있습니다.
          <Link href="https://previous.sid12g.dev">
            <LinkText> (이전 버전으로 이동하기 ✨)</LinkText>
          </Link>
          <CloseIcon
            onClick={() => {
              setShow(true);
            }}
          >
            ❎
          </CloseIcon>
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  color: #ffffff;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkText = styled.p`
  margin-left: 8px;
  color: #ffffff;
`;

const CloseIcon = styled.span`
  position: absolute;
  right: 20px;
  font-size: 18px;
  cursor: pointer;
`;
