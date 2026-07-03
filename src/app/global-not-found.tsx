import "./globals.css";
import { headers } from "next/headers";
import NotFoundView from "@/components/NotFoundView";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "404: Not Found",
};

export default async function GlobalNotFound() {
  const headerList = await headers();
  const lang = (headerList.get("x-locale") === "en" ? "en" : "ko") as Locale;

  return (
    <html lang={lang}>
      <body className="max-w-[640px] mx-auto px-6 py-10">
        <NotFoundView lang={lang} />
      </body>
    </html>
  );
}
