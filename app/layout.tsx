import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Recipe Finder based on user inputs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-orange-100 flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
