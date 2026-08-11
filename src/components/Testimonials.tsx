"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "zehvyn",
        content:
            "Working with Pow was super smooth. He's very professional and did exactly what I asked in a timely manner.",
        avatar: "/testimonials/s5MLo1eOoXsmokIzGQYEWIWyazA.avif",
    },
    {
        name: "pikcal__",
        content:
            "Script works perfectly and is well made. He made it fully configurable as requested. If you're looking for a real scripter who goes above and beyond, Pow is the person you're looking for.",
        avatar: "/testimonials/E14eJPV7HgiPWch3VSdOXcw.webp",
    },
    {
        name: "ceazeh",
        content: "The end result was good, and it improved the player experience.",
        avatar: "/testimonials/rCxghxDeAO7IhZGvQFugw4zDZdM.avif",
    },
    {
        name: "falconteam",
        content:
            "Pow did the 4 things I needed for my game quickly, and they met my expectations. 10/10",
        avatar: "/testimonials/lcwAFp4Rg0YCP4t1Pu5LuwXmXjs.webp",
    },
    {
        name: ".trimetalxsx",
        content:
            "Pow made the whole process super smooth. They got exactly what I was going for without much back and forth, and the system turned out even better than I expected.",
        avatar: "/testimonials/WkEwGHB8ZwwZJD705sMGrhhwEKo.avif",
    },
    {
        name: "warpedchickenbone",
        content: "Pow had my system done in 2 hours. Amazing job, would recommend.",
        avatar: "/testimonials/KrA2CXgB3TYOXjWNAJV7kTkstU.avif",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-28 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-xs tracking-widest text-white/30 uppercase mb-3 block">
                        Social proof
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-fugaz text-white text-glow">
                        Happy Clients
                    </h2>
                </motion.div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            className="break-inside-avoid bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                &ldquo;{t.content}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-gray-800 overflow-hidden relative flex-shrink-0">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        sizes="28px"
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-xs text-gray-500 font-medium">{t.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
