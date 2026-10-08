import { 
    UserRound, 
    LockKeyhole, 
    Bell, 
    Sun, 
    HelpCircle, 
    LogOut, 
    LucideIcon, 
    Mail,
   Smartphone,
   Calendar,
   MonitorCog,
   Moon,
   Trophy,
   Timer,
   Flag,
   FolderKanban,
   SquareCheck,
   Settings
} from "lucide-react"


type AccountItem = {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  class: string;
};

type Settings = {
  account: AccountItem[];
  more: AccountItem[];
};
export const accountItems: Settings = {
 account: [
    {
        title: "Profile Information",
        description: "Update your name, email, and profile photo",
        url: "/edit-profile",
        icon: UserRound,
        class: "size-10 text-primary bg-primary/20 p-2 rounded-md"
    },
    {
        title: "Password & Security",
        description: "Change your password and security settings",
        url: "/security",
        icon: LockKeyhole,
        class: "size-10 text-(--teal) bg-(--teal)/20 p-2 rounded-md"
    },
    {
        title: "Notifications",
        description: "Manage your notification preferences",
        url: "/notifications",
        icon: Bell,
        class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
        title: "Theme",
        description: "Choose your preferred theme",
        url: "/theme",
        icon: Sun,
        class: "size-10 text-(--yellow) bg-(--yellow)/20 p-2 rounded-md"
    }
 ],
 more: [
    {
        title: "Help & Support",
        description: "Get help and contact us",
        url: "/support",
        icon: HelpCircle,
        class: "size-10 text-(--blue) bg-(--blue)/20 p-2 rounded-md"
    },
    {
        title: "Log Out",
        description: "Sign out from your account",
        url: "/logout",
        icon: LogOut,
        class: "size-10 text-(--pink) bg-(--pink)/20 p-2 rounded-md"
    }
 ]
};

export const notifications = [
    {
        id: 1,
        title: "Email Notifications",
        description: "Get updates about your tasks, rewards and more",
        icon: Mail,
        enabled: true
    },
    {  
        id: 2,
        title: "Push-Notifications",
        description: "Receive notifications on your device",
        icon: Smartphone,
        enabled: true
    },
    {
        id: 3,
        title: "Weekly Digest",
        description: "Get a summary of your progress",
        icon: Calendar,
        enabled: false
    }
];

export const modes = [
    {
        id: 1,
        title: "System",
        description: "Follow your device.",
        icon: MonitorCog,
        isActive: true
    },
    {  
        id: 2,
        title: "Light",
        description: "Bright and clean.",
        icon: Sun,
        isActive: false
    },
    {
        id: 3,
        title: "Dark",
        description: "Easy on the eyes.",
        icon: Moon,
        isActive: false
    }
];

export const sidebarItems = {
    navMain: [
    {
        id: 1,
        title: "Dashboard",
        url: "/dashboard",
        icon: MonitorCog,
        isActive: false,
        class: "size-20 text-(--blue) bg-(--blue)/20 p-2 rounded-md"
    },
    {
       id: 2,
        title: "Tasks",
        url: "/tasks",
        icon: Calendar,
        isActive: false,
        class: "size-10 text-(--green) bg-(--green)/20 p-2 rounded-md"
    },
    {
        id: 3,
        title: "Notifications",
        url: "/notifications",
        icon: Bell,
        isActive: false,
        class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 4,
      title: "My day",
      url: "my-day",
      icon: Sun,
      isActive: true,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 5,
      title: "Tasks",
      url: "tasks",
      icon: SquareCheck,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 6,
      title: "Calendar",
      url: "calendar",
      icon: Calendar,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 7,
      title: "Projects",
      url: "projects",
      icon: FolderKanban,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 8,
      title: "Priorities",
      url: "/priorities",
      icon: Flag,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 9,
      title: "Focus Timer",
      url: "/focus-timer",
      icon: Timer,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 10,
      title: "Rewards",
      url: "/rewards",
      icon: Trophy,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    }
],
  navSecondary: [
    {
      id: 1,
      title: "Settings",
      url: "/settings",
      icon: Settings,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
    {
      id: 2,
      title: "Help & Support",
      url: "/help",
      icon: HelpCircle,
      isActive: false,
      class: "size-10 text-(--purple) bg-(--purple)/20 p-2 rounded-md"
    },
  ]
}



