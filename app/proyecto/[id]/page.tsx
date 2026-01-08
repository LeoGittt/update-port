"use client"

import { useParams, useRouter } from "next/navigation"
import { projects } from "@/data/projects"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  ArrowLeft, 
  Github,
  Target, 
  Zap, 
  Layout, 
  Globe,
  ExternalLink,
  Sparkles,
  User,
  Clock,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id
  const [isMounted, setIsMounted] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    window.scrollTo({ top: 0, behavior: "instant" })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [id])

  const projectIndex = projects.findIndex(p => p.id.toString() === id)
  const project = projects[projectIndex]
  const nextProject = projects[(projectIndex + 1) % projects.length]

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  // Animaciones cinemáticas filtradas por scroll
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.1])
  const heroY = useTransform(heroScroll, [0, 1], [0, 100])
  const textBlur = useTransform(heroScroll, [0, 0.5], ["blur(0px)", "blur(10px)"])

  if (!isMounted) return <div className="min-h-screen bg-[#050505]" />

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 text-center font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5 backdrop-blur-3xl"
        >
          <h1 className="text-4xl font-black mb-6 uppercase tracking-tighter">Proyecto en construcción</h1>
          <p className="text-zinc-500 mb-8 max-w-xs mx-auto">El proyecto que buscas no está disponible o ha sido movido.</p>
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:bg-white transition-all mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> VOLVER AL INICIO
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      
      {/* Barra de Navegación Flotante Ultra-Premium - Se oculta en el top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-6 flex justify-between items-center pointer-events-none"
          >
            <div className="pointer-events-auto">
              <button 
                onClick={() => router.push('/#proyectos')}
                className="group flex items-center gap-3 px-6 py-3 bg-zinc-950/90 backdrop-blur-2xl border border-white/10 rounded-full text-xs font-black text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-400 transition-all duration-500 shadow-2xl"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="tracking-widest">REGRESAR</span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section: Editorial & Cinemático - FULL SCREEN MOBILE */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
           style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
           className="absolute inset-0 z-0"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Capas de degradado para profundidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 md:mb-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <Badge className="bg-emerald-500 text-black border-none px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase">
                {project.year || "2025"}
              </Badge>
              <div className="w-px h-3 bg-white/20" />
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Architecture</span>
            </motion.div>
            
            <motion.div
              style={{ filter: textBlur }}
              className="space-y-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] sm:text-8xl md:text-[10rem] lg:text-[14rem] font-black text-white tracking-tighter leading-[0.75] uppercase break-words"
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-base sm:text-xl md:text-2xl lg:text-3xl text-zinc-400 max-w-3xl mx-auto font-light leading-snug px-4 md:px-0"
              >
                {project.subtitle}
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center pt-8 md:pt-12"
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 px-8 py-4 md:px-10 md:py-6 bg-white text-black font-black rounded-2xl md:rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
              >
                <Globe className="w-5 h-5" />
                <span className="tracking-widest text-xs md:text-sm uppercase">PROBAR DEMO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
           <span className="text-[9px] uppercase tracking-[0.5em] font-black text-zinc-500">Discover</span>
           <div className="w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent" />
        </motion.div>
      </section>

      {/* Main Content: Layout de Doble Columna Responsive */}
      <main className="max-w-7xl mx-auto px-6 py-24 md:py-48 space-y-32 md:space-y-64 relative z-20">
        
        {/* Section 01: Concepto & Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
           <div className="lg:col-span-8 space-y-12 md:space-y-24">
              <section className="space-y-8 md:space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <Layout className="w-6 h-6" />
                  </div>
                  <h2 className="text-sm font-black uppercase tracking-[0.5em] text-emerald-500">01 / Concepto</h2>
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-white leading-[1.1] uppercase tracking-tighter">
                  Re-imaginando la <br /> <span className="text-zinc-600 italic">experiencia digital.</span>
                </h3>
                <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-4xl">
                  {project.description}
                </p>
              </section>

              {/* Grid de Desafíos & Soluciones: Diseño de alto impacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-12">
                {project.challenges && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group p-10 md:p-14 rounded-[3rem] bg-zinc-900/40 border border-white/5 space-y-8 hover:bg-zinc-900/60 transition-all duration-700"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                      <Target className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white">El Desafío</h4>
                    <p className="text-zinc-400 leading-relaxed font-medium">{project.challenges}</p>
                  </motion.div>
                )}
                {project.solutions && (
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group p-10 md:p-14 rounded-[3rem] bg-emerald-500 text-black space-y-8 shadow-2xl shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-700"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center text-black/80 border border-black/10">
                      <Zap className="w-7 h-7 fill-current" />
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-black">La Solución</h4>
                    <p className="text-black/80 leading-relaxed font-bold">{project.solutions}</p>
                  </motion.div>
                )}
              </div>
           </div>

           {/* Sidebar: Información Técnica Sticky */}
           <aside className="lg:col-span-4 lg:pl-12">
              <div className="lg:sticky lg:top-32 p-10 md:p-12 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-3xl space-y-12">
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Core Stack</h4>
                       <span className="text-[10px] font-black text-zinc-600 uppercase">2025</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {project.technologies.map(tech => (
                         <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-zinc-100 uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-all cursor-default">
                           {tech}
                         </span>
                       ))}
                    </div>
                 </div>
                 
                 <div className="space-y-6 pt-12 border-t border-white/5">
                    <div className="flex justify-between items-center group">
                       <div className="flex items-center gap-4">
                          <User className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Rol</span>
                       </div>
                       <span className="text-xs font-black uppercase tracking-tighter text-white">Fullstack Dev</span>
                    </div>
                    <div className="flex justify-between items-center group">
                       <div className="flex items-center gap-4">
                          <Sparkles className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Status</span>
                       </div>
                       <Badge variant="outline" className="text-[10px] font-black uppercase tracking-tighter border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-3">Production</Badge>
                    </div>
                 </div>

                 <Button 
                   onClick={() => window.open(project.demoUrl, '_blank')}
                   className="w-full py-8 bg-zinc-100 text-black font-black uppercase tracking-widest rounded-3xl hover:bg-emerald-500 transition-all text-xs"
                 >
                   Visitar Sitio <ExternalLink className="w-4 h-4 ml-3" />
                 </Button>
              </div>
           </aside>
        </div>

        {/* Section 02: Features Showcase */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-24">
             <div className="text-center md:text-left space-y-6">
                <div className="inline-flex items-center gap-3 text-emerald-500">
                   <div className="w-8 h-px bg-emerald-500" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em]">Funcionalidades</span>
                </div>
                <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter">Características <br /> <span className="text-zinc-700 italic">Principales.</span></h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {project.features.map((feature, i) => (
                 <motion.div 
                   key={feature}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group p-10 rounded-[3rem] bg-zinc-900/20 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col justify-between h-80"
                 >
                   <div className="text-[6rem] font-black text-white/[0.03] group-hover:text-emerald-500/[0.05] leading-none transition-colors">
                      {(i + 1).toString().padStart(2, '0')}
                   </div>
                   <div className="space-y-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <p className="text-xl md:text-2xl text-zinc-300 font-bold group-hover:text-white transition-colors">{feature}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </section>
        )}
      </main>

      {/* Footer-Navigation: Próximo Proyecto (Inmersivo) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-t border-white/5 bg-[#050505]">
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.25 }}
            className="absolute inset-0 z-0 grayscale"
         >
            <Image
              src={nextProject.image || "/placeholder.svg"}
              alt="Next Project"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
         </motion.div>

         <div className="container relative z-10 px-6 text-center space-y-12">
            <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.6em] md:tracking-[1em]">SIGUIENTE HISTORIA</span>
            
            <button 
              onClick={() => {
                setIsMounted(false)
                router.push(`/proyecto/${nextProject.id}`)
              }}
              className="group relative"
            >
              <h2 className="text-[12vw] sm:text-7xl md:text-[10rem] font-black text-white hover:italic transition-all duration-1000 tracking-tighter uppercase leading-none break-words">
                {nextProject.title}
              </h2>
              <div className="flex items-center justify-center gap-6 mt-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                 <div className="w-24 h-px bg-white/20" />
                 <span className="text-sm font-black tracking-[0.3em] uppercase">Explorar Proyecto</span>
                 <ArrowRight className="w-8 h-8 text-emerald-500 translate-x-0 group-hover:translate-x-4 transition-transform" />
              </div>
            </button>
         </div>
      </section>

      {/* Footer Final de Marca */}
      <footer className="py-24 px-6 text-center bg-[#050505] border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-16">
             <div className="space-y-4">
                <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">¿Impulsamos <br /> <span className="text-zinc-600">tu visión?</span></h4>
             </div>
             
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => router.push('/#contacto')}
                  className="px-12 py-6 bg-white text-black font-black rounded-3xl hover:bg-emerald-500 transition-all shadow-2xl hover:scale-105 active:scale-95 text-xs tracking-widest uppercase"
                >
                  TRABAJAR JUNTOS
                </button>
                <button 
                  onClick={() => router.push('/')}
                  className="px-12 py-6 bg-zinc-900 border border-white/5 text-zinc-400 font-bold rounded-3xl hover:text-white transition-all text-xs tracking-widest uppercase"
                >
                  MENÚ PRINCIPAL
                </button>
             </div>
             
             <div className="pt-24 flex flex-col items-center gap-8">
                <div className="w-12 h-px bg-zinc-800" />
                <p className="text-[10px] text-zinc-700 font-black tracking-[0.5em] uppercase">© 2025 Leonel González — San Juan, Argentina</p>
             </div>
          </div>
      </footer>
    </div>
  )
}

function Button({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all ${className}`}
    >
      {children}
    </button>
  )
}
