
import { testimonials } from "../data"
import { Star, Heart } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
    return(
        <section id="testimonials" className="w-full py-6">
            <div className="container-page p-4 bg-primary/5 border border-primary/10 rounded-4xl overflow-hidden">
             <p className="sm:flex relative text-2xl sm:text-4xl font-bold font-doodle text-center items-center justify-center py-4">Loved by our users
              <Heart color="#ff6000" className="absolute right-10 bottom-20"/>
             </p>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide">
               {testimonials.map((testimonial) => (
                <div 
                    key={testimonial.id}
                    className="shrink-0 w-[65%] sm:w-[45%] lg:w-[calc(25%-12px)] snap-center bg-white rounded-3xl p-4 inset-shadow-sm"
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
                        <p className="text-sm text-secondary">{testimonial.role}</p>
                    </div>
                   </div>
                </div>
               ))}
            </div>
            </div>
        </section>
    )
}