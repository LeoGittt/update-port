import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description?: string;
} 