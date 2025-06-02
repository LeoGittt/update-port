"use client";

import { useState, useEffect } from 'react';
import { Contrast } from 'lucide-react';
import { Button } from './button';

export default function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    // Verificar si el usuario tiene preferencias de alto contraste en el sistema
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)').matches;
    setIsHighContrast(prefersHighContrast);

    // Aplicar clase inicial si es necesario
    if (prefersHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Verificar si hay una preferencia guardada en localStorage
    const savedPreference = localStorage.getItem('highContrast');
    if (savedPreference === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    } else if (savedPreference === 'false') {
      setIsHighContrast(false);
      document.documentElement.classList.remove('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newState = !isHighContrast;
    setIsHighContrast(newState);
    
    if (newState) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('highContrast', newState.toString());
  };

  return (
    <Button
      onClick={toggleHighContrast}
      variant="ghost"
      size="sm"
      className={`fixed bottom-4 right-4 z-50 p-2 rounded-full transition-colors duration-200 ${
        isHighContrast 
          ? 'bg-yellow-500 hover:bg-yellow-600' 
          : 'bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm'
      }`}
      aria-pressed={isHighContrast}
      aria-label={isHighContrast ? 'Desactivar alto contraste' : 'Activar alto contraste'}
    >
      <Contrast className={`w-4 h-4 ${isHighContrast ? 'text-black' : 'text-gray-300'}`} />
    </Button>
  );
} 