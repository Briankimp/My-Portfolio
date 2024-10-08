import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Analytics } from "@vercel/analytics/react";
const jetbrains_Mono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Brian Kimathi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <div className="px-12 ">     
          <Header />
          <StairTransition/>
          <PageTransition>
            {children}
            <Analytics/>
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
