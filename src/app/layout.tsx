import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfólio | Bernardo",
  description: "Portfólio do Bernardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} h-dvh w-full grid-bg-light dark:grid-bg-dark bg-white dark:bg-black`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
