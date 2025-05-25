"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Calendar,
  Award,
  Menu,
  X,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ZoomBlurCard from "@/components/ZoomBlurCard";

const projects = [
  {
    id: 1,
    year: "2025",
    title: "S I M U",
    subtitle: "Sistema Municipal",
    image: "/fotos-proyectos/10.PNG?height=120&width=200",
    demoUrl: "https://reclamos-frontend.vercel.app/",
  },
  {
    id: 2,
    year: "2025",
    title: "AutoWeb",
    subtitle: "Concesionarias",
    image: "/fotos-proyectos/12.PNG?height=120&width=200",
    demoUrl: "https://auto-web-sanjuan-sypk.vercel.app/",
  },
  {
    id: 3,
    year: "2024",
    title: "EvenTop",
    subtitle: "Tickets",
    image: "/fotos-proyectos/1.PNG?height=120&width=200",
    demoUrl: "https://eventop-frontend.vercel.app/",
  },
  {
    id: 4,
    year: "2024",
    title: "La Marina",
    subtitle: "Ecommerce",
    image: "/fotos-proyectos/3.PNG?height=120&width=200",
    demoUrl: "https://frontend-la-marina.vercel.app/",
  },
  {
    id: 5,
    year: "2024",
    title: "Boostly",
    subtitle: "Marketing",
    image: "/fotos-proyectos/7.PNG?height=120&width=200",
    demoUrl: "https://www.boostlyagency.online/",
  },
  {
    id: 6,
    year: "2024",
    title: "Aura",
    subtitle: "Contable",
    image: "/fotos-proyectos/6.PNG?height=120&width=200",
    demoUrl: "https://contables.vercel.app/",
  },
  {
    id: 7,
    year: "2024",
    title: "BYAS",
    subtitle: "Ingeniería",
    image: "/fotos-proyectos/8.PNG?height=120&width=200",
    demoUrl: "https://byas.vercel.app/",
  },
  {
    id: 8,
    year: "2024",
    title: "Mueblito",
    subtitle: "Muebles",
    image: "/fotos-proyectos/9.PNG?height=120&width=200",
    demoUrl: "https://art-ydeisgn.vercel.app/",
  },
  // {
  //   id: 9,
  //   year: "2024",
  //   title: "Colorshop",
  //   subtitle: "Gestion de Remitos",
  //   image: "/fotos-proyectos/8.PNG?height=120&width=200",
  //   demoUrl: "https://byas.vercel.app/",
  // },
  {
    id: 10,
    year: "2024",
    title: "Colorshop",
    subtitle: "Gestion de Remitos",
    image: "/fotos-proyectos/4.PNG?height=120&width=200",
    demoUrl: "https://v0-colorshop-remitos-jdu4ku.vercel.app/",
  },
  {
    id: 11,
    year: "2024",
    title: "Souls Digitals",
    subtitle: "Agencia de Marketing",
    image: "/fotos-proyectos/5.PNG?height=120&width=200",
    demoUrl: "https://www.soulsdigitals.blog/",
  },
  {
    id: 12,
    year: "2024",
    title: "ServiSplit",
    subtitle: "Servicio Tecnico",
    image: "/fotos-proyectos/15.PNG?height=120&width=200",
    demoUrl: "https://servisplit.vercel.app/",
  },
  {
    id: 13,
    year: "2025",
    title: "ISR ",
    subtitle: "Servicios Automotriz",
    image: "/fotos-proyectos/14.PNG?height=120&width=200",
    demoUrl: "https://isr-ebon.vercel.app/",
  },
  {
    id: 14,
    year: "2025",
    title: "Cuatro A",
    subtitle: "Estudio Contable",
    image: "/fotos-proyectos/11.PNG?height=120&width=200",
    demoUrl: "https://cuatro-aestudio.vercel.app/",
  },
  {
    id: 15,
    year: "2025",
    title: "Clinica",
    subtitle: "Clinica de Masajes",
    image: "/fotos-proyectos/2.PNG?height=120&width=200",
    demoUrl: "https://kzmgzmwe3mc3vfn7llk6.lite.vusercontent.net/",
  },
  {
    id: 16,
    year: "2025",
    title: "Mar de Azúcar",
    subtitle: "Cafeteria",
    image: "/fotos-proyectos/16.PNG?height=120&width=200",
    demoUrl: "https://mardeazucar.mitiendanube.com/",
  },
  {
    id: 17,
    year: "2025",
    title: "Space Burguer",
    subtitle: "Menu Hamburgueseria",
    image: "/fotos-proyectos/17.PNG?height=120&width=200",
    demoUrl: "https://menu-hamurguesa.vercel.app/",
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "EmpreId",
    period: "Mar 2025 - Actual",
    description: "Desarrollo del sistema municipal con Next.js y TypeScript.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Nexium Solutions",
    period: "May 2025 - Actual",
    description: "Sitios web estáticos para clientes empresariales.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Boostly",
    // period: "Dic 2024",
    description: "Sistema integral para concesionarias de autos.",
    current: false,
  },
  {
    title: "SEO Developer",
    company: "Easy Life (España)",
    // period: "Dic 2024 - Mar 2025",
    description: "Optimización técnica de sitios web empresariales.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "Soy Henry",
    // period: "Dic 2024 - Mar 2025",
    description: "Experiencia Academica",
    current: false,
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Git",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+54 264 584 1194",
    href: "tel:2645841194",
    // description: "Disponible 9:00 - 18:00",
  },
  {
    icon: Mail,
    title: "Email",
    value: "leonel.gonzalez.dev@gmail.com",
    href: "mailto:leonel.gonzalez.dev@gmail.com",
    description: "Respuesta en 24h",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "San Juan, Argentina",
    href: "#",
    description: "GMT-3 (ART)",
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Simplified Dark Background */}
      <div className="fixed inset-0 z-0">
        {/* Fondo negro intenso con refuerzo */}
        <div className="absolute inset-0 bg-black/95"></div>{" "}
        {/* 95% de opacidad */}
        {/* Rejilla extremadamente tenue (reducida a 3% de opacidad) */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,0.04) 0.5px, transparent 0.5px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 0.5px, transparent 0.5px)
      `, // Líneas más finas (0.5px)
            backgroundSize: "60px 60px", // Mayor espaciado
            filter: "blur(0.2px)", // Menos desenfoque
          }}
        ></div>
        {/* Textura casi imperceptible */}
        <div
          className="absolute inset-0 opacity-1" // Reducido a 1%
          style={{
            backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0.3px, transparent 0.3px)
      `, // Patrón de puntos en lugar de líneas
            backgroundSize: "15px 15px",
          }}
        ></div>
        {/* Gradiente de profundidad reforzado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        {/* Capa adicional de oscuridad */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced Mobile-First Navigation */}
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out w-full max-w-6xl px-4 sm:px-6 ${
            scrollY > 20
              ? "bg-black/85 backdrop-blur-xl border border-gray-700/40 rounded-none sm:rounded-2xl mt-0 sm:mt-4 shadow-2xl shadow-black/50"
              : "bg-black/0 border-0 shadow-none mt-0 sm:mt-6"
          }`}
          style={scrollY > 20 ? { borderColor: "#23272f" } : {}}
        >
          <div className="px-4 sm:px-8 py-4 sm:py-4">
            {/* Mobile Navigation */}
            <div className="flex items-center justify-between sm:hidden">
              <div className="text-sm font-semibold text-white tracking-wide">
                Leonel González
              </div>
              {typeof window !== "undefined" && window.innerWidth >= 640 && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl bg-gray-900/40 hover:bg-gray-800/60 transition-all duration-300"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center justify-between">
              <div className="text-sm font-semibold text-white tracking-wide">
                Leonel González
              </div>
              <div className="flex items-center space-x-6">
                {["inicio", "proyectos", "experiencia", "contacto"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`text-xs font-medium transition-all duration-300 relative capitalize ${
                        activeSection === section
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {section}
                      {activeSection === section && (
                        <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      )}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen &&
              typeof window !== "undefined" &&
              window.innerWidth >= 640 && (
                <div className="sm:hidden mt-4 pb-4 border-t border-gray-800/40 pt-4">
                  <div className="flex flex-col space-y-3">
                    {["inicio", "proyectos", "experiencia", "contacto"].map(
                      (section) => (
                        <button
                          key={section}
                          onClick={() => scrollToSection(section)}
                          className={`text-left text-sm font-medium transition-all duration-300 capitalize py-2 px-3 rounded-lg ${
                            activeSection === section
                              ? "text-white bg-gray-900/40"
                              : "text-gray-400 hover:text-white hover:bg-gray-900/20"
                          }`}
                        >
                          {section}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
          </div>
        </nav>

        {/* Enhanced Mobile-Optimized Hero Section */}
        <section
          id="inicio"
          className={`px-8 sm:px-16 lg:px-24 pt-32 sm:pt-40 pb-20 transition-opacity duration-500 flex items-center justify-center min-h-[70vh] ${
            isVisible.inicio ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-8 mb-14 text-center sm:text-left">
              {/* Profile Image - Más pequeña y minimalista */}
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0 mx-auto sm:mx-0 relative">
                <Image
                  src="/foto.jpg"
                  alt="Leonel González"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                  quality={100}
                />
                {/* Filtro oscuro sutil */}
                <div className="absolute inset-0 bg-black/15 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="flex-1 space-y-5 flex flex-col items-center sm:items-start justify-center">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-light text-white mb-2 flex items-center gap-2">
                    Hola, soy
                    <span className="relative ml-2 font-normal">
                      <span className="text-white z-10 relative">Leonel</span>
                      <span
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-[grow_1.2s_ease-in-out]"
                        style={{ animationFillMode: "forwards" }}
                      ></span>
                    </span>
                  </h1>
                  <p className="text-emerald-400 text-sm font-medium">
                    Frontend Developer
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors justify-center sm:justify-start">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Argentina</span>
                  </div>

                  <Link
                    href="mailto:leonel.gonzalez.dev@gmail.com"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors justify-center sm:justify-start"
                  >
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <span>leonel.gonzalez.dev@gmail.com</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
              <div className="lg:col-span-1">
                <h2 className="text-white text-sm font-medium tracking-wider">
                  SOBRE MÍ
                </h2>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Desarrollador frontend especializado en{" "}
                  <span className="text-emerald-400">React</span>,{" "}
                  <span className="text-emerald-400">Next.js</span> y
                  <span className="text-emerald-400"> TypeScript</span>.
                  Enfocado en crear interfaces web modernas y eficientes con
                  excelente experiencia de usuario.
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Estudiante de Programación en UTN. Apasionado por las
                  tecnologías web y el desarrollo de soluciones elegantes y
                  escalables.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="https://bit.ly/3NMKOVe"
                target="_blank"
                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://bit.ly/40vJTjP"
                target="_blank"
                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Link>

              <Link
                href="/CV-LEONEL-GONZALEZ.pdf"
                download
                target="_blank"
                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Descargar CV</span>
              </Link>
            </div>

            {/* Status */}
            <div className="mt-16 pt-8 border-t border-zinc-800/50">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span>Disponible para proyectos freelance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized About Section */}
        <section
          className={`px-4 sm:px-8 py-12 sm:py-16 border-t border-gray-800/30 transition-all duration-700 delay-200 ${
            isVisible.inicio
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Encabezado con icono redondeado */}
            <div className="space-y-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2.5 rounded-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/40 group-hover:border-emerald-500/30 transition-all duration-500">
                  <User className="w-5 h-5 text-gray-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                  Sobre <span className="text-emerald-400">mí</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 lg:pl-1">
                Desarrollador especializado en tecnologías modernas, apasionado
                por crear
                <span className="text-emerald-300/90">
                  {" "}
                  soluciones web escalables
                </span>
                ,<span className="text-emerald-300/90"> eficientes</span> y con
                <span className="text-emerald-300/90"> excelente UX</span>.
              </p>
            </div>

            {/* Habilidades con efecto de icono redondeado */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`relative px-3 py-2.5 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/40 text-xs sm:text-sm text-center font-medium transition-all duration-300 hover:scale-[1.03] hover:border-emerald-500/40 hover:bg-gray-800/50 hover:text-gray-100 shadow-sm hover:shadow-emerald-500/10 ${
                      isVisible.inicio ? "animate-fade-in-up" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      transitionDelay: `${index * 30}ms`,
                    }}
                  >
                    {/* Punto indicador redondeado */}
                    <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {skill}
                  </div>
                ))}
              </div>

              {/* Firma con decoración redondeada */}
              <div className="relative flex items-center gap-3">
                <div className="hidden lg:block w-3 h-3 rounded-full bg-emerald-400/30 animate-pulse"></div>
                <div className="text-3xl sm:text-4xl font-script text-gray-500/70 group">
                  <span className="relative inline-block">
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 to-transparent group-hover:w-full transition-all duration-1000"></span>
                    ~ Leonel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Projects Section */}
        <section
          id="proyectos"
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-100 ${
            isVisible.proyectos
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gray-900/40">
              <Code className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold">Proyectos</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {projects.map((project, index) => (
              <div key={project.id} className="relative group overflow-hidden rounded-2xl">
                <ZoomBlurCard
                  title={project.title}
                  description={project.subtitle}
                  imageUrl={project.image}
                />
                {/* Botón minimalista, pequeño y dark, centrado y solo visible en hover */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto"
                  tabIndex={-1}
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  <div className="absolute rounded-md inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Button
                      size="sm"
                      className="px-3 py-1.5 text-xs rounded-xl font-medium bg-gray-900/80 hover:bg-emerald-600 text-gray-200 hover:text-white shadow-none border border-gray-800/60 transition-all duration-200"
                    >
                      Ver proyecto
                    </Button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Experience Section */}
        <section
          id="experiencia"
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-200 ${
            isVisible.experiencia
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gray-900/40">
              <Briefcase className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold">Experiencia</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 sm:pl-8 group">
                <div
                  className={`absolute left-0 top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 transition-all duration-300 ${
                    exp.current
                      ? "bg-green-500 border-green-500 shadow-lg shadow-green-500/30"
                      : "bg-gray-600 border-gray-600"
                  }`}
                ></div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-1.5 sm:left-2 top-6 bottom-0 w-px bg-gradient-to-b from-gray-700 to-transparent"></div>
                )}

                <div className="pb-6 hover:bg-gray-900/20 rounded-xl p-3 sm:p-4 -ml-3 sm:-ml-4 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-sm sm:text-base font-bold">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <Badge className="bg-green-500/20 text-green-300 text-xs px-3 py-1 border border-green-500/30 self-start sm:self-center">
                        Actual
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                    <span className="text-sm text-gray-300 font-semibold">
                      {exp.company}
                    </span>
                    <span className="text-sm text-gray-500 hidden sm:block">
                      •
                    </span>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Education Section */}
        <section
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-300 ${
            isVisible.experiencia
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
            <div className="p-2 rounded-lg bg-gray-900/40">
              <GraduationCap className="w-5 h-5 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold">Educación</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-gray-900/20 border border-gray-800/30 hover:border-gray-700/40 hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-black/30 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 border border-blue-500/30">
                    En curso
                  </Badge>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Programación
                </h3>
                <p className="text-sm text-gray-300 mb-2 font-medium">
                  Universidad Tecnológica Nacional
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>2025 – Actualidad</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/20 border border-gray-800/30 hover:border-gray-700/40 hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-black/30 group">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 text-xs px-3 py-1 border border-green-500/30">
                    Completado
                  </Badge>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-300 mb-2 font-medium">
                  Henry Bootcamp
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>2024 • 800 horas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Contact Section */}
        <section
          id="contacto"
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-400 ${
            isVisible.contacto
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              Trabajemos juntos
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a
              convertir tus ideas en realidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {contactInfo.map(
              ({ icon: Icon, title, value, href, description }, index) => (
                <Card
                  key={title}
                  className="bg-gray-900/20 border border-gray-800/30 hover:border-gray-700/40 hover:bg-gray-900/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-black/30 group"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 sm:p-4 rounded-2xl bg-gray-800/40 group-hover:bg-gray-700/50 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold mb-2 group-hover:text-gray-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2 font-medium break-all">
                      {value}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">{description}</p>
                    {href !== "#" && (
                      <Button
                        asChild
                        variant="link"
                        className="text-xs p-0 h-auto text-gray-400 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center justify-center"
                      >
                        <Link href={href}>
                          Contactar
                          <ArrowUpRight className="ml-1 w-3 h-3" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 min-h-[44px]"
            >
              <Link href="mailto:leonel.gonzalez.dev@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600/50 px-6 py-3 text-sm rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              <Link href="https://bit.ly/40vJTjP" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600/50 px-6 py-3 text-sm rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              <Link href="https://bit.ly/3NMKOVe" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="px-4 sm:px-8 py-6 sm:py-8 border-t border-gray-800/40 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Leonel González • Hecho con{" "}
            <span className="text-red-500 animate-pulse">🖤</span> en Argentina
          </p>
        </footer>
      </div>
    </div>
  );
}
