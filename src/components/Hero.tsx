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
        className={`absolute hidden lg:block p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] max-w-[280px] z-0 group hover:border-white/20 transition-colors ${className}`}
    >
        <div className="absolute -top-3 -left-3 bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/80">
                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 15 9 15C9 14 10 13 11 13H13C13.5523 13 14 12.5523 14 12V4C14 3.44772 13.5523 3 13 3H5C4.44772 3 4 3.44772 4 4V12C4 12.5523 4.44772 13 5 13C6.10457 13 7 13.8954 7 15V18C7 19.1046 6.10457 20 5 20H4C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H13C13.5523 22 14.017 21.5523 14.017 21ZM22 21V18C22 16.8954 21.1046 16 20 16H16.9999C16.9999 15 16.9999 15 16.9999 15C16.9999 14 17.9999 13 18.9999 13H20.9999C21.5522 13 21.9999 12.5523 21.9999 12V4C21.9999 3.44772 21.5522 3 20.9999 3H12.9999C12.4476 3 11.9999 3.44772 11.9999 4V12C11.9999 12.5523 12.4476 13 12.9999 13C14.1045 13 14.9999 13.8954 14.9999 15V18C14.9999 19.1046 14.1045 20 12.9999 20H11.9999C11.4476 20 10.9999 20.4477 10.9999 21C10.9999 21.5523 11.4476 22 11.9999 22H20.9999C21.5522 22 22 21.5523 22 21Z" />
            </svg>
        </div>
        <p className="text-gray-200 text-sm font-light mb-4 leading-relaxed">"{text}"</p>
        <div className="flex items-center justify-end gap-2">
            <div className="h-[1px] w-8 bg-white/20"></div>
            <p className="text-gray-400 text-xs font-bold tracking-wider uppercase">{author}</p>
        </div>
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
