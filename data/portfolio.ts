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
    subtitle: "Sistema Municipal Integral",
    image: "/fotos-proyectos/10.PNG?height=120&width=200",
    demoUrl: "https://reclamos-frontend.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/simu-frontend",
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
    subtitle: "Gestión y Venta de Tickets",
    image: "/fotos-proyectos/1.PNG?height=120&width=200",
    demoUrl: "https://eventop-frontend.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/eventop-frontend",
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
    subtitle: "Ecommerce de Bazar y Limpieza",
    image: "/fotos-proyectos/3.PNG?height=120&width=200",
    demoUrl: "https://frontend-la-marina.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/la-marina-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/boostly-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/aura-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/byas-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/mueblito-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/colorshop-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/souls-digitals-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/servisplit-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/isr-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/cuatro-a-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/clinica-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/space-burguer-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/amigos-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/truco-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/empreid-frontend",
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
    title: "Permay",
    subtitle: "Catálogo Web de Perfumería",
    image: "/fotos-proyectos/21.PNG?height=120&width=200",
    demoUrl: "https://perfumeria-tau.vercel.app/",
    githubUrl: "https://github.com/leonelgonzalezdev/empreid-frontend",
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
    githubUrl: "https://github.com/leonelgonzalezdev/autodev-frontend",
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
    githubUrl: "https://github.com/tuusuario/el-club-del-pancho",
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
