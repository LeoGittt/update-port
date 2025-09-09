import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Download, Eye, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      className={`mt-10 sm:mt-24 px-6 sm:px-12 lg:px-24 pt-16 sm:pt-20 pb-16 transition-all duration-500 flex items-center justify-center min-h-[70vh] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 mb-12 text-center sm:text-left">
          {/* Profile Image */}
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0 mx-auto sm:mx-0 relative group">
            <Image
              src="/foto.jpg"
              alt="Leonel González - Desarrollador Frontend"
              width={320}
              height={320}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4 flex flex-col items-center sm:items-start justify-center mt-2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-light text-white mb-2 flex items-center gap-2">
                Hola, soy
                <span className="relative ml-2 font-normal">
                  <span className="text-white z-10 relative">Leonel</span>
                  <span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full animate-[grow_1.2s_ease-in-out]"
                    style={{ animationFillMode: "forwards" }}
                    aria-hidden="true"
                  ></span>
                </span>
              </h1>

              <div className="mt-3 space-y-6">
                <p className="text-emerald-400 text-xs font-mono tracking-wider bg-emerald-400/10 px-3 py-1 rounded-full inline-block" role="text">
                  Frontend Developer
                </p>

                <div className="flex items-center gap-2 font-medium text-gray-400 text-sm justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>San Juan, Argentina</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="mailto:leonel.gonzalez.dev@gmail.com"
              className="flex items-center font-medium gap-2 text-gray-300 hover:text-white text-sm transition-colors duration-200 justify-center sm:justify-start mt-1"
              aria-label="Enviar correo electrónico a leonel.gonzalez.dev@gmail.com"
            >
              <Mail className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>leonel.gonzalez.dev@gmail.com</span>
            </Link>
          </div>
        </div>

        {/* About */}
        <div className="flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 mb-14 max-w-5xl w-full">
    <div className="lg:col-span-1">
      <h2 className="text-white text-sm font-medium tracking-wider">
        SOBRE MÍ
      </h2>
    </div>

    <div className="lg:col-span-3 space-y-3">
      <p className="text-zinc-300 text-sm leading-relaxed">
        Desarrollador frontend con experiencia en{" "}
        <span className="text-emerald-400 font-medium">React</span>,{" "}
        <span className="text-emerald-400 font-medium">Next.js</span> y{" "}
        <span className="text-emerald-400 font-medium">TypeScript</span>.
      </p>

      <p className="text-zinc-400 text-sm leading-relaxed">
        Estudiante de Programación en la UTN, apasionado por crear experiencias
        web elegantes y funcionales, combinando lógica, diseño y creatividad.
      </p>
    </div>
  </div>
</div>


        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 text-sm" role="navigation" aria-label="Enlaces de contacto y redes sociales">
          <Link
            href="https://bit.ly/3NMKOVe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-emerald-300 transition-colors duration-200"
            aria-label="Visitar perfil de GitHub"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://bit.ly/40vJTjP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-emerald-300 transition-colors duration-200"
            aria-label="Visitar perfil de LinkedIn"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="group flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 hover:text-white transition-all duration-300 outline-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50 border border-emerald-400/20 hover:border-emerald-400/40 shadow-lg hover:shadow-emerald-400/20">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              <span className="font-medium">CV</span>
              <ChevronDown className="w-3 h-3 group-data-[state=open]:rotate-180 transition-transform duration-200" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-52 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-black/50 rounded-xl overflow-hidden animate-in slide-in-from-top-2 duration-200"
              sideOffset={8}
            >
              <div className="p-1 space-y-1">
                <DropdownMenuItem asChild className="group">
                  <Link
                    href="/CV_LEONEL_GONZALEZ.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-zinc-300 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-200 outline-none focus:outline-none focus:bg-emerald-400/10 focus:text-emerald-400"
                  >
                    <Eye className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Ver CV</span>
                      <span className="text-xs text-zinc-500 group-hover:text-emerald-400/70">Abrir en nueva pestaña</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="group">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-zinc-300 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-200 outline-none focus:outline-none focus:bg-emerald-400/10 focus:text-emerald-400 w-full text-left"
                  >
                    <Download className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">Descargar CV</span>
                      <span className="text-xs text-zinc-500 group-hover:text-emerald-400/70">Guardar archivo PDF</span>
                    </div>
                  </button>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        
      </div>
    </section>
  );
}
