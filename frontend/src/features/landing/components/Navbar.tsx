'use client'
import  Image  from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X} from "lucide-react";
import { navigation } from "../../../data/content";
import {useState, useEffect } from "react";

export function Navbar() {
    const [open, setOpen ] = useState(false);
    useEffect(() => {
        if(!open)
            return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow =  "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return(
        <div className="container-page relative z-50 flex items-center justify-between gap-4 py-6">
            <div className="shrink-0">
                <Image 
                  src="./logo/rivulet-logo-dark.svg"
                  alt="Rivulet logo"
                  width={120}
                  height={50}
                  priority
                />
            </div>
            <div className="hidden lg:flex">
                <nav>
                    <ul className="flex gap-2">
                        {navigation.map((item) => (
                            <li 
                            key={item.name}
                            className={clsx( item.current && "bg-primary/10 rounded-xl text-primary", "flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-[#333333] transition-colors hover:bg-primary/10 hover:text-primary")}
                            >
                                <Link className="text-white"
                                href={item.href}
                                >
                                {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="hidden lg:flex gap-4 items-center">
                <Link className="text-white font-bold text-[15px] px-4.5 py-3 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06]" href="/login">Log in</Link>
                <Link href="/signup" className="px-5.5 py-3 rounded-3xl bg-sunbeam text-foreground font-bold text-[15px] transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06]">Create account</Link>
            </div>
            <button
                  type="button"
                  aria-controls="mobile-menu"
                  aria-label={open ? "Close menu" : "Open Menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((o) => !o)}
                  className="flex w-11 h-11 bg-white/10 rounded-full items-center justify-center shrink-0 lg:hidden"
                  >
                {open ? <X strokeWidth={2.5} className="text-white size-5"/> : <Menu strokeWidth={2.5} className="text-white size-5"/>}
              </button>
                <div
                    onClick={() => setOpen(false)}
                    className={`fixed inset-0 -z-10 bg-black/40 transition-opacity duration-300 min-[860px]:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
                />
              {open && (
              <aside 
                  id="mobile-menu"
                  className={clsx(
                            "absolute inset-x-5 top-[calc(100%-6px)] flex flex-col rounded-3xl bg-[#2F2350] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,.45)] transition duration-300 ease-out lg:hidden",
                            open ? "translate-x-0 scale-100 opacity-100" : "pointer-events-none -translate-y-3 scale-95 opacity-0"
                        )}
                  >
                    <nav 
                        aria-label="Mobile navigation"
                        className="mt-6">
                        <ul className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                    href={item.href}
                                    className={clsx( item.current && "", "flex h-13 items-center rounded-2xl px-4.5 text-[17px] font-bold text-white hover:bg-white/10")}
                                    onClick={() => setOpen(false)}
                                    >
                                    {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
              </aside>
              )}
        </div>
    )
}