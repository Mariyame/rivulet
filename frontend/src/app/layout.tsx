import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main className="bg-background">{children}</main>
      </body>
    </html>
  )
}