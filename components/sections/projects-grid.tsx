"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import { MagicBento, BentoCardProps } from "./magic-bento";
import type { Project } from "@/types/project";

const PROJECTS_PER_PAGE = 6;

export function ProjectsGrid() {
  const router = useRouter();
  const [page, setPage] = useState(0);

  // Función para determinar el color del glow basado en la tecnología principal
  const getGlowColor = (tech: string) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes("react") || techLower.includes("next"))
      return "#61DAFB"; // Cian React
    if (techLower.includes("angular")) return "#DD0031"; // Rojo Angular
    if (techLower.includes("vue")) return "#4FC08D"; // Verde Vue
    if (techLower.includes("python") || techLower.includes("django"))
      return "#3776AB"; // Azul Python
    if (techLower.includes("node")) return "#339933"; // Verde Node
    if (techLower.includes("typescript")) return "#3178C6"; // Azul TS
    if (techLower.includes("javascript")) return "#F7DF1E"; // Amarillo JS
    if (techLower.includes("wordpress")) return "#21759B"; // Azul WP
    return "#a1a1aa"; // Gris default
  };

  // Mapeo y ordenamiento: destacados primero, luego los más nuevos
  const cardData: (BentoCardProps & { id: number; project: Project })[] = [
    ...projects,
  ]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.id - a.id; // Más nuevos primero
    })
    .map((p) => ({
      id: p.id,
      project: p,
      title: p.title,
      description: p.description,
      label: p.technologies[0] || "Development",
      color: "#000000",
      glowColor: getGlowColor(p.technologies[0] || ""),
      image: p.image,
      isFeatured: p.featured,
    }));

  const totalPages = Math.ceil(cardData.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const visibleCards = cardData.slice(start, start + PROJECTS_PER_PAGE);

  const goTo = (next: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)));
  };

  return (
    <div className="w-full">
      <motion.div
        key={page}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.05 },
          },
        }}
      >
        {visibleCards.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 220, damping: 24 },
              },
            }}
            className="h-full"
          >
            <MagicBento
              title={item.title}
              description={item.description}
              label={item.label}
              color={item.color}
              glowColor={item.glowColor}
              image={item.image}
              isFeatured={item.isFeatured}
              onClick={() => router.push(`/proyecto/${item.id}`)}
              colSpan="h-full"
              animateInView={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="mt-14 flex items-center justify-center gap-3">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Página anterior"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a la página ${i + 1}`}
                aria-current={i === page}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-emerald-500"
                    : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages - 1}
            aria-label="Página siguiente"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 disabled:opacity-30 disabled:pointer-events-none active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Contador */}
      {totalPages > 1 && (
        <p className="mt-5 text-center text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
          {start + 1}–{Math.min(start + PROJECTS_PER_PAGE, cardData.length)} de{" "}
          {cardData.length} proyectos
        </p>
      )}
    </div>
  );
}
