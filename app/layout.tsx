import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Wiman | Fullstack JavaScript & UX",
  description:
    "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
  metadataBase: new URL("https://www.marcus-wiman.com"),
  icons: {
    icon: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "Marcus Wiman | Fullstack JavaScript & UX",
    description:
      "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
    type: "website",
    url: "https://www.marcus-wiman.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Wiman | Fullstack JavaScript & UX",
    description:
      "Fullstack JavaScript student and UX designer based in Stockholm. Follow my JavaScript studies and explore UX case studies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0e1111] focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
