import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section
      id="inicio"
      className={`px-8 sm:px-16 lg:px-24 pt-32 sm:pt-40 pb-20 transition-opacity duration-500 flex items-center justify-center min-h-[70vh] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-8 mb-14 text-center sm:text-left">
          {/* Profile Image */}
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
              <span className="text-emerald-400"> TypeScript</span>. Enfocado en
              crear interfaces web modernas y eficientes con excelente experiencia
              de usuario.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Estudiante de Programación en UTN. Apasionado por las tecnologías
              web y el desarrollo de soluciones elegantes y escalables.
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
  );
} 