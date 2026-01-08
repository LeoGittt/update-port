"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TrueFocus from "@/components/ui/true-focus";

interface NavbarProps {
  activeSection: string;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollY, scrollToSection }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Verificar al montar el componente
    checkIfMobile();

    // Verificar cuando cambia el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const isProjectPage = pathname?.startsWith('/proyecto/');

  if (isProjectPage) return null;

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out w-full max-w-6xl px-4 sm:px-6 ${
        scrollY > 20
          ? "bg-black/85 backdrop-blur-xl border border-gray-700/40 rounded-none sm:rounded-2xl mt-0 sm:mt-2 shadow-2xl shadow-black/50"
          : "bg-black/40 backdrop-blur-md border border-gray-700/20 rounded-none sm:rounded-2xl mt-0 sm:mt-2 shadow-lg shadow-black/30"
      }`}
      style={scrollY > 20 ? { borderColor: "#23272f" } : { borderColor: "#23272f40" }}
    >
      <div className="px-4 sm:px-8 py-4 sm:py-4">
        {/* Mobile Navigation */}
        <div className="flex items-center justify-between sm:hidden">
          <div className="text-sm font-semibold text-white tracking-wide" role="banner">
             <div className="scale-75 origin-left">
                <TrueFocus 
                    sentence="Leonel González"
                    manualMode={false}
                    blurAmount={3}
                    borderColor="#b8b8b8"
                    glowColor="rgba(255,255,255,0.3)"
                    animationDuration={0.5}
                    pauseBetweenAnimations={2}
                />
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl  transition-all duration-300 hover:scale-105 active:scale-95"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4 text-white" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide" role="banner">
             <div className="scale-75 origin-left">
                <TrueFocus 
                    sentence="Leonel González"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="white"
                    glowColor="rgba(255,255,255,0.4)"
                    animationDuration={0.3}
                    pauseBetweenAnimations={1.5}
                />
            </div>
          </div>
          <div className="flex items-center space-x-8" role="menubar">
            {["inicio", "proyectos", "experiencia", "contacto"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  role="menuitem"
                  aria-current={activeSection === section ? "page" : undefined}
                  className={`text-xs font-medium transition-all duration-300 relative capitalize hover:scale-105 ${
                    activeSection === section
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" aria-hidden="true"></div>
                  )}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="sm:hidden mt-4 pb-4 border-t border-gray-800/40 pt-4 animate-fadeIn bg-black/30 backdrop-blur-sm rounded-xl"
            role="menu"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col space-y-3">
              {["inicio", "proyectos", "experiencia", "contacto"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setIsMobileMenuOpen(false);
                    }}
                    role="menuitem"
                    aria-current={activeSection === section ? "page" : undefined}
                    className={`text-left text-sm font-medium transition-all duration-300 capitalize py-2.5 px-4 rounded-lg hover:scale-[1.02] active:scale-[0.98] ${
                      activeSection === section
                        ? "text-white bg-gradient-to-r from-gray-900/60 to-gray-800/60 shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-900/40"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 