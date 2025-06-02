import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonel Gonzalez | Frontend Developer",
  description: "Portfolio profesional de Leonel Gonzalez, desarrollador frontend especializado en React, Next.js y TypeScript",
  keywords: ["desarrollador frontend", "React", "Next.js", "TypeScript", "JavaScript", "web development"],
  authors: [{ name: "Leonel Gonzalez" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://tu-dominio.com" />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-white">
          Saltar al contenido principal
        </a>
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
