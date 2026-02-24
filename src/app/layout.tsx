import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "sid12g • 조성민",
  description: "안녕하세요 조성민입니다.",
  openGraph: {
    title: "sid12g • 조성민",
    description: "안녕하세요 조성민입니다.",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-2xl mx-auto mt-8 px-4">
        <Providers>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
