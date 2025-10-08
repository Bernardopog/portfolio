import { Header } from "@/components/shared/layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;

  return (
    <html lang="en" className={`${theme === "dark" && "dark"}`}>
      <body
        className={`${inter.variable} relative max-h-dvh w-full overflow-hidden bg-white dark:bg-black`}
      >
        <Header darkMode={theme === "dark"} />
        {children}
      </body>
    </html>
  );
}
