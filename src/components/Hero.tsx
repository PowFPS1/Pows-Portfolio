"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const FloatingCard = ({ text, author, className, delay }: { text: string; author: string; className?: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{
            opacity: { duration: 0.8, delay },
            scale: { duration: 0.8, delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`absolute hidden lg:block p-6 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 max-w-[280px] z-0 ${className}`}
    >
        <p className="text-gray-300 text-sm italic mb-4">"{text}"</p>
        <p className="text-right text-gray-400 text-xs font-bold">- {author}</p>
    </motion.div>
);

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">

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
                className="top-1/3 right-[10%] rotate-3"
                delay={1.4}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
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
