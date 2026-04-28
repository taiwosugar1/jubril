import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { Inter, Cormorant_Garamond, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import DevModePage from "@/components/DevModePage";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--scrolling",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JUBRIL",
  description: "Jubril Of Lagos",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Jubril",
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-512x512.png",
  },
  verification: {
    google: "5VxXcqCljsLixNdgDz8pjXTP-qhfeXmtOdemh4WMTb8",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const IS_DEV_MODE = process.env.NEXT_PUBLIC_DEV_MODE === "false";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  if (IS_DEV_MODE) {
    return (
      <html lang="en">
        <body>
          <DevModePage />
        </body>
      </html>
    );
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${cormorant.variable}`}
    >
      <body className={inter.className}>
        <div>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}