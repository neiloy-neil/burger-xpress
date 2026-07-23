import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PWASetup from "@/components/PWASetup";

export const metadata: Metadata = {
  title: {
    default: "Burger Xpress — Flavor Fusion | Dhaka's Favourite Burger",
    template: "%s | Burger Xpress",
  },
  description:
    "100% Halal burgers, rice bowls, chowmein and more across 7 branches in Dhaka. Dine in or order on Foodpanda and Munchies. Rated 4.8★ by 2,000+ happy customers.",
  keywords: [
    "burger Dhaka",
    "halal burger Bangladesh",
    "best burger Dhanmondi",
    "Burger Xpress",
    "halal fast food Dhaka",
    "order burger online Dhaka",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Burger Xpress",
    title: "Burger Xpress — Flavor Fusion",
    description: "100% Halal burgers across 7 branches in Dhaka. Rated 4.8★.",
    images: [{ url: "/images/hero-cover.jpg", width: 1200, height: 630 }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Burger Xpress",
  },
  applicationName: "Burger Xpress",
  formatDetection: { telephone: true },
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1B3D8F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white">
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
        <PWASetup />
      </body>
    </html>
  );
}
