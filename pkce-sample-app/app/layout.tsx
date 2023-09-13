import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

//
export const metadata: Metadata = {
  title: "PKCE sample application",
  description: "A sample application that demonstrates the Authorization code grant with the Proof Key of Code Exchange with IBM Security Verify authorization and resource server",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="h-screen">
        <Navbar />        
        <main className="px-24 text-black">{children}</main>
        <Footer />
        </ div>
      </body>
    </html>
  );
}
