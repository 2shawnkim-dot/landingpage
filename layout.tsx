import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Intentional — Dating, redesigned for commitment",
  description:
    "Stop swiping. Start matching based on psychological compatibility, attachment alignment, and long-term life vision. A premium dating platform for intentional people.",
  keywords: [
    "dating app",
    "serious relationships",
    "compatibility matching",
    "attachment theory",
    "intentional dating",
    "psychology-based dating",
  ],
  authors: [{ name: "Intentional" }],
  openGraph: {
    title: "Intentional — Dating, redesigned for commitment",
    description:
      "Stop swiping. Start matching based on psychological compatibility, attachment alignment, and long-term life vision.",
    type: "website",
    locale: "en_US",
    siteName: "Intentional",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intentional — Dating, redesigned for commitment",
    description:
      "Stop swiping. Start matching based on psychological compatibility, attachment alignment, and long-term life vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
