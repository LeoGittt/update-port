"use client";

import { Code } from "lucide-react";
import { ProjectsGrid } from "./projects-grid";
import { useState, useEffect, useRef } from "react";

interface ProjectsProps {
  isVisible: boolean;
}

export default function Projects({ isVisible: initialVisible }: ProjectsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      aria-label="Sección de proyectos"
      className={`px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-black transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50">
            <Code className="w-4 h-4 text-emerald-500/80" />
          </div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-[0.2em] uppercase">
            Proyectos<span className="text-emerald-500">.</span>
          </h2>
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}
