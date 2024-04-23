import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { CartProvider } from "./context/cartContext";
import { UserSessionProvider } from "./context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clase 3",
  description: "3° Clase - Next.js con TypeScript - Hedy Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserSessionProvider>
        <CartProvider>
          <body className={inter.className} suppressHydrationWarning={true}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </CartProvider>
      </UserSessionProvider>
    </html>
  );
}
