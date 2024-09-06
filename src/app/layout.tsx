import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dbConnect from "@/lib/mongo";

const inter = Inter({ subsets: ["latin"] });
const PROJECT_NAME = process.env.PROJECT_NAME;
const DESCRIPTION = process.env.DESCRIPTION;

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
