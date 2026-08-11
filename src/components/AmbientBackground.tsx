"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current) return;
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(255,255,255,0.03) 0%, transparent 70%)`;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Cursor spotlight */}
            <div ref={spotlightRef} className="absolute inset-0 transition-all duration-300" />

            {/* Top radial glow — brighter */}
            <div
                className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-[0.10]"
                style={{
                    background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Subtle bottom-left accent */}
            <div
                className="absolute bottom-0 -left-40 w-[500px] h-[400px] rounded-full opacity-[0.04]"
                style={{
                    background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Subtle bottom-right accent */}
            <div
                className="absolute bottom-0 -right-40 w-[500px] h-[400px] rounded-full opacity-[0.04]"
                style={{
                    background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Fine grain noise */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "256px 256px",
                }}
            />
        </div>
    );
}
