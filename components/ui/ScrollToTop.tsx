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
      className={`fixed bottom-4 sm:bottom-8 left-4 sm:left-8 p-2 sm:p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-green-500/20 hover:border-green-400/40 hover:text-green-300 hover:shadow-lg hover:shadow-green-500/25 active:scale-95 z-50 flex items-center justify-center group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
    </button>
  );
} 