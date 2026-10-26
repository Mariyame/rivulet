'use client'

import  Link  from "next/link";
import Image from "next/image";
import { useState } from "react";
import { InfoIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button";
import Mascot from "@/features/shared/Mascot";


export function CTA() {
    const [showMessage, setShowMessage] = useState(false)
    return(
        <section id="how" className="bg-light-gradient">
            <div className="flex flex-col justify-center items-center sm:py-28 py-12 px-[clamp(20px,5vw,72px)]">
                <Image
                src="/images/rivulet-mascot.svg"
                alt="Rivulet Mascot"
                width={60}
                height={80}
                />
                <div className="text-center">
                    <h2 
                    className="font-heading font-bold text-[clamp(38px,5.4vw,72px)] leading-[1.4] tracking-[-2px] mt-6.5 text-white">
                    Start with <span className="text-gradient"> one drop </span> today.
                    </h2>
                    <p className="text-white mt-5 font-medium text-[19px] leading-[1.6]">
                        Your first small step is only a few taps away. Let the stream carry you from there.
                    </p>
                </div>
                <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 pt-4 w-fill">
                        <Link href="/signup" className="flex items-center justify-center gap-10 bg-button-gradient px-8.5 h-14 rounded-full text-foreground font-bold text-18 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06]">
                            Create your free account
                        </Link>
                        
                        <Link href="/login" className="flex items-center justify-center rounded-full border-2 border-white/35 text-white px-7 h-14 font-bold text-17 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06] ">
                            Login
                        </Link>
                </div>
                <div className="flex sm:flex-row flex-col gap-2 pt-7.5">
                    <button
                    type="button"
                    onClick={() => setShowMessage(true)}
                    aria-label="App Store — coming soon"
                    className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                    <Image
                        src="/images/app-store.svg"
                        alt="Download on the App Store"
                        width={160}
                        height={48}
                    />
                    </button>

                    <button
                    type="button"
                    onClick={() => setShowMessage(true)}
                    aria-label="Google Play — coming soon"
                    className="cursor-pointer transition-opacity hover:opacity-80"
                    >
                    <Image
                        src="/images/google-play.svg"
                        alt="Get it on Google Play"
                        width={160}
                        height={48}
                    />
                    </button>
                </div>
                {showMessage && 
                <Alert className="max-w-lg mt-4">
                    <Mascot />

                    <AlertDescription>
                    We&apos;re working on it! Rivulet is coming soon to the App Store and Google Play.
                    </AlertDescription>
                </Alert>
                }
            </div>
            <Image 
                src="/images/rivulet-wave-footer-coral.svg"
                alt="Rivulet waves"
                width={10}
                height={10}
                className="w-full"
            />
        </section>
    )
}