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

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; highlight?: boolean }
  | { type: "pullQuote"; text: string }
  | { type: "orderedList"; items: { title: string; text: string }[] }
  | { type: "callout"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date (YYYY-MM-DD) */
  publishedAt: string;
  readingTimeMinutes: number;
  source?: { label: string; url: string; platform: string };
  blocks: Block[];
}

export type CallToActionProps = {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
};

export type ArticleCardProps = {
    article: Article;
    featured?: boolean;
};