import type { Metadata } from "next";
import { Fragment_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navibar from "./components/shared/layout/Navibar";
import Footer from "./components/shared/layout/Footer";
import CoinPercentageDisplay from "./components/shared/layout/CoinPercentageDisplay";
import LeftNavigation from "./components/shared/layout/LeftNavigation";

const fragment = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fragment.className}`}>
        <Providers>
          <div className="w-full">
            {/* left navigation  */}
            <LeftNavigation />
            <div className="w-full pl-[210px]">
              <Navibar />
              <CoinPercentageDisplay />
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
