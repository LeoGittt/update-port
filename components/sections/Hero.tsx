import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Download, Eye, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BorderTrail } from "@/components/core/border-trail";

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_LEONEL_GONZALEZ.pdf';
    link.download = 'CV_Leonel_Gonzalez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="inicio"
      aria-label="Sección de inicio"
      className={`px-6 sm:px-12 lg:px-24 py-20 sm:py-32 transition-all duration-700 flex items-center justify-center min-h-screen ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Main Content - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center justify-items-center">
          
          {/* Profile Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-center">
            <div className="relative group rounded-full">
              <BorderTrail
                size={100}
              />
              <div className="w-44 h-44 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden bg-zinc-800/40 backdrop-blur-sm relative border border-zinc-600/20 shadow-xl shadow-black/30">
                <Image
                  src="/foto.jpg"
                  alt="Leonel González - Desarrollador Frontend"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter group-hover:brightness-110"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Main Info */}
          <div className="lg:col-span-6 text-center space-y-8 flex flex-col items-center justify-center">
            <div className="space-y-5 w-full max-w-lg mx-auto">
              <div className="relative flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-wide leading-tight text-center">
                  <span className="bg-gradient-to-r from-white via-zinc-50 to-zinc-100 bg-clip-text text-transparent font-medium">
                    Leonel González
                  </span>
                </h1>
                <div className="mt-3 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent rounded-full"></div>
              </div>
              
              <div className="space-y-3 flex flex-col items-center">
                <p className="text-zinc-300 text-base sm:text-lg font-light tracking-wider text-center">
                  Frontend Developer
                </p>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-6 w-full max-w-md mx-auto flex flex-col items-center">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent rounded-full"></div>
              
              <div className="space-y-5 text-center">
                <p className="text-zinc-200 text-xs font-light leading-relaxed tracking-wide">
                  Desarrollador frontend con{" "}
                  <span className="text-white font-medium bg-gradient-to-r from-white via-zinc-50 to-zinc-100 bg-clip-text text-transparent">React</span>,{" "}
                  <span className="text-white font-medium bg-gradient-to-r from-white via-zinc-50 to-zinc-100 bg-clip-text text-transparent">Next.js</span> y{" "}
                  <span className="text-white font-medium bg-gradient-to-r from-white via-zinc-50 to-zinc-100 bg-clip-text text-transparent">TypeScript</span>
                </p>

                <p className="text-zinc-400 text-xs font-light leading-relaxed opacity-80">
                  Estudiante de Programación en la UTN, enfocado en crear experiencias
                  web elegantes y funcionales
                </p>

                <div className="flex items-center justify-center gap-2 text-zinc-500 text-xs pt-1">
                  <MapPin className="w-3 h-3 text-zinc-500" aria-hidden="true" />
                  <span className="tracking-wide">San Juan, Argentina</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex justify-center w-full">
              <Link
                href="mailto:leonel.gonzalez.dev@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 border border-zinc-600/20 text-zinc-200 hover:text-white hover:border-zinc-500/30 hover:from-zinc-800/50 hover:to-zinc-700/50 text-xs transition-all duration-500 group backdrop-blur-md shadow-lg hover:shadow-xl"
                aria-label="Enviar correo electrónico a leonel.gonzalez.dev@gmail.com"
              >
                <Mail className="w-3 h-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                <span className="font-light tracking-wider">Contacto</span>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-3 flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Link
              href="https://bit.ly/3NMKOVe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-600/25 hover:border-zinc-500/40 text-zinc-200 hover:text-white transition-all duration-500 backdrop-blur-md bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 hover:from-zinc-800/60 hover:to-zinc-700/60 justify-center text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] origin-center"
              aria-label="Visitar perfil de GitHub"
            >
              <Github className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
              <span className="font-light tracking-wide">GitHub</span>
            </Link>

            <Link
              href="https://bit.ly/40vJTjP"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-600/25 hover:border-zinc-500/40 text-zinc-200 hover:text-white transition-all duration-500 backdrop-blur-md bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 hover:from-zinc-800/60 hover:to-zinc-700/60 justify-center text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] origin-center"
              aria-label="Visitar perfil de LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
              <span className="font-light tracking-wide">LinkedIn</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-400/20 hover:border-emerald-400/35 text-emerald-400 hover:text-emerald-300 transition-all duration-500 outline-none focus:outline-none focus:ring-2 focus:ring-emerald-400/20 backdrop-blur-md bg-gradient-to-r from-emerald-400/5 to-emerald-500/5 hover:from-emerald-400/10 hover:to-emerald-500/10 justify-center text-sm shadow-lg hover:shadow-xl hover:shadow-emerald-400/10 hover:scale-[1.01] origin-center w-full">
                <Download className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" aria-hidden="true" />
                <span className="font-light text-center tracking-wide">Ver o Desc. CV</span>
                <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-300 ml-auto" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-44 bg-gradient-to-b from-zinc-900/98 to-zinc-950/98 backdrop-blur-2xl border border-zinc-600/30 shadow-2xl shadow-black/60 rounded-xl overflow-hidden animate-in slide-in-from-top-2 duration-200"
                sideOffset={8}
                alignOffset={-8}
              >
                <div className="p-2 space-y-1">
                  <DropdownMenuItem asChild className="group">
                    <Link
                      href="/Leonel_Gonzalez_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:text-emerald-300 transition-all duration-200 outline-none focus:outline-none"
                    >
                      <div className="p-1 rounded bg-zinc-800/50 transition-colors duration-200">
                        <Eye className="w-3 h-3 group-hover:scale-110 transition-all duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col flex-1">
                        {/* <span className="font-medium text-xs tracking-wide">Ver CV</span> */}
                        <span className="text-xs text-zinc-500 group-hover:text-emerald-400/70 transition-colors duration-200">Abrir en pestaña</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent mx-1"></div>
                  
                  <DropdownMenuItem asChild className="group">
                    <button
                      onClick={handleDownloadCV}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-zinc-200 hover:text-emerald-300 transition-all duration-200 outline-none focus:outline-none w-full text-left"
                    >
                      <div className="p-1 rounded bg-zinc-800/50 transition-colors duration-200">
                        <Download className="w-3 h-3 group-hover:scale-110 transition-all duration-200" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col flex-1">
                        {/* <span className="font-medium text-xs tracking-wide">Descargar CV</span> */}
                        <span className="text-xs text-zinc-500 group-hover:text-emerald-400/70 transition-colors duration-200">Guardar archivo</span>
                      </div>
                    </button>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
