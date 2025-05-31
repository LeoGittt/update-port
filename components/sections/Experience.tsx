import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/types/experience";

interface ExperienceProps {
  isVisible: boolean;
  experiences: Experience[];
}

export default function Experience({ isVisible, experiences }: ExperienceProps) {
  return (
    <section
      id="experiencia"
      className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
        <div className="p-2 rounded-lg ">
          <Briefcase className="w-5 h-5 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold">Experiencia</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            <div
              className={`absolute left-0 top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 transition-all duration-300 ${
                exp.current
                  ? "bg-green-500 border-green-500 shadow-lg shadow-green-500/30"
                  : "bg-gray-600 border-gray-600"
              }`}
            ></div>
            {index < experiences.length - 1 && (
              <div className="absolute left-1.5 sm:left-2 top-6 bottom-0 w-px bg-gradient-to-b from-gray-700 to-transparent"></div>
            )}

            <div className="pb-6 hover:bg-gray-900/20 rounded-xl p-3 sm:p-4 -ml-3 sm:-ml-4 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-sm sm:text-base font-bold">
                  {exp.title}
                </h3>
                {exp.current && (
                  <Badge className="bg-green-500/20 text-green-300 text-xs px-3 py-1 border border-green-500/30 self-start sm:self-center">
                    Actual
                  </Badge>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                <span className="text-sm text-gray-300 font-semibold">
                  {exp.company}
                </span>
                <span className="text-sm text-gray-500 hidden sm:block">
                  •
                </span>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 