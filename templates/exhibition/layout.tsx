import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@exhib/components/layout/Header";
import Footer from "@exhib/components/layout/Footer";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Exhibition Website | vinuspread",
  description: "Experience the epitome of elegance and durability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#0F0F0F] text-[#F9F6F0] selection:bg-[#F9F6F0] selection:text-[#0F0F0F]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
