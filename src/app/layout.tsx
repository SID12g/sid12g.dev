import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

const wantedSans = localFont({
  src: "./fonts/WantedSansVariable.woff2",
  variable: "--font-wanted-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const tossFace = localFont({
  src: "./fonts/TossFaceFontMac.ttf",
  variable: "--font-toss-face",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#161616" },
  ],
};

export const metadata: Metadata = {
  title: "sid12g • 조성민",
  description: "안녕하세요 조성민입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${wantedSans.variable} ${tossFace.variable}`}>
        <StyledComponentsRegistry>
          <Banner />
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
