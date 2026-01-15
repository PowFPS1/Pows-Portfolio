"use client";

import { motion } from "framer-motion";
import { User, Code, Zap } from "lucide-react";

const features = [
    {
        icon: <User className="w-6 h-6" />,
        title: "Who I Am",
        description:
            "I am a 17 year old Roblox scripter with 5+ years of experience. I have contributed over 180+ million visits.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "What I Do",
        description:
            "Building customizable and scalable systems is my passion. I specialize in game logic, system architecture, and player experience tailored to your project needs.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Efficiency First",
        description:
            "I write clean, optimized Luau code made to handle high player counts and prevent lag.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-fugaz text-center mb-16 text-glow"
                >
                    Why Me?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm group"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-sans">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
