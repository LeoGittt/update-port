"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { BentoCardProps, MagicBento } from "../sections/magic-bento"
import { projects } from "@/data/projects"
import type { Project } from "@/types/project"
interface ProjectsListModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProject: (project: Project) => void
  getGlowColor: (tech: string) => string
}

export function ProjectsListModal({
  isOpen,
  onClose,
  onSelectProject,
  getGlowColor,
}: ProjectsListModalProps) {
  
  // Reutilizamos el mapeo de datos
  const cardData: (BentoCardProps & { id: number; project: Project })[] = projects.map((p) => ({
    id: p.id,
    project: p,
    title: p.title,
    description: p.description,
    label: p.technologies[0] || "Development",
    color: "#060010",
    glowColor: getGlowColor(p.technologies[0] || ""),
    image: p.image,
  }))

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-5xl h-[90vh] bg-zinc-950 border-zinc-800 p-0 overflow-hidden flex flex-col rounded-[2rem] md:rounded-[3rem] shadow-2xl z-[1001]">
        
        <DialogHeader className="px-8 py-6 border-b border-zinc-900 bg-zinc-950">
          <DialogTitle className="text-2xl font-black text-white uppercase tracking-tighter">
            Explorar Proyectos
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar bg-black/20">
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardData.map((item) => (
                <div key={item.id} className="h-full">
                   <MagicBento
                      {...item}
                      onClick={() => {
                          onSelectProject(item.project)
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
  )
}

