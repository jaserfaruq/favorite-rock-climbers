import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Favorite Rock Climbers",
  description: "A personal gallery showcasing favorite rock climbers — their stories, specialties, and most notable ascents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
