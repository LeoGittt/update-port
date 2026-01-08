import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Efectos de scroll refinados
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-end sm:items-center justify-center overflow-hidden bg-black pb-24 sm:pb-0"
    >
      {/* MOBILE REFINED BACKGROUND - Adjusted to show face better */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 sm:hidden"
      >
        <Image
          src="/foto.jpg"
          alt="Leonel González"
          fill
          className="object-cover object-top opacity-50 grayscale"
          priority
        />
        {/* Superior Gradient for contrast on top */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        {/* Massive Bottom Gradient to hide background under text */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      {/* AMBIENT GLOW - Subtle desktop ambient */}
      <div className="absolute top-[10%] right-[15%] w-[30%] h-[30%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none hidden sm:block" />
      <div className="absolute bottom-[10%] left-[15%] w-[30%] h-[30%] bg-white/5 blur-[120px] rounded-full pointer-events-none hidden sm:block" />

      <div className={`container relative z-10 px-6 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* PHOTO COLUMN - Desktop Only */}
          <div className="hidden lg:flex lg:col-span-4 justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative group"
            >
              <div className="w-64 h-64 md:w-[20rem] md:h-[20rem] rounded-[3.5rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl relative">
                <Image
                  src="/foto.jpg"
                  alt="Leonel González"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-emerald-500 text-black px-6 py-3 rounded-2xl font-black text-[9px] tracking-widest shadow-xl uppercase"
              >
                Open to Work
              </motion.div>
            </motion.div>
          </div>

          {/* CONTENT COLUMN - Bottom aligned on mobile */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 text-emerald-500 justify-center lg:justify-start"
              >
                <div className="w-8 h-px bg-emerald-500/40" />
                <span className="text-[9px] font-black tracking-[0.4em] uppercase">Frontend Developer</span>
              </motion.div>

              <div className="relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[7.5rem] font-black text-white leading-tight lg:leading-[0.9] tracking-tighter uppercase"
                >
                  LEONEL <br />
                  <span className="text-zinc-600 italic">GONZÁLEZ</span>
                </motion.h1>
              </div>
            </div>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <Link
                href="#proyectos"
                className="group relative h-14 w-56 bg-neutral-900 border border-white/10 text-gray-50 text-[10px] font-black tracking-widest rounded-xl overflow-hidden transition-all duration-500 flex items-center justify-center gap-3 hover:border-emerald-300 hover:text-emerald-300 before:absolute before:w-10 before:h-10 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-emerald-500 before:rounded-full before:blur-lg before:duration-500 group-hover:before:duration-500 group-hover:before:right-12 group-hover:before:-bottom-8 group-hover:before:blur group-hover:before:[box-shadow:_20px_20px_20px_30px_#10b981] after:absolute after:z-10 after:w-16 after:h-16 after:content-[''] after:bg-emerald-300 after:right-8 after:top-3 after:rounded-full after:blur-lg after:duration-500 group-hover:after:duration-500 group-hover:after:-right-8"
              >
                <span className="relative z-20">VER PROYECTOS</span>
                <ArrowRight className="w-4 h-4 relative z-20 group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </motion.div>

            {/* Social & Location Micro Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-10 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 border-t border-white/5"
            >
              <div className="flex items-center gap-3 opacity-60">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">San Juan, AR</span>
              </div>
              
              <div className="flex gap-6">
                {[
                  { icon: Github, href: "https://bit.ly/3NMKOVe" },
                  { icon: Linkedin, href: "https://bit.ly/40vJTjP" },
                  { icon: Mail, href: "mailto:leonel.gonzalez.dev@gmail.com" }
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    className="text-zinc-600 hover:text-white transition-all duration-400 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Layout Lines */}
      <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
    </section>
  );
}
