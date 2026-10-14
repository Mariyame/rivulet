type PublicPageHeaderProps = {
    title: string;
    description: string;
    children?: React.ReactNode;
};

export function PublicPageHeader({
    title,
    description,
    children,
}: PublicPageHeaderProps) {

    return (
        <section className="mx-auto w-full max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg">
                {description}
            </p>
            <div>
                {children}
            </div>
        </section>
    );
}

