import { CallToActionProps } from "@/types/landing";

export function CTA({
    title,
    description,
    buttonLabel,
    buttonHref,
}: CallToActionProps) {
    return (
        <section className="mt-11 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-linear-to-br from-[#3A2A66] to-[#241A3A] p-7 text-white sm:p-11">
            <div className="min-w-62 flex-1">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#E4DEEE]">
                    {description}
                </p>
            </div>

            <a
                href={buttonHref}
                className="whitespace-nowrap rounded-full bg-linear-to-r from-[#FFC93C] via-[#FF8A3D] to-[#F9605A] px-7 py-4 text-lg font-bold text-[#241A3A] transition hover:opacity-90"
            >
                {buttonLabel}
            </a>
        </section>
    );
}