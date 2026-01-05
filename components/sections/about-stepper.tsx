"use client"

import Stepper, { Step } from "@/components/ui/stepper"
import { User, Rocket, Code2 } from "lucide-react"

export function AboutMeStepper() {
  return (
    <div className="w-full max-w-2xl mx-auto my-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Mi Trayectoria</h2>
        <p className="text-zinc-500 text-sm">Un breve recorrido por mi evolución profesional</p>
      </div>

      <Stepper
        initialStep={1}
        backButtonText="Anterior"
        nextButtonText="Siguiente"
        stepCircleContainerClassName="bg-zinc-900/30 border border-white/5 backdrop-blur-sm"
      >
        <Step>
          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="https://media.tenor.com/21zY2Y3jM7AAAAAi/cat-typing.gif" 
                alt="Cat coding furiously"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white">El Origen (2018)</h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Empecé igual que este michi: tecleando furiosamente sin saber muy bien qué pasaba.
              Rompiendo HTML en un bloc de notas y descubriendo la web a prueba y error.
            </p>
          </div>
        </Step>
        
        <Step>
          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="p-4 rounded-full bg-zinc-800/50 text-white border border-white/5">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">La Evolución</h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Descubrí el ecosistema de JavaScript y me enamoré de React. 
              Pasé de páginas estáticas a crear aplicaciones dinámicas, 
              entendiendo la importancia de la experiencia de usuario y las animaciones fluidas.
            </p>
          </div>
        </Step>

        <Step>
          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="p-4 rounded-full bg-zinc-800/50 text-white border border-white/5">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Actualidad</h3>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Hoy construyo productos digitales de alto impacto. 
              Me especializo en arquitecturas escalables y diseño UI/UX premium, 
              como la experiencia que estás navegando en este momento.
            </p>
          </div>
        </Step>
      </Stepper>
    </div>
  )
}
