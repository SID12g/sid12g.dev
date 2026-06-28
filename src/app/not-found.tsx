"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <div className="h-[84vh] flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
      <div className="flex flex-col gap-3">
        <p className="text-xs text-muted font-jetbrains-mono tracking-widest uppercase">
          404 Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-medium">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-sm sm:text-base text-muted">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-lg border border-faint bg-muted-5 hover:border-accent hover:bg-white-10 transition-colors duration-150 text-sm font-medium cursor-pointer"
        >
          홈으로 이동 →
        </button>
        <p className="text-xs text-muted font-jetbrains-mono">
          {count}초 후 자동으로 이동합니다
        </p>
      </div>
    </div>
  );
}
