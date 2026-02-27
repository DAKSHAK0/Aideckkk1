import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AiDECKK | Premium Web Development Company",
  description: "AiDECKK is a high-end web development company building fast, modern, conversion-focused websites for ambitious brands and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
