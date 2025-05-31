import { useState, useEffect } from "react";
import { Project } from "@/types/project";

export function usePortfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const closeProjectModal = () => setSelectedProject(null);

  return {
    activeSection,
    scrollY,
    isMobileMenuOpen,
    selectedProject,
    setActiveSection,
    setIsMobileMenuOpen,
    setSelectedProject,
    scrollToSection,
    closeProjectModal,
  };
}
