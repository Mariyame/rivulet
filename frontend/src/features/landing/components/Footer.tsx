import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import Form from "next/form";
import { footerColumns } from "../data";
import { FooterColumn } from "./FooterColumn";
import { GitHubIcon } from "@/public/icons/github";
import { EmailIcon } from "@/public/icons/email";
import { LinkedInIcon } from "@/public/icons/linkedin";
import { YoutubeIcon } from "@/public/icons/youtube";


export function Footer() {
    return(
        <section id="Footer" className="w-full py-6">
          <div className="container-page">
             <div className="grid grid-clos-1 md:grid-cols-5 gap-4 border-b border-white/15 py-4">
                    <div className="space-y-2">
                        <Image
                        src="/logo/logo.svg"
                        alt="TaskJoy logo"
                        width={100}
                        height={50}
                        />
                        <p className="flex gap-2 items-center">Plan, Focus, Achieve, Enjoy 
                            <Heart size={12} color="#ff6000"/>
                        </p>
                        <ul className="flex gap-2">
                            <li className="border border-border-primary p-2 rounded-full">
                                <Link href="">
                                    <GitHubIcon className="size-6 text-foreground"/>
                                </Link>
                            </li>
                            <li className="border border-border-primary p-2 rounded-full">
                                <Link href="">
                                <EmailIcon className="size-6 text-foreground"/>
                                </Link>
                            </li>
                            <li className="border border-border-primary p-2 rounded-full">
                                <Link href="">
                                <LinkedInIcon className="size-6 text-foreground"/>
                                </Link>
                            </li>
                            <li className="border border-border-primary p-2 rounded-full">
                                <Link href="">
                                <YoutubeIcon className="size-6 text-foreground"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                      {footerColumns.map((column) => (
                            <FooterColumn
                            key={column.title}
                            title={column.title}
                            links={column.links}
                            />
                        ))}
                    <div className="space-y-2">
                        <h3 className="font-bold">Get productivity tips</h3>
                        <p>Join our newsletter for inspiration and updates.</p>
                        <Form action="/newsletter" className="flex flex-row md:flex-col lg:flex-row gap-1 w-full"> 
                            <input name="email" className="flex-1 min-w-0 bg-white border border-white/15 rounded-md py-1 placeholder:text-sm pl-4" placeholder="Enter your email" />
                            <button type="submit" className="bg-primary rounded-md text-white text-sm px-3 py-2 shrink-0">Subscribe</button>
                        </Form>
                    </div>
            </div>
             <div className="text-center border-t border-border-primary py-4">
                <small>
                    © 2024 TaskJoy. All rights reserved ❤️.
                </small>
             </div>
          </div>

        </section>
    )
}