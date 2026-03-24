import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Cambiamos Geist por Inter


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Portafolio Arrecho",
  description: "Edición de video y desarrollo web de alto impacto",
};

// ... tus otros imports
import Navbar from "../components/Navbar"; // Agrega esta línea

// ... el resto del código
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-[#050505] text-white`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}