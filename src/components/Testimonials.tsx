"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Placeholder data
const testimonials = [
    {
        name: "zehvyn",
        role: "Client",
        content: "Working with Pow was super smooth. He's very professional and did exactly what I asked in a timely manner.",
        avatar: "/testimonials/s5MLo1eOoXsmokIzGQYEWIWyazA.avif",
    },
    {
        name: "ceazeh",
        role: "Client",
        content: "The end result was good, and it improved the player experience.",
        avatar: "/testimonials/rCxghxDeAO7IhZGvQFugw4zDZdM.avif",
    },
    {
        name: "pikcal__",
        role: "Client",
        content: "Script works perfectly and is well made. He made it fully configurable as requested. If youre looking for a real scripter who goes above and beyond, Pow is the person youre looking for.",
        avatar: "/testimonials/E14eJPV7HgiPWch3VSdOXcw.webp",
    },
    {
        name: "falconteam",
        role: "Client",
        content: "Pow did the 4 things I needed for my game quickly, and excellent, it met my expectations. 10/10",
        avatar: "/testimonials/lcwAFp4Rg0YCP4t1Pu5LuwXmXjs.webp",
    },
    {
        name: ".trimetalxsx",
        role: "Client",
        content: "Pow made the whole process super smooth. They got exactly what I was going for without much back and forth, and the system turned out even better than I expected. Solid work all around.",
        avatar: "/testimonials/WkEwGHB8ZwwZJD705sMGrhhwEKo.avif",
    },
    {
        name: "warpedchickenbone",
        role: "Client",
        content: "Pow had my system done in 2 hours, helped me with so many things, amazing job, would recommend.",
        avatar: "/testimonials/KrA2CXgB3TYOXjWNAJV7kTkstU.avif",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-fugaz text-center mb-16 text-glow"
                >
                    Happy Clients
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-yellow-500/30 transition-colors relative"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />

                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden relative">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                                    <span className="text-xs text-blue-400">{testimonial.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
