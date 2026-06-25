import React from "react";
import MediaPreview from "./MediaPreview";
import type { AssetType } from "@/utils/projects";

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]);
const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov", ".avi"]);

function inferType(src: string): AssetType {
  const ext = src.split(".").pop()?.toLowerCase() ?? "";
  if (IMAGE_EXTS.has(`.${ext}`)) return "image";
  if (VIDEO_EXTS.has(`.${ext}`)) return "video";
  if (ext === "pdf") return "pdf";
  return "other";
}

function CustomParagraph({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children);

  const nonWhitespace = childArray.filter(
    (child) => !(typeof child === "string" && child.trim() === ""),
  );

  const allMedia =
    nonWhitespace.length > 0 &&
    nonWhitespace.every(
      (child) =>
        React.isValidElement(child) &&
        typeof child.props === "object" &&
        child.props !== null &&
        "src" in (child.props as object),
    );

  if (allMedia) {
    return <div className="flex flex-row flex-wrap gap-3 my-4">{children}</div>;
  }

  return <p className="mb-4">{children}</p>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  p: CustomParagraph,
  img: ({ src }: { src?: string; alt?: string }) => {
    if (!src) return null;
    const name = src.split("/").pop() ?? src;
    return <MediaPreview src={src} name={name} type={inferType(src)} />;
  },
};
