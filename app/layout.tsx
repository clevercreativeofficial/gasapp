import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoonda Web",
  description: "Yoonda is a social media web application to foster youth social interactions, enable marketplace exploration and provide opportunities for growth and professional development with a focus on jobs in the environmental sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="darks">
      <body
        className={`${interSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
