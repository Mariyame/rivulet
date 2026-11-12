import { ArticleCardProps } from "@/types/landing";
import  Mascot  from "@/features/shared/Mascot";


function formatDate(isoDate: string) {
    return new Date(isoDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
    const href = `/blog/${article.slug}`;

    const meta = (
        <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#E8407E]/10 px-3.5 py-1.5 text-[13px] font-bold text-[#E8407E]">
                {article.category}
            </span>
            <span className="text-sm font-semibold text-[#5D5278]">
                {formatDate(article.publishedAt)} · {article.readingTimeMinutes} min read
            </span>
        </div>
    );

    const readMore = (
        <span className="inline-flex items-center gap-2 font-bold text-[#241A3A]">
            Read the article
            <span aria-hidden="true">→</span>
        </span>
    );

    if (featured) {
        return (
            <a
                href={href}
                className="flex flex-col overflow-hidden rounded-[32px] bg-white text-[#241A3A] shadow-[0_14px_40px_rgba(36,26,58,0.08)] transition hover:-translate-y-0.5 md:flex-row"
            >
                <div className="flex min-h-65 items-center justify-center bg-[radial-gradient(circle_at_50%_60%,#4A3380_0%,#2F2350_55%,#241A3A_100%)] md:min-h-[380px] md:basis-[46%]">
                    <Mascot size={120} title="" />
                </div>

                <div className="flex flex-1 flex-col justify-center gap-4 p-7 md:p-12">
                    {meta}
                    <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                        {article.title}
                    </h2>
                    <p className="text-[17px] leading-relaxed text-[#5D5278]">
                        {article.excerpt}
                    </p>
                    {readMore}
                </div>
            </a>
        );
    }

    return (
        <a
            href={href}
            className="flex flex-col gap-3 rounded-[28px] bg-white p-7 text-[#241A3A] shadow-[0_10px_30px_rgba(36,26,58,0.07)] transition hover:-translate-y-0.5"
        >
            {meta}
            <h3 className="text-xl font-bold leading-snug">{article.title}</h3>
            <p className="leading-relaxed text-[#5D5278]">{article.excerpt}</p>
            {readMore}
        </a>
    );
}