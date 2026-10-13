import { AnimatedWave } from "./doodles/AnimatedWave";

export function Quote() {
    return(
        <section id="how" className="w-full bg-light-gradient py-26 px-[clamp(20px,5vw,72px)]">
            <div className="container-page flex flex-col justify-center items-center">
              <blockquote className="text-[clamp(28px,4vw,52px)] leading-[1.18] tracking-[-1px] font-heading font-bold text-center text-white">
                Rome wasn&apos;t built in one day, but they <br/> were laying bricks <span className="text-gradient">every hour.</span>
              </blockquote>
              <AnimatedWave width={200} color="#FF8A3D" className="mx-auto mt-4"/>

            </div>
        </section>
    )
}