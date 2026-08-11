"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Reach out on Discord",
        description:
            "Message me with what you're building, your rough timeline, and budget. The more detail you give me, the faster we can get started.",
    },
    {
        num: "02",
        title: "We lock in the scope",
        description:
            "I'll ask follow up questions to make sure I understand exactly what you need.",
    },
    {
        num: "03",
        title: "I build it",
        description:
            "I write the code, test it properly, and keep you updated as I go.",
    },
    {
        num: "04",
        title: "You get a clean handoff",
        description:
            "You get a fully tested, polished system ready to go. If anything needs tweaking after delivery, I offer 5 free revisions, no questions asked.",
    },
];

export default function Process() {
    return (
        <section id="process" className="py-16 sm:py-28 px-4 relative">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <span className="text-xs tracking-widest text-white/30 uppercase mb-3 block">
                        How it works
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-fugaz text-white text-glow">
                        My Process
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.06] hidden sm:block" />
                    {/* Animated progress line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                        style={{ originY: 0 }}
                        className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent hidden sm:block"
                    />

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="group flex gap-6 sm:gap-8 py-7 border-b border-white/[0.05] last:border-0"
                            >
                                {/* Step dot */}
                                <div className="relative flex-shrink-0 hidden sm:flex items-start pt-0.5">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                        className="w-[23px] h-[23px] rounded-full border border-white/15 bg-[#050505] flex items-center justify-center z-10"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors duration-300" />
                                    </motion.div>
                                </div>

                                {/* Mobile step number */}
                                <span className="text-xs font-mono text-white/20 pt-1 flex-shrink-0 sm:hidden w-6">
                                    {step.num}
                                </span>

                                {/* Content */}
                                <div className="flex-1 pb-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-mono text-white/20 hidden sm:inline">
                                            {step.num}
                                        </span>
                                        <h3 className="text-sm sm:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
