import  Link  from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return(
        <section id="how" className="w-full py-6">
            <div className="container-page rounded-3xl p-4 inset-shadow-sm bg-primary">
                <div className="text-center">
                    <p 
                    className="inline-flex text-white text-2xl sm:text-3xl text-medium font-medium">
                    Ready to make progress (and enjoy the journey)?
                    </p>
                    <p className="text-white">
                        Join thousands of people who are building a more productive and happier life with TaskJoy.
                    </p>

                </div>
                <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="flex items-center justify-center gap-2 bg-white border border-primary/10 text-primary rounded-3xl py-2 px-4">
                        <Link href="/signup" className="font-bold text-sm">Get started free</Link>
                        <ArrowRight size={10}/>
                    </div>
                    <div className="flex items-center justify-center gap-2 bg-primary text-white border border-white rounded-3xl py-2 px-10 inset-shadow-sm">
                        <Link href="/login">Loin</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}