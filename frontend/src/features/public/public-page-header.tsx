type PublicPageHeaderProps = {
    category: string;
    title: string;
    description: string;
    children?: React.ReactNode;
};

export function PublicPageHeader({
    category,
    title,
    description,
    children,
}: PublicPageHeaderProps) {

    return (
        <section className="container-page sm:px-16">
            <span className="inline-block rounded-full bg-sunbeam/20 px-3 py-1 text-sm font-medium text-sunbeam">
                {category}
            </span>
            <h1 className="text-4xl sm:mt-5 mt-2 font-bold font-heading tracking-tight text-white sm:text-5xl">
                {title}
            </h1>

            <p className="sm:mt-5 mt-2 max-w-2xl text-base leading-5 text-white sm:text-lg">
                {description}
            </p>
            <div>
                {children}
            </div>
        </section>
    );
}

