import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Travotours | Premium Tour & Travel Packages",
  description: "Experience the best of Shimla, Rishikesh, and Manali with Travotours. Premium tour packages with luxury stays and expert local guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <StickyBottomBar />
      </body>
    </html>
  );
}
