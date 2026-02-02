"use client";

import { InfiniteSlider } from "@/components/core/infinite-slider";
import { ProgressiveBlur } from "@/components/core/progressive-blur";
import { useState, useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export function TechnologiesSlider() {
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

  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#e9d629ff" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
  ];

  return (
    <div
      ref={sectionRef}
      className={`w-full py-24 bg-black transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="text-center mb-16 px-6">
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-[0.2em]">
          Stack Tecnológico<span className="text-emerald-500">.</span>
        </h3>
        <p className="text-zinc-500 text-sm max-w-md mx-auto">
          Tecnologías que domino
        </p>
      </div>

      <div className="relative">
        <InfiniteSlider gap={40} reverse duration={25}>
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            if (!IconComponent) return null;

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <IconComponent size={48} style={{ color: tech.color }} />
                <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[100px] sm:w-[200px] z-10"
          direction="left"
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[100px] sm:w-[200px] z-10"
          direction="right"
        />
      </div>
    </div>
  );
}
