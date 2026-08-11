"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, Users, Zap, Trophy } from "lucide-react";

const cards = [
    {
        icon: Code2,
        label: "Background",
        body: "Started scripting at 12. What began as a hobby became a proper business — games I've contributed to have a combined 200M+ visits.",
        span: "col-span-1 md:col-span-2",
        accent: false,
    },
    {
        icon: Zap,
        label: "What I do",
        body: "Pretty much anything a Roblox game needs. Combat systems, parkour, game logic, custom tools, UI. I write Luau code that's stable and performs well at high player counts.",
        span: "col-span-1",
        accent: false,
    },
    {
        icon: Users,
        label: "How I work",
        body: "You describe what you need, I get to work and keep you updated throughout. Fast turnaround, reachable after delivery.",
        span: "col-span-1",
        accent: false,
    },
    {
        icon: Trophy,
        label: "Track record",
        body: "50+ completed commissions, multiple repeat clients, and reviews you can read on this page.",
        span: "col-span-1 md:col-span-2",
        accent: true,
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-28 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <span className="text-xs tracking-widest text-white/30 uppercase mb-3 block">
                        About
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-fugaz text-white text-glow">
                        Why Me?
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3"
                >
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                className={`${card.span} group relative rounded-2xl border p-6 sm:p-8 overflow-hidden transition-all duration-300 ${
                                    card.accent
                                        ? "bg-white/[0.05] border-white/15 hover:border-white/25"
                                        : "bg-white/[0.02] border-white/[0.06] hover:border-white/12 hover:bg-white/[0.04]"
                                }`}
                            >
                                {/* Top-right glow on accent card */}
                                {card.accent && (
                                    <div
                                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                                        style={{
                                            background:
                                                "radial-gradient(circle, #ffffff 0%, transparent 70%)",
                                            filter: "blur(20px)",
                                        }}
                                    />
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-white/60" />
                                    </div>
                                    <span className="text-[10px] text-white/35 uppercase tracking-widest font-medium">
                                        {card.label}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {card.body}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
