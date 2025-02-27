"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Banner() {
  return (
    <div>
      {
        <Wrapper>
          <Text>현재 포트폴리오를 다시 개발하고 있습니다.</Text>{" "}
          <HyperLink
            text="(이전 버전으로 이동하기 ✨)"
            href="https://v2.sid12g.dev"
          />
        </Wrapper>
      }
    </div>
  );
}

function HyperLink({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <Text>{text}</Text>
    </Link>
  );
}

const Wrapper = styled.div`
  background-color: #000000;
  padding: 12px;
  text-align: center;
  & > * {
    display: inline-block;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 14px;
`;
