"use client";

import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import Gap from "@/components/Gap";
import Text from "@/components/Text";

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
        <Text font_size="14px" font_weight="400">
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
        <Text font_size="14px">Project</Text>
      </Button>
      <Gap width="6px" />
      <Button
        $draggable={pathname === "/post"}
        draggable={pathname === "/post"}
        onClick={() => {
          router.push("/post");
        }}
      >
        <Text font_size="14px">Post</Text>
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
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 24px;
  z-index: 10;
  background-color: white;
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
