"use client"

import type { Project } from "@/types/project"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  onClick: () => void
  index: number
}

export function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onClick={onClick}
      className="group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-2 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 mb-5 rounded-2xl border border-zinc-800/30 shadow-lg shadow-zinc-900/20 transition-all duration-300 group-hover:border-zinc-700/40 group-hover:shadow-2xl group-hover:shadow-zinc-900/40">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 group-hover:contrast-125"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Efecto dark elegante en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/0 via-zinc-800/20 to-zinc-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="space-y-3 p-1">
        <div className="space-y-2">
          <h3 className="font-semibold text-xl text-zinc-100 group-hover:text-white transition-colors duration-300 leading-tight tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-200 transition-colors duration-300">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 bg-zinc-800/50 text-zinc-400 rounded-full border border-zinc-700/30 transition-all duration-300 group-hover:bg-zinc-700/70 group-hover:text-zinc-200 group-hover:border-zinc-600/50 group-hover:shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-zinc-800/30 text-zinc-500 rounded-full border border-zinc-700/20 group-hover:bg-zinc-700/40 group-hover:text-zinc-400 transition-all duration-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}