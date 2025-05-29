"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Calendar,
  Award,
  Menu,
  X,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ZoomBlurCard from "@/components/ZoomBlurCard";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ProjectModal from "@/components/modals/ProjectModal";
import { projects, experiences, skills, contactInfo } from "@/data/portfolio";
import { Project } from "@/types/project";
import Navbar from "@/components/layout/Navbar";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
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

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
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

        <Hero isVisible={isVisible.inicio} />

        <Projects
          isVisible={isVisible.proyectos}
          projects={projects}
          setSelectedProject={setSelectedProject}
        />

        <Experience
          isVisible={isVisible.experiencia}
          experiences={experiences}
        />

        <Contact
          isVisible={isVisible.contacto}
          contactInfo={contactInfo}
        />

        {/* Education Section */}
        <section
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-300 ${
            isVisible.experiencia
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gray-900/40">
              <Award className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold">Educación</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-gray-900/20 border border-gray-800/30 hover:border-gray-700/40 hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-black/30 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 border border-blue-500/30">
                    En curso
                  </Badge>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Programación
                </h3>
                <p className="text-sm text-gray-300 mb-2 font-medium">
                  Universidad Tecnológica Nacional
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>2025 – Actualidad</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/20 border border-gray-800/30 hover:border-gray-700/40 hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-black/30 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 text-xs px-3 py-1 border border-green-500/30">
                    Completado
                  </Badge>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-300 mb-2 font-medium">
                  Henry Bootcamp
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>2024 • 800 horas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-8 py-6 sm:py-8 border-t border-gray-800/40 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Leonel González • Hecho con{" "}
            <span className="text-red-500 animate-pulse">🖤</span> en Argentina
          </p>
        </footer>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}
