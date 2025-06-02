"use client";

import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900/95 border border-black/40 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto relative shadow-2xl shadow-black/50">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full bg-emerald-400 hover:bg-zinc-700 transition-all duration-300 border border-gray-900 hover:border-zinc-600 shadow-lg shadow-black/50 z-10 flex items-center justify-center"
        >
          <X className="w-3 h-3 text-gray-900 hover:text-white" />
        </button>

        {/* Contenido del modal */}
        <div className="p-4 bg-black rounded-xl">
          <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden border border-black/30 shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div>
            <h2 className="text-xl font-light text-white mb-1 tracking-tight">
              {project.title}
            </h2>
            <p className="text-emerald-400 text-sm font-medium">
              {project.subtitle}
            </p>
          </div>

          <div className="space-y-3 mt-3">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">
                Descripción
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed tracking-wide">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-black text-zinc-400 border border-zinc-800 text-xs px-2 py-0.5 rounded-full font-light hover:text-emerald-300 transition-colors duration-150"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800">
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
  );
} 