"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { ContactInfo } from "@/types/contact";
import { useState } from "react";

interface ContactProps {
  isVisible: boolean;
  contactInfo: ContactInfo[];
}

export default function Contact({ isVisible, contactInfo }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("leonel.gonzalez.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contacto"
      className={`px-6 sm:px-12 lg:px-24 py-24 sm:py-32 border-t border-zinc-900/50 transition-all duration-1000 ease-out relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Minimal Header */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/50 border border-zinc-800/50">
            <Mail className="w-4 h-4 text-emerald-500/80" />
          </div>
          <h2 className="text-2xl font-light text-zinc-100 tracking-wide">
            Contacto<span className="text-emerald-500">.</span>
          </h2>
        </div>

        <div className="grid gap-16 sm:gap-20">
          <div className="space-y-8 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              ¿Tienes una idea? <br />
              <span className="text-zinc-500 font-light">Hagámosla realidad.</span>
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="mailto:leonel.gonzalez.dev@gmail.com"
                className="group flex items-center gap-4 text-zinc-100 hover:text-emerald-400 transition-colors duration-300"
              >
                <span className="text-xl sm:text-2xl font-light border-b border-zinc-700 group-hover:border-emerald-500/50 pb-1 transition-all">
                  leonel.gonzalez.dev@gmail.com
                </span>
                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button
                onClick={handleCopyEmail}
                className="group p-2.5 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-95"
                title="Copiar email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-zinc-900/50">
            {contactInfo.map((info) => {
              if (info.title === "Email") return null;
              
              const Icon = info.icon;
              return (
                <Link
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 p-3 rounded-xl hover:bg-zinc-900/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 group-hover:border-emerald-500/20 group-hover:text-emerald-400 text-zinc-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {info.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}