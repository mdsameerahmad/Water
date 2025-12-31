"use client";

import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInStagger({ children, className, stagger = 0.1 }: { children: React.ReactNode, className?: string, stagger?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: stagger } },
                hidden: {},
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function HeroText({ text, className, el: Wrapper = "h1" }: { text: string, className?: string, el?: React.ElementType }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(2px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            <Wrapper className="sr-only">{text}</Wrapper>
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index} className="inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
