import Image from "next/image";
import Link from "next/link";
import { 
    ArrowRight, 
    CirclePlay, 
    ChartNoAxesCombined, 
    Sparkles, 
    SquareCheckBig,
    Heart,
    BadgeCheck,
    Star
} from 'lucide-react';

export function Hero() {
        return (

            <section id="hero" className="py-10">

                <div className="grid sm:grid-cols-[1fr_2fr] grid-cols-1 items-center container-page mx-auto">
                    <div className="text-center sm:text-left py-4 sm:py-16 space-y-6">
                        <div className="mx-4 space-y-6">
                            <p className="inline-flex gap-2 justify-center items-center bg-primary/15 border border-primary/10 px-2 py-1 rounded-full text-sm font-medium">
                                Turn your tudos into little wins
                                <Sparkles 
                                size={15} 
                                color="#F8C44F"
                                fill="#F8C44F"
                                aria-hidden="true"
                                className="shrink-0"
                                />  
                            </p>
                            <h3 className="text-4xl font-bold">
                                Get the sh*t done. <br/>
                            <span className="text-4xl font-semibold text-primary">
                                Feel the joy.
                            </span>
                            </h3>

                            <p className="text-secondary mx-4">
                                TaskJoy helps you plan, focus and build positive habits - one task at a time.
                            </p>
                            <ul className="font-medium">
                                <li className="flex items-center gap-2">
                                    <SquareCheckBig size={15} color="#ff6000"/>
                                    <span>Stay organized</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <ChartNoAxesCombined size={15} color="#ff6000"/>
                                    <span>Make real progress</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <BadgeCheck size={15} color="#ff6000"/>
                                    <span>Unlock rewards</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-2 sm:gap-4 pt-4">
                                <Link href="/started" className="flex items-center justify-center gap-2 bg-primary border border-primary/10 text-white rounded-3xl py-1.5 px-4">
                                    Get started free
                                    <ArrowRight size={15}/>
                                </Link>
                                <Link href="/login" className="flex items-center justify-center gap-2 bg-white border border-white/10 rounded-3xl py-1.5 px-4 inset-shadow-sm">
                                    Watch video
                                    <CirclePlay size={15}/>
                                </Link>
                                
                        </div>
                        <p className="inline-flex items-center gap-2 text-sm pt-2 px-4">
                            <Heart size={15} color="#ff6000"/>
                            No credit card required
                        </p>
                    </div>
                    <div className="justify-items-end py-10">
                        <div className="relative w-full max-w-190 aspect-5/4">
                            {/* Decorative orange background */}
                            <div className="absolute inset-x-[5%] max-w-200 aspect-5/4 top-[15%] bottom-0 z-0 rounded-[71%_37%_11%_49%/77%_51%_27%_30%] bg-primary/20"/>
                            <div className="absolute max-w-200 aspect-5/4 top-[5%] bottom-0 z-10 rounded-[71%_37%_41%_29%/77%_51%_27%_30%] bg-primary/10"/>
                               <Image 
                               src="/images/landing/hero/small-steps-big-results.png"
                               alt="Small steps. Big results"
                               width={100}
                               height={50}
                               className="absolute right-0 "
                               />
                            <Image 
                               src="/images/landing/hero/star.svg"
                               alt="Smiley star"
                               width={80}
                               height={50}
                               className="absolute right-10 sm:right-[50%] bottom-0"
                               />
                                <Image
                                src="/images/landing/hero/dashboard-desktop.svg"
                                alt="TaskJoy productivity dashboard"
                                width={350}
                                height={100}
                                priority
                                className="absolute left-[4%] top-[12%] z-20 w-[70%] h-auto hidden sm:block"
                                />
                 
                                <Image
                                src="/images/landing/hero/dashboard-mobile.png"
                                alt=""
                                width={160}
                                height={180}
                                className="absolute right-35 sm:right-0 sm:bottom-0 z-30 w-[45%] sm:w-[35%] h-auto"
                                />
                        </div>
                    </div>
                </div>
                <div className="container-page flex flex-col items-center sm:items-start justify-items-center text-secondary text-xs text-center">
                    <p className="hidden sm:inline-flex">
                        Trusted by productive people around the world
                    </p>
                    <div className="flex items-center sm:justify-start justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            size={15}
                            color="#F8C44F"
                            fill="#F8C44F"
                        />
                        ))}
                        <p className="text-secondary text-xs">
                            <span className="font-bold text-foreground">4.9/5 </span>
                            from 1,200+ happy users
                        </p>
                    </div>
                </div>
            </section>
        );
}