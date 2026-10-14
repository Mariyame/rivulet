import Image from "next/image";
import TextLink from "@/components/text-link";


export function Footer() {
    return(
        <section id="Footer" className="w-full bg-dark-background py-6">

          <div className="container-page">
             <div className="flex justify-between items-center">
                <Image
                src="/logo/rivulet-logo-dark.svg"
                alt="Rivulet logo"
                width={100}
                height={50}
                />
                <small className="text-xs text-white">
                    © 2024 Rivulet.
                </small>

                <ul className="flex gap-2 text-xs">
                    <li>
                        <TextLink href="/privacy" className="text-white">Privacy</TextLink>
                    </li>
                     <li>
                        <TextLink href="/terms" className="text-white">Terms</TextLink>
                    </li>
                    <li>
                        <TextLink href="/contact" className="text-white">Contact</TextLink>
                    </li>
                </ul>

            </div>
          </div>
        </section>
    )
}