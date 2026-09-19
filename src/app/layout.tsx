import type { Metadata } from "next";
import { Onest } from "next/font/google";
// @ts-expect-error CSS files are handled by Next.js at build time.
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramiro Cuellar",
  description: "Portfolio web de Ramiro Cuellar — Desarrollador Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${onest.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
