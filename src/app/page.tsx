"use client";

import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <H1>
        안녕하세요,
        <br />
        개발자 조성민입니다.
      </H1>
      <Text>
        저는{" "}
        <HyperLink
          text="한국디지털미디어고등학교"
          href="https://dimigo.hs.kr"
          color="#ec137f"
        />
        에 재학 중입니다. 학업과 개발을 병행하면서 다양한 분야에 대한 관심을
        가지고 있습니다. 특히 개발과 경제, 금융에 큰 관심을 가지고 있습니다.
        이에 대한 저의 생각을{" "}
        <HyperLink
          text="블로그"
          href="https://post.sid12g.dev"
          color="#007bff"
        />
        에서 확인하실 수 있습니다.
      </Text>
    </Wrapper>
  );
}

function HyperLink({
  text,
  href,
  color,
}: {
  text: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href}>
      <HighlightText $draggable={color}>{text}</HighlightText>
    </Link>
  );
}

const Wrapper = styled.div`
  margin: 0 20px;
`;
const H1 = styled.h1`
  font-weight: 500;
  font-size: 32px;
  margin-top: 80px;
  margin-bottom: 24px;
`;

const HighlightText = styled.span<{ $draggable: string }>`
  color: ${(props) => props.$draggable};
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #4e5968;
  line-height: 28px;
  margin: 0;
`;
