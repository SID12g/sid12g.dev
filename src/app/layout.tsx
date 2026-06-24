import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  style: "normal",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Medium.woff2",
  variable: "--font-jetbrains-mono",
  weight: "500",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sid12g • 조성민",
  description: "안녕하세요, 개발자 조성민입니다.",
  openGraph: {
    title: "sid12g • 조성민",
    description: "안녕하세요, 개발자 조성민입니다.",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://sid12g.dev/images/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body>
        <div className="max-w-[640px] mx-auto px-6 py-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
