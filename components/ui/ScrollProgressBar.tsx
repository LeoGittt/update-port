"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    // Actualizar inmediatamente
    updateScrollProgress();

    // Escuchar el evento de scroll
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  // Calcular la intensidad del verde basada en el progreso del scroll
  const getGreenIntensity = (progress: number) => {
    // Verde más brillante al inicio y final, más suave en el medio
    const intensity = Math.sin((progress / 100) * Math.PI);
    return Math.max(0.3, intensity); // Mínimo 30% de intensidad
  };

  const greenIntensity = getGreenIntensity(scrollProgress);
  
  // Crear diferentes tonos de verde basados en el progreso
  const getGreenColor = (progress: number, intensity: number) => {
    if (progress < 25) {
      // Verde claro al inicio
      return `rgba(34, 197, 94, ${intensity})`;
    } else if (progress < 50) {
      // Verde medio
      return `rgba(22, 163, 74, ${intensity})`;
    } else if (progress < 75) {
      // Verde más oscuro
      return `rgba(21, 128, 61, ${intensity})`;
    } else {
      // Verde esmeralda al final
      return `rgba(16, 185, 129, ${intensity})`;
    }
  };

  const currentGreenColor = getGreenColor(scrollProgress, greenIntensity);

  return (
    <>
      {/* Barra de progreso de scroll */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 z-50 transition-all duration-150 ease-out shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: currentGreenColor,
          boxShadow: `0 0 10px ${currentGreenColor}, 0 0 20px ${currentGreenColor}30`,
        }}
      />
      
      {/* Efecto de resplandor adicional */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent z-49 transition-all duration-300 ease-out opacity-50"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, transparent, ${currentGreenColor}, transparent)`,
        }}
      />
    </>
  );
}
