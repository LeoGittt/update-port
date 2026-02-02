"use client";

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
