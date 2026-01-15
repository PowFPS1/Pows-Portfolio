"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-fugaz mb-8"
                >
                    Let&apos;s Work Together
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and ideas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="mailto:contact@powsportfolio.dev"
                        className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                    >
                        <Mail className="w-5 h-5" />
                        Email Me
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#5865F2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4752C4] transition-colors shadow-lg shadow-[#5865F2]/20"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Discord
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
