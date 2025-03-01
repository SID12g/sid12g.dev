"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Gap from "./Gap";
import Text from "./Text";

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
        <Text fontSize="14px" fontWeight="400">
          Home
        </Text>
      </Button>
      <Gap width="6px" />
      <Button
        $draggable={pathname === "/project"}
        draggable={pathname === "/project"}
        onClick={() => {
          router.push("/project");
        }}
      >
        <Text fontSize="14px" fontWeight="400">
          Project
        </Text>
      </Button>
      <Gap width="6px" />
      <Button
        $draggable={pathname === "/post"}
        draggable={pathname === "/post"}
        onClick={() => {
          router.push("/post");
        }}
      >
        <Text fontSize="14px" fontWeight="400">
          Post
        </Text>
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
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: ${(props) => (props.$draggable ? "#ededed" : "")};
  border: ${(props) => (props.$draggable ? "1px solid #e0e0e0" : "")};
`;
