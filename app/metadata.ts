import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leonel González | Desarrollador Frontend",
  description: "Portfolio de Leonel González, desarrollador frontend especializado en React, Next.js y TypeScript",
  keywords: ["desarrollador frontend", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Leonel González" }],
  creator: "Leonel González",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    title: "Leonel González | Desarrollador Frontend",
    description: "Portfolio de Leonel González, desarrollador frontend especializado en React, Next.js y TypeScript",
    siteName: "Portfolio de Leonel González",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonel González | Desarrollador Frontend",
    description: "Portfolio de Leonel González, desarrollador frontend especializado en React, Next.js y TypeScript",
    creator: "@tu-usuario",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}; 