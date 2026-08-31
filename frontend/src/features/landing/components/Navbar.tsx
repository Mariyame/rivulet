'use client'
import  Image  from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "../data";
import {useState, useEffect } from "react"

export function Navbar() {
    const [open, setOpen ] = useState(false);
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    return(
        <div className="flex justify-between items-center">
            <div className="shrink-0">
                <Image 
                  src="./logo/logo.svg"
                  alt="TaskJoy logo"
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
                                <Link 
                                href={item.href}
                                >
                                {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="hidden lg:flex gap-4">
                <button className="bg-white border border-white/10 rounded-3xl py-1 px-4 inset-shadow-sm">
                    <Link href="/login">Login</Link>
                </button>

                <button className="flex items-center gap-2 bg-primary border border-primary/10 text-white rounded-3xl py-1 px-4">
                    <Link href="/started">Get started free</Link>
                    <ArrowRight size={15}/>
                </button>
            </div>
            
              <button
                  className="lg:hidden"
                  aria-controls="mobile-menu"
                  aria-label="Open menu"
                  aria-expanded={open}
                  onClick={() => setOpen(true)}
                  >
                <Menu color="#ff6000" strokeWidth={4}/>
              </button>
              <aside 
                  id="mobile-menu"
                  className={clsx(
                            "fixed z-50 bg-menu-background border-t border-[#ff6000]/10 shadow-[0_12px_40px_rgba(255,96,0,0.08)] text-white w-80 h-screen right-0 top-0 py-10 transition-transform duration-300 ease-in-out",
                            open ? "translate-x-0" : "translate-x-full"
                        )}
                  >
                    <button
                        className="absolute right-0 top-2 py-2 px-4 md:px-10"
                        aria-label="Close Menu"
                        onClick={() => setOpen(false)}
                        >
                        <X color="#ff6000" strokeWidth={4}/>
                    </button>
                    <nav 
                        aria-label="Mobile navigation"
                        className="mt-6">
                        <ul className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link 
                                    href={item.href}
                                    className={clsx( item.current && "bg-primary/10 rounded-xl text-primary", "flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-[#333333] transition-colors hover:bg-primary/10 hover:text-primary")}
                                    onClick={() => setOpen(false)}
                                    >
                                    {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
              </aside>
        </div>
    )
}