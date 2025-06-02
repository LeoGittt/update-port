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
      className={`px-4 py-12 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-center mb-10">
        <h2 className="text-xl font-normal mb-2 text-gray-100">Contacto</h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          ¿Tienes un proyecto? Hablemos.
        </p>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10"
        role="list"
        aria-label="Información de contacto"
      >
        {contactInfo.map(({ icon: Icon, title, value, href, description }) => (
          <Card 
            key={title} 
            className="bg-gray-900/5 rounded-lg border border-gray-800/10"
            role="listitem"
          >
            <CardContent className="p-4 text-center">
              <div className="flex justify-center mb-3" aria-hidden="true">
                <Icon className="w-4 h-4 text-gray-300" />
              </div>
              <h3 className="text-sm font-normal mb-1 text-gray-200">{title}</h3>
              <p className="text-xs text-gray-400 mb-2 break-all">{value}</p>
              {href !== "#" && (
                <Button
                  asChild
                  variant="ghost"
                  className="text-xs p-0 h-auto text-gray-500"
                >
                  <Link 
                    href={href}
                    aria-label={`Contactar por ${title}`}
                  >
                    Contactar <ArrowUpRight className="ml-1 w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div 
        className="flex flex-col sm:flex-row justify-center gap-2"
        role="navigation"
        aria-label="Enlaces de contacto rápido"
      >
        <Button
          asChild
          className="bg-white/90 text-black px-5 py-2 text-xs rounded-full"
        >
          <Link 
            href="mailto:leonel.gonzalez.dev@gmail.com"
            aria-label="Enviar correo electrónico"
          >
            <Mail className="mr-1 h-3 w-3" aria-hidden="true" /> Email
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-gray-300 px-5 py-2 text-xs rounded-full"
        >
          <Link 
            href="https://bit.ly/40vJTjP" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de LinkedIn"
          >
            <Linkedin className="mr-1 h-3 w-3" aria-hidden="true" /> LinkedIn
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className="text-gray-300 px-5 py-2 text-xs rounded-full"
        >
          <Link 
            href="https://bit.ly/3NMKOVe" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de GitHub"
          >
            <Github className="mr-1 h-3 w-3" aria-hidden="true" /> GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}