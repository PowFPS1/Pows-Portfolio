"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

const ROTATION_RANGE = 20; // Degrees
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function HolographicCode() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative w-full max-w-md rounded-xl bg-gradient-to-br from-white/20 to-zinc-800/50 p-[1px]"
        >
            <div
                className="relative h-full w-full rounded-xl bg-black/90 p-6 shadow-2xl backdrop-blur-md"
                style={{ transform: "translateZ(50px)" }}
            >
                {/* Glow Element */}
                <div
                    className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background:
                            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-zinc-600" />
                            <div className="h-3 w-3 rounded-full bg-zinc-700" />
                            <div className="h-3 w-3 rounded-full bg-zinc-800" />
                        </div>
                        <span className="text-xs font-mono text-gray-500">Leaderstats.server.lua</span>
                    </div>

                    <pre className="overflow-x-auto text-sm font-mono text-gray-300 scrollbar-thin scrollbar-thumb-white/20">
                        <code>
                            <span className="text-white font-bold">local</span> Players = <span className="text-gray-300">game</span>:<span className="text-white">GetService</span>(<span className="text-gray-500">"Players"</span>)
                            {"\n\n"}
                            <span className="text-gray-300">Players.PlayerAdded</span>:<span className="text-white">Connect</span>(<span className="text-gray-400 font-bold">function</span>(player)
                            {"\n"}  <span className="text-white font-bold">local</span> stats = <span className="text-white">Instance.new</span>(<span className="text-gray-500">"Folder"</span>)
                            {"\n"}  stats.Name = <span className="text-gray-500">"leaderstats"</span>
                            {"\n"}  stats.Parent = player
                            {"\n\n"}
                            {"  "}<span className="text-gray-500 italic">-- Give new players some starter cash</span>
                            {"\n"}  <span className="text-white font-bold">local</span> cash = <span className="text-white">Instance.new</span>(<span className="text-gray-500">"IntValue"</span>)
                            {"\n"}  cash.Name = <span className="text-gray-500">"Cash"</span>
                            {"\n"}  cash.Value = <span className="text-white">100</span>
                            {"\n"}  cash.Parent = stats
                            {"\n"}
                            <span className="text-gray-400 font-bold">end</span>)
                        </code>
                    </pre>
                </div>
            </div>
        </motion.div>
    );
}
