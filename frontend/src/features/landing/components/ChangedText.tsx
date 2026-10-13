'use client';

import { GOALS } from "@/data/content";
import { useEffect, useState } from "react";

export function ChangedText() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setI((n) => (n + 1) % GOALS.length), 3000);
        return () => clearInterval(id);
    },[])

    return(
        <p className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-4 gap-1 text-2xl font-bold text-white">
            <span className="font-heading font-bold clamp(20px,2.2vw,28px)">Today, I will</span>
            <span aria-live="off" className="relative inline-flex h-[1.6em] w-[min(15em,70vw)] bg-sunbeam/14 rounded-2xl px-4">
                <span key={i} className="absolute inset-y-0 left-4 flex animate-wordIn items-center whitespace-nowrap text-sunbeam">
                    {GOALS[i]}
                </span>
            </span>
        </p>
    )
}