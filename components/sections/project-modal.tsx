"use client"

import type { Project } from "@/types/project"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { createPortal } from "react-dom"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "17px" // Para evitar el salto del scrollbar
    } else {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0"
    }
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0"
    }
  }, [project])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  const modalContent = (
    <AnimatePresence>
      <div 
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          zIndex: 999999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          margin: "0px",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* Backdrop - Vercel style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content - Vercel-inspired */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ 
            duration: 0.2, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            damping: 25,
            stiffness: 300
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl h-[88vh] bg-black rounded-xl border border-neutral-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl flex flex-col"
          style={{
            background: "rgb(0, 0, 0)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white hover:text-emerald-100 transition-all duration-200 border border-emerald-500 hover:border-emerald-600"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Section - Fixed */}
          <div className="px-8 pt-8 pb-6 flex-shrink-0 border-b border-neutral-800/50">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1 max-w-3xl">
                <h1 className="text-3xl font-semibold text-white mb-3 leading-tight tracking-tight">
                  {project.title}
                </h1>
                
                <p className="text-lg text-neutral-400 leading-relaxed font-light">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full border border-emerald-400 hover:border-emerald-500 transition-all duration-200 text-sm shadow-lg shadow-emerald-500/25"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Proyecto
              </a>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto" style={{ 
            scrollbarWidth: "thin",
            scrollbarColor: "#404040 transparent"
          }}>
            {/* Preview Image */}
            <div className="px-8 py-6">
              <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800/50">
                <div className="aspect-[2/1] relative">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="px-8 pb-8">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-10">
                  {/* Description */}
                  <section>
                    <h2 className="text-xl font-semibold text-white mb-4 tracking-tight flex items-center gap-3">
                      <span className="w-1 h-4 bg-neutral-600 rounded-full"></span>
                      Descripción General
                    </h2>
                    <div className="prose prose-neutral prose-invert max-w-none">
                      <p className="text-neutral-300 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>
                  </section>

                  {/* Challenges & Solutions */}
                  {(project.challenges || project.solutions) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.challenges && (
                        <section className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800/50">
                          <h3 className="text-lg font-semibold text-white mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-1 h-4 bg-red-400/70 rounded-full"></span>
                            Desafíos
                          </h3>
                          <p className="text-neutral-300 leading-relaxed">
                            {project.challenges}
                          </p>
                        </section>
                      )}

                      {project.solutions && (
                        <section className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800/50">
                          <h3 className="text-lg font-semibold text-white mb-4 tracking-tight flex items-center gap-3">
                            <span className="w-1 h-4 bg-emerald-400/70 rounded-full"></span>
                            Soluciones
                          </h3>
                          <p className="text-neutral-300 leading-relaxed">
                            {project.solutions}
                          </p>
                        </section>
                      )}
                    </div>
                  )}

                  {/* Features Grid */}
                  {project.features && project.features.length > 0 && (
                    <section>
                      <h2 className="text-xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                        <span className="w-1 h-4 bg-neutral-600 rounded-full"></span>
                        Características Principales
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-neutral-900/30 border border-neutral-800/30">
                            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-neutral-300 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                      {project.features.length > 6 && (
                        <p className="text-sm text-neutral-500 mt-4">
                          Y {project.features.length - 6} características más...
                        </p>
                      )}
                    </section>
                  )}

                  {/* Tech Stack */}
                  <section className="p-8 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 border border-neutral-700/50 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-3">
                        <span className="w-1 h-5 bg-gradient-to-b from-neutral-500 to-neutral-600 rounded-full shadow-sm"></span>
                        Stack Tecnológico
                      </h3>
                      <span className="text-xs text-neutral-500 bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-700/50">
                        {project.technologies.length} tecnologías
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.technologies.map((tech, index) => (
                        <div 
                          key={tech}
                          className="group relative overflow-hidden"
                        >
                          <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-neutral-800/60 to-neutral-700/40 border border-neutral-600/30 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neutral-900/30 group-hover:border-neutral-600/60">
                            <div className="w-2 h-2 bg-neutral-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-neutral-400 transition-colors duration-300"></div>
                            <span className="text-neutral-200 font-medium text-sm group-hover:text-white transition-colors duration-300">
                              {tech}
                            </span>
                          </div>
                          
                          {/* Efecto de brillo sutil */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )

  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null
}