import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Favorite Rock Climbers",
  description: "A personal collection of the best rock climbers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b border-stone-800 bg-stone-950">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="text-lg font-bold text-white">Rock Climbers</span>
            <div className="flex gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-stone-400 transition-colors hover:text-amber-400"
              >
                Gallery
              </Link>
              <Link
                href="/accomplishments"
                className="text-stone-400 transition-colors hover:text-amber-400"
              >
                Accomplishments
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
