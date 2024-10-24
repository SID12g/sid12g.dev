"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Close({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="overflow-y-scroll fixed inset-0 bg-primary-color sm:bg-neutral-800/50 flex justify-center sm:pt-[60px] px-[0px] sm:px-[16px] md:px-[60px]"
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          onClick: (event: React.MouseEvent) => {
            event.stopPropagation();
          },
        });
      })}
    </div>
  );
}
