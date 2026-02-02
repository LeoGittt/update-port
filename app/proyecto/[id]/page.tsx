"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  Target,
  Zap,
  Layout,
  Globe,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const projectIndex = projects.findIndex((p) => p.id.toString() === id);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  if (!isMounted) return <div className="min-h-screen bg-black" />;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-emerald-500 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Botón Volver Simple */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push("/#proyectos")}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900/90 border border-white/10 rounded-full text-xs font-medium hover:bg-emerald-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>REGRESAR</span>
        </button>
      </div>

      {/* Hero Section Estático - Eliminado framer-motion */}
      <section className="relative h-[60vh] flex items-end pb-12 px-6">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <Badge className="bg-emerald-500 text-black border-none mb-4 uppercase tracking-widest text-[10px] font-bold">
            {project.year || "2025"}
          </Badge>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-2">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Concepto & Demo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Layout className="w-5 h-5" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                Concepto
              </h2>
            </div>
            <p className="text-lg text-zinc-300 leading-relaxed">
              {project.description}
            </p>

            <div className="pt-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-emerald-500 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">VISITAR SITIO WEB</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8 bg-zinc-900/30 p-8 rounded-3xl border border-white/5 h-fit">
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-zinc-800 border border-white/5 rounded-md text-[10px] font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase tracking-widest font-bold">
                  Rol
                </span>
                <span className="text-white">Fullstack Dev</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase tracking-widest font-bold">
                  Status
                </span>
                <Badge
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-2 text-[9px]"
                >
                  Production
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Desafío & Solución */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.challenges && (
            <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest">
                El Desafío
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}
          {project.solutions && (
            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                La Solución
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {project.solutions}
              </p>
            </div>
          )}
        </div>

        {/* Features Minimal List */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
              Características
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, i) => (
                <div
                  key={feature}
                  className="p-5 rounded-2xl bg-zinc-900/30 border border-white/5 flex items-start gap-4"
                >
                  <span className="text-emerald-500 font-mono text-xs pt-1">
                    {i + 1}
                  </span>
                  <p className="text-zinc-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Próximo Proyecto Estático */}
      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">
            SIGUIENTE PROYECTO
          </span>
          <button
            onClick={() => router.push(`/proyecto/${nextProject.id}`)}
            className="block w-full hover:text-emerald-500 transition-colors"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              {nextProject.title}
            </h2>
          </button>
          <div className="pt-4">
            <button
              onClick={() => router.push("/#proyectos")}
              className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest font-bold"
            >
              Volver a Proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 px-6 text-center border-t border-white/5 opacity-50">
        <p className="text-[10px] uppercase tracking-[0.5em]">
          © 2025 Leonel González — San Juan, Argentina
        </p>
      </footer>
    </div>
  );
}
