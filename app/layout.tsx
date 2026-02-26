import type { Metadata } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TeqThots — Real Tech. Real Thoughts.",
  description: "Where innovation meets introspection — the destination for tech entrepreneurs building real AI product companies.",
  keywords: ["tech podcast", "AI founders", "startup", "technology", "entrepreneur", "SaaS"],
  openGraph: {
    title: "TeqThots — Real Tech. Real Thoughts.",
    description: "Where innovation meets introspection — the destination for tech entrepreneurs.",
    url: "https://teqthots.com",
    siteName: "TeqThots",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
