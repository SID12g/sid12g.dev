"use client";

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Gap from "@/components/Gap";
import Text from "@/components/Text";

export default function Navbar() {
  const pathname = usePathname().split("/")[1];

  return (
    <NavbarWrapper>
      <Link href="/">
        <Button $draggable={pathname === ""}>
          <Text $font_size="14px" $font_weight="400">
            Home
          </Text>
        </Button>
      </Link>
      <Gap $width="6px" />
      <Link href="/project">
        <Button $draggable={pathname === "project"}>
          <Text $font_size="14px">Project</Text>
        </Button>
      </Link>
      <Gap $width="6px" />
      <Link href="/post">
        <Button $draggable={pathname === "post"}>
          <Text $font_size="14px">Post</Text>
        </Button>
      </Link>
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
