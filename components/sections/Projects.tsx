import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import ZoomBlurCard from "@/components/ZoomBlurCard";
import { Project } from "@/types/project";

interface ProjectsProps {
  isVisible: boolean;
  projects: Project[];
  setSelectedProject: (project: Project | null) => void;
}

export default function Projects({ isVisible, projects, setSelectedProject }: ProjectsProps) {
  return (
    <section
      id="proyectos"
      aria-label="Sección de proyectos"
      className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
        <div className="p-2 rounded-lg" aria-hidden="true">
          <Code className="w-5 h-5 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold">Proyectos</h2>
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        role="list"
        aria-label="Lista de proyectos"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-2xl"
            role="listitem"
          >
            <ZoomBlurCard
              title={project.title}
              description={project.subtitle}
              imageUrl={project.image}
            />
            {/* Overlay con botones */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 p-4"
              role="group"
              aria-label={`Acciones para el proyecto ${project.title}`}
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex flex-col gap-2 w-full">
                <Button
                  size="sm"
                  className="w-full px-3 py-1.5 text-xs rounded-xl font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.demoUrl, "_blank");
                  }}
                  aria-label={`Ver demo del proyecto ${project.title}`}
                >
                  Ver Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full px-3 py-1.5 text-xs rounded-xl font-medium border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  aria-label={`Ver detalles del proyecto ${project.title}`}
                >
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 