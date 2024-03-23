import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Vannarath | Software Developer",
  description: "Build your dream project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <GoogleTagManager gtmId="GTM-W9PFNCZ6" />
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
