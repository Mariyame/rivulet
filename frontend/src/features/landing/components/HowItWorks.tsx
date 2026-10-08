import { steps } from "@/data/content";
import clsx from "clsx";
import Image from "next/image";


export function HowItWorks() {
    return(
        <section id="how" className="w-full py-6">
            <div className="container-page sm:max-w-4xl mx-auto">
                <div className="text-center space-y-4">
                    <p 
                    className="inline-flex bg-primary/10 text-medium text-primary font-semibold uppercase rounded-full px-4 py-1">
                    How it works
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold">
                        Start your productivity journey in <span className="text-primary">3 simple steps</span>
                    </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 py-6 sm:gap-8 lg:gap-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                        <div
                            key={step.title}
                            className="flex flex-col items-start sm:items-center text-start sm:text-center"
                        >
                            <div className="relative flex flex-row sm:flex-col items-center gap-10 sm:gap-1">
                                <div className="relative flex items-center justify-center h-25 w-25 sm:h-40 sm:w-40 lg:h-45 lg:w-45">
                                    <div className={clsx(step.class, "absolute inset-0")} />
                                    <Icon className="relative z-10 h-25 w-25 sm:h-40 sm:w-40 md:h-45 md:w-45" />
                                </div>
                                <Image 
                                    src="/images/landing/arrows.png"
                                    alt="Smiley star"
                                    width={80}
                                    height={50}
                                    className={clsx( index === steps.length -1 && "hidden", "absolute left-25 sm:left-full  top-19 w-10 z-30 rotate-140 sm:rotate-45")}
                                    />
                                <div className="mx-4 basis-1/2">
                                    <h3 className="mt-4 font-bold">{step.title}</h3>
                                    <p className="mt-1 text-[#6B665F]">
                                    {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
