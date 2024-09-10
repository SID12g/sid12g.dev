"use client";

import Image from "next/image";
import X from "@/../public/icons/x.svg";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.back();
      }}
    >
      <Image className="dark:invert" src={X} alt="X" />
    </button>
  );
}
