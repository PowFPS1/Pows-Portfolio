"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "portfolio" },
];

const moreItems = [
    { name: "Process", id: "process" },
    { name: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ["home", "about", "portfolio", "process", "testimonials", "contact"];
            // Find the section that occupies the most processing screen or is near top
            const scrollPosition = window.scrollY + 300; // Offset for better triggering

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Check if Lenis smooth scroll is global, usually element.scrollIntoView works with it
            // Or use window.scrollTo
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
            setIsMoreOpen(false);
        }
    };

    // Determine if "More" is active
    const isMoreActive = ["process", "testimonials"].includes(activeSection);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none ${scrolled ? "pt-4" : "pt-8"}`}>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 shadow-2xl"
            >
                <nav className="flex items-center gap-1 md:gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollTo(item.id)}
                            className={`relative px-3 py-1 text-sm font-medium transition-colors ${activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -top-4 left-0 right-0 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </button>
                    ))}

                    {/* More Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsMoreOpen(!isMoreOpen)}
                            className={`relative px-3 py-1 flex items-center gap-1 text-sm font-medium transition-colors ${isMoreActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                        >
                            {isMoreActive && !navItems.some(i => i.id === activeSection) && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -top-4 left-0 right-0 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            More <ChevronDown className={`w-3 h-3 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isMoreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-black/90 border border-white/10 rounded-xl overflow-hidden min-w-[140px] shadow-xl backdrop-blur-md"
                                >
                                    {moreItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollTo(item.id)}
                                            className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </nav>

                <div className="w-px h-6 bg-white/10 hidden md:block" />

                <button
                    onClick={() => scrollTo("contact")}
                    className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                    Contact Now
                </button>
            </motion.div>
        </div>
    );
}
