'use client'

import { useState } from "react";
import { steps } from "@/data/content";
import Image from "next/image";
import  Link  from "next/link";
import  TextLink  from "@/components/text-link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export default function GetStarted() {
    const [activeStep ] = useState(0)
    return(
        <section id="how" className="w-full py-12">
            <div className="container-page sm:max-w-4xl flex flex-col items-center space-y-4">
                <Image 
                    src="/logo/logo.svg"
                    alt="Rivulet Logo"
                    width={200}
                    height={100}
                    className=''
                />
                <div className="text-center">
                      <h2 
                    className="text-3xl font-bold">
                    Let&apos;s get you started!
                    </h2>
                    <p className="">
                        Three simple steps to a more organized and productive you.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 sm:grid-cols-3 items-center gap-6 py-6">
                    {steps.map((step) => {
                    
                        return (
                        <div
                            key={step.title}
                            className="flex flex-col text-center bg-white py-6 rounded-3xl"
                        >
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center h-55 w-55">
                                 
                                </div>
              
                                <div className="mx-4 basis-1/2">
                                    <h3 className="font-bold">{step.title}</h3>
                                    <p className="mt-1 text-[#6B665F]">
                                    {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
                <div className="flex justify-center items-center gap-2">
                    {steps.map((step, index) => (
                        <button
                        key={step.title}
                        type="button"
                        aria-label={`Go to testimonial ${index + 1}`}
                        onClick={() => {
                            const container = document.getElementById("testimonials-scroll");

                            container?.children[index]?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "center",
                            });
                        }}
                        className={clsx(activeStep === index ? "bg-primary" : "bg-primary/30", "size-2 rounded-full transition-all")}
                        />
                    ))}
                </div>
                <Link href='/dashboard'
                className="w-80 py-3 text-xl bg-primary text-primary-foreground hover:bg-primary/80 inline-flex gap-6 shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
                >
                    Next
                    <ArrowRight size={25}/>
                </Link>
                <TextLink href='/dashboard' className="text-muted-foreground">
                 Skip for now
                </TextLink>
            </div>
        </section>        
        
    )
}