"use client"

import { testimonials } from "../../../data/content"
import { Star, Heart } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react"

export function Testimonials() {
    const [activeIndex, setActiveIndex ] = useState(0)
    return(
        <section id="testimonials" className="w-full py-6">
            <div className="container-page p-4 bg-primary/5 border border-primary/10 rounded-4xl overflow-hidden">
             <p className="relative flex lg:hidden gap-2 text-2xl font-bold font-doodle text-center items-center justify-center py-4">
                Loved by our users
              <Heart color="#ff6000"/>
             </p>

            <div 
               onScroll={(e) => {
                const container = e.currentTarget;
                const index = Math.round(container.scrollLeft / container.clientWidth);
                setActiveIndex(index)
               }}
               id="testimonials-scroll"
               className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory scrollbar-hide">
                <p className="relative hidden lg:flex gab-1 text-3xl font-bold font-doodle items-center justify-center py-4 shrink-0 w-[85%] md:w-[calc(33%-16px)] lg:w-[calc(25%-12px)]">
                    Loved by <br/> our users
                <Heart color="#ff6000"/>
                </p>
               {testimonials.map((testimonial) => (
                <div 
                    key={testimonial.id}
                    className="shrink-0 w-[85%] md:w-[calc(33%-16px)] lg:w-[calc(25%-12px)] snap-center bg-white rounded-3xl p-4 inset-shadow-sm"
                    >
                    <p>{testimonial.content}</p>
                     <div className="flex items-center gap-1 py-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                size={12}
                                color="#F8C44F"
                                fill={index < 5 ? "#F8C44F" : "transparent"}
                            />
                        ))}
                    </div>
                   <div className="flex gap-2">
                    <Image 
                       src={testimonial.avatar}
                       alt={testimonial.fullname}
                       width={40}
                       height={40}
                       className="rounded-full"
                    />
                    <div className="">
                        <p className="font-bold">{testimonial.fullname}</p>
                        <p className="text-sm text-foreground">{testimonial.role}</p>
                    </div>
                   </div>
                </div>
               ))}
                </div>
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {testimonials.map((testimonial, index) => (
                        <button
                        key={testimonial.id}
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
                        className={clsx(activeIndex === index ? "w-5 bg-primary" : "bg-primary/30", "size-2 rounded-full transition-all")}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}