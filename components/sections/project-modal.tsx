"use client"

import type { Project } from "@/types/project"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  Target, 
  Zap, 
  Code2, 
  Sparkles,
  ArrowRight,
  Monitor,
  Layout,
  Globe
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Badge } from "@/components/ui/badge"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isMounted) return null

  return createPortal(
    <AnimatePresence mode="wait">
      {project && (
        <div key="project-modal-root" className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 300
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] bg-zinc-950 rounded-2xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* ... rest of the content ... */}
          {/* Close Button - Premium Style */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 p-1.5 rounded-full bg-black/60 hover:bg-emerald-500 text-white transition-all duration-300 backdrop-blur-md border border-white/10 group"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Hero Section - Very Compact */}
            <div className="relative h-[160px] md:h-[220px] w-full overflow-hidden">
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              </motion.div>

              {/* Header Floating Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                      {project.year || "2024"}
                    </Badge>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Content Section - Very Compact Layout */}
            <div className="px-5 md:px-8 py-6 md:py-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column: Details */}
                <div className="flex-1 space-y-8">
                  {/* Overview */}
                  <section className="space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Layout className="w-4 h-4" />
                      <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold">Sobre el Proyecto</h2>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </section>

                  {/* Challenges & Solutions */}
                  {(project.challenges || project.solutions) && (
                    <div className="space-y-3">
                      {project.challenges && (
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                          <div className="flex items-center gap-2 text-red-400 mb-1">
                            <Target className="w-3.5 h-3.5" />
                            <h3 className="text-xs font-semibold text-white">Desafío</h3>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {project.challenges}
                          </p>
                        </div>
                      )}
                      {project.solutions && (
                        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                          <div className="flex items-center gap-2 text-emerald-400 mb-1">
                            <Zap className="w-3.5 h-3.5" />
                            <h3 className="text-xs font-semibold text-white">Solución</h3>
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {project.solutions}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column: Sidebar */}
                <div className="w-full md:w-[240px] space-y-6">
                  {/* Actions */}
                  <div className="space-y-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-all duration-300"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Demo en vivo
                    </a>
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 border border-zinc-700"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Repositorio
                      </a>
                    )}
                  </div>

                  {/* Tech Stack List */}
                  <div className="space-y-3">
                    <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Tecnologías</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 text-[10px] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}