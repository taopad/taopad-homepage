import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "./RocGroteskWideMedium.otf" })

export const metadata: Metadata = {
    title: 'TaoPad',
    description: 'TaoPad homepage',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`text-white ${myFont.className}`} style={{ backgroundImage: "url('/TaoBG20.jpg')" }}>
                {children}
            </body>
        </html>
    )
}
