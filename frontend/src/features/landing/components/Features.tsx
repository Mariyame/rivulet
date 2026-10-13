import { features } from "../../../data/content";
import clsx from "clsx";

export function Features() {
    return(
        <section id="Feature" className="w-full bg-background py-12">
            <div className="container-page">
                <div className="text-center">
                    <p 
                    className="text-[14px] text-berry uppercase tracking-[2.4px] font-bold">
                    Features
                    </p>
                    <h2 className="my-3.5 mx-auto font-heading font-bold text-[clamp(34px,4.4vw,56px)] tracking-[-1.2px] leading-[1.08]">
                       Everything you need to keep dropping.
                    </h2>
                </div>
                <div className="grid  sm:grid-cols-4 grid-cols-1 justify-center text-center gap-6 py-6">
                {features.map((feat) => {
                    const Icon = feat.icon;
                    return(
                        <div
                        key={feat.title}
                        className="flex flex-col gap-2 items-center bg-white p-6 rounded-[28px]
                        transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.3,1.5,.5,1)] 
                        hover:-translate-y-2.5 hover:-rotate- hover:shadow-[0_30px_60px_rgba(36,26,58,.18)] 
                        motion-reduce:transition-none motion-reduce:hover:transform-none"
                        >
                        <div className={clsx(feat.bgColor ,"rounded-full p-2")}>
                        <Icon size={35} color={feat.color}/>
                        </div>
                        <h4 className="font-bold font-heading ">
                            {feat.title}
                        </h4>

                        <p>
                            {feat.description}
                        </p>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}












       {/* <svg viewBox="0 0 400 120" className="w-full max-w-md">
                    <defs>
                        <path
                        id="text-curve"
                        d="M 40 40 Q 200 0 360 30"
                        fill="none"
                        />
                    </defs>

                    <text className="fill-current text-3xl font-bold">
                        <textPath href="#text-curve" startOffset="50%" textAnchor="end">
                           Everything you need to stay productive
                        </textPath>
                    </text>
                    </svg> */}