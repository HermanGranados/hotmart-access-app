import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vapora.app",
    template: "%s | Vapora.app",
  },
  description: "Herramientas clínicas para anestesia",
  applicationName: "Vapora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}