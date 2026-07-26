import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zarnaji — Full Stack Developer & Data Analyst",
  description:
    "Full Stack Developer specializing in Laravel, PHP, Python, and AI. I build real software — web apps, decision support systems, and computer vision solutions.",

  verification: {
    google: "CDIs6NsNr5FMKB-nb7_8dPYrD1GH3HPSUhts11euyYo",
  },

  keywords: [
    "Full Stack Developer",
    "Laravel Developer",
    "Data Analyst",
    "Computer Vision",
    "YOLO11",
    "PHP Developer",
    "Indonesia",
    "Portfolio",
  ],
  authors: [{ name: "Zarnaji" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zarnaji-portfolio.vercel.app",
    title: "Zarnaji — Full Stack Developer & Data Analyst",
    description:
      "Full Stack Developer specializing in Laravel, PHP, Python, and AI. I build real software.",
    siteName: "Zarnaji Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarnaji — Full Stack Developer & Data Analyst",
    description:
      "Full Stack Developer specializing in Laravel, PHP, Python, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
