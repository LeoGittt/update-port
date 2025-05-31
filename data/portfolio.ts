import { Project } from "@/types/project";
import { Experience } from "@/types/experience";
import { ContactInfo } from "@/types/contact";
import { Phone, Mail, MapPin } from "lucide-react";

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Redux",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "Jest",
  "Cypress",
];

export const projects: Project[] = [
  {
    id: 1,
    year: "2025",
    title: "S I M U",
    subtitle: "Sistema Municipal",
    image: "/fotos-proyectos/10.PNG?height=120&width=200",
    demoUrl: "https://reclamos-frontend.vercel.app/",
    description:
      "Sistema integral para municipios que permite a los ciudadanos gestionar reclamos y seguir trámites en tiempo real. Incluye un panel administrativo completo para funcionarios.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 2,
    year: "2025",
    title: "AutoWeb",
    subtitle: "Concesionarias",
    image: "/fotos-proyectos/12.PNG?height=120&width=200",
    demoUrl: "https://auto-web-sanjuan-sypk.vercel.app/",
    description:
      "Plataforma digital para concesionarias de autos. Permite mostrar vehículos, administrar stock y generar contactos con potenciales compradores de forma ágil.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "EvenTop",
    subtitle: "Tickets",
    image: "/fotos-proyectos/1.PNG?height=120&width=200",
    demoUrl: "https://eventop-frontend.vercel.app/",
    description:
      "App para la venta y gestión de entradas a eventos. Facilita la creación de eventos, control de asistencia y compra segura de tickets.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 4,
    year: "2024",
    title: "La Marina",
    subtitle: "Ecommerce",
    image: "/fotos-proyectos/3.PNG?height=120&width=200",
    demoUrl: "https://frontend-la-marina.vercel.app/",
    description:
      "Tienda online especializada en productos marinos. Incluye catálogo digital, carrito de compras, pagos integrados y gestión de stock.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 5,
    year: "2024",
    title: "Boostly",
    subtitle: "Marketing",
    image: "/fotos-proyectos/7.PNG?height=120&width=200",
    demoUrl: "https://boostly-t749.vercel.app/",
    description:
      "Sitio para una agencia de marketing digital centrada en SEO y redes sociales. Permite gestionar campañas, analizar resultados y captar nuevos clientes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 6,
    year: "2024",
    title: "Aura",
    subtitle: "Contable",
    image: "/fotos-proyectos/6.PNG?height=120&width=200",
    demoUrl: "https://contables.vercel.app/",
    description:
      "Sistema contable para estudios y empresas. Gestiona facturación, gastos, clientes e informes financieros de manera ordenada y profesional.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 7,
    year: "2024",
    title: "BYAS",
    subtitle: "Ingeniería",
    image: "/fotos-proyectos/8.PNG?height=120&width=200",
    demoUrl: "https://byas.vercel.app/",
    description:
      "Herramienta digital para ingenieros civiles. Permite administrar proyectos, almacenar cálculos y organizar documentación técnica.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 8,
    year: "2024",
    title: "Mueblito",
    subtitle: "Muebles",
    image: "/fotos-proyectos/9.PNG?height=120&width=200",
    demoUrl: "https://art-ydeisgn.vercel.app/",
    description:
      "Ecommerce de muebles artesanales. Catálogo dinámico con productos personalizados y sistema de pedidos a medida.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 10,
    year: "2024",
    title: "Colorshop",
    subtitle: "Gestión de Remitos",
    image: "/fotos-proyectos/4.PNG?height=120&width=200",
    demoUrl: "https://v0-colorshop-remitos-jdu4ku.vercel.app/",
    description:
      "Sistema de remitos para tiendas de pintura. Facilita el control de entregas, stock e historial de pedidos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 11,
    year: "2024",
    title: "Souls Digitals",
    subtitle: "Agencia de Marketing",
    image: "/fotos-proyectos/5.PNG?height=120&width=200",
    demoUrl: "https://www.soulsdigitals.blog/",
    description:
      "Landing page para agencia digital. Destaca servicios de contenido, posicionamiento y blog corporativo optimizado para SEO.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 12,
    year: "2024",
    title: "ServiSplit",
    subtitle: "Servicio Técnico",
    image: "/fotos-proyectos/15.PNG?height=120&width=200",
    demoUrl: "https://servisplit.vercel.app/",
    description:
      "Gestión de servicios técnicos de aire acondicionado. Agenda de visitas, historial de clientes y seguimiento de reparaciones.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 13,
    year: "2025",
    title: "ISR",
    subtitle: "Servicios Automotriz",
    image: "/fotos-proyectos/14.PNG?height=120&width=200",
    demoUrl: "https://isr-ebon.vercel.app/",
    description:
      "Sistema para talleres mecánicos. Controla turnos, servicios realizados, clientes y repuestos utilizados.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 14,
    year: "2025",
    title: "Cuatro A",
    subtitle: "Estudio Contable",
    image: "/fotos-proyectos/11.PNG?height=120&width=200",
    demoUrl: "https://cuatro-aestudio.vercel.app/",
    description:
      "Sitio institucional para estudio contable. Gestión documental, atención a clientes y administración tributaria.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 15,
    year: "2025",
    title: "Clínica",
    subtitle: "Masajes Terapéuticos",
    image: "/fotos-proyectos/2.PNG?height=120&width=200",
    demoUrl: "https://kzmgzmwe3mc3vfn7llk6.lite.vusercontent.net/",
    description:
      "Sistema de turnos y gestión de pacientes para una clínica de masajes. Permite agendar citas y llevar el historial de tratamientos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 16,
    year: "2025",
    title: "Mar de Azúcar",
    subtitle: "Cafetería",
    image: "/fotos-proyectos/16.PNG?height=120&width=200",
    demoUrl: "https://mardeazucar.mitiendanube.com/",
    description:
      "Ecommerce para una cafetería boutique. Catálogo con productos destacados, promociones y pedidos personalizados.",
    technologies: ["Tienda Nube"],
  },
  {
    id: 17,
    year: "2025",
    title: "Space Burguer",
    subtitle: "Menú Digital",
    image: "/fotos-proyectos/17.PNG?height=120&width=200",
    demoUrl: "https://menu-hamurguesa.vercel.app/",
    description:
      "Menú interactivo para hamburguesería. Diseño atractivo y funcional con sistema de pedidos online.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 18,
    year: "2025",
    title: "Amigos",
    subtitle: "Control de Gastos",
    image: "/fotos-proyectos/18.PNG?height=120&width=200",
    demoUrl: "https://v0-seo-osppm1n6y44-t4tbw2.vercel.app/",
    description:
      "Aplicación para dividir y llevar el control de gastos entre amigos. Ideal para viajes, salidas y proyectos compartidos.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
  {
    id: 19,
    year: "2025",
    title: "Reglas del Truco",
    subtitle: "Juego de Cartas",
    image: "/fotos-proyectos/19.PNG?height=120&width=200",
    demoUrl: "https://truco-ten.vercel.app/",
    description:
      "Guía digital para aprender a jugar al truco. Reglas explicadas, jugadas y práctica interactiva para nuevos jugadores.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
    ],
  },
  {
    id: 20,
    year: "2024",
    title: "EmpreId",
    subtitle: "Software Factory",
    image: "/fotos-proyectos/20.PNG?height=120&width=200",
    demoUrl: "https://www.boostlyagency.online/",
    description:
      "Sitio corporativo para una fábrica de software. Presenta servicios, proyectos y enfoque profesional de desarrollo.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Axios",
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "EmpreId",
    period: "Mar 2025 - Actual",
    description:
      "Desarrollo de un sistema de gestión municipal utilizando Next.js y TypeScript. La plataforma incluye módulos para reclamos ciudadanos, administración de beneficios municipales, gestión de eventos y control de acceso según distintos roles de usuario.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Nexium Solutions",
    period: "May 2025 - Actual",
    description:
      "Desarrollo y mantenimiento de sitios web estáticos para clientes empresariales, enfocados en diseño responsivo, optimización de rendimiento y buenas prácticas de accesibilidad.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Boostly",
    description:
      "Desarrollo de un sistema integral para concesionarias de autos, con funcionalidades para la gestión de vehículos, clientes, ventas, servicios, empleados y otras operaciones administrativas.",
    current: false,
  },
  {
    title: "SEO Developer",
    company: "Easy Life (España)",
    description:
      "Responsable de la optimización técnica de sitios web empresariales para mejorar su posicionamiento en buscadores. Adicionalmente, desarrollé soluciones internas utilizando Microsoft PowerApps para automatizar procesos y mejorar la eficiencia operativa.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "Soy Henry",
    description:
      "Experiencia académica intensiva enfocada en el desarrollo web. Durante este período, diseñé y desarrollé dos aplicaciones fullstack, aplicando tecnologías modernas tanto del lado del cliente como del servidor.",
    current: false,
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+54 264 584 1194",
    href: "tel:2645841194",
  },
  {
    icon: Mail,
    title: "Email",
    value: "leonel.gonzalez.dev@gmail.com",
    href: "mailto:leonel.gonzalez.dev@gmail.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "San Juan, Argentina",
    href: "#",
  },
];
