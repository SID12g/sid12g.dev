"use client";

import styled from "styled-components";
import Link from "next/link";
import Text from "./Text";

export default function Banner() {
  return (
    <div>
      {
        <BannerWrapper>
          <Text font_size="14px" color="#ffffff">
            현재 포트폴리오를 다시 개발하고 있습니다.
          </Text>{" "}
          <HyperLink
            text="(이전 버전으로 이동하기 ✨)"
            href="https://v2.sid12g.dev"
          />
        </BannerWrapper>
      }
    </div>
  );
}

function HyperLink({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <Text font_size="14px" color="#ffffff">
        {text}
      </Text>
    </Link>
  );
}

const BannerWrapper = styled.div`
  background-color: #000000;
  padding: 12px;
  text-align: center;
  & > * {
    display: inline-block;
  }
`;
