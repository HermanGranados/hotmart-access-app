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
  title: "Vapora.app",
  description: "Calculadoras de anestesia para profesionales",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="es"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  style={{ backgroundColor: "#ffffff" }}
>
  <head>
    <meta name="theme-color" content="#ffffff" />
  </head>
  <body className="min-h-full flex flex-col" style={{ backgroundColor: "#ffffff" }}>
    {children}
  </body>
</html>
  );
}