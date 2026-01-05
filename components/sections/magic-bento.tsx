import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export interface BentoCardProps {
  title: string
  description: string
  label: string
  color: string
  glowColor?: string
  image?: string
  onClick?: () => void
  colSpan?: string
}

export function MagicBento({
  title,
  description,
  label,
  color,
  glowColor = "#ffffff",
  image,
  onClick,
  colSpan = "col-span-1",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
      className={`group relative flex flex-col h-full rounded-[24px] bg-black border border-white/5 cursor-pointer overflow-hidden transition-all duration-500 ${colSpan}`}
      style={{
        // Use CSS variable for hover state to avoid inline style lag
        "--glow-color": glowColor,
      } as React.CSSProperties}
    >
      {/* Dynamic Hover Glow (Shadow & Border) */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
           style={{ 
             boxShadow: `0 0 50px -10px ${glowColor}20`,
             border: `1px solid ${glowColor}40`
           }}
      />

      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden z-10 bg-zinc-900">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-80 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105 group-hover:opacity-100"
            />
            {/* Subtle gradient overlay for text legibility if needed, or style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          </>
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 
            className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--glow-color)]"
            style={{ color: 'white' }} 
          >
            {title}
          </h3>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 mb-6 transition-colors group-hover:text-zinc-300">
          {description}
        </p>

        {/* Active Footer */}
        <div className="mt-auto flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">
          <span>Ver proyecto</span>
          <div className="p-1 rounded-full bg-white/5 group-hover:bg-[var(--glow-color)] group-hover:text-black transition-all duration-300">
            <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
