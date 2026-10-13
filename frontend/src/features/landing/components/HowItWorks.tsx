import { steps } from "@/data/content";
import Image from "next/image";

export function HowItWorks() {
    return(
        <section id="how" className="w-full bg-background pt-12 px-[clamp(20px,5vw,72px)] pb-32">
            <div className="container-page mx-auto">
                <div className="text-center">
                    <p 
                    className="text-[14px] text-berry uppercase tracking-[2.4px] font-bold">
                    How it works
                    </p>
                    <h2 className="my-3.5 mx-auto font-heading font-bold text-[clamp(34px,4.4vw,56px)] tracking-[-1.2px] leading-[1.08]">
                       Three small steps to a big result.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-7 mt-14">
                    {steps.map((step, index) => {
                        return (
                        <div
                            key={step.title}
                            className="max-w-100 flex flex-col sm:p-6 p-4 bg-white rounded-3xl shadow-[0_14px_40px_rgba(36,26,58,0.08)] 
                            transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.3,1.5,.5,1)]
                            hover:-translate-y-2.5 hover:-rotate-1
                            hover:shadow-[0_30px_60px_rgba(36,26,58,.18)]
                            motion-reduce:transition-none motion-reduce:hover:transform-none"
                        >
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-full flex h-30 items-center justify-center bg-peach-gradient rounded-2xl">
                                        <Image
                                            src={step.graphic}
                                            alt="A text field with the goal Write a book typed in, above a progress bar"
                                            width={200}
                                            height={200}
                                        />
                             
                                </div>
                
                                <div className="basis-1/2 text-left">
                                   
                                    <h3 className="font-heading font-bold sm:text-[23px] text-[18px] sm:tracking-[-.3px] mt-6">
                                         <span className="inline-flex text-sunbeam items-center justify-center w-8 h-8 rounded-full bg-[#0F2A38] mr-2">{index+1}</span>
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-[16px] leading-[1.6]">
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
