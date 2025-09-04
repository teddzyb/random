import type { Metadata } from "next";
import { Inter, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

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
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Random",
  description: "A clean and simple TRNG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmMono.variable} ${dmSans.variable} antialiased`}
      >
        <Providers>
          <NextTopLoader color="#006FEE" showSpinner={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
