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
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface ProjectsListModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProject: (project: Project) => void
  getGlowColor: (tech: string) => string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
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
      <DialogContent className="max-w-[90vw] w-full h-[85vh] md:h-[90vh] bg-black/95 backdrop-blur-xl border-none p-0 overflow-hidden flex flex-col rounded-[2rem] shadow-2xl shadow-black">
        
        {/* Header Glassmorphic */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md">
          <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            Explorar Proyectos
          </DialogTitle>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all duration-300 transform hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <ScrollArea className="flex-1 w-full pt-24 pb-0">
          <div className="px-8 pb-12">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cardData.map((item) => (
                <motion.div key={item.id} variants={itemVariants} className="h-full min-h-[300px]">
                   <MagicBento
                      {...item}
                      onClick={() => {
                          onSelectProject(item.project)
                      }}
                      colSpan="h-full"
                   />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

