import type { LucideIcon } from "lucide-react";

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GalleryImage = {
  src: string;
  alt: string;
  height: string;
};
