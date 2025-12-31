"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.jpeg"
                        alt="BlueCrest"
                        width={40}
                        height={40}
                        priority
                        className="h-10 w-auto rounded-full object-contain"
                    />
                    <span className="font-serif text-xl font-bold tracking-tight text-primary">
                        BlueCrest
                    </span>
                </Link>

                {/* DESKTOP NAV LINKS */}
                <div className="relative hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative py-1 text-sm font-medium transition-colors ${isActive
                                        ? "text-foreground"
                                        : "text-foreground/60 hover:text-foreground"
                                    }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.span
                                        layoutId="navbar-underline"
                                        className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-primary"
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 35,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA & MOBILE MENU TOGGLE */}
                <div className="flex items-center">
                    <Link href="/contact" className="hidden sm:inline-flex">
                        <Button>Get a Quote</Button>
                    </Link>
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-t"
                    >
                        <div className="container py-8 flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/contact" className="w-full max-w-xs">
                                <Button size="lg" className="w-full">Get a Quote</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
