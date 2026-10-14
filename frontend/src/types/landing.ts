import type { LucideIcon } from "lucide-react";

export type Nav = {
    name: string;
    href: string;
    current: boolean;
}

export type Feature = {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  title: string;
  description: string;
};

export type Step = {
    title: string;
    description: string;
    graphic: string
}

export type NavUser = {
  title: string;
  href: string;
  icon: LucideIcon
}

export type Testimonial = {
  id: number;
  fullname: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
};