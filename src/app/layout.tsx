import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sid12g • 조성민",
  description: "sid12g's page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background-color">{children}</body>
    </html>
  );
}
