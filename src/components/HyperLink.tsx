"use client";

import styled from "styled-components";
import React from "react";
import Link from "next/link";

export default function HyperLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <ChildrenWrapper>
      <Link href={href}>{children}</Link>
    </ChildrenWrapper>
  );
}

const ChildrenWrapper = styled.span`
  display: block;
  border-radius: 8px;
  width: fit-content;
  transition: all 0.3s;
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(216, 216, 216, 0.1);
    border: 1px solid rgba(184, 184, 184, 0.2);
    padding: 4px 6px;
  }
`;
