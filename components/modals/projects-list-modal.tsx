"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BentoCardProps, MagicBento } from "../sections/magic-bento";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { Code } from "lucide-react";

interface ProjectsListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  getGlowColor: (tech: string) => string;
}

export function ProjectsListModal({
  isOpen,
  onClose,
  onSelectProject,
  getGlowColor,
}: ProjectsListModalProps) {
  // Mapeo y ordenamiento de datos para Bento
  const cardData: (BentoCardProps & { id: number; project: Project })[] = [
    ...projects,
  ]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.id - a.id;
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-7xl h-[92vh] bg-black p-0 overflow-hidden flex flex-col rounded-[2.5rem] md:rounded-[4rem] shadow-none border-none z-[1001] outline-none">
        {/* Modal Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />

        <DialogHeader className="px-8 md:px-12 py-8 md:py-10 bg-black/50 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50">
              <Code className="w-4 h-4 text-emerald-500/80" />
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.1em]">
              Todos los Proyectos<span className="text-emerald-500">.</span>
            </DialogTitle>
          </div>
          <p className="text-zinc-500 text-sm mt-2 ml-14 font-medium uppercase tracking-[0.1em]">
            Explora mi trayectoria completa ({projects.length} proyectos)
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto w-full custom-scrollbar relative z-10">
          <div className="p-6 md:p-12 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {cardData.map((item) => (
                <div key={item.id} className="h-full">
                  <MagicBento
                    {...item}
                    onClick={() => {
                      onSelectProject(item.project);
                    }}
                    colSpan="h-full"
                    animateInView={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
