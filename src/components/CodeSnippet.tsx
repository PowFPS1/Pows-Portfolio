"use client";

import { motion } from "framer-motion";
import HolographicCode from "./code-displays/HolographicCode";

export default function CodeSnippet() {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-fugaz text-glow">
                        Clean & <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Optimized Code
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        I write clear, customizable, and scalable Luau code.
                        Every system is made for performance,
                        ensuring your game runs smoothly with thousands of players.
                    </p>


                </motion.div>

                {/* Holographic Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <HolographicCode />
                </motion.div>
            </div>
        </section>
    );
}
