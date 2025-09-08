"use client";

import { useEffect } from "react";

export const useDynamicScrollbar = () => {
  useEffect(() => {
    const updateScrollbarColor = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Remover clases anteriores
      document.body.classList.remove('scrollbar-light', 'scrollbar-medium', 'scrollbar-dark', 'scrollbar-emerald');

      // Aplicar clase basada en el progreso del scroll
      if (scrollPercent < 25) {
        document.body.classList.add('scrollbar-light');
        updateScrollbarThumb('#22c55e', '#16a34a');
      } else if (scrollPercent < 50) {
        document.body.classList.add('scrollbar-medium');
        updateScrollbarThumb('#16a34a', '#15803d');
      } else if (scrollPercent < 75) {
        document.body.classList.add('scrollbar-dark');
        updateScrollbarThumb('#15803d', '#166534');
      } else {
        document.body.classList.add('scrollbar-emerald');
        updateScrollbarThumb('#10b981', '#059669');
      }
    };

    const updateScrollbarThumb = (startColor: string, endColor: string) => {
      // Crear o actualizar el estilo dinámico
      let dynamicStyle = document.getElementById('dynamic-scrollbar-style');
      if (!dynamicStyle) {
        dynamicStyle = document.createElement('style');
        dynamicStyle.id = 'dynamic-scrollbar-style';
        document.head.appendChild(dynamicStyle);
      }

      const intensity = Math.sin((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * Math.PI);
      const alpha = Math.max(0.5, intensity);

      dynamicStyle.textContent = `
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, ${startColor}, ${endColor}) !important;
          box-shadow: 0 0 ${10 + intensity * 10}px ${startColor}${Math.floor(alpha * 100).toString(16)} !important;
        }
      `;
    };

    // Actualizar inmediatamente
    updateScrollbarColor();

    // Escuchar eventos de scroll
    window.addEventListener('scroll', updateScrollbarColor, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollbarColor);
      // Limpiar el estilo dinámico
      const dynamicStyle = document.getElementById('dynamic-scrollbar-style');
      if (dynamicStyle) {
        dynamicStyle.remove();
      }
    };
  }, []);
};
