"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

const FloatingCard = ({
    text,
    author,
    className,
    delay,
}: {
    text: string;
    author: string;
    className?: string;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
            opacity: { duration: 0.8, delay },
            scale: { duration: 0.8, delay },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`absolute hidden lg:block p-4 rounded-xl bg-white/[0.04] border border-white/8 shadow-[0_4px_24px_0_rgba(0,0,0,0.6)] max-w-[260px] z-0 backdrop-blur-sm ${className}`}
    >
        <div className="absolute -top-2.5 -left-2.5 bg-white/10 p-1.5 rounded-full border border-white/10">
            <MessageCircle
                className="w-3.5 h-3.5 text-white/60"
                fill="rgba(255,255,255,0.1)"
            />
        </div>
        <p className="text-gray-300 text-xs font-normal mb-3 leading-relaxed">
            &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center gap-2">
            <div className="h-px w-5 bg-white/15" />
            <p className="text-gray-500 text-[10px] font-medium tracking-wider">
                {author}
            </p>
        </div>
    </motion.div>
);

const stats = [
    { value: "5+", label: "Years scripting" },
    { value: "200M+", label: "Visits contributed" },
    { value: "50+", label: "Projects shipped" },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 z-10 overflow-hidden"
        >
            {/* Floating Testimonials */}
            <FloatingCard
                text="Delivered fast and did a great job. Trustworthy and professional. 🔥"
                author="sh4d3fr0sty"
                className="top-[28%] left-[8%] -rotate-3"
                delay={1.2}
            />
            <FloatingCard
                text="Got it done in 2 hours, and it works perfectly. 10/10!"
                author="imbillysilly"
                className="top-[40%] right-[8%] rotate-2"
                delay={1.4}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-2xl"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] text-gray-400 tracking-widest uppercase backdrop-blur-sm">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                        </span>
                        Available for commissions
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl sm:text-7xl md:text-9xl font-fugaz mb-3 text-white leading-none tracking-tight"
                >
                    Pow
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base text-gray-500 mb-10 px-4 tracking-widest uppercase"
                >
                    Roblox Scripter
                </motion.p>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4 mb-10 px-8"
                >
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                    <div className="h-1 w-1 rounded-full bg-white/20" />
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-8 sm:gap-14 mb-12"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <span className="text-2xl sm:text-3xl font-bold text-white font-fugaz tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-[10px] text-gray-600 tracking-wider uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-3 justify-center px-4"
                >
                    <a
                        href="#portfolio"
                        className="group relative bg-white text-black px-8 py-3 rounded-full font-bold text-sm shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(255,255,255,0.22)] hover:bg-gray-100 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">View My Work</span>
                    </a>
                    <a
                        href="#contact"
                        className="border border-white/15 px-8 py-3 rounded-full font-medium text-sm text-gray-400 hover:bg-white/[0.04] hover:border-white/25 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
            >
                <span className="text-[10px] text-white/20 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4 text-white/20" />
                </motion.div>
            </motion.div>
        </section>
    );
}
