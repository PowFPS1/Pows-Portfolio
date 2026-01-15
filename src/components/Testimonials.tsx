"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Placeholder data
const testimonials = [
    {
        name: "Alex Johnson",
        role: "CEO, TechStart",
        content: "PowFPS1 delivered an exceptional website that perfectly captures our brand. Highly recommended!",
        avatar: "/testimonials/alex.jpg", // Add 'alex.jpg' to public/testimonials
    },
    {
        name: "Sarah Williams",
        role: "Marketing Director",
        content: "The attention to detail and smooth animations are incredible. Our conversion rate has doubled.",
        avatar: "/testimonials/sarah.jpg", // Add 'sarah.jpg' to public/testimonials
    },
    {
        name: "Michael Chen",
        role: "Founder, Studio X",
        content: "Professional, fast, and easy to work with. The code quality is top-notch.",
        avatar: "/testimonials/michael.jpg", // Add 'michael.jpg' to public/testimonials
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4 bg-white/5">
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
