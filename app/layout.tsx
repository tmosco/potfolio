import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Omotayo Oyeniyi | Software Developer",
  description:
    "Portfolio of Omotayo Oyeniyi, a software developer building responsive, accessible, and maintainable web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Omotayo Oyeniyi | Software Developer",
    description:
      "Explore projects, experience, skills, and contact information for Omotayo Oyeniyi.",
    siteName: "Omotayo Oyeniyi Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
