import Link from "next/link";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactInfo } from "@/types/contact";

interface ContactProps {
  isVisible: boolean;
  contactInfo: ContactInfo[];
}

export default function Contact({ isVisible, contactInfo }: ContactProps) {
  return (
    <section
      id="contacto"
      aria-label="Sección de contacto"
      className={`px-4 py-16 transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto bg-gray-900/20 rounded-3xl p-8 border border-gray-800/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">
            Contacto
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tu idea.
          </p>
        </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12"
        role="list"
        aria-label="Información de contacto"
      >
        {contactInfo.map(({ icon: Icon, title, value, href, description }) => (
          <Card 
            key={title} 
            className="group relative bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 rounded-2xl overflow-hidden hover:shadow-md hover:shadow-black/30"
            role="listitem"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="relative p-6 text-center">
              <div className="flex justify-center mb-4" aria-hidden="true">
                <div className="relative bg-gray-900/70 p-3 rounded-xl ring-1 ring-gray-800/50 group-hover:ring-gray-700/50 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-xl" />
                </div>
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-200 group-hover:text-gray-100 transition-colors duration-300">{title}</h3>
              <p className="text-sm text-gray-500 mb-4 break-all leading-relaxed group-hover:text-gray-400 transition-colors duration-300">{value}</p>
              {href !== "#" && (
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm font-medium text-gray-600 hover:text-gray-400 hover:bg-gray-900/50 h-auto px-3 py-2 rounded-lg transition-all duration-300"
                >
                  <Link 
                    href={href}
                    aria-label={`Contactar por ${title}`}
                    className="inline-flex items-center gap-2"
                  >
                    Contactar 
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          role="navigation"
          aria-label="Enlaces de contacto rápido"
        >
          <Button
            asChild
            className="bg-green-600 text-white px-6 py-2 text-sm font-medium hover:bg-green-500 transition-colors duration-200 rounded-xl"
          >
            <Link 
              href="mailto:leonel.gonzalez.dev@gmail.com"
              aria-label="Enviar correo electrónico"
              className="inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" aria-hidden="true" /> 
              Email
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            className="text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 px-6 py-2 text-sm transition-colors duration-200 rounded-xl"
          >
            <Link 
              href="https://bit.ly/40vJTjP" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" /> 
              LinkedIn
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            className="text-gray-400 hover:text-gray-200 hover:bg-gray-800/30 px-6 py-2 text-sm transition-colors duration-200 rounded-xl"
          >
            <Link 
              href="https://bit.ly/3NMKOVe" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de GitHub"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" aria-hidden="true" /> 
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}