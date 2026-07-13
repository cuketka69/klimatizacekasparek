import type { Metadata } from "next";
import { Inter, Kalam } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LiveChat } from "@/components/LiveChat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Tepelná čerpadla Kašpar | Úsporné vytápění pro váš domov",
  description:
    "Návrh, dodávka, montáž a servis tepelných čerpadel Carrier pro rodinné domy. Působíme v Plzeňském kraji – Plzeň, Rokycany, Beroun, Klatovy, Sušice a okolí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${kalam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
        <LiveChat />
      </body>
    </html>
  );
}
