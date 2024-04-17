import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

//TODO crear un checkout para el carrito de compras  
//TODO login con posibilidad de crear una cuenta
//TODO en la card debe existir la posibilidad de agregar-quitar el producto al carrito
//TODO hacer un contexto de usuario y carrito de compras
//TODO boton de comprar con un alert de confirmacion
//TODO boton limpiar el carrito y redirigir a root
//TODO vista con información de la compra

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
