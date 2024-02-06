import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
// import Navbar from "./components/Navbar";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omotayo Oyeniyi Portfolio",
  description: "My portfolio app",
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
