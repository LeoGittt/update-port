import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  FileText,
} from "lucide-react";

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col justify-end lg:flex-row lg:items-center overflow-hidden bg-black pb-8 sm:pb-24 lg:pb-0"
      style={{ contain: "paint" }}
    >
      {/* MOBILE BACKGROUND - Optimized for vertical viewports */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/foto.jpg"
          alt="Leonel González"
          fill
          className="object-cover object-top opacity-60 grayscale"
          priority
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      {/* DESKTOP BACKGROUND GLOWS */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block opacity-50"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div
        className={`container relative z-10 px-6 sm:px-12 max-w-7xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* PHOTO COLUMN - Visible on Large Screens Only, perfectly aligned */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-start">
            <div
              className={`relative transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl relative">
                <Image
                  src="/foto.jpg"
                  alt="Leonel González"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(min-width: 1024px) 320px, 0px"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN - Adapts to center on mobile and left on desktop */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center text-center lg:text-left space-y-6 md:space-y-12">
            <div className="space-y-3">
              <div
                className={`inline-flex items-center gap-3 text-emerald-500 justify-center lg:justify-start transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                <div className="w-8 h-px bg-emerald-500" />
                <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">
                  Full Stack Developer
                </span>
              </div>

              <h1
                className={`text-5xl sm:text-7xl lg:text-[6rem] xl:text-[8.5rem] font-black text-white leading-[0.9] tracking-tighter uppercase transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                LEONEL <br />
                <span className="text-zinc-600 italic">GONZÁLEZ</span>
              </h1>
            </div>

            {/* CTA Group - Responsive layout (stacked mobile, row desktop) */}
            <div
              className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <Link
                href="#proyectos"
                className="group relative h-14 w-full sm:w-56 bg-white text-black text-xs font-black tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-emerald-500 active:scale-95 shadow-lg shadow-white/5"
              >
                <span>VER PROYECTOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/CV_LEONEL_GONZALEZ.pdf"
                target="_blank"
                className="h-14 w-full sm:w-56 border border-white/10 hover:border-white/20 bg-white/5 text-zinc-300 hover:text-white text-xs font-black tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <span>VER MI CV</span>
                <FileText className="w-4 h-4" />
              </Link>
            </div>

            <div
              className={`pt-6 md:pt-10 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 transition-opacity duration-1000 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full border border-white/5">
                  <MapPin className="w-3 h-3 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    San Juan, AR
                  </span>
                </div>
              </div>

              <div className="flex gap-8">
                {[
                  {
                    icon: Github,
                    href: "https://bit.ly/3NMKOVe",
                    label: "Github",
                  },
                  {
                    icon: Linkedin,
                    href: "https://bit.ly/40vJTjP",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:leonel.gonzalez.dev@gmail.com",
                    label: "Mail",
                  },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="text-zinc-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
