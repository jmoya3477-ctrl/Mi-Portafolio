'use client'
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 backdrop-blur-md border-b border-white/5"
    >
      <div className="text-white font-bold text-xl tracking-tighter">
        MOYA<span className="text-purple-500">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
       <a href="/" className="hover:text-white transition-colors">Inicio</a>
       <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
       <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
      </div>

      {/* Botón de la derecha */}
<a 
  href="#contacto" 
  className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
>
  CONTACTO
</a>
    </motion.nav>
  );
}