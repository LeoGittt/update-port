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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="absolute inset-0 bg-black"></div>
        {/* Simple Static Grid */}
        <div
          className="absolute inset-0 opacity-6" // subo de 4 a 6
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            filter: "blur(0.3px)",
          }}
        ></div>
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-3" // subo de 2 a 3
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "10px 10px",
          }}
        ></div>
        {/* Dark depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>{" "}
        // menos intenso
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced Mobile-First Navigation */}
        <nav
          className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out w-full max-w-6xl px-4 sm:px-6 ${
            scrollY > 20
              ? "bg-black/85 backdrop-blur-xl border border-gray-700/40 rounded-none sm:rounded-2xl mt-0 sm:mt-4 shadow-2xl shadow-black/50"
              : "mt-0 sm:mt-6"
          }`}
          style={scrollY > 20 ? { borderColor: "#23272f" } : {}} // fuerza un borde gris oscuro
        >
          <div className="px-4 sm:px-8 py-4 sm:py-4">
            {/* Mobile Navigation */}
            <div className="flex items-center justify-between sm:hidden">
              <div className="text-sm font-semibold text-white tracking-wide">
                Leonel González
              </div>
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
            {isMobileMenuOpen && (
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
          className={`px-4 sm:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 transition-all duration-1000 ${
            isVisible.inicio
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center lg:items-center">
            {" "}
            {/* Cambié items-start por items-center */}
            {/* Mobile-First Profile Section */}
            <div className="flex flex-col items-center lg:items-center space-y-6">
              {" "}
              {/* lg:items-center para alinear verticalmente */}
              {/* Enhanced Avatar Mejorado */}
              <div className="relative group flex flex-col items-center">
                <div className="w-40 sm:w-56 h-40 sm:h-56 rounded-full overflow-hidden shadow-2xl shadow-black/60 border-4 border-gray-900 bg-gray-900 flex items-center justify-center relative">
                  <Image
                    src="/foto.jpg"
                    alt="Foto de Leonel González"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 bg-green-500 rounded-full border-4 border-black shadow-lg animate-pulse"></div>
              </div>
              {/* Redes sociales mejoradas visualmente */}
              <div className="flex flex-row lg:flex-col gap-3 lg:gap-3 w-full justify-center lg:justify-center">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    href: "mailto:leonel.gonzalez.dev@gmail.com",
                    color:
                      "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:via-green-700/50",
                    border: "border-green-900/70 hover:border-green-700/60",
                  },
                  {
                    icon: Github,
                    label: "Github",
                    href: "https://bit.ly/3NMKOVe",
                    color:
                      "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:via-gray-600/50",
                    border: "border-gray-900/70 hover:border-gray-600/60",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://bit.ly/40vJTjP",
                    color:
                      "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:via-blue-800/50",
                    border: "border-blue-900/70 hover:border-blue-700/60",
                  },
                ].map(({ icon: Icon, label, href, color, border }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center justify-center lg:justify-start group min-h-[44px] min-w-[44px] lg:min-h-auto lg:min-w-auto"
                  >
                    <div
                      className={`relative p-2.5 rounded-xl transition-all duration-500 group-hover:scale-[1.08] overflow-hidden ${color} ${border} border`}
                    >
                      <Icon className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white drop-shadow-lg" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    </div>
                    <span className="font-medium hidden lg:block ml-3 text-gray-400 group-hover:text-gray-200 transition-colors text-sm tracking-wide">
                      {label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block ml-2 text-gray-400 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile-Optimized Content */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-6 text-center lg:text-left h-full">
              {" "}
              {/* justify-center y h-full para centrar verticalmente */}
              <div className="space-y-6">
                <div className="relative group">
                  {/* Línea vertical sutil solo en desktop */}
                  <div className="hidden lg:block absolute -left-3 top-3 h-5 w-px bg-gray-600 group-hover:bg-gray-400 transition-all duration-700"></div>

                  <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-100 lg:pl-2">
                    Hola, soy{" "}
                    <span className="font-normal relative">
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent group-hover:via-white transition-all duration-500"></span>
                      <span className="relative hover:text-white transition-colors duration-300">
                        Leonel
                      </span>
                    </span>
                  </h1>

                  {/* Línea divisoria con efecto hover */}
                  <div className="h-[0.5px] bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 w-full max-w-2xl mt-4 group-hover:via-gray-400 transition-all duration-1000"></div>
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl lg:pl-3">
                  Desarrollador frontend con experiencia en{" "}
                  <span className="text-gray-300 font-medium hover:text-white transition-colors duration-200">
                    React
                  </span>
                  ,{" "}
                  <span className="text-gray-300 font-medium hover:text-white transition-colors duration-200">
                    Next.js
                  </span>{" "}
                  y{" "}
                  <span className="text-gray-300 font-medium hover:text-white transition-colors duration-200">
                    TypeScript
                  </span>
                  .
                </p>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl lg:pl-3 italic">
                  Estudiante de Programación en UTN. Apasionado por crear
                  soluciones web eficientes y elegantes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-5">
                {/* Badge de disponibilidad - Versión mejorada */}
                <div className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-700/50 text-sm flex items-center space-x-3 backdrop-blur-md hover:border-gray-600/60 transition-all duration-300 group">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse group-hover:animate-none"></div>
                    <div className="absolute inset-0 rounded-full bg-emerald-500/30 group-hover:animate-ping group-hover:opacity-0 transition-all duration-1000"></div>
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    Disponible para proyectos
                  </span>
                </div>

                {/* Botón de contacto - Versión premium */}
                <Button
                  asChild
                  className="relative overflow-hidden bg-white text-gray-900 hover:bg-gray-50 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md hover:shadow-white/10 min-h-[48px] group"
                >
                  <Link href="#contacto">
                    <span className="relative z-10 flex items-center">
                      Contactar
                      <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized About Section */}
        <section
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-1000 delay-200 ${
            isVisible.inicio
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-2 rounded-lg bg-gray-900/40">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold">Sobre mí</h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                Desarrollador con experiencia en tecnologías modernas, enfocado
                en crear soluciones web escalables y eficientes.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="px-2 sm:px-3 py-2 rounded-lg bg-gray-900/30 border border-gray-800/30 text-xs text-center font-medium hover:bg-gray-800/40 hover:border-gray-700/40 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="text-2xl sm:text-3xl font-script text-gray-500 opacity-60 text-center lg:text-left">
                ~ Leonel
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Projects Section */}
        <section
          id="proyectos"
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-1000 delay-300 ${
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
              <Link
                key={project.id}
                href={project.demoUrl}
                target="_blank"
                className="group"
              >
                <div
                  className="bg-gray-900/20 border border-gray-800/30 rounded-2xl overflow-hidden hover:border-gray-700/50 hover:bg-gray-900/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                   

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <div className="w-6 h-6 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-gray-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-tight font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600/50 px-6 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              <Link href="https://port-iota-three.vercel.app/" target="_blank">
                Ver todos los proyectos
                <ExternalLink className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Enhanced Mobile-Optimized Experience Section */}
        <section
          id="experiencia"
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-1000 delay-400 ${
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
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-1000 delay-500 ${
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
          className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-1000 delay-600 ${
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
