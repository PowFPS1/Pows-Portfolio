"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Process", id: "process" },
    { name: "Work", id: "portfolio" },
];

const moreItems = [
    { name: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ["home", "about", "portfolio", "process", "testimonials", "contact"];
            const scrollPosition = window.scrollY + 300;

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
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
            setIsMoreOpen(false);
            setIsMobileMenuOpen(false);
        }
    };

    const isMoreActive = ["testimonials"].includes(activeSection);
    const allNavItems = [...navItems, ...moreItems, { name: "Contact", id: "contact" }];

    return (
        <>
            {/* Desktop Navbar */}
            <div className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-all duration-300 pointer-events-none ${scrolled ? "pt-4" : "pt-8"}`}>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl"
                >
                    <nav className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollTo(item.id)}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"}`}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-1 right-1 h-0.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                {item.name}
                            </button>
                        ))}

                        <div className="relative">
                            <button
                                onClick={() => setIsMoreOpen(!isMoreOpen)}
                                className={`relative px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${isMoreActive ? "text-white" : "text-gray-400 hover:text-white"}`}
                            >
                                {isMoreActive && !navItems.some(i => i.id === activeSection) && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-1 right-1 h-0.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
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

                    <div className="w-px h-6 bg-white/10" />

                    <button
                        onClick={() => scrollTo("contact")}
                        className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        Contact Now
                    </button>
                </motion.div>
            </div>

            {/* Mobile Navbar */}
            <div className={`fixed top-0 left-0 right-0 z-50 md:hidden flex justify-center transition-all duration-300 pointer-events-none ${scrolled ? "pt-3" : "pt-4"}`}>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl mx-4 w-full max-w-sm"
                >
                    <span className="text-white font-bold text-sm pl-2">Pow</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-20 left-4 right-4 z-50 md:hidden bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <nav className="flex flex-col py-2">
                                {allNavItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`relative px-6 py-4 text-left text-base font-medium transition-colors ${
                                            activeSection === item.id 
                                                ? "text-white bg-white/5" 
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {activeSection === item.id && (
                                            <motion.div
                                                layoutId="mobileActiveTab"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {item.name}
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
