"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { projects } from "@/data/projects"
import { MagicBento, BentoCardProps } from "./magic-bento"
// import { ProjectModal } from "./project-modal" // NO MORE MODAL
import { ProjectsListModal } from "../modals/projects-list-modal"
import type { Project } from "@/types/project"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsGrid() {
  const router = useRouter()
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Función para determinar el color del glow basado en la tecnología principal
  const getGlowColor = (tech: string) => {
    const techLower = tech.toLowerCase()
    if (techLower.includes("react") || techLower.includes("next")) return "#61DAFB" // Cian React
    if (techLower.includes("angular")) return "#DD0031" // Rojo Angular
    if (techLower.includes("vue")) return "#4FC08D" // Verde Vue
    if (techLower.includes("python") || techLower.includes("django")) return "#3776AB" // Azul Python
    if (techLower.includes("node")) return "#339933" // Verde Node
    if (techLower.includes("typescript")) return "#3178C6" // Azul TS
    if (techLower.includes("javascript")) return "#F7DF1E" // Amarillo JS
    if (techLower.includes("wordpress")) return "#21759B" // Azul WP
    return "#a1a1aa" // Gris default
  }

  // Mapeo de datos para Bento
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
    <>
      <div className="w-full px-4 sm:px-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cardData.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <MagicBento
                    title={item.title}
                    description={item.description}
                    label={item.label}
                    color={item.color}
                    glowColor={item.glowColor}
                    image={item.image}
                    onClick={() => router.push(`/proyecto/${item.id}`)}
                    // Forzamos altura completa para que todas las cards se vean uniformes
                    colSpan="h-full" 
                    animateInView={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 lg:-left-12 border-white/10 hover:bg-white/10 hover:text-white bg-black/50 backdrop-blur-sm" />
            <CarouselNext className="-right-4 lg:-right-12 border-white/10 hover:bg-white/10 hover:text-white bg-black/50 backdrop-blur-sm" />
          </div>
        </Carousel>

        {/* Mobile Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              aria-label="Previous slide"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
        </div>

        <div className="mt-10 flex justify-center">
          <Button 
            onClick={() => setShowAllProjects(true)}
            variant="outline" 
            className="group border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 px-8 py-6 rounded-full text-base"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> */}
      
      <ProjectsListModal 
        isOpen={showAllProjects} 
        onClose={() => setShowAllProjects(false)} 
        onSelectProject={(p) => {
          router.push(`/proyecto/${p.id}`)
          setShowAllProjects(false)
        }}
        getGlowColor={getGlowColor}
      />
    </>
  )
}