import { 
  Nav,
  Feature,
  Step,
  Testimonial
 } from "@/types/landing";

import { 
    ChartNoAxesCombined, 
    Trophy, 
    CircleCheck,
    Goal,
    Calendar,
} from 'lucide-react';

import { TrophyIllustration } from '../features/landing/components/steps/TrophyIllustration';
import { CalendarIllustration } from '../features/landing/components/steps/CalendarIllustration';
import { ClipboardIllustration } from '../features/landing/components/steps/ClipboardIllustration';
import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/moods.json' with { type: 'json' };

export  const navigation: Nav[] = [
    { name: 'Features', href: '#features', current: true },
    { name: 'How it works', href: '#how', current: false },
    { name: 'Pricing', href: '#pricing', current: false },
    { name: 'Blog', href: '#blog', current: false },
    { name: 'FAQ', href: '#faq', current: false },
];

export const features: Feature[] = [
    { 
        icon: CircleCheck, 
        color: "#ff6000", 
        bgColor: "bg-[#ff6000]/10", 
        title: "Smart Task Management", 
        description: "Organize and prioritize your tasks with ease."
    },
    { 
        icon: Calendar, 
        color: "#ff8fab", 
        bgColor: "bg-[#ff8fab]/10", 
        title: "Beautiful Calendar", 
        description: "See your plans at a glance and never miss a deadline."
    },
    { 
        icon: Goal, 
        color: "#c77dff", 
        bgColor: "bg-[#c77dff]/10", 
        title: "Goals & Habits", 
        description: "Turn your dreams into daily actions."
    },
    { 
        icon: Trophy, 
        color: "#F8C44F", 
        bgColor: "bg-[#F8C44F]/10", 
        title: "Rewards & Badges", 
        description: "Unlock achievements and stay motivated"
    },
    { 
        icon: ChartNoAxesCombined, 
        color: "#40C7BA", 
        bgColor: "bg-[#40C7BA]/10", 
        title: "Progress Insights", 
        description: "Celebrate your growth over time."
    },
];

export const steps: Step[] = [
    {
        icon: ClipboardIllustration,
        class: "bg-[#ff8fab]/15 rounded-[52%_37%_50%_47%/24%_74%_33%_35%]",
        title: "Add your tasks",
        description: "Capture everything you want to do, big or small."
    },
    {
        icon: CalendarIllustration,
        class: "bg-[#c77dff]/15 rounded-[45%_23%_61%_69%/73%_48%_21%_33%]",
        title: "Plan your day",
        description: "Organize, focus and build positive habits."
    },
    {
        icon: TrophyIllustration,
        class: "bg-[#40C7BA]/15 rounded-[36%_48%_23%_50%/68%_63%_53%_56%]",
        title: "Feel the joy",
        description: "Get things done and celebrate your progress!"
    }
];

const style = new Style(definition);
const sarah = new Avatar(style, {
  "seed": "Sarah"
});
const alex = new Avatar(style, {
  "seed": "Alex"
});
const emma = new Avatar(style, {
  "seed": "Emma"
});

export const testimonials: Testimonial[] = [
    {
        id: 1,
        fullname: "Sarah Johnson",
        role: "Product Designer",
        avatar: sarah.toDataUri(),
        rating: 5,
        content: "TaskJoy completely changed the way I organize my day. I'm more focused and actually enjoy being productive!",
    },
    {
        id: 2,
        fullname: "Alex Martinez",
        role: "Software Engineer",
        avatar: alex.toDataUri(),
        rating: 5,
        content: "The gamification makes such a difference! look forward to checking off my tasks every day.",
    },
    {
        id: 3,
        fullname: "Emma Wilson",
        role: "Content Creator",
        avatar: emma.toDataUri(),
        rating: 5,
        content: "Simple, beautiful and super motivating. TaskJoy helps me turn my goals into real progress.",
    }

];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

