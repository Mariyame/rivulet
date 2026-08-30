import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakata",
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
    <html lang="en">
      <body className={`${jakarta.variable} ${caveat.variable} antialiased`}>
        <main className="bg-background">{children}</main>
      </body>
    </html>
  )
}