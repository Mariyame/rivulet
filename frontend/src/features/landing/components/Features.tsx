import { features } from "../../../data/content";
import clsx from "clsx";

export function Features() {
    return(
        <section id="Feature" className="w-full py-6">
            <div className="container-page">
                <div className="text-center px-4">
                    <p className="text-3xl font-bold">
                        Everything you need to stay 
                        <span className="ml-2 text-primary">productive</span>
                    </p>
                    <p>Powerful features designed to make productivity fun and rewarding.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 justify-center text-center gap-2 md:gap-4 py-6">
                {features.map((feat) => {
                    const Icon = feat.icon;
                    return(
                        <div
                        key={feat.title}
                        className="flex flex-col gap-2 items-center bg-white pb-8 p-2 rounded-2xl inset-shadow-sm last:col-span-2 md:last:col-span-1"
                        >
                        <div className={clsx(feat.bgColor ,"rounded-full p-2")}>
                        <Icon size={35} color={feat.color}/>
                        </div>
                        <h4 className="font-bold">
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