export function MoreComingSoon() {
    return (
        <div className="flex flex-wrap items-center gap-5 rounded-[28px] border-2 border-dashed border-[#CFC6E0] p-8">
            <svg viewBox="20 8 80 108" width="36" height="49" aria-hidden="true">
                <path
                    d="M60 8 C60 8 20 50 20 76 A40 40 0 0 0 100 76 C100 50 60 8 60 8 Z"
                    fill="#FFC93C"
                />
            </svg>

            <div className="min-w-62 flex-1">
                <p className="text-xl font-bold">More drops on the way</p>
                <p className="mt-1.5 leading-relaxed text-[#5D5278]">
                    There is no publishing schedule. New articles appear when there is
                    something worth saying.
                </p>
            </div>
        </div>
    );
}