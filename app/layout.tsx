import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "BlueCrest - Premium Custom Water Bottle Labels",
    description: "Design elegant custom water bottle labels for your restaurant or brand.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-gradient-to-b from-white to-primary font-sans antialiased", inter.variable, playfair.variable)}>
                <Navbar />
                <main className="flex-1 min-h-[calc(100vh-4rem-6rem)]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
