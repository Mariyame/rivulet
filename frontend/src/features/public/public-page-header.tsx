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
        <section className="text-center">
            <h1 className="text-4xl font-bold font-heading tracking-tight text-white sm:text-5xl">
                {title}
            </h1>

            <p className="mx-auto sm:mt-5 mt-2 max-w-2xl text-base leading-5 text-white sm:text-lg">
                {description}
            </p>
            <div>
                {children}
            </div>
        </section>
    );
}

