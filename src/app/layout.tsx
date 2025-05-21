import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";

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

const menlo = localFont({
  src: "./fonts/Menlo-Regular.ttf",
  variable: "--font-menlo",
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
      <head>
        <meta
          name="naver-site-verification"
          content="5fb50fe340c9be3669bda9c08d5e5bcd59f7d40a"
        />
      </head>
      <body
        className={`${wantedSans.variable} ${tossFace.variable} ${menlo.variable}`}
        style={{ overflowX: "hidden", backgroundColor: "#fafafa" }}
      >
        <Providers>
          <StyledComponentsRegistry>
            <Navbar />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
