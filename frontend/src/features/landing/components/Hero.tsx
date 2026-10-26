import Image from "next/image";
import Link from "next/link";
import { ChangedText } from "./ChangedText";
import { Bob } from "./Bob";
import { ArrowUp, Star, CircleDashed } from "lucide-react";

export function Hero() {
        return (
            <section id="hero">
                <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 items-center container-page mx-auto">
                    <div className="text-left sm:py-16 py-6 space-y-4">
                        <div className="mx-4 space-y-6">
                            <p className="inline-flex gap-2.5 sm:justify-center sm:items-center px-3 py-2 rounded-2xl bg-white/10 font-bold text-sm text-[#E4DEEE] font-heading">
                                Turn Your Goals Into Progress
                            </p>
                            <h1 className="text-6xl text-white font-bold font-heading mt-5.5 text-[clamp(36px,5.6vw,82px)] leading-[1.02] tracking-[-2.5px]">
                                Make progress, 
        
                             <span className="flex text-gradient">
                                one step at a time.
                            </span>
                            </h1>
                            <ChangedText />
                            <p className="text-white max-w-100">
                                Just as a small stream continues to flow toward its destination, Rivulet helps you keep moving forward, one step at a time.
                            </p>
                        </div>

                        <div className="flex sm:flex-row flex-col sm:gap-4 gap-2 pt-4">
                                <Link href="/signup" className="flex items-center justify-center gap-10 bg-button-gradient px-8.5 h-14 rounded-full text-foreground font-bold text-18 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06]">
                                    Create your free account
                                </Link>
                                
                                <Link href="/login" className="flex items-center justify-center rounded-full border-2 border-white/35 text-white px-7 h-14 font-bold text-17 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06] ">
                                    Try a drop
                                </Link>
                        </div>
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-7 text-white">
                            Free to join. On iPhone and Android.
                        </p>
                    </div>
                     <div className="relative isolate mx-auto flex min-h-100 w-full max-w-120 items-center justify-center px-4 sm:min-h-[470px] sm:px-6 lg:min-h-[500px]">
                        <Bob
                            title="Level 3 · Brook"
                            subtitle="Water is rising"
                            icon={ArrowUp}
                            position="z-20 top-25 left-0 sm:top-32 sm:-left-2"
                            background="bg-sunbeam"
                        />

                        <Bob
                            title="7-day flow"
                            subtitle="Streak on"
                            icon={CircleDashed}
                            position="z-20 top-[175px] right-0 sm:top-[260px] sm:-right-2"
                            background="bg-tangerine"
                        />

                        <Bob
                            title="Rain check earned"
                            subtitle="Streak protected"
                            icon={Star}
                            position="z-20 bottom-12 left-0 sm:bottom-8 sm:-left-3"
                            background="bg-berry"
                        />

   
                        <Image
                            src="/images/landing/hero/hero-phone.svg"
                            alt="Rivulet app showing progress and achievements"
                            width={350}
                            height={450}
                            priority
                            className="relative z-10 -mt-4 h-auto w-[72%] max-w-72 sm:mt-0 sm:w-[82%] sm:max-w-87.5 flex-1"
                        />
                    </div>
                </div>
                <Image 
                src="/images/landing/rivulet-hero-waves.svg"
                alt="Rivulet hero waves"
                width={100}
                height={10}
                className="w-full sm:-mt-10 mt-0"
                />

            </section>
        );
}