"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useDynamicScrollbar } from "@/hooks/useDynamicScrollbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);

  // Aplicar el hook para la barra de scroll dinámica
  useDynamicScrollbar();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <SkipToContent />
      <Navbar 
        activeSection={activeSection} 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
      />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <ScrollToTop />
    </>
  );
} 