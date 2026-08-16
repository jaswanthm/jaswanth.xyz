import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { PaddleScript } from "@/components/paddle-checkout";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learn.jaswanth.foo"),
  title: {
    default: "Building and Testing GenAI Agents",
    template: "%s | Jas Learning",
  },
  description:
    "Build a production-minded GenAI agent and learn how to test it with confidence.",
  openGraph: {
    title: "Building and Testing GenAI Agents",
    description:
      "A live online course for developers who want to build, test, and evaluate GenAI agents.",
    url: "https://learn.jaswanth.foo",
    siteName: "Jas Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <PaddleScript />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
