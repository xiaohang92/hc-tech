import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "H&C Tech Solution - Professional Web Development Services",
    template: "%s | H&C Tech Solution",
  },
  description:
    "H&C Tech Solution (HC Tech, HNCTechSolution) is a leading web development company specializing in custom websites, e-commerce solutions, and digital transformation. Get professional web development services in Malaysia.",
  keywords: [
    "hc tech",
    "hnctechsolution",
    "hc tech solution",
    "h&c tech",
    "web development",
    "website design",
    "e-commerce development",
    "WordPress development",
    "custom software",
    "digital transformation",
    "Malaysia web development",
    "Penang web developer",
    "responsive website design",
    "SEO optimized websites",
  ],
  authors: [{ name: "H&C Tech Solution" }],
  creator: "H&C Tech Solution",
  publisher: "H&C Tech Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hctechsolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hctechsolution.com",
    title: "H&C Tech Solution - Professional Web Development Services",
    description:
      "Leading web development company in Malaysia offering custom websites, e-commerce solutions, and digital transformation services.",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&C Tech Solution - Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H&C Tech Solution - Professional Web Development Services",
    description:
      "Leading web development company in Malaysia offering custom websites, e-commerce solutions, and digital transformation services.",
    images: ["/og-image.jpg"],
    creator: "@hctechsolution",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main className="pt-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
