import type { Metadata } from "next";
import { plusJakarta } from "@/fonts";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Iwan Firmawan",
  description:
    "Iwan firmawan | Full-stack Web Developer who lives in Purbalingga, Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className}`}>
        <main className="w-full flex flex-col items-center justify-start">
          {children}
        </main>
      </body>
    </html>
  );
}
