"use client";

import { Briefcase } from "lucide-react";
import type { Experience } from "@/types/experience";
import { useState, useEffect, useRef } from "react";

interface ExperienceProps {
  isVisible: boolean;
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const [isVisibleState, setIsVisibleState] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleState(true);
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
      id="experiencia"
      ref={sectionRef}
      className={`px-6 sm:px-12 lg:px-24 py-24 sm:py-32 bg-black transition-all duration-1000 ease-out ${
        isVisibleState
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Minimal Header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50">
            <Briefcase className="w-4 h-4 text-emerald-500/80" />
          </div>
          <h2 className="text-2xl font-black text-zinc-100 tracking-[0.2em] uppercase">
            Experiencia<span className="text-emerald-500">.</span>
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="relative space-y-16">
          {/* Ultra thin line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800/50" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 group">
              {/* Minimal Node */}
              <div
                className={`absolute left-[15px] top-2 w-[9px] h-[9px] rounded-full border-2 z-10 transition-all duration-500 ${
                  exp.current
                    ? "bg-emerald-500 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    : "bg-zinc-950 border-zinc-700 group-hover:border-zinc-500"
                }`}
              />

              {/* Clean Content */}
              <div className="flex flex-col gap-3 transition-all duration-500">
                {/* Header: Title & Company */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-zinc-100 group-hover:text-emerald-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-light">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {exp.current && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 tracking-wide">
                        ACTUAL
                      </span>
                    )}
                    <span className="text-xs text-zinc-600 font-mono tracking-tight">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Clean Description */}
                <p className="text-sm text-zinc-500 leading-7 font-light max-w-2xl group-hover:text-zinc-400 transition-colors duration-500">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
