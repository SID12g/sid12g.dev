import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://sid12g.dev"),
  title: "sid12g • 조성민",
  description: "안녕하세요 조성민입니다.",
  openGraph: {
    images: "https://sid12g.dev/images/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${wantedSans.variable} ${tossFace.variable}`}
        style={{ overflowX: "hidden" }}
      >
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
