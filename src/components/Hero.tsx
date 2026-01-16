"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import React from "react";

const FloatingCard = ({ text, author, className, delay }: { text: string; author: string; className?: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{
            opacity: { duration: 0.8, delay },
            scale: { duration: 0.8, delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute hidden lg:block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] max-w-[280px] z-0 group hover:border-white/20 transition-colors ${className}`}
    >
        <div className="absolute -top-3 -left-3 bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
            <MessageCircle className="w-4 h-4 text-white" fill="rgba(255,255,255,0.2)" />
        </div>
        <p className="text-gray-200 text-sm font-light mb-4 leading-relaxed">"{text}"</p>
        <div className="flex items-center justify-end gap-2">
            <div className="h-[1px] w-8 bg-white/20"></div>
            <p className="text-gray-400 text-xs font-bold tracking-wider uppercase">{author}</p>
        </div>
    </motion.div>
);

interface Particle {
    id: number;
    x: number;
    y: number;
}

export default function Hero() {
    const [bursts, setBursts] = React.useState<{ id: number; x: number; y: number }[]>([]);

    const handleBurst = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setBursts((prev) => [...prev, { id, x, y }]);

        // Cleanup burst after animation
        setTimeout(() => {
            setBursts((prev) => prev.filter((b) => b.id !== id));
        }, 1000);
    };

    return (
        <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden cursor-pointer"
            onClick={handleBurst}
        >
            {/* Burst Particles */}
            {bursts.map((burst) => (
                <div key={burst.id} className="absolute pointer-events-none" style={{ left: burst.x, top: burst.y }}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                            animate={{
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                                opacity: 0,
                                scale: 0
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute w-1 h-1 bg-blue-200 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                    ))}
                </div>
            ))}

            {/* Floating Testimonials */}
            <FloatingCard
                text="Delivered fast and did a great job. Trustworthy and professional. 🔥"
                author="sh4d3fr0sty"
                className="top-1/4 left-[10%] -rotate-6"
                delay={1.2}
            />
            <FloatingCard
                text="Got it done in 2 hours, and it works perfectly. 10/10!"
                author="imbillysilly"
                className="top-[42%] right-[10%] rotate-3"
                delay={1.4}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 pointer-events-none" // Ensure text doesn't block clicks excessively, though parent click works
            >
                <div className="pointer-events-auto"> {/* Re-enable pointer events for buttons/text selection */}
                    <span className="text-sm md:text-base tracking-[0.3em] text-white/60 mb-4 block animate-fade-in-up">
                        MY WORK
                    </span>
                    <h1 className="text-5xl md:text-8xl font-fugaz mb-6 text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                        Pow
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto mb-10">
                        A Roblox Scripter
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex gap-6 justify-center"
                    >
                        {/* Social / Contact Buttons could go here */}
                        <a href="#portfolio" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            View Portfolio
                        </a>
                        <a href="#contact" className="border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors duration-300">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 text-white/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
