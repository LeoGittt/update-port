"use client";

import { useState, useEffect } from "react";
import { Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ProjectModal from "@/components/modals/ProjectModal";
import { projects, experiences, contactInfo } from "@/data/portfolio";
import { Project } from "@/types/project";
import Navbar from "@/components/layout/Navbar";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dark Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/95"></div>
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "60px 60px",
            filter: "blur(0.2px)",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-1"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0.3px, transparent 0.3px)
            `,
            backgroundSize: "15px 15px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Navbar
          activeSection={activeSection}
          scrollY={scrollY}
          scrollToSection={scrollToSection}
        />

        <Hero isVisible={true} />

        <Projects
          isVisible={true}
          projects={projects}
          setSelectedProject={setSelectedProject}
        />

        <Experience isVisible={true} experiences={experiences} />
       
        {/* Education Section */}
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
                  Universidad Tecnológica Nacional
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>2025 – Actualidad</span>
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
                  <span>2024 • 800 horas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Contact isVisible={true} contactInfo={contactInfo} />

        {/* Footer */}
        <footer className="px-4 sm:px-8 py-6 sm:py-8 border-t border-gray-800/40 text-center">
          
        </footer>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}
    </div>
  );
}
