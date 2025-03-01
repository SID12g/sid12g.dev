"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NavbarWrapper>
      <Button
        $draggable={pathname === "/"}
        draggable={pathname === "/"}
        onClick={() => {
          router.push("/");
        }}
      >
        Home
      </Button>
      <Gap />
      <Button
        $draggable={pathname === "/project"}
        draggable={pathname === "/project"}
        onClick={() => {
          router.push("/project");
        }}
      >
        Project
      </Button>
      <Gap />
      <Button
        $draggable={pathname === "/post"}
        draggable={pathname === "/post"}
        onClick={() => {
          router.push("/post");
        }}
      >
        Post
      </Button>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
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
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: ${(props) => (props.$draggable ? "#ededed" : "")};
  border: ${(props) => (props.$draggable ? "1px solid #e0e0e0" : "")};
`;

const Gap = styled.div`
  width: 6px;
`;
