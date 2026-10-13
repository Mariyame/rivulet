import { 
  Nav,
  Feature,
  Step,
  Testimonial
 } from "@/types/landing";

import { 
    CircleCheck,
    Target,
    CalendarDays,
    Repeat,
    Timer,
    Waves,
    Trophy,
    Award,
    Sprout,
    Bell,
    TrendingUp,
    RotateCcw,
} from 'lucide-react';

import { Style, Avatar } from '@dicebear/core';
import definition from '@dicebear/styles/moods.json' with { type: 'json' };

export  const navigation: Nav[] = [
    { name: 'How it works', href: '#how', current: false },
    { name: 'Features', href: '#features', current: true },
    { name: 'Blog', href: '#blog', current: false },
    { name: 'FAQ', href: '#faq', current: false },
];

export const GOALS = [
  "read 10 pages",
  "walk for 15 minutes",
  "write one paragraph",
  "learn one new chord",
];

export const features: Feature[] = [
  {
    icon: CircleCheck,
    color: "#ff6000",
    bgColor: "bg-[#ff6000]/10",
    title: "Tasks, goals and habits",
    description:
      "One simple place for the things you do once, the things you do daily, and the big goals behind them.",
  },
  {
    icon: Target,
    color: "#8b5cf6",
    bgColor: "bg-[#8b5cf6]/10",
    title: "Big goals, broken into small steps",
    description:
      "Turn ambitious goals into clear, manageable tasks that make your next step feel achievable.",
  },
  {
    icon: CalendarDays,
    color: "#2563eb",
    bgColor: "bg-[#2563eb]/10",
    title: "A daily plan that feels doable",
    description:
      "Bring your priorities into one daily view and focus on what matters most today, without feeling overwhelmed.",
  },
  {
    icon: Repeat,
    color: "#0d9488",
    bgColor: "bg-[#0d9488]/10",
    title: "Habits that fit your life",
    description:
      "Create flexible routines, track recurring habits, and build consistency at a pace that works for you.",
  },
  {
    icon: Timer,
    color: "#6366f1",
    bgColor: "bg-[#6366f1]/10",
    title: "Focused work sessions",
    description:
      "Set aside time for one task, reduce distractions, and turn your intentions into focused action.",
  },
  {
    icon: Waves,
    color: "#0891b2",
    bgColor: "bg-[#0891b2]/10",
    title: "Watch your Rivulet grow",
    description:
      "See your small wins add up through a visual progress system inspired by a stream growing drop by drop.",
  },
  {
    icon: Trophy,
    color: "#d97706",
    bgColor: "bg-[#d97706]/10",
    title: "Earn rewards for making progress",
    description:
      "Collect experience points and unlock new levels as you complete tasks, nurture habits, and move toward your goals.",
  },
  {
    icon: Award,
    color: "#db2777",
    bgColor: "bg-[#db2777]/10",
    title: "Milestones and achievements",
    description:
      "Celebrate meaningful milestones and earn badges that recognize your effort, consistency, and growth.",
  },
  {
    icon: Sprout,
    color: "#16a34a",
    bgColor: "bg-[#16a34a]/10",
    title: "Progress without perfection",
    description:
      "Missed a day? Start again without guilt. Rivulet encourages you to return to your routines instead of giving up.",
  },
  {
    icon: Bell,
    color: "#ea580c",
    bgColor: "bg-[#ea580c]/10",
    title: "Gentle, customizable reminders",
    description:
      "Get timely nudges for the tasks and habits that matter, with reminders designed to support you rather than overwhelm you.",
  },
  {
    icon: TrendingUp,
    color: "#7c3aed",
    bgColor: "bg-[#7c3aed]/10",
    title: "Progress you can understand",
    description:
      "Discover patterns in your activity, track goal completion, and see how your daily efforts contribute to long-term growth.",
  },
  {
    icon: RotateCcw,
    color: "#0f766e",
    bgColor: "bg-[#0f766e]/10",
    title: "Weekly reflection and reset",
    description:
      "Look back at what went well, learn from what didn't, and set realistic priorities for the week ahead.",
  },
];

export const steps: Step[] = [
    {
        title: "Name your big goal",
        description: "Write down the thing you are heading toward, however big it feels today.",
        graphic: "/images/landing/how-1-name-your-goal.svg"
    },
    {
        title: "Break it into drops",
        description: "Turn it into tiny tasks you can finish in minutes. So small that starting feels easy.",
        graphic: "/images/landing/how-2-break-into-drops.svg"
    },
    {
        title: "Keep the stream flowing",
        description: "Finish a drop each day, build your streak, and watch your trail grow toward the goal.",
        graphic: "/images/landing/how-3-keep-your-flow.svg"
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
        content: "Rivulet completely changed the way I organize my day. I'm more focused and actually enjoy being productive!",
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
        content: "Simple, beautiful and super motivating. Rivulet helps me turn my goals into real progress.",
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

