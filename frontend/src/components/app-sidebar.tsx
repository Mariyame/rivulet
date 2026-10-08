"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Sun, SquareCheck, Calendar, FolderKanban, Flag, Trophy, Timer, HelpCircle, Settings } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { Skeleton } from "@/components/ui/skeleton"
import { sidebarItems } from "@/data/dashboard"


// This is sample data.
const data = {
  navMain: [
    {
      title: "My day",
      url: "my-day",
      icon: (
        <Sun
        />
      ),
      isActive: true,
    },
    {
      title: "Tasks",
      url: "tasks",
      icon: (
        <SquareCheck
        />
      ),
    },
    {
      title: "Calendar",
      url: "calendar",
      icon: (
        <Calendar
        />
      )
    },
    {
      title: "Projects",
      url: "projects",
      icon: (
        <FolderKanban
        />
      )
    },
    {
      title: "Priorities",
      url: "#",
      icon: (
        <Flag
        />
      )
    },
    {
      title: "Focus Timer",
      url: "#",
      icon: (
        <Timer
        />
      ),
    },
    {
      title: "Rewards",
      url: "#",
      icon: (
        <Trophy
        />
      ),
    },
  ],
  navSecondary: [
    {
      name: "Settings",
      url: "/settings",
      icon: (
        <Settings
        />
      )
    },
    {
      name: "Help & Support",
      url: "#",
      icon: (
        <HelpCircle
        />
      ),
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth()

  const navMainItems = sidebarItems.navMain.map((item) => ({
    ...item
  }))

  const navSecondaryItems = sidebarItems.navSecondary.map((item) => ({
    ...item
  }))

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="flex items-center text-sidebar-primary-foreground">
        <Image 
            src="/logo/logo.svg"
            alt="TaskJoy Logo"
            width={120}
            height={60}
            className=''
        />
      </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainItems} />
        <NavSecondary items={navSecondaryItems} />
      </SidebarContent>
      <SidebarFooter>
        {user ? <NavUser user={user} /> :
        (
        <div className="flex w-fit items-center gap-4">
          <Skeleton className="size-10 shrink-0 rounded-full" />
          <div className="grid gap-2">
            <Skeleton className="h-4 w-37" />
            <Skeleton className="h-4 w-25" />
          </div>
        </div>
        )
        }
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
