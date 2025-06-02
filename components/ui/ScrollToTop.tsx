"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Verificar al montar el componente
    checkIfMobile();

    // Verificar cuando cambia el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);

    const toggleVisibility = () => {
      // Umbral más pequeño para móviles
      const threshold = isMobile ? 150 : 300;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-4 sm:bottom-8 left-4 sm:left-8 p-2 sm:p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20 active:scale-95 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
    </button>
  );
} 