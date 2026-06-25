import React from "react";
import MediaPreview from "./MediaPreview";

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
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return <MediaPreview src={src} alt={alt} />;
  },
};
