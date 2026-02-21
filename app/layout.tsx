import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intentional — Dating, redesigned for commitment",
  description: "Stop swiping. Start matching based on psychological compatibility, attachment alignment, and long-term life vision.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
