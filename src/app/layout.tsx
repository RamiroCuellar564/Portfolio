import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramiro Cuellar",
  description: "Portfolio web de Ramiro cuellar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} ${onest.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
