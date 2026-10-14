import Image from "next/image";
import Link from "next/link";


export function Footer() {
    return(
        <footer id="Footer" className="w-full bg-dark-background py-6">

          <div className="container-page">
             <div className="flex justify-between items-center">
                <div className="shrink-0">
                <Link
                    href="/"
                    aria-label="Rivulet — Home"
                    className="inline-flex items-center"
                    >
                    <Image
                        src="/images/logo/rivulet-logo-dark.svg"
                        alt=""
                        width={100}
                        height={40}
                        priority
                    />
                </Link>
                </div>
                <small className="text-xs text-white">
                    © 2024 Rivulet.
                </small>

                <ul className="flex gap-2 text-xs">
                    <li>
                        <Link href="/privacy" className="text-white">Privacy</Link>
                    </li>
                     <li>
                        <Link href="/terms" className="text-white">Terms</Link>
                    </li>
                    <li>
                        <Link href="/support" className="text-white hover:text">Contact</Link>
                    </li>
                </ul>

            </div>
            </div>
       </footer>
    )
}