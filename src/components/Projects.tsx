"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Parkour System",
        description: "A highly optimized parkour system.",
        tech: ["Raycasting", "State Machines", "Vector Math"],
        videoId: "1078818471",
        featured: true,
    },
    {
        title: "Advanced Combat System",
        description: "Lag compensated melee combat system with custom hitboxes.",
        tech: ["Lag Compensation", "Spatial Query", "OOP"],
        videoId: "1078820191",
        featured: false,
    },
    {
        title: "Advanced Basketball System",
        description: "Modular basketball system.",
        tech: ["Projectile Physics", "Arc Math", "Replication"],
        videoId: "1078819888",
        featured: false,
    },
];

function VideoCard({ project, index }: { project: typeof projects[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group bg-[#0b0b14] border border-white/6 hover:border-white/20 transition-all duration-300 rounded-xl overflow-hidden ${
                project.featured ? "sm:col-span-2 lg:col-span-2 sm:row-span-2" : ""
            }`}
        >
            {/* On desktop the featured card uses row-span-2, so we make the iframe fill it.
                On mobile everything is just a normal aspect-video + info below. */}

            {/* Mobile layout: video + info strip below */}
            <div className="sm:hidden">
                <div className="aspect-video w-full bg-black relative overflow-hidden">
                    <iframe
                        src={`https://player.vimeo.com/video/${project.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0`}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title={project.title}
                    />
                </div>
                <div className="px-4 py-4 border-t border-white/10">
                    <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-xs mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex gap-1.5 flex-wrap">
                        {project.tech.map(t => (
                            <span key={t} className="text-[11px] bg-white/10 text-white/80 px-2.5 py-1 rounded-full border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop layout: iframe fills card, info on hover overlay */}
            <div className="hidden sm:block relative w-full h-full min-h-[200px]">
                <iframe
                    src={`https://player.vimeo.com/video/${project.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&byline=0&title=0`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title={project.title}
                />
                <div className="absolute inset-0 pointer-events-none bg-black/10" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/10">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="portfolio" className="py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="text-xs tracking-widest text-white/30 uppercase mb-3 block">My Work</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-fugaz text-white text-glow">
                        Featured Systems
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:auto-rows-[280px] gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <VideoCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
