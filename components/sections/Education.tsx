import { Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section
      id="educacion"
      className="px-4 sm:px-8 py-8 sm:py-12 border-t rounded-md border-gray-800/40"
    >
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
        <div className="p-2 rounded-lg ">
          <Award className="w-5 h-5 text-emerald-600" />
        </div>
        <h2 className="text-xl font-bold">Educación</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {/* Card 1 - En curso */}
        <Card className="bg-gradient-to-br from-gray-900/30 to-gray-900/10 border border-gray-800/40 rounded-xl backdrop-blur-sm hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/20 group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="relative p-5 sm:p-7">
            <div className="flex items-start justify-between mb-5">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 shadow-sm shadow-blue-500/10">
                <Award className="w-6 h-6 text-blue-400/90" />
              </div>
              <Badge className="bg-blue-500/20 text-blue-300/90 text-xs px-3 py-1 border border-blue-500/40 shadow-inner shadow-blue-500/10">
                En curso
              </Badge>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors">
              Programación
            </h3>
            <p className="text-sm text-gray-300/90 mb-3 font-medium">
              Universidad Tecnológica Nacional - UTN
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>2025 – En curso</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 - Completado */}
        <Card className="bg-gradient-to-br from-gray-900/30 to-gray-900/10 border border-gray-800/40 rounded-xl backdrop-blur-sm hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-900/20 group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardContent className="relative p-5 sm:p-7">
            <div className="flex items-start justify-between mb-5">
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30 shadow-sm shadow-green-500/10">
                <Award className="w-6 h-6 text-green-400/90" />
              </div>
              <Badge className="bg-green-500/20 text-green-300/90 text-xs px-3 py-1 border border-green-500/40 shadow-inner shadow-green-500/10">
                Completado
              </Badge>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors">
              Full Stack Developer
            </h3>
            <p className="text-sm text-gray-300/90 mb-3 font-medium">
              Henry Bootcamp
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>2024</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
