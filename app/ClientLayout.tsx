"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";
import ScrollToTop from "@/components/ui/ScrollToTop";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mensaje de bienvenida en consola para desarrolladores
  useEffect(() => {
    console.log(
      "%c🚀 ¡Hola Desarrollador! %c\n\n¿Buscando algo interesante? Mi nombre es Leonel González y este es mi rincón digital.\n\nSiéntete libre de explorar, inspeccionar o incluso romper un poco las cosas (en local 😉).\n\nSi te gusta lo que ves o quieres hablar de código, escríbeme: \n👉 leonel.gonzalez.dev@gmail.com\n\n%c¡Sigue creando cosas asombrosas! ✨",
      "color: #10b981; font-size: 24px; font-weight: bold; background: #000; padding: 10px; border-radius: 8px;",
      "color: #aaa; font-size: 14px; line-height: 1.5;",
      "color: #10b981; font-weight: bold; font-size: 14px;",
    );
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <main
        id="main-content"
        tabIndex={-1}
        className={`transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "blur-md brightness-[0.4] scale-[0.98] pointer-events-none"
            : "blur-0 brightness-100 scale-100"
        }`}
      >
        {children}
      </main>
      <ScrollToTop />
    </>
  );
}
