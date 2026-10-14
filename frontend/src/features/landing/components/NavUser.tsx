import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { navUser } from "@/data/content";
import { useAuth } from "@/hooks/useAuth";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";

export function NavUser () {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth()
  
    return (
        <div>
            <button
                  type="button"
                  aria-controls="mobile-menu"
                  aria-label={open ? "Close menu" : "Open Menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((o) => !o)}
                  className="flex w-11 h-11 bg-white/10 rounded-full items-center justify-center shrink-0"
                  >
                     <Avatar size="md">
                        <AvatarImage src={user?.avatar ?? undefined} className="grayscale" />
                        <AvatarFallback>{user?.avatarFallback?.()}</AvatarFallback>
                    </Avatar>
            </button>
             <div onClick={() => setOpen(false)}
                    className={`fixed inset-0 -z-10 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                />
              {open && (
              <aside 
                  id="nav-user"
                  className={clsx(
                            "absolute inset-x-5 top-[calc(100%-6px)] flex flex-col rounded-3xl bg-[#2F2350] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,.45)] transition duration-300 ease-out",
                            open ? "translate-x-0 scale-100 opacity-100" : "pointer-events-none -translate-y-3 scale-95 opacity-0"
                        )}
                  >
                    <Item key={user?.name}>
                    <ItemMedia>
                        <Avatar size="md">
                        <AvatarImage src={user?.avatar ?? undefined} className="grayscale" />
                        <AvatarFallback>{user?.avatarFallback?.()}</AvatarFallback>
                        </Avatar>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="text-white font-bold text-[16px]">{user?.name}</ItemTitle>
                        <ItemDescription className="text-white font-semibold text-[13px]">{user?.email}</ItemDescription>
                    </ItemContent>
                    </Item>
                    <Separator className="bg-white/10"/>
                    <nav 
                        aria-label="User navigation">
                        <ul className="flex flex-col gap-2">
                            {navUser.map((item) => {
                                const Icon = item.icon
                                return (
                                <li 
                                key={item.href}
>
                                    <Link 
                                    href={item.href}
                                    className="flex gap-2 h-13 items-center rounded-2xl px-4.5 text-[16px] font-bold text-white hover:bg-white/10"
                                    onClick={() => setOpen(false)}
                                    >
                                     <Icon className="text-white size-5"/>
                                    {item.title}
                                    </Link>
                                </li>
                                )}
                            )}
                        </ul>
                    </nav>
                    <Separator className="bg-white/10"/>
                    <div
                    className="flex gap-2 h-13 items-center rounded-2xl px-4.5 text-[17px] font-bold text-white hover:bg-white/10"
                    onClick={logout}
                    >
                    <LogOut />
                    Log out
                    </div>
              </aside>
              )}
        </div>
    )
}