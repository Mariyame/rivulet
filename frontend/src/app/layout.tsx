import { Manrope , Sora } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

const sora = Sora({
  subsets:["latin"],
  variable: "--font-sora",
  display: "swap"
});


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"

})


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
         <AuthProvider>
            <main>{children}</main>
         </AuthProvider>
      </body>
    </html>
  )
}