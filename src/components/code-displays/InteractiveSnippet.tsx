"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveSnippet() {
    const [partColor, setPartColor] = useState("#808080"); // Default Gray
    const [partSize, setPartSize] = useState(1);
    const [transparency, setTransparency] = useState(1);

    return (
        <div className="grid md:grid-cols-2 gap-8 items-center bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            {/* Code Block */}
            <div className="font-mono text-sm bg-[#111] p-6 rounded-lg border border-white/5 shadow-inner">
                <div className="text-gray-500 mb-4">-- Hover over values to interact</div>

                <div className="space-y-2">
                    <div className="group cursor-pointer">
                        <span className="text-pink-500">local</span> part = Instance.new(<span className="text-green-300">"Part"</span>)
                    </div>

                    <div
                        className="group cursor-pointer transition-colors bg-white/5 hover:bg-white/10 p-1 rounded -ml-1 pl-1"
                        onMouseEnter={() => setPartColor("#FF0000")}
                        onMouseLeave={() => setPartColor("#808080")}
                    >
                        part.BrickColor = BrickColor.new(<span className="text-green-300 font-bold group-hover:text-red-500 transition-colors">"Bright red"</span>)
                    </div>

                    <div
                        className="group cursor-pointer transition-colors bg-white/5 hover:bg-white/10 p-1 rounded -ml-1 pl-1"
                        onMouseEnter={() => setPartSize(1.5)}
                        onMouseLeave={() => setPartSize(1)}
                    >
                        part.Size = Vector3.new(<span className="text-blue-300 font-bold group-hover:scale-110 inline-block">10, 10, 10</span>)
                    </div>

                    <div
                        className="group cursor-pointer transition-colors bg-white/5 hover:bg-white/10 p-1 rounded -ml-1 pl-1"
                        onMouseEnter={() => setTransparency(0.5)}
                        onMouseLeave={() => setTransparency(1)}
                    >
                        part.Transparency = <span className="text-orange-300 font-bold group-hover:text-white">0.5</span>
                    </div>
                </div>
            </div>

            {/* Visual Preview */}
            <div className="h-64 flex items-center justify-center bg-grid-white/[0.05] rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                <motion.div
                    animate={{
                        backgroundColor: partColor,
                        scale: partSize,
                        opacity: transparency
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-24 h-24 rounded shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                />

                <div className="absolute bottom-4 left-4 text-xs text-gray-500 font-mono">
                    Workspace.Part
                </div>
            </div>
        </div>
    );
}
