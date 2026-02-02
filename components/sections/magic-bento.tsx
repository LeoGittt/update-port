import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface BentoCardProps {
  title: string;
  description: string;
  label: string;
  color: string;
  glowColor?: string;
  image?: string;
  onClick?: () => void;
  colSpan?: string;
  animateInView?: boolean;
  isFeatured?: boolean;
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
  animateInView = true,
  isFeatured,
}: BentoCardProps) {
  // Simplificar variantes para evitar que se queden en opacity 0
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial={animateInView ? "hidden" : "visible"}
      animate="visible"
      viewport={{ once: true }}
      onClick={onClick}
      className={`group relative flex flex-col h-full rounded-[24px] bg-black cursor-pointer overflow-hidden transition-all duration-500 ${colSpan}`}
      style={
        {
          "--glow-color": glowColor,
          "--glow-color-soft": `${glowColor}40`,
        } as React.CSSProperties
      }
    >
      {/* Dynamic Hover Glow (Shadow & Border) */}
      <div
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          boxShadow: `0 0 40px -10px ${glowColor}30`,
        }}
      />

      {/* Image Container */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden z-10 bg-zinc-900">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover opacity-90 transition-all duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-110 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-50" />
          </>
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-white transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
        </div>

        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-6 group-hover:text-zinc-300 transition-colors">
          {description}
        </p>

        {/* Active Footer */}
        <div className="mt-auto flex items-center justify-between group/footer">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-emerald-400 transition-colors">
            <span>{label}</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-white transition-colors duration-300">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
              Ver más
            </span>
            <div className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
