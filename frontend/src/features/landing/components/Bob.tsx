import { ArrowUp, LucideIcon } from "lucide-react";
import { clsx } from "cn";

type BobProps = {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    position: string;
    background: string
}
export function Bob ({
    title, 
    subtitle, 
    icon: Icon = ArrowUp, 
    position ,
    background
  }: BobProps) {
    return (
        <div className={clsx(position, "absolute flex items-center sm:gap-2.5 gap-1.5 sm:py-2.5 py-1.5 sm:pr-4 sm:pl-3 sm:rounded-2xl  rounded-xl pr-2 pl-1.5 text-foreground bg-white shadow-[0 18px 40px rgba(0,0,0,.35)]")}>
            <span className={clsx(background, "sm:w-8.5 sm:h-8.5 w-6.5 h-6.5 sm:rounded-[12px] rounded-[8px] flex items-center justify-center")}>
            <Icon size={20}/>
            </span>
            <span className="flex flex-col">
            <span className="font-bold sm:text-[14px] text-[12px] leading-[1.2]">{title}</span>
            <span className="font-semibold text-[12px]">{subtitle}</span>
            </span>
        </div>
    )
}