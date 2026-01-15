"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Placeholder data - user needs to update this
const projects = [
    {
        title: "Inventory System",
        description: "A highly optimized, data-store backed inventory system handling thousands of items.",
        tech: ["Luau", "ProfileService", "Roact"],
        videoId: "1078818471", // Biggest
        featured: true,
    },
    {
        title: "Combat Engine",
        description: "Lag-compensated melee and ranged combat system with custom hitboxes.",
        tech: ["Luau", "Raycasting", "Network Optimization"],
        videoId: "1078820191",
        featured: false,
    },
    {
        title: "Tycoon Core",
        description: "Modular tycoon framework allowing easy creation of droppers, upgraders, and buttons.",
        tech: ["Luau", "OOP", "StreamingEnabled"],
        videoId: "1078819888",
        featured: false,
    },
];

export default function Projects() {
    return (
        <section id="portfolio" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm tracking-widest text-white/70 uppercase mb-2 block">My Work</span>
                    <h2 className="text-4xl md:text-5xl font-fugaz text-glow">
                        Featured Systems
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-xl overflow-hidden bg-black/40 border border-white/10 hover:border-white/50 transition-all ${project.featured ? "md:col-span-2 lg:col-span-2 row-span-2" : ""
                                }`}
                        >
                            {/* Video Area */}
                            <div className="aspect-video w-full bg-black relative">
                                <iframe
                                    src={`https://player.vimeo.com/video/${project.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0`}
                                    className="absolute inset-0 w-full h-full"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    title={project.title}
                                ></iframe>
                                {/* Overlay to prevent interaction with video controls if desired, or allow it */}
                                <div className="absolute inset-0 pointer-events-none bg-black/10" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Always visible title for mobile/when not hovering (optional, but good for UX) */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm md:opacity-0 md:group-hover:opacity-0 transition-opacity">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
