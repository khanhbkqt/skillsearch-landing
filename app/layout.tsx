import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenClaw Skill Search - Semantic Discovery for 6,700+ Skills",
  description: "Lightning-fast semantic search for OpenClaw skills. Find the perfect skill in <10ms with hybrid ranking, personalization, and 100% local execution.",
  keywords: ["OpenClaw", "skill search", "semantic search", "AI", "plugin", "automation"],
  authors: [{ name: "OpenClaw Team" }],
  openGraph: {
    title: "OpenClaw Skill Search - Semantic Discovery",
    description: "Lightning-fast semantic search for 6,700+ OpenClaw skills. <10ms queries, 100% local.",
    type: "website",
    url: "https://skillsearch.thevibecoding.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw Skill Search",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Skill Search",
    description: "Lightning-fast semantic search for 6,700+ skills. <10ms queries.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
