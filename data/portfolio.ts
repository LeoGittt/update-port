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
    featured: true,
    year: "2025",
    title: "S I M U",
    subtitle: "Sistema Municipal Integral",
    image: "/fotos-proyectos/10.PNG?height=120&width=200",
    demoUrl: "https://reclamos-frontend.vercel.app/",
    githubUrl: "#",
    description:
      "Plataforma municipal integral, desarrollada bajo metodologías ágiles (SCRUM), que permite a los vecinos registrar y seguir reclamos, mientras los distintos roles administrativos gestionan usuarios, beneficios, eventos, estadísticas y acceso a módulos desde dashboards personalizados.",
    challenges:
      "Diseñar una arquitectura escalable con múltiples roles, permitir gestión granular de usuarios y módulos, y mantener una experiencia fluida en todo tipo de dispositivo.",
    solutions:
      "Implementé autenticación segura con login y registro, gestión completa de usuarios (crear, editar, banear, eliminar), control de acceso a módulos por parte del Superadmin y dashboards dinámicos por rol. Se utilizó SCRUM para organizar las tareas en sprints y facilitar la colaboración en equipo. Además, se incorporaron animaciones con Framer Motion y notificaciones en tiempo real.",
    features: [
      "Desarrollo ágil con metodología SCRUM",
      "Autenticación y registro de usuarios",
      "Gestión de usuarios: alta, edición, baneo y eliminación",
      "Sistema de roles: Superadmin, Admin Municipal, Vecino, Responsable de Área, Gestor",
      "Bloqueo y habilitación de módulos por parte del Superadmin",
      "Panel de reclamos con seguimiento por estado y categoría",
      "Módulos de beneficios y eventos administrables",
      "Dashboards personalizados con estadísticas y gráficos en tiempo real",
      "Notificaciones push y por correo electrónico",
      "Exportación de reportes e informes",
      "Animaciones fluidas con Framer Motion",
      "Diseño completamente responsive para desktop y mobile",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    featured: true,
    year: "2025",
    title: "AutoWeb",
    subtitle: "Plataforma para Concesionarias",
    image: "/fotos-proyectos/12.PNG?height=120&width=200",
    demoUrl: "https://auto-web-sanjuan-sypk.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/auto-web",
    description:
      "Sitio web para concesionarias diseñado para exhibir vehículos, gestionar stock y captar clientes potenciales. El foco principal fue lograr una estética refinada y funcional, alineada con los requerimientos de un cliente exigente.",
    challenges:
      "Afrontar las exigencias estéticas de un cliente con visión detallista, logrando un diseño atractivo, claro y funcional. Además, implementar un sistema de administración de vehículos y stock sin comprometer la experiencia visual.",
    solutions:
      "Me enfoqué en desarrollar una UI moderna, con diseño responsive, animaciones suaves mediante Framer Motion, íconos consistentes con Lucide-React y una galería visualmente impactante. También implementé filtros avanzados, gestión de inventario y contacto directo desde la plataforma.",
    features: [
      "Catálogo interactivo de vehículos con filtros por marca, modelo y precio",
      "Diseño refinado con alto cuidado estético",
      "Galería de imágenes optimizada y visualmente atractiva",
      "Sistema de contacto directo para generar leads",
      "Panel de administración de stock y especificaciones",
      "Sistema de favoritos y comparación de vehículos",
      "Animaciones e interacciones con Framer Motion",
      "Íconos modernos y consistentes con Lucide React",
      "Diseño 100% responsive para desktop y mobile",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Lucide React",
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "EvenTop",
    featured: true,
    subtitle: "Gestión y Venta de Tickets",
    image: "/fotos-proyectos/1.PNG?height=120&width=200",
    demoUrl: "https://eventop-frontend.vercel.app/",
    githubUrl: "#",
    description:
      "Aplicación para la gestión y venta de entradas a eventos. Permite crear eventos, controlar la asistencia y vender tickets de forma segura y escalable. Se utilizó Auth0 para autenticación y un enfoque centrado en la experiencia del usuario.",
    challenges:
      "Implementar autenticación flexible, control de roles, gestión dinámica de stock de entradas y validación de tickets en tiempo real. Adaptarse a flujos complejos como compra con Google, notificaciones automáticas y comunicación eficiente con los usuarios.",
    solutions:
      "Integré Auth0 con soporte para registro y login con Google, un sistema de roles (organizador, usuario, admin), control de acceso, gestión de stock y eventos. También incorporé Nodemailer para notificaciones por email, un chatbot integrado, diseño 100% responsive y generación de tickets únicos con QR.",
    features: [
      "Login, registro y autenticación vía Auth0 (incluyendo Google)",
      "Sistema de roles (admin, organizador, usuario)",
      "Creación, edición y eliminación de eventos",
      "Gestión de stock de entradas en tiempo real",
      "Ban y administración de usuarios",
      "Generación de tickets con código QR único",
      "Integración con pasarela de pagos segura",
      "Control de asistencia en vivo",
      "Nodemailer para envío de correos (confirmación, recordatorios, etc.)",
      "Chatbot integrado para soporte automatizado",
      "Dashboard administrativo con estadísticas de ventas y asistencia",
      "Diseño completamente responsive",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
      "Auth0",
      "Framer Motion",
      "Nodemailer",
    ],
  },
  {
    id: 4,
    year: "2024",
    title: "La Marina",
    featured: true,
    subtitle: "Ecommerce de Bazar y Limpieza",
    image: "/fotos-proyectos/3.PNG?height=120&width=200",
    demoUrl: "https://frontend-la-marina.vercel.app/",
    githubUrl: "#",
    description:
      "Tienda online de productos de bazar y limpieza. Ofrece una experiencia de compra clara y atractiva, con funcionalidades completas para administración, stock, usuarios y notificaciones por email.",
    challenges:
      "Lograr una estética profesional para un cliente exigente, junto con la implementación de un sistema completo de ecommerce con gestión de productos, stock, usuarios y pagos.",
    solutions:
      "Diseñé una interfaz moderna y responsive, desarrollé funcionalidades para crear, editar y eliminar productos/categorías, integración con pasarela de pagos, gestión de stock, login/registro con control de roles, bloqueo de usuarios y notificaciones automáticas por email usando Nodemailer.",
    features: [
      "Diseño visual atractivo y 100% responsive",
      "Login, registro y sistema de roles (admin/usuario)",
      "Gestión completa de productos y categorías (CRUD)",
      "Visualización detallada de productos",
      "Carrito de compras persistente",
      "Gestión de stock en tiempo real",
      "Integración con pasarela de pagos",
      "Panel administrativo completo",
      "Bloqueo y control de usuarios",
      "Notificaciones por email (Nodemailer)",
      "Filtros por categoría y búsqueda inteligente",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Nodemailer",
    ],
  },
  {
    id: 5,
    year: "2024",
    title: "Boostly",
    subtitle: "Agencia de Marketing Digital",
    image: "/fotos-proyectos/7.PNG?height=120&width=200",
    demoUrl: "https://boostly-t749.vercel.app/",
    githubUrl: "#",
    description:
      "Sitio web para agencia de marketing digital especializada en SEO y redes sociales, con estética minimalista black & white inspirada en Vercel.",
    challenges:
      "Diseñar una interfaz elegante y moderna, logrando una difícil armonía y elección de colores en una paleta black & white, además de mostrar métricas claras y facilitar la captación de leads.",
    solutions:
      "Desarrollé un dashboard interactivo con gráficos en tiempo real, formularios optimizados para captación y un portafolio visual de casos de éxito, todo con una estética sobria y moderna.",
    features: [
      "Dashboard con métricas y gráficos en tiempo real",
      "Sistema eficiente para captación de leads",
      "Blog optimizado para SEO",
      "Portafolio visual de casos de éxito",
      "Formularios de contacto inteligentes",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
    ],
  },
  {
    id: 6,
    year: "2024",
    title: "Aura",
    subtitle: "Web Contable",
    image: "/fotos-proyectos/6.PNG?height=120&width=200",
    demoUrl: "https://contables.vercel.app/",
    githubUrl: "#",
    description:
      "Web para estudios y empresas contables, que presenta información sobre facturación, gastos, clientes e informes financieros de manera ordenada y profesional.",
    challenges:
      "Primera vez trabajando con una paleta de colores entregada por diseñadora gráfica, sincronizando tonos especiales para lograr un diseño elegante pero con mucha información clara y accesible.",
    solutions:
      "Desarrollé una web modular con contenidos organizados, plantillas personalizables y diseño armonioso que facilita la lectura de información compleja.",
    features: [
      "Presentación de facturación y gastos",
      "Visualización de informes personalizados",
      "Sistema de recordatorios y alertas",
      "Gestión visual de clientes y proveedores",
      "Exportación de datos en múltiples formatos",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    id: 7,
    year: "2024",
    title: "BYAS",
    subtitle: "Web de Ingeniería",
    image: "/fotos-proyectos/8.PNG?height=120&width=200",
    demoUrl: "https://www.byas.com.ar/",
    githubUrl: "#",
    description:
      "Web para un estudio de ingeniería civil que presenta más de 50 años de experiencia, proyectos, servicios y documentación técnica de forma clara y organizada.",
    challenges:
      "El mayor desafío fue organizar y mantener toda la información acumulada en 50 años, incluyendo numerosos proyectos, servicios y documentación técnica, en una web accesible y bien estructurada.",
    solutions:
      "Diseñé una estructura modular con gestión documental, visualización de proyectos, calculadora de fórmulas y seguimiento mediante diagramas tipo Gantt, facilitando el acceso a información compleja.",
    features: [
      "Presentación de proyectos y servicios",
      "Gestión de documentación técnica con versionado",
      "Calculadora de fórmulas de ingeniería",
      "Seguimiento de proyectos con Gantt",
      "Almacenamiento de planos y especificaciones",
      "Reportes técnicos personalizados",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
    ],
  },
  {
    id: 8,
    year: "2024",
    title: "Mueblito",
    subtitle: "Web de Muebles",
    image: "/fotos-proyectos/9.PNG?height=120&width=200",
    demoUrl: "https://art-ydeisgn.vercel.app/",
    githubUrl: "#",
    description:
      "Tienda online familiar de muebles artesanales, con catálogo dinámico de productos personalizados y sistema de pedidos a medida.",
    challenges:
      "Diseñar una web con estilo diferente a mis proyectos previos, integrando un configurador de productos personalizado que reflejara el cariño y experiencia familiar.",
    solutions:
      "Implementé un configurador interactivo, presupuesto automático y un sistema de seguimiento para pedidos personalizados, logrando una experiencia fluida y cercana.",
    features: [
      "Configurador de productos interactivo",
      "Sistema de presupuestos automáticos",
      "Catálogo con filtros avanzados",
      "Seguimiento de pedidos personalizados",
      "Galería de proyectos realizados",
      "Sistema de consultas técnicas",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
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
    githubUrl: "https://github.com/leonelgonzalezdev/colorshop-",
    description:
      "Sistema de gestión de remitos para tiendas de pintura, que facilita el control de entregas, stock y el historial de pedidos entre sucursales y empresas.",
    challenges:
      "Diseñar un sistema que maneje múltiples productos, control de stock en tiempo real y generación de remitos personalizados con códigos únicos, manteniendo una estética limpia y funcional.",
    solutions:
      "Implementé gestión de inventario con alertas, generación de remitos con códigos únicos y seguimiento detallado de entregas y pedidos.",
    features: [
      "Gestión de inventario en tiempo real",
      "Generación de remitos con códigos únicos",
      "Sistema de alertas de stock",
      "Historial de pedidos y entregas",
      "Reportes de ventas y stock",
      "Gestión de clientes frecuentes",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
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
    githubUrl: "#",
    description:
      "Landing page para agencia digital. Destaca servicios de contenido, posicionamiento y blog corporativo optimizado para SEO.",
    challenges:
      "Crear una landing page atractiva que muestre los servicios de marketing digital de forma clara y genere leads de calidad.",
    solutions:
      "Implementé un diseño moderno con animaciones suaves, blog optimizado para SEO y formularios de contacto inteligentes.",
    features: [
      "Diseño moderno y responsivo",
      "Blog optimizado para SEO",
      "Formularios de contacto inteligentes",
      "Portafolio de casos de éxito",
      "Sección de servicios interactiva",
      "Integración con herramientas de análisis",
    ],
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
    githubUrl: "#",
    description:
      "Gestión de servicios técnicos de aire acondicionado. Agenda de visitas, historial de clientes y seguimiento de reparaciones.",
    challenges:
      "Desarrollar un sistema que maneje múltiples técnicos, agenda de visitas y seguimiento de reparaciones en tiempo real.",
    solutions:
      "Implementé un sistema de gestión de turnos, seguimiento de reparaciones y notificaciones automáticas para clientes y técnicos.",
    features: [
      "Sistema de gestión de turnos",
      "Seguimiento de reparaciones",
      "Historial de clientes",
      "Notificaciones automáticas",
      "Reportes de servicio",
      "Gestión de técnicos y zonas",
    ],
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
    githubUrl: "#",
    description:
      "Sistema para talleres mecánicos. Controla turnos, servicios realizados, clientes y repuestos utilizados.",
    challenges:
      "Crear un sistema que maneje múltiples servicios automotrices, inventario de repuestos y seguimiento de reparaciones.",
    solutions:
      "Desarrollé un sistema integral con gestión de turnos, control de inventario y seguimiento de servicios en tiempo real.",
    features: [
      "Gestión de turnos y servicios",
      "Control de inventario de repuestos",
      "Historial de clientes y vehículos",
      "Seguimiento de reparaciones",
      "Reportes de servicios",
      "Gestión de técnicos y especialidades",
    ],
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
    githubUrl: "#",
    description:
      "Sitio institucional para estudio contable. Gestión documental, atención a clientes y administración tributaria.",
    challenges:
      "Desarrollar un sistema que facilite la comunicación con clientes y la gestión de documentación contable de forma segura.",
    solutions:
      "Implementé un portal de clientes con acceso seguro, sistema de mensajería interna y gestión documental organizada.",
    features: [
      "Portal de clientes seguro",
      "Sistema de mensajería interna",
      "Gestión documental organizada",
      "Calendario de vencimientos",
      "Notificaciones automáticas",
      "Acceso a documentación histórica",
    ],
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
    githubUrl: "#",
    description:
      "Sistema de turnos y gestión de pacientes para una clínica de masajes. Permite agendar citas y llevar el historial de tratamientos.",
    challenges:
      "Implementar un sistema de turnos que maneje múltiples terapeutas, diferentes tipos de tratamientos y seguimiento de pacientes.",
    solutions:
      "Desarrollé un sistema de reservas online, historial de tratamientos y seguimiento de evolución de pacientes.",
    features: [
      "Sistema de reservas online",
      "Historial de tratamientos",
      "Seguimiento de pacientes",
      "Gestión de terapeutas",
      "Recordatorios automáticos",
      "Reportes de asistencia",
    ],
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
    challenges:
      "Crear una tienda online que refleje la identidad de la cafetería y permita gestionar pedidos especiales y promociones.",
    solutions:
      "Implementé una tienda con diseño personalizado, sistema de pedidos especiales y gestión de promociones.",
    features: [
      "Catálogo de productos destacados",
      "Sistema de pedidos especiales",
      "Gestión de promociones",
      "Blog de recetas y novedades",
      "Programa de fidelización",
      "Pedidos para eventos",
    ],
    technologies: ["Tienda Nube"],
  },
  {
    id: 17,
    year: "2025",
    title: "Space Burguer",
    subtitle: "Menú Digital",
    image: "/fotos-proyectos/17.PNG?height=120&width=200",
    demoUrl: "https://menu-hamurguesa.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/space-burguer-",
    description:
      "Menú interactivo para hamburguesería. Diseño atractivo y funcional con sistema de pedidos online.",
    challenges:
      "Crear un menú digital atractivo que facilite la selección de productos y personalización de pedidos.",
    solutions:
      "Desarrollé un menú interactivo con animaciones suaves, sistema de personalización de productos y pedidos online.",
    features: [
      "Menú interactivo con animaciones",
      "Sistema de personalización de productos",
      "Pedidos online",
      "Galería de productos",
      "Sistema de promociones",
      "Integración con delivery",
    ],
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
    githubUrl: "#",
    description:
      "Aplicación para dividir y llevar el control de gastos entre amigos. Ideal para viajes, salidas y proyectos compartidos.",
    challenges:
      "Implementar un sistema que permita dividir gastos de forma justa y llevar un control claro de deudas entre usuarios.",
    solutions:
      "Desarrollé un sistema de división de gastos automático, seguimiento de deudas y notificaciones de pagos.",
    features: [
      "División automática de gastos",
      "Seguimiento de deudas",
      "Notificaciones de pagos",
      "Historial de gastos",
      "Estadísticas de gastos",
      "Exportación de reportes",
    ],
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
    githubUrl: "#",
    description:
      "Guía digital para aprender a jugar al truco. Reglas explicadas, jugadas y práctica interactiva para nuevos jugadores.",
    challenges:
      "Crear una guía interactiva que explique las reglas del truco de forma clara y permita practicar jugadas.",
    solutions:
      "Implementé una guía paso a paso con ejemplos visuales, práctica de jugadas y explicaciones detalladas.",
    features: [
      "Guía paso a paso",
      "Ejemplos visuales de jugadas",
      "Práctica interactiva",
      "Glosario de términos",
      "Trucos y consejos",
      "Modo offline",
    ],
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
    githubUrl: "#",
    description:
      "Sitio corporativo para una fábrica de software. Presenta servicios, proyectos y enfoque profesional de desarrollo.",
    challenges:
      "Crear un sitio que muestre la capacidad técnica y profesional de la empresa, además de facilitar la captación de clientes.",
    solutions:
      "Desarrollé un sitio corporativo moderno con portafolio de proyectos, blog técnico y sistema de contacto.",
    features: [
      "Portafolio de proyectos",
      "Blog técnico",
      "Sistema de contacto",
      "Presentación de servicios",
      "Equipo de desarrollo",
      "Casos de éxito",
    ],
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
    id: 21,
    year: "2024",
    featured: true,
    title: "Permay",
    subtitle: "Catálogo Web de Perfumería",
    image: "/fotos-proyectos/21.PNG?height=120&width=200",
    demoUrl: "https://www.permayperfumeria.com",
    githubUrl: "#",
    description:
      "Sitio web diseñado para mostrar el catálogo completo de la perfumería Permay. Presenta los productos de forma clara, visual y categorizada, sin funciones de compra.",
    challenges:
      "Organizar un catálogo extenso de perfumes de manera intuitiva y atractiva, con acceso fácil a información clave como notas olfativas, familia, género y presentación.",
    solutions:
      "Desarrollé una interfaz clara y responsive que permite navegar por categorías, visualizar detalles del producto y acceder rápidamente a información útil sin sobrecargar al usuario.",
    features: [
      "Catálogo dinámico de perfumes",
      "Detalle de productos con notas olfativas",
      "Filtros por género, familia y presentación",
      "Diseño responsive para móviles",
      "Estructura modular para escalar el contenido",
      "Identidad visual acorde a la marca",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
    ],
  },
  {
    id: 22,
   
    year: "2025",
    title: "AutoDev",
    subtitle: "Sistema de Gestión para Concesionaria de Autos",
    image: "/fotos-proyectos/22.PNG?height=120&width=200",
    demoUrl: "#",
    githubUrl: "#",
    description:
      "AutoDev es una plataforma integral diseñada para gestionar todos los aspectos operativos de una concesionaria de autos. Desde la administración de vehículos y mantenimiento hasta el control de empleados y sueldos, todo centralizado en un sistema con roles diferenciados y respaldado por un backend robusto en Nest.js.",
    challenges:
      "Crear una solución robusta full stack que permita a los administradores controlar eficientemente la operación diaria de la concesionaria, mientras que los clientes puedan consultar vehículos y su estado de forma segura y clara.",
    solutions:
      "Se desarrolló una arquitectura escalable con Next.js y Nest.js. El backend gestiona lógica de negocio, autenticación y operaciones CRUD con alta eficiencia, mientras que el frontend ofrece una interfaz intuitiva y responsive. Se implementó control de accesos por rol, formularios dinámicos y un módulo especializado para mantenimiento vehicular.",
    features: [
      "Roles diferenciados: Administrador y Cliente",
      "Gestión completa de vehículos: alta, edición y baja",
      "Panel de administración de empleados y sueldos",
      "Historial y seguimiento de mantenimientos vehiculares",
      "Dashboard con métricas clave y actividades recientes",
      "Diseño moderno, responsive y centrado en la usabilidad",
    ],
    technologies: [
      "Next.js",
      "Nest.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Framer Motion",
    ],
  },
  {
    id: 23,
    year: "2025",
    title: "El Club del Pancho",
    subtitle: "Catálogo interactivo de panchos artesanales",
    image: "/fotos-proyectos/23.PNG?height=120&width=200",
    demoUrl: "https://elclubdelpancho.vercel.app/",
    githubUrl: "#",
    description:
      "El Club del Pancho es un catálogo digital pensado para destacar los panchos artesanales y combinaciones únicas de una panchería gourmet. Ofrece una experiencia visual atractiva y simple para que los clientes puedan explorar el menú, conocer los ingredientes y personalizar su pedido.",
    challenges:
      "Diseñar una plataforma atractiva y dinámica que permita mostrar productos gastronómicos con gran impacto visual, incluyendo la posibilidad de organizar categorías, destacar ingredientes y facilitar la navegación en móviles.",
    solutions:
      "Se implementó un sistema con Next.js para el frontend y una arquitectura pensada para escalar con nuevos productos y categorías. La interfaz es 100% responsive, centrada en imágenes y descripciones claras, con soporte para navegación por filtros y futuras integraciones con sistemas de pedidos online.",
    features: [
      "Catálogo visual de panchos por categoría",
      "Detalle de ingredientes y sugerencias de acompañamiento",
      "Buscador y filtros por tipo de pancho o ingrediente",
      "Interfaz moderna, clara y responsiva",
      "Preparado para integración con sistema de pedidos",
      "Optimizado para dispositivos móviles",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "Framer Motion",
    ],
  },
  {
  id: 24,
  year: "2025",
  title: "SOMA",
  subtitle: "Centro de kinesiología y bienestar integral",
  image: "/fotos-proyectos/24.PNG?height=120&width=200",
  demoUrl: "https://soma-kinesiologia.vercel.app/",
  githubUrl: "#",
  description:
    "SOMA es un sitio web diseñado para un centro de kinesiología que busca promover el bienestar físico y emocional de sus pacientes. Ofrece información clara sobre los servicios, profesionales y enfoque terapéutico, con un diseño moderno y cercano.",
  challenges:
    "Crear una plataforma informativa, estética y funcional que represente la identidad del centro, comunique confianza y facilite el contacto con nuevos pacientes.",
  solutions:
    "Se desarrolló un sitio responsive con Next.js que permite mostrar los servicios, profesionales y filosofía de SOMA de forma clara y atractiva. Se incorporaron animaciones suaves, diseño pastel y navegación intuitiva pensada para todos los dispositivos.",
  features: [
    "Sección de servicios con descripciones detalladas",
    "Perfil del equipo profesional con especialidades",
    "Formulario de contacto",
    "Diseño moderno, cálido y responsivo",
    "Optimización para SEO local y Google Maps",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "EmailJS",
  ],
},
{
  id: 25,
  year: "2025",
  title: "Doble G",
  subtitle: "Tienda de cortinas a medida",
  image: "/fotos-proyectos/25.PNG?height=120&width=200",
  demoUrl: "https://ditiero4.sg-host.com/", // Reemplazar con la URL real si la tenés
  githubUrl: "", // Como es WordPress, podés dejarlo vacío o quitarlo si no aplica
  description:
    "Doble G es una tienda especializada en cortinas a medida. Su sitio web busca ofrecer una experiencia visual atractiva, clara y funcional, mostrando los estilos, telas y servicios disponibles, junto con un canal de contacto directo para consultas.",
  challenges:
    "Representar la variedad de productos y estilos de forma visual y accesible, mantener una estética moderna y cálida, y facilitar el contacto de los usuarios interesados.",
  solutions:
    "Se desarrolló una web responsive con WordPress, integrando HTML, CSS y JavaScript personalizados. Se priorizó el diseño visual, la facilidad de navegación y la experiencia en dispositivos móviles. También se incorporó un botón de WhatsApp para atención directa.",
  features: [
    "Catálogo visual de cortinas por estilo y tela",
    "Sección de servicios personalizados",
    "Botón de WhatsApp para consultas rápidas",
    "Diseño moderno, limpio y adaptable a móviles",
    "Formulario de contacto y mapa de ubicación",
  ],
  technologies: [
    "WordPress",
    "HTML",
    "CSS",
    "JavaScript",
  ],
},
{
  id: 26,
  year: "2025",
  title: "Cardio Medic",
  subtitle: "Empresa de ambulancias",
  image: "/fotos-proyectos/26.PNG?height=120&width=200",
  demoUrl: "https://cardio-medic.netlify.app/",
  githubUrl: "#",
  description:
    "Cardio Medic es una empresa de ambulancias y servicios de salud. La web, desarrollada con **Next.js**, fue diseñada para ser ultrarrápida, escalable y SEO-friendly. El estilo se creó utilizando **Tailwind CSS**, lo que permitió un desarrollo ágil y una gran personalización de cada componente, manteniendo una estética profesional y moderna. El uso de **Framer Motion** aportó animaciones suaves que mejoran la experiencia de usuario, proyectando confianza y modernidad. El sitio informa de manera clara sobre sus servicios, priorizando la facilidad de contacto en situaciones críticas.",
  challenges:
    "Transmitir la seriedad y urgencia de los servicios médicos, organizar la información de forma intuitiva para que los usuarios la encuentren rápidamente en una emergencia, y optimizar el sitio para una carga casi instantánea. Otro desafío fue gestionar un desarrollo robusto y escalable con **TypeScript** y mantener una consistencia de diseño eficiente en todo el sitio, lo cual se abordó con el enfoque de utilidad de **Tailwind CSS**.",
  solutions:
    "Se utilizó un stack moderno, con **Next.js** para el rendimiento y la optimización. **TypeScript** aseguró un desarrollo libre de errores y fácil de mantener. El diseño se centró en una interfaz limpia y profesional, con una navegación sencilla y botones de contacto prominentes, todo estilizado con las clases de utilidad de **Tailwind CSS**, lo que aceleró significativamente el proceso de diseño y prototipado. Las transiciones y efectos visuales se crearon con **Framer Motion**, aportando un toque de profesionalidad.",
  features: [
    "Información detallada de servicios: traslados, emergencias y atenciones",
    "Botones de contacto directos para llamadas y WhatsApp",
    "Animaciones fluidas con Framer Motion para una UI/UX moderna",
    "Diseño con sistema de utilidad (utility-first) gracias a Tailwind CSS",
    "Rendimiento optimizado y SEO-friendly con Next.js",
    "Desarrollo robusto y seguro con TypeScript",
  ],
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
},
{
  id: 27,
  year: "2025",
  title: "PM Portones",
  subtitle: "Portones y motores automáticos",
  image: "/fotos-proyectos/27.PNG?height=120&width=200",
  demoUrl: "https://pm-portones.vercel.app/",
  githubUrl: "",
  description:
    "PM Portones es una empresa especializada en la venta, instalación y reparación de portones y motores automáticos. El sitio web se desarrolló como una **web estática** con **Next.js**, priorizando la velocidad de carga y un alto rendimiento para showcasing sus productos y servicios de manera clara y profesional.",
  challenges:
    "El principal desafío fue organizar un catálogo de productos complejo de forma intuitiva y presentar los servicios de instalación y reparación de manera clara y confiable en un formato estático, asegurando que toda la información fuera fácilmente accesible para el usuario.",
  solutions:
    "Se optó por una arquitectura de sitio estático, utilizando **Next.js** para construir cada página. El diseño se basó en el sistema de utilidades de **Tailwind CSS** para un desarrollo ágil y consistente. Además, se usó **TypeScript** para asegurar la robustez del código y **Framer Motion** para las animaciones, proporcionando una experiencia de usuario fluida y moderna.",
  features: [
    "Catálogo de productos detallado y fijo",
    "Información detallada sobre servicios de instalación y reparación",
    "Galería de proyectos realizados para mostrar el trabajo",
    "Formulario de contacto y botones de llamada/WhatsApp",
    "Animaciones fluidas con Framer Motion",
    "Rendimiento optimizado y SEO-friendly con Next.js",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
},
{
  id: 28,
  year: "2025",
  title: "Gestión de Transferencias",
  subtitle: "Control y logística de inventario",
  image: "/fotos-proyectos/28.PNG",
  demoUrl: "https://kzmo4qo21ioj7u8nzej0.lite.vusercontent.net/",
  githubUrl: "#",
  description:
    "Desarrollé un sistema de gestión de transferencias de pedidos diseñado para optimizar la logística de una pinturería con dos sucursales. La herramienta facilita la transferencia de mercadería entre una sucursal con depósito y otra de venta al público, mejorando el control de inventario y la eficiencia operativa.",
  challenges:
    "El principal desafío fue crear una plataforma que permitiera un control preciso del inventario entre dos ubicaciones, asegurando que las transferencias fueran rastreables y que los datos (como productos, cantidades y personal responsable) se registraran de forma segura. La generación de un PDF con el resumen de cada transferencia fue un reto adicional para automatizar la documentación.",
  solutions:
    "El sistema se diseñó con un enfoque en la experiencia de usuario para simplificar el proceso de transferencia. Se implementó una lógica que permite seleccionar la sucursal de origen y destino, así como la persona responsable del envío. Se utilizó una base de datos para la carga de productos mediante su código y nombre, y al finalizar la transferencia, se generaba automáticamente un PDF con un resumen completo del pedido.",
  features: [
    "Gestión de transferencias de mercadería entre sucursales.",
    "Selección de sucursal de origen y destino.",
    "Registro de la persona responsable del envío.",
    "Carga de productos por código, nombre y cantidad.",
    "Generación automática de PDF al completar la transferencia.",
    "Sección de comisiones de ventas y productos facturados/entregados.",
    "Registro de mercadería comprada a proveedores externos."
  ],
  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    
  ],
},
{
  id: 29,
  year: "2025",
  title: "Pedidos a Proveedores",
  subtitle: "Control de faltantes y gestión de stock",
  image: "/fotos-proyectos/29.PNG",
  demoUrl: "https://v0-seo-wgq5fxq5ffz-uprnfk.vercel.app/",
  githubUrl: "#",
  description:
    "sistema de gestión de pedidos diseñado para optimizar el proceso de solicitud de mercadería faltante a proveedores. La plataforma permite a los usuarios seleccionar productos de manera intuitiva, con opciones dinámicas basadas en la categoría, y generar un pedido detallado y listo para ser compartido.",
  challenges:
    "El principal desafío fue crear una interfaz de usuario que se adaptara de forma dinámica a las selecciones del usuario. La lógica para mostrar opciones específicas (como medidas o litros) según la categoría del producto fue crucial para la usabilidad del sistema. Además, el desarrollo de un módulo para la generación automática de un documento final fue un reto técnico para asegurar la precisión del pedido.",
  solutions:
    "Se implementó una arquitectura de componentes modulares con lógica condicional para controlar la visualización de las opciones de productos. El sistema permite seleccionar la categoría (ej. pinceles, rodillos), y las opciones de atributos (ej. medidas, litros) se cargan dinámicamente. La aplicación registra cada ítem en una lista visible para el usuario, y al finalizar, genera un PDF o permite compartir el pedido con el proveedor.",
  features: [
    "Selección de productos por categoría (ej. pinceles, rodillos).",
    "Opciones dinámicas de productos (ej. medidas, litros) basadas en la categoría seleccionada.",
    "Funcionalidad para añadir la cantidad de cada producto.",
    "Lista de pedido en tiempo real a medida que se agregan ítems.",
    "Campo para ingresar el nombre del proveedor y añadir comentarios adicionales.",
    "Generación de un PDF o opción para compartir el pedido final.",
  ],
  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    
  ],
},
{
  id: 30,
  year: "2025",
  title: "Flowers",
  subtitle: "Tienda online de arreglos florales",
  image: "/fotos-proyectos/30.PNG",
  demoUrl: "https://antonietayrigoyen.netlify.app/",
  githubUrl: "#",
  description:
    "Flowers, una tienda de e-commerce especializada en la venta de arreglos florales, ramos y plantas. El proyecto fue diseñado para ofrecer una experiencia de compra intuitiva y fluida, con un enfoque en un catálogo visualmente atractivo y una gestión eficiente del carrito de compras.",
  challenges:
    "El principal desafío fue crear una interfaz que no solo fuera funcional, sino que también capturara la esencia estética de una floristería. La organización del catálogo con diferentes tipos de productos y la implementación de un carrito de compras interactivo, que permitiera a los usuarios añadir, modificar y eliminar productos fácilmente, fueron aspectos clave del desarrollo.",
  solutions:
    "El frontend se construyó con Next.js y React para asegurar un alto rendimiento y una navegación fluida. Se implementó una gestión de estado global para el carrito de compras, lo que permitió una sincronización en tiempo real de los productos. El diseño, desarrollado con **Tailwind CSS**, se centró en la estética y la usabilidad, destacando los productos con imágenes de alta calidad y una interfaz de usuario limpia.",
  features: [
    "Catálogo de productos con filtros por tipo de flor y ocasión.",
    "Funcionalidad de carrito de compras interactivo (agregar, eliminar, modificar cantidades).",
    "Página de detalle de producto con descripciones e imágenes.",
    "Checkout y formulario de pedido optimizado.",
    "Diseño responsive para una experiencia de compra consistente en cualquier dispositivo.",
  ],
  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Framer Motion",
  ],
},
{
  id: 31,
  year: "2025",
  featured: true,
  title: "Ventury",
  subtitle: "E-commerce especializado en insumos odontológicos",
  image: "/fotos-proyectos/31.png", // Asegúrate de que la ruta sea correcta
  demoUrl: "https://ventury-livid.vercel.app", // O la URL que corresponda
  githubUrl: "#", 
  description:
    "Ventury es una plataforma de comercio electrónico de alto rendimiento diseñada para el mercado odontológico chileno. A diferencia de las soluciones prefabricadas, este proyecto fue desarrollado íntegramente a medida, ofreciendo una experiencia de compra premium, un catálogo técnico especializado y una infraestructura escalable para el comercio internacional.",
  challenges:
    "El mayor desafío fue replicar y superar la complejidad funcional de CMS tradicionales como WordPress, pero manteniendo un control total sobre el código y el rendimiento. Se requirió diseñar una arquitectura que integrara una gestión de inventario compleja, procesos de pago seguros y una estrategia de SEO técnico agresiva para posicionar en un nicho competitivo.",
  solutions:
    "Se implementó una arquitectura Fullstack moderna utilizando Next.js y TypeScript para el frontend, garantizando un renderizado híbrido óptimo para SEO. Para el backend y la persistencia de datos, se utilizó Supabase, permitiendo una gestión de usuarios y base de datos en tiempo real. La interfaz se construyó con Shadcn/UI, logrando una estética profesional y limpia, alineada con el sector salud.",
  features: [
    "Arquitectura Fullstack customizada con gestión de inventario en tiempo real.",
    "Optimización SEO avanzada (Core Web Vitals, metadatos dinámicos y SSR).",
    "Pasarela de pagos segura e integración de checkout optimizado.",
    "Panel de administración personalizado para la gestión de productos y pedidos.",
    "Diseño UI/UX orientado a la conversión utilizando componentes de Shadcn/UI.",
  ],
  technologies: [
    "Next.js",
    "Supabase",
    "TypeScript",
    "React",
    "Shadcn/UI",
    "Tailwind CSS",
  ],
},
{
  id: 32, // Siguiendo la secuencia
  year: "2025",
  title: "PE Autos",
  featured: true,
  subtitle: "CRM integral para gestión de concesionaria automotriz",
  image: "/fotos-proyectos/32.png", 
  demoUrl: "https://peautos.vercel.app/", // Generalmente los CRM son privados, puedes poner "#" o un video demo
  githubUrl: "#",
  description:
    "PE Autos es un ecosistema administrativo diseñado específicamente para agencias de vehículos. Este CRM centraliza toda la operación comercial, desde el ingreso técnico de unidades hasta el seguimiento detallado de clientes y la gestión de documentación legal, reemplazando procesos manuales por un flujo de trabajo digital automatizado y seguro.",
  challenges:
    "El principal reto fue estructurar una base de datos relacional compleja que pudiera vincular vehículos, clientes y presupuestos de forma coherente. Además, se buscó crear una interfaz administrativa que fuera extremadamente rápida y funcional para el uso diario, permitiendo la carga masiva de archivos y el seguimiento de estados de documentación sin fricciones.",
  solutions:
    "Utilicé Supabase para manejar las relaciones complejas de datos y el almacenamiento de documentación sensible mediante sus buckets de storage. El frontend, desarrollado con Next.js y Shadcn/UI, se enfocó en la eficiencia operativa, utilizando tablas dinámicas con filtros avanzados y formularios validados con TypeScript para garantizar que la información ingresada sea siempre precisa.",
  features: [
    "Gestión de inventario de vehículos con ficha técnica y estado de unidad.",
    "Módulo de clientes (CRM) con historial de interacciones y preferencias.",
    "Generador de presupuestos dinámicos vinculados a la base de datos de productos.",
    "Sistema de gestión documental para el seguimiento de transferencias y papeles legales.",
    "Dashboard con métricas clave y reportes de ventas en tiempo real.",
  ],
  technologies: [
    "Next.js",
    "Supabase (Auth, Database, Storage)",
    "TypeScript",
    "React",
    "Shadcn/UI",
    "Zustand",
  ],
},
{
  id: 33,
  year: "2025",
  title: "Fotexo",
  featured: true,
  subtitle: "E-commerce y Portfolio para fotógrafos",
  image: "/fotos-proyectos/33.png", 
  demoUrl: "https://fotexo.site/",
  githubUrl: "#", 
  description:
    "Fotexo transforma el portfolio convencional en una unidad de negocio completa. Es una plataforma donde los fotógrafos no solo exhiben su arte, sino que lo comercializan directamente. El sistema integra un flujo de compra completo, permitiendo la venta de servicios, sesiones fotográficas y productos digitales de manera automatizada y segura.",
  challenges:
    "El reto técnico principal fue integrar una pasarela de pagos segura que mantuviera la fluidez de la experiencia de usuario. Además, se desarrolló un sistema de gestión de pedidos y carrito de compras sincronizado en tiempo real, asegurando que el proceso desde la selección de la foto hasta la transacción final sea intuitivo y sin fricciones.",
  solutions:
    "Implementé un flujo de checkout optimizado integrando APIs de pago (como Stripe o Mercado Pago), manejando estados globales con Zustand para el carrito de compras. La arquitectura en Next.js permite procesar las transacciones de forma segura mediante Serverless Functions, mientras que Supabase gestiona el historial de pedidos, estados de pago y la entrega de activos digitales tras la compra.",
  features: [
    "Sistema de carrito de compras y checkout integrado.",
    "Pasarela de pagos configurada para transacciones nacionales e internacionales.",
    "Gestión de inventario de servicios y productos digitales (presets, fotos en HD).",
    "Dashboard para el fotógrafo con métricas de ventas y tracking de pedidos.",
    "Galerías dinámicas con opción de compra directa por imagen.",
    "Automatización de facturación y confirmación de compra vía email.",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Supabase (Auth, Database, Storage)",
    "Pasarelas de Pago (Stripe/Mercado Pago)",
    "Zustand",
    "Tailwind CSS",
  ],
},
{
  id: 34,
  year: "2025",
  title: "Asynca",
  featured: true,
  subtitle: "Landing Page corporativa y plataforma de servicios de software",
  image: "/fotos-proyectos/34.png", 
  demoUrl: "https://asynca.site/", 
  githubUrl: "#",
  description:
    "Asynca es el ecosistema digital de mi marca personal de desarrollo web. El sitio funciona como una plataforma de servicios de software de alto rendimiento, diseñada para captar clientes corporativos y emprendedores que buscan soluciones escalables. Está enfocado en convertir visitantes en leads mediante una narrativa técnica clara y una interfaz moderna que refleja profesionalismo y vanguardia tecnológica.",
  challenges:
    "El principal desafío fue lograr un equilibrio entre un diseño visualmente impactante y un rendimiento excepcional (Core Web Vitals). Al ser la carta de presentación de mi trabajo, era fundamental implementar técnicas avanzadas de SEO técnico y una arquitectura de componentes reutilizables que permitiera escalar el contenido de servicios y casos de éxito rápidamente.",
  solutions:
    "Desarrollé la plataforma utilizando Next.js para aprovechar el Static Site Generation (SSG), lo que garantiza tiempos de carga casi instantáneos. Implementé un sistema de gestión de contactos eficiente y utilicé Tailwind CSS junto con Shadcn/UI para mantener una consistencia visual impecable. La estructura está pensada para ser el núcleo donde convergen mis otros desarrollos como CRM y E-commerce.",
  features: [
    "Presentación de servicios especializados (Frontend, E-commerce, CRM personalizados).",
    "Blog técnico integrado para posicionamiento de marca y autoridad en el sector.",
    "Sistema de agendamiento y formularios de contacto con validación avanzada.",
    "Optimización SEO avanzada (Metatags dinámicos, JSON-LD, Sitemap).",
    "Sección de portfolio dinámico que consume datos en tiempo real.",
    "Arquitectura modular preparada para la expansión de servicios internacionales.",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Shadcn/UI",
    "Vercel Analytics",
  ],
},
{
  id: 35,
  year: "2025",
  title: "AdoptaSanJuan",
  subtitle: "App de adopción de animales estilo Tinder",
  image: "/fotos-proyectos/35.PNG",
  demoUrl: "https://www.adoptasanjuan.site/",
  githubUrl: "#",
  description:
    "AdoptaSanJuan es una plataforma que reinventa la adopción de animales con una experiencia tipo Tinder: los usuarios descubren mascotas en adopción mediante un sistema de swipe intuitivo y dinámico. La app conecta a refugios y rescatistas de San Juan con potenciales adoptantes, facilitando el match entre las personas y los animales que buscan un hogar.",
  challenges:
    "El principal desafío fue diseñar una mecánica de swipe fluida y atractiva que funcionara perfectamente en dispositivos móviles, replicando la experiencia adictiva de las apps de citas pero aplicada a la adopción responsable. Además, había que estructurar los perfiles de los animales con información clara y gestionar el flujo de contacto entre adoptantes y refugios.",
  solutions:
    "Implementé una interfaz de tarjetas con gestos de swipe y animaciones suaves mediante Framer Motion, garantizando una experiencia táctil natural. La arquitectura en Next.js asegura tiempos de carga rápidos y un diseño 100% responsive, mientras que los perfiles de los animales presentan fotos, características y datos de contacto del refugio para concretar la adopción de forma directa.",
  features: [
    "Sistema de swipe estilo Tinder para descubrir animales en adopción",
    "Perfiles detallados de mascotas con fotos y características",
    "Match y contacto directo con refugios y rescatistas",
    "Animaciones fluidas e interacciones táctiles con Framer Motion",
    "Diseño 100% responsive optimizado para mobile",
    "Enfoque local en la comunidad de San Juan",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
},
{
  id: 36,
  year: "2025",
  featured: true,
  title: "CRM Comercial",
  subtitle: "Sistema de gestión a medida para comercio retail",
  image: "/fotos-proyectos/36.PNG",
  demoUrl: "https://crm-five-smoky.vercel.app/",
  githubUrl: "#",
  description:
    "CRM 100% adaptado a las necesidades de una tienda de comercio, diseñado para centralizar toda la operación del negocio en una sola plataforma. El sistema integra facturación electrónica con ARCA (ex AFIP), cobros mediante Mercado Pago, control de stock, gestión de clientes y planillas operativas, reemplazando procesos manuales y dispersos por un flujo de trabajo digital, ordenado y trazable.",
  challenges:
    "El mayor reto fue integrar la facturación electrónica con ARCA respetando la normativa fiscal y vincular la pasarela de pagos de Mercado Pago de forma segura, manteniendo la sincronización en tiempo real entre ventas, stock y caja. Además, había que construir un sistema totalmente a medida que se adaptara al flujo real del comercio, con planillas de stock dinámicas y una gestión de clientes que se vinculara a cada operación.",
  solutions:
    "Desarrollé una arquitectura fullstack que conecta la facturación con la API de ARCA para emitir comprobantes válidos y la API de Mercado Pago para procesar y conciliar los pagos automáticamente. Implementé un módulo de control de stock con planillas dinámicas que descuentan inventario en cada venta, junto a un CRM de clientes con historial de operaciones y datos de contacto. La interfaz se enfocó en la eficiencia operativa diaria, con tablas filtrables y formularios validados.",
  features: [
    "Facturación electrónica integrada con ARCA (ex AFIP)",
    "Cobros y conciliación automática con Mercado Pago",
    "Control de stock en tiempo real con planillas dinámicas",
    "Gestión de clientes (CRM) con historial y datos de contacto",
    "Descuento automático de inventario por cada venta",
    "Reportes y planillas operativas exportables",
    "Sistema 100% adaptado al flujo del comercio",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "API ARCA (AFIP)",
    "API Mercado Pago",
  ],
},
{
  id: 37,
  year: "2025",
  featured: true,
  title: "Chatbot Municipal",
  subtitle: "Gestión de reclamos por áreas con asistente conversacional",
  image: "/fotos-proyectos/37.PNG",
  demoUrl: "https://chatbot-virid-eight-71.vercel.app/",
  githubUrl: "#",
  description:
    "Chatbot diseñado para municipios que permite a los vecinos registrar y dar seguimiento a sus reclamos a través de una conversación guiada e intuitiva. Cada reclamo se deriva automáticamente al área responsable, mientras un panel de superadministrador centraliza la gestión de áreas, usuarios y el seguimiento integral de cada solicitud.",
  challenges:
    "El principal desafío fue diseñar un flujo conversacional que guiara al vecino de forma natural hasta clasificar correctamente su reclamo y derivarlo al área correspondiente. Además, había que construir un panel de administración con múltiples niveles de acceso que permitiera al superadministrador gestionar áreas, usuarios y el estado de cada reclamo sin fricciones.",
  solutions:
    "Desarrollé un asistente conversacional que categoriza los reclamos y los asigna automáticamente al área responsable. Implementé un sistema de roles con un panel de superadministrador para gestionar áreas, usuarios y permisos, junto a vistas de seguimiento por estado que permiten dar trazabilidad a cada solicitud desde su ingreso hasta su resolución, todo con una interfaz moderna y 100% responsive.",
  features: [
    "Asistente conversacional para registrar reclamos paso a paso",
    "Derivación automática del reclamo al área responsable",
    "Panel de superadministrador con gestión de áreas y usuarios",
    "Sistema de roles y control de acceso por nivel",
    "Seguimiento de reclamos por estado y categoría",
    "Trazabilidad completa desde el ingreso hasta la resolución",
    "Diseño moderno y 100% responsive",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Framer Motion",
  ],
},
{
  id: 38,
  year: "2025",
  featured: true,
  title: "Samsa Configurator",
  subtitle: "Configurador 3D de maletas personalizables",
  image: "/fotos-proyectos/38.PNG",
  demoUrl: "https://samsa-configurator.vercel.app/",
  githubUrl: "#",
  description:
    "Configurador 3D interactivo que permite personalizar una maleta en tiempo real sobre un modelo tridimensional. El usuario puede modificar colores, materiales y detalles de la maleta y ver los cambios reflejados al instante sobre el modelo 3D, logrando una experiencia de compra inmersiva y diferencial.",
  challenges:
    "El principal desafío fue renderizar un modelo 3D en el navegador con buen rendimiento y permitir su personalización en tiempo real sin sacrificar fluidez. Había que sincronizar las opciones del configurador (colores, materiales, texturas) con el modelo, gestionar la iluminación y los controles de cámara, y mantener una experiencia ágil tanto en desktop como en mobile.",
  solutions:
    "Implementé la escena 3D con React Three Fiber y Three.js, integrando controles de órbita para que el usuario rote y explore la maleta libremente. Cada opción del configurador actualiza dinámicamente los materiales del modelo mediante estado global, con iluminación y entorno cuidados para un acabado realista. La arquitectura en Next.js asegura una carga optimizada del modelo y una interfaz responsive.",
  features: [
    "Modelo 3D interactivo con rotación libre (controles de órbita)",
    "Personalización en tiempo real de colores y materiales",
    "Renderizado realista con iluminación y entorno cuidados",
    "Sincronización instantánea entre el configurador y el modelo",
    "Experiencia inmersiva optimizada para desktop y mobile",
    "Carga optimizada del modelo 3D",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Three.js",
    "React Three Fiber",
    "Tailwind CSS",
  ],
},



];

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "IGA - Instituto Gastronómico de las Américas",
    period: "Nov 2025 – Jun 2026",
    description:
      "Diseñé e implementé la migración completa de un sistema heredado hacia un ecosistema moderno con NestJS y Vite + TypeScript, soportando franquicias distribuidas en 5 países y más de 50 provincias de América. Desarrollé un administrador global de conexiones que centralizó la persistencia, reduciendo la latencia de las consultas y garantizando la integridad de los datos. Reconstruí desde cero los módulos de CRM (Interesados), Gestión de Cobros y Publicaciones con tableros Kanban y filtros dinámicos. Estandaricé los entornos con Docker para paridad con producción, gestionando despliegues y revisiones de código vía Bitbucket bajo metodología Scrum y seguimiento en Jira, colaborando con QA para entregas continuas sin regresiones.",
    current: true,
  },
  {
    title: "Web Performance & SEO Developer",
    company: "Easy Life (E-commerce Europa) · Contractor (Remoto)",
    period: "Sep 2024 – Mar 2025",
    description:
      "Lideré la estrategia de optimización de Core Web Vitals, logrando puntajes de 90/100 en Mobile y mejorando la retención de usuarios mediante auditorías técnicas. Extendí funcionalidades nativas de Shopify y WordPress desarrollando scripts personalizados en JavaScript y PHP para resolver limitaciones críticas de logística y UX. Asesoré a stakeholders traduciendo métricas complejas de Google Search Console y Analytics en decisiones de negocio rentables para el mercado europeo. Tech Stack: JavaScript, PHP, Google Search Console, Semrush.",
    current: false,
  },
  {
    title: "Full Stack Developer / Technical Lead",
    company: "Colorshop · Híbrido",
    period: "Nov 2022 – Presente",
    description:
      "Diseñé e implementé un sistema a medida para la digitalización del flujo de remitos, reemplazando el método manual por una solución automatizada que eliminó errores de transcripción y agilizó los tiempos de despacho. Creé una base de datos centralizada y un sistema de gestión para el almacenamiento y consulta de muestras de color por cliente, mejorando la fidelización en el punto de venta. Desarrollé un módulo para la gestión integral de mercadería, control de stock físico y automatización de pedidos de reposición, garantizando la trazabilidad de los productos. Introduje metodologías ágiles (Scrum) y capacité al personal, optimizando la comunicación interna y reduciendo los tiempos de entrega. Tech Stack: React, Node.js, SQL, Scrum, Git.",
    current: true,
  },
];

export const contactInfo: ContactInfo[] = [
  
  {
    icon: Mail,
    title: "Email",
    value: "leonel.gonzalez.dev@gmail.com",
    href: "mailto:leonel.gonzalez.dev@gmail.com",
  },
 
];
