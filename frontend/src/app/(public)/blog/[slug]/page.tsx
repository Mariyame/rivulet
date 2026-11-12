

import { article } from "@/data/blog";
import type { Block } from "@/types/landing";
import { PublicPageLayout } from "@/features/public/public-page-layout";
import { Markdown } from "@/lib/Markdown";
import { CTA } from "@/features/blog/call-to-action";


function BlockView({ block }: { block: Block }) {
    switch (block.type) {
        case "heading":
            return (
                <h2 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">
                    {block.text}
                </h2>
            );

        case "paragraph":
            return (
                <p className="text-base leading-8 text-foreground/90 sm:text-lg">
                    <Markdown text={block.text} />
                </p>
            );

        case "pullQuote":
            return (
                <blockquote className="my-4 border-l-4 border-sunbeam pl-5 text-xl font-semibold leading-snug sm:text-2xl">
                    <Markdown text={block.text} />
                </blockquote>
            );

        case "quote":
            return (
                <div
                    className={
                        block.highlight
                            ? "rounded-2xl border border-sunbeam bg-sunbeam/10 p-5 text-lg font-medium"
                            : "rounded-2xl border bg-muted/50 p-5 text-lg text-muted-foreground"
                    }
                >
                    “<Markdown text={block.text} />”
                </div>
            );

        case "orderedList":
            return (
                <ol className="space-y-4">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-4 rounded-2xl border p-5">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sunbeam text-sm font-bold text-foreground">
                                {i + 1}
                            </span>
                            <p className="leading-7">
                                <strong className="font-semibold">{item.title}</strong>{" "}
                                <span className="text-muted-foreground">
                                    <Markdown text={item.text} />
                                </span>
                            </p>
                        </li>
                    ))}
                </ol>
            );

        case "callout":
            return (
                <aside className="mt-4 rounded-2xl border border-sunbeam bg-amber-50 p-6 text-xl font-semibold leading-snug text-amber-950 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-100">
                    <Markdown text={block.text} />
                </aside>
            );
    }
}

export default function BlogPage() {

    return (
        <PublicPageLayout title={article.title} description={article.excerpt} category={article.category}>
            <div className="container-page">
                <article className="mx-auto max-w-3xl">
                    <div className="space-y-6">
                        {article.blocks.map((block, i) => (
                            <BlockView key={i} block={block} />
                        ))}
                    </div>
                    <CTA
                    title="Turn your one goal into small drops." 
                    description="Rivulet is free. Break your goal into small steps and keep going, one drop at a time."
                    buttonLabel="Create your free account"
                    buttonHref="/signup"
                    />
                </article>
            </div>
        </PublicPageLayout>
    );
}