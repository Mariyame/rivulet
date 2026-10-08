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
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    class: string;
    title: string;
    description: string;
}

export type Testimonial = {
  id: number;
  fullname: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
};