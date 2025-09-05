import type { Metadata } from "next";
import { Inter, DM_Mono, DM_Sans, DynaPuff } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import MainLayout from "./_components/layouts/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["1000"],
  variable: "--font-dm-sans",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dyna-puff",
});

export const metadata: Metadata = {
  title: "Random - Simply a true randomizer.",
  description: "Random offers a suite of tools for generating true random outcomes, perfect for objective decisions, fair prize draws, and data randomization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${dmMono.variable} ${dmSans.variable} ${dynaPuff.variable} antialiased`}>
        <Providers>
          <NextTopLoader color="#006FEE" showSpinner={false} />
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
