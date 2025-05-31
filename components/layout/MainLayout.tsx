import { ReactNode } from "react";
import Background from "@/components/layout/Background";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Background />
      <div className="relative z-10 max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
