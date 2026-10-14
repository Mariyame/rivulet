import  Link  from "next/link";
import Image from "next/image"


export function CTA() {
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
                         <Link href="/login" className="flex flex-col py-6.5 items-center justify-center rounded-[18px] border-2 border-white/35 text-white px-7 h-15 font-bold text-17 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06] ">
                            <span className="font-semibold text-[11px] uppercase tracking-[1px]">Download on the</span>
                            <span className="font-bold text-[17px]">App Store</span>
                        </Link>
                        
                        <Link href="/login" className="flex flex-col py-6.5 items-center justify-center rounded-[18px] border-2 border-white/35 text-white px-7 h-15 font-bold text-17 transition duration-200 hover:-translate-y-0.75 hover-scale-[1.03] hover:brightness-[1.06] ">
                            <span className="font-semibold text-[11px] uppercase tracking-[1px]">Get it on</span>
                            <span className="font-bold text-[17px]">Google Play</span>
                        </Link>
                </div>

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