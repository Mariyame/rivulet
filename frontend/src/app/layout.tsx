import { Plus_Jakarta_Sans, Caveat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/providers/AuthProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable:"--font-caveat",
  display: "swap"
})


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${jakarta.variable} ${caveat.variable} antialiased`}>
         <AuthProvider>
            <main className="bg-background">{children}</main>
         </AuthProvider>
      </body>
    </html>
  )
}