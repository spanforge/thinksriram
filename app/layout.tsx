import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://thinksriram.com"),
  title: {
    default: "ThinkSriram - Timeless lessons for better lives",
    template: "%s - ThinkSriram"
  },
  description:
    "Stories, ideas, and mental models to help you think clearer, decide better, and live wiser.",
  openGraph: {
    title: "ThinkSriram",
    description: "Timeless lessons for better lives.",
    url: "https://thinksriram.com",
    siteName: "ThinkSriram",
    images: [{ url: "/images/hero-landscape.png", width: 1600, height: 900 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkSriram",
    description: "Timeless lessons for better lives.",
    images: ["/images/hero-landscape.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
