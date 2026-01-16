"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Clock, Info } from "lucide-react";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const discordHandle = "PowFPS1"; // Update with actual handle

    const handleCopy = () => {
        navigator.clipboard.writeText(discordHandle);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 px-4 relative z-10">
            <div className="max-w-xl mx-auto relative z-10">

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                            backgroundSize: "24px 24px"
                        }}
                    />

                    {/* Content Wrapper for Z-Index */}
                    <div className="relative z-10">
                        {/* Discord Icon (SVG) */}
                        <div className="w-16 h-16 mx-auto bg-[#5865F2]/10 rounded-2xl flex items-center justify-center mb-6 text-[#5865F2]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-fugaz mb-2 text-white">Message me on Discord</h2>
                        <p className="text-gray-400 mb-8 font-light">The fastest way to reach me for project inquiries</p>

                        {/* Copy Button */}
                        <button
                            onClick={handleCopy}
                            className="w-full bg-white hover:bg-gray-100 text-black rounded-xl py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.98] group relative"
                        >
                            <span className="font-mono text-lg font-bold">{discordHandle}</span>
                            {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />}

                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                {copied ? "Copied!" : "Click to copy"}
                            </span>
                        </button>

                        <div className="flex items-center gap-4 my-8">
                            <div className="h-[1px] bg-white/10 flex-1" />
                            <span className="text-gray-500 text-sm">or</span>
                            <div className="h-[1px] bg-white/10 flex-1" />
                        </div>

                        {/* X Button */}
                        <a
                            href="https://x.com/PowScripts" // Update if needed
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-4 flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-all"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Follow on X
                        </a>

                        {/* Status Grid */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                                <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    Available
                                </div>
                                <span className="text-[10px] text-gray-500 text-center">Currently accepting projects</span>
                            </div>

                            <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-bold">
                                    <Clock className="w-3 h-3" />
                                    Fast Response
                                </div>
                                <span className="text-[10px] text-gray-500 text-center">Usually within 24 hours</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                                <Info className="w-3 h-3" />
                                Paid commissions only - Include project details and budget
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
