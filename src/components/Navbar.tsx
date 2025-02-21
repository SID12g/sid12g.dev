"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Wrapper>
      <Button
        $draggable={pathname === "/"}
        draggable={pathname === "/"}
        onClick={() => {
          router.push("/");
        }}
      >
        Intro
      </Button>
      <Button
        $draggable={pathname === "/info"}
        draggable={pathname === "/info"}
        onClick={() => {
          router.push("/info");
        }}
      >
        Info
      </Button>
      <Button
        $draggable={pathname === "/craft"}
        draggable={pathname === "/craft"}
        onClick={() => {
          router.push("/craft");
        }}
      >
        Craft
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  border-radius: 16px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  position: relative;
`;

const Button = styled.div<{ $draggable: boolean }>`
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: ${(props) =>
    props.$draggable ? "#ededed" : "transparent"};
  border: ${(props) => (props.$draggable ? "1px solid #ebebeb" : "")};
`;
