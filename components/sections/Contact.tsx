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
      className={`px-4 sm:px-8 py-8 sm:py-12 border-t border-gray-800/40 transition-all duration-500 delay-400 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
  );
} 