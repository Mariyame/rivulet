import { articles } from "@/data/blog";
import { PublicPageLayout } from "@/features/public/public-page-layout";
import { ArticleCard } from "@/features/blog/article-card";
import { MoreComingSoon } from "@/features/blog/more-coming-soon";

export default function BlogListPage() {

    const sorted = [...articles].sort((a, b) =>
        b.publishedAt.localeCompare(a.publishedAt),
    );

    const [featured, ...others] = sorted;

    return (
        <PublicPageLayout
            category="Blog"
            title="Notes from the river"
            description="Short articles about goals, habits and making progress without pressure."
        >
            <div className="container-page py-14">
                <header className="mb-10 max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Notes from the river
                    </h1>
                    <p className="mt-3 text-lg text-[#5D5278]">
                        Short articles about goals, habits and making progress without pressure.
                    </p>
                </header>

                <div className="space-y-7">
                    {featured && <ArticleCard article={featured} featured />}
                    {others.length > 0 && (
                        <div className="grid gap-7 md:grid-cols-2">
                            {others.map((article) => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </div>
                    )}

                    <MoreComingSoon />
                </div>
            </div>
        </PublicPageLayout>
    );
}