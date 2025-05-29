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
  "Cypress"
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
    year: "2024",
    title: "Henry Cars",
    subtitle: "E-commerce de Autos",
    image: "/fotos-proyectos/1.PNG?height=120&width=200",
    demoUrl: "https://henry-cars.vercel.app/",
    description:
      "Plataforma de comercio electrónico especializada en la venta de automóviles. Incluye filtros avanzados, sistema de búsqueda y gestión de usuarios.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "Henry Food",
    subtitle: "App de Comidas",
    image: "/fotos-proyectos/2.PNG?height=120&width=200",
    demoUrl: "https://henry-food.vercel.app/",
    description:
      "Aplicación web para pedidos de comida con sistema de pagos integrado, seguimiento de pedidos en tiempo real y panel de administración.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
  },
  {
    id: 4,
    year: "2024",
    title: "Henry Weather",
    subtitle: "App del Clima",
    image: "/fotos-proyectos/3.PNG?height=120&width=200",
    demoUrl: "https://henry-weather.vercel.app/",
    description:
      "Aplicación web para consultar el clima en tiempo real de cualquier ciudad del mundo. Incluye pronóstico extendido y mapas interactivos.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
  }
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "EmpreId",
    period: "Mar 2025 - Actual",
    description: "Desarrollo del sistema municipal con Next.js y TypeScript.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Nexium Solutions",
    period: "May 2025 - Actual",
    description: "Sitios web estáticos para clientes empresariales.",
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Boostly",
    description: "Sistema integral para concesionarias de autos.",
    current: false,
  },
  {
    title: "SEO Developer",
    company: "Easy Life (España)",
    description: "Optimización técnica de sitios web empresariales.",
    current: false,
  },
  {
    title: "Frontend Developer",
    company: "Soy Henry",
    description: "Experiencia Academica",
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
    description: "Respuesta en 24h",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "San Juan, Argentina",
    href: "#",
    description: "GMT-3 (ART)",
  },
]; 