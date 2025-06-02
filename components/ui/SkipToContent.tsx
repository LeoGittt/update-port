"use client";

import { useEffect, useState } from 'react';

export default function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <a
      href="#main-content"
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-lg transition-all duration-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      } focus:opacity-100 focus:translate-y-0`}
      onClick={() => setIsVisible(false)}
    >
      Saltar al contenido principal
    </a>
  );
} 