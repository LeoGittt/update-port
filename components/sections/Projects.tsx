import { Code } from "lucide-react";
import { ProjectsGrid } from "./projects-grid";

interface ProjectsProps {
  isVisible: boolean;
}

export default function Projects({ isVisible }: ProjectsProps) {
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

      <ProjectsGrid />
    </section>
  );
} 