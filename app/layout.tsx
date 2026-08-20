import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decoproart.com"),
  title: {
    default: "DECOPROART — архитектура событий",
    template: "%s — DECOPROART",
  },
  description:
    "Авторские декорации и собственное производство для частных и корпоративных событий.",
  openGraph: {
    type: "website",
    url: "https://decoproart.com",
    siteName: "DECOPROART",
    title: "DECOPROART — архитектура событий",
    description: "Декор, собственное производство и монтаж событийных пространств.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "DECOPROART — архитектура событий" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DECOPROART — архитектура событий",
    description: "Декор, собственное производство и монтаж событийных пространств.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
