export { cn } from "cn"
import { User } from "@/types/auth"
import { BreadcrumbsItem } from "@/types/breadcrumbs"

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookie = parts.pop();
    if (cookie !== undefined) return decodeURIComponent(cookie.split(';')[0]);
  }
};

export function getBreadcrumbItems(pathname: string): BreadcrumbsItem[] {
  const segments = pathname.split("/").filter(Boolean)

  return segments.map((segment, index) => ({
    title: breadcrumbLabels[segment] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    ...(index < segments.length - 1
      ? { href: `/${segments.slice(0, index + 1).join("/")}` }
      : {}),
  }))
}

const breadcrumbLabels: Record<string, string> = {
  dashboard: "Dashboard",
  "my-day": "My Day",
  tasks: "Tasks",
  calendar: "Calendar",
  projects: "Projects",
  rewards: "Rewards",
  streaks: "Streaks",
  focus: "Focus Timer",
  settings: "Settings",
  notifications: "Notifications",
}

export const mapUser = (data: {
  id: number;
  name: string;
  email: string;
  avatar: string | null;
  created_at: string;
  email_verified_at: string
  two_factor_confirmed_at: string
}): User => {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      avatar: null,
      joined: new Date(data.created_at),
      verified: data.email_verified_at !== null,
      twoFA: data.two_factor_confirmed_at !== null,
      avatarFallback: () =>
        data.name.split(" ").map((char) => char[0]).join("").toUpperCase()
    }
}
