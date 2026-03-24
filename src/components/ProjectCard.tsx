'use client'
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  image: string;
}

export default function ProjectCard({ title, category, image }: ProjectProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 aspect-[9/16] md:aspect-video"
    >
      {/* Imagen de fondo (puedes usar una miniatura de tu edición) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay oscuro que aparece al pasar el mouse */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

      <div className="absolute bottom-0 p-6 w-full">
        <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}