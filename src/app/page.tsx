'use client'
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen bg-[#050505] text-white">
      
      {/* SECCIÓN HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
            Diseño <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Visual</span>
            <br />
            <span className="text-3xl md:text-6xl text-gray-200">& Desarrollo</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
            Especialista en edición de video viral para marketing y creación de interfaces modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#proyectos" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all text-center">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all backdrop-blur-md text-center">
              HABLEMOS
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <motion.section 
        id="servicios" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-24 bg-white/5 rounded-3xl mb-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mis <span className="text-purple-500">Servicios</span></h2>
          <p className="text-gray-400">Soluciones visuales diseñadas para impactar y convertir.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors bg-black/40 text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Edición de Reels</h3>
            <p className="text-gray-400 text-sm">Contenido dinámico estilo "Hormozi" para retener atención.</p>
          </div>
          <div className="p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors bg-black/40 text-center">
            <div className="text-3xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-3">Edits Cinematográficos</h3>
            <p className="text-gray-400 text-sm">Montajes de alto nivel con color grading profesional.</p>
          </div>
          <div className="p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors bg-black/40 text-center">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-3">Landing Pages</h3>
            <p className="text-gray-400 text-sm">Webs modernas optimizadas para tu marca personal.</p>
          </div>
        </div>
      </motion.section>

      {/* SECCIÓN DE PROYECTOS */}
      <motion.section 
        id="proyectos"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-24"
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Proyectos <span className="text-purple-500">Seleccionados</span>
          </h2>
          <p className="text-gray-400 text-lg">Una muestra de mis mejores trabajos en edición y marketing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Marketing Viral E-commerce" 
            category="Reels / Marketing" 
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
          />
          <ProjectCard 
            title="Cinematic Edit - Spider-Man" 
            category="Hobbies / Cine" 
            image="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop" 
          />
          <ProjectCard 
            title="Contenido para Finanzas" 
            category="Reels / Educación" 
            image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop" 
          />
        </div>
      </motion.section>

      {/* SECCIÓN DE CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">¿Tienes un proyecto en mente?</h2>
        <p className="text-gray-400 mb-10">Estoy disponible para nuevos proyectos de edición y desarrollo.</p>
        <a href="mailto:tu-correo@ejemplo.com" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
          Enviame un correo
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tighter">MOYA<span className="text-purple-500">.</span></h2>
              <p className="text-gray-400 text-sm max-w-xs">Transformando ideas en experiencias visuales de alto impacto.</p>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            </div>
            <div className="flex gap-5">
        <a href="https://instagram.com/tu-usuario" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <span className="text-xs font-bold">IG</span>
        </a>
        <a href="https://tiktok.com/@tu-usuario" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <span className="text-xs font-bold">TK</span>
        </a>
        <a href="https://fiverr.com/tu-usuario" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <span className="text-xs font-bold">FV</span>
        </a>
      </div>
    </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs text-gray-500">
            © 2026 Jesus Moya. Diseñado en Anaco con ❤️.
          </div>
        </div>
      </footer>
    </main>
  );
}