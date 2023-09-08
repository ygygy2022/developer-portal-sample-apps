//import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <Navbar></ Navbar>
        <main>{children}</main>
        <Footer></Footer>
        </>
      </body>
    </html>
  );
}
