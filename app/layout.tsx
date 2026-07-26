import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zarnaji-portfolio.vercel.app"),
  title: "Zarnaji — Full Stack Developer & Data Analyst",
  description:
    "Full Stack Developer specializing in Laravel, PHP, Python, and AI. I build real software — web apps, decision support systems, and computer vision solutions.",
  alternates: {
    canonical: "/",
  },
  category: "technology",
  creator: "Zarnaji",
  publisher: "Zarnaji",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

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
    url: "https://zarnaji-portfolio.vercel.app",
    title: "Zarnaji — Full Stack Developer & Data Analyst",
    description:
      "Professional portfolio of Zarnaji, Full Stack Developer specializing in Laravel, PHP, Python, AI, and Data Analysis.",
    siteName: "Zarnaji Portfolio",
    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zarnaji Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarnaji — Full Stack Developer & Data Analyst",
    description:
      "Professional portfolio of Zarnaji.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
