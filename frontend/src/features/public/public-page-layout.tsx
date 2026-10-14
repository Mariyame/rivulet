import Link from "next/link";
import Image from "next/image";
import { PublicPageHeader } from "@/features/public/public-page-header";

type PublicPageLayoutProps = {
    title: string;
    description: string;
    children: React.ReactNode;
    headerContent?: React.ReactNode;
};

export function PublicPageLayout({
    title,
    description,
    children,
    headerContent,
}: PublicPageLayoutProps ) {
    return (
            <main className="flex min-h-screen flex-col bg-background">
                <div className="relative bg-[radial-gradient(circle_at_70%_20%,#3A2A66_0%,#241A3A_55%,#1B1330_100%)] text-white px-[clamp(20px,5vw,72px)] pb-25">
                    <header className="container-page flex justify-between py-6">
                        <Link
                            href="/"
                            aria-label="Rivulet — Home"
                            className="inline-flex items-center"
                            >
                            <Image
                                src="/images/logo/rivulet-logo-dark.svg"
                                alt="Rivulet logo"
                                width={140}
                                height={40}
                                priority
                            />
                            </Link>
                            <Link 
                            href="/"
                            className="py-3.5 px-5.5 rounded-4xl text-foreground font-bold text-[15px] bg-sunbeam"
                            >
                                Back to the app
                            </Link>
                    </header>
                    <PublicPageHeader
                        title={title}
                        description={description}>
                        {headerContent}
                    </PublicPageHeader>
               
                    <svg
                        className="absolute inset-x-0 -bottom-px h-10 w-full md:h-15"
                        viewBox="0 0 2400 60" preserveAspectRatio="none" aria-hidden="true"
                        >
                        <path
                            d="M0 34 Q150 0 300 34 T600 34 T900 34 T1200 34 T1500 34 T1800 34 T2100 34 T2400 34 L2400 60 L0 60 Z"
                            fill="#F6F3FA"
                        />
                    </svg>
                </div>

                <div className="container-page flex flex-col items-center justify-center py-12">
                   {children}
                </div>
                <footer className="bg-dark-background">
                    <div className="container-page flex items-center justify-between py-6">
                        <Link
                            href="/"
                            aria-label="Rivulet — Home"
                            className="inline-flex items-center"
                            >
                            <Image
                                src="/images/logo/rivulet-logo-dark.svg"
                                alt="Rivulet logo"
                                width={100}
                                height={40}
                                priority
                            />
                            </Link>
                            <ul className="flex gap-2 text-xs">
                                <li>
                                    <Link href="/privacy" className="text-white">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-white">Terms</Link>
                                </li>
                                <li>
                                    <Link href="/support" className="text-white">Support</Link>
                                </li>
                            </ul>
                     </div>   
                </footer>
            </main>
    )
}