"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

// Placeholder data - update with your actual process steps
const steps = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Let's Get In Touch",
        description: "Start by messaging me through my discord to discuss your ideas, vision, and requirements.",
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Get your ideas",
        description: "Tell me your ideas and vision, and I’ll create functional systems that exceed your expectations.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "Start Development",
        description: "I turn your ideas and vision into a scalable system, ready to use.",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "And Hand Over",
        description: "Receive a fully tested, polished, and high quality system based on your needs, with support.",
    },
];

export default function Process() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-fugaz text-center mb-16 text-glow"
                >
                    My Process
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors backdrop-blur-sm"
                        >
                            <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center text-white mb-6 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                {step.icon}
                            </div>
                            <div className="absolute top-6 right-6 text-6xl font-fugaz text-white/5 pointer-events-none select-none">
                                {index + 1}
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
