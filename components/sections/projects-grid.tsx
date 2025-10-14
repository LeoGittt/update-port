"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { ProjectCard } from "./project-card"
import { ProjectModal } from "./project-modal"
import type { Project } from "@/types/project"

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 auto-rows-fr">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}