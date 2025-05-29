import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollY, scrollToSection }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out w-full max-w-6xl px-4 sm:px-6 ${
        scrollY > 20
          ? "bg-black/85 backdrop-blur-xl border border-gray-700/40 rounded-none sm:rounded-2xl mt-0 sm:mt-4 shadow-2xl shadow-black/50"
          : "bg-black/0 border-0 shadow-none mt-0 sm:mt-6"
      }`}
      style={scrollY > 20 ? { borderColor: "#23272f" } : {}}
    >
      <div className="px-4 sm:px-8 py-4 sm:py-4">
        {/* Mobile Navigation */}
        <div className="flex items-center justify-between sm:hidden">
          <div className="text-sm font-semibold text-white tracking-wide">
            Leonel González
          </div>
          {typeof window !== "undefined" && window.innerWidth >= 640 && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="text-sm font-semibold text-white tracking-wide">
            Leonel González
          </div>
          <div className="flex items-center space-x-6">
            {["inicio", "proyectos", "experiencia", "contacto"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-xs font-medium transition-all duration-300 relative capitalize ${
                    activeSection === section
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  )}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
          typeof window !== "undefined" &&
          window.innerWidth >= 640 && (
            <div className="sm:hidden mt-4 pb-4 border-t border-gray-800/40 pt-4">
              <div className="flex flex-col space-y-3">
                {["inicio", "proyectos", "experiencia", "contacto"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`text-left text-sm font-medium transition-all duration-300 capitalize py-2 px-3 rounded-lg ${
                        activeSection === section
                          ? "text-white bg-gray-900/40"
                          : "text-gray-400 hover:text-white hover:bg-gray-900/20"
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