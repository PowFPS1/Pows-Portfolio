"use client";

import { motion } from "framer-motion";
import { User, Code, Zap } from "lucide-react";

const features = [
    {
        icon: <User className="w-6 h-6" />,
        title: "Who I Am",
        description:
            "I'm a passionate Full Stack Developer with a knack for building robust and scalable web applications.",
    },
    {
        icon: <Code className="w-6 h-6" />,
        title: "My Tech Stack",
        description:
            "Expertise in React, Next.js, TypeScript, Tailwind CSS, Supabase, and more.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Fast & Efficient",
        description:
            "I prioritize performance and user experience, ensuring your site loads fast and looks great.",
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
                    className="text-4xlmd:text-5xl font-fugaz text-center mb-16 text-glow"
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
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform">
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
