"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="text-sm md:text-base tracking-[0.3em] text-white/60 mb-4 block animate-fade-in-up">
                    MY WORK
                </span>
                <h1 className="text-5xl md:text-8xl font-fugaz mb-6 text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    PowFPS1
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto mb-10">
                    Full Stack Developer
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
                className="absolute bottom-10"
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
