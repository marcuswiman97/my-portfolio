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
  title: "UX Designer Marcus Wiman | UX Portfolio Stockholm",
  description:
    "UX designer based in Stockholm focused on user research, usability testing, and interaction design. Explore selected UX projects and case studies.",
  metadataBase: new URL("https://www.marcus-wiman.com"),
  openGraph: {
    title: "UX Designer Marcus Wiman | UX Portfolio Stockholm",
    description:
      "UX designer based in Stockholm focused on user research, usability testing, and interaction design. Explore selected UX projects and case studies.",
    type: "website",
    url: "https://www.marcus-wiman.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX Designer Marcus Wiman | UX Portfolio Stockholm",
    description:
      "UX designer based in Stockholm focused on user research, usability testing, and interaction design. Explore selected UX projects and case studies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
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
