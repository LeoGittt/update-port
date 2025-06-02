"use client";

import Image from "next/image";
import { X, ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";
import { useState } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-1 sm:p-3">
      <div className="bg-black border border-black rounded-xl max-w-[85%] sm:max-w-sm w-full max-h-[60vh] sm:max-h-[80vh] overflow-y-auto relative shadow-2xl shadow-black/50">
        {/* Botón de cerrar */}
        <div className="sticky top-0 right-0 p-1.5 sm:p-2 z-10 flex justify-end bg-black/80 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="p-0.5 sm:p-1 rounded-full bg-emerald-400 hover:bg-zinc-800 transition-all duration-300 border border-zinc-900 hover:border-zinc-700 shadow-lg shadow-black/50 flex items-center justify-center"
          >
            <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-900 hover:text-white" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-1.5 sm:p-3">
          <div className="relative w-full h-28 sm:h-36 mb-2 sm:mb-3 rounded-xl overflow-hidden border border-black shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-3">
            <div>
              <h2 className="text-base sm:text-lg font-light text-white mb-0.5 tracking-tight">
                {project.title}
              </h2>
              <p className="text-emerald-400 text-xs sm:text-sm font-medium">
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 mb-0.5 sm:mb-1 font-medium">
                  Descripción
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed tracking-wide">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-1 font-medium">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-zinc-900 text-zinc-400 border border-zinc-800 text-xs px-2 py-0.5 rounded-full font-light hover:text-emerald-300 transition-colors duration-150"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {(project.challenges || project.solutions || project.features) && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full flex items-center justify-between gap-2 px-2.5 py-1 rounded-full bg-black hover:bg-zinc-800/50 transition-all duration-300 text-xs text-zinc-400 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700 mt-5 sm:mt-4"
                >
                  <span className="font-semibold ">Ver más detalles</span>
                  {isExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
                  )}
                </button>
              )}

              {isExpanded && (
                <div className="space-y-2 pt-2 border-t border-zinc-900">
                  {project.challenges && (
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-1 font-medium">
                        Desafíos
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed tracking-wide">
                        {project.challenges}
                      </p>
                    </div>
                  )}

                  {project.solutions && (
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-1 font-medium">
                        Soluciones
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed tracking-wide">
                        {project.solutions}
                      </p>
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-1 font-medium">
                        Características Principales
                      </h3>
                      <ul className="list-disc list-inside space-y-0.5">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-zinc-400 text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Ver demo en vivo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 