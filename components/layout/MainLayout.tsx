"use client"

import { ReactNode } from "react";
// import Background from "@/components/layout/Background"; 
import Aurora from "@/components/ui/aurora-background";

interface MainLayoutProps {
  children: ReactNode;
}

const AURORA_COLORS = ["#5227FF", "#7cff67", "#5227FF"];

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
