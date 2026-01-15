"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CODE_LINES = [
    'local DataStoreService = game:GetService("DataStoreService")',
    'local PlayerData = DataStoreService:GetDataStore("PlayerData_V1")',
    '',
    'game.Players.PlayerAdded:Connect(function(player)',
    '    local success, data = pcall(function()',
    '        return PlayerData:GetAsync(player.UserId)',
    '    end)',
    '',
    '    if success then',
    '        print(player.Name .. " data loaded successfully!")',
    '    end',
    'end)'
];

export default function RobloxEditor() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let lineIndex = 0;
        let charIndex = 0;
        let currentLines = [""];

        const interval = setInterval(() => {
            if (lineIndex >= CODE_LINES.length) {
                clearInterval(interval);
                return;
            }

            const targetLine = CODE_LINES[lineIndex];

            if (charIndex < targetLine.length) {
                // Typing current line
                currentLines[lineIndex] = targetLine.substring(0, charIndex + 1);
                charIndex++;
            } else {
                // Move to next line
                lineIndex++;
                charIndex = 0;
                if (lineIndex < CODE_LINES.length) {
                    currentLines.push("");
                }
            }

            setDisplayedLines([...currentLines]);
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div ref={ref} className="w-full max-w-2xl rounded-lg overflow-hidden border border-gray-700 bg-[#1e1e1e] font-mono shadow-2xl">
            {/* Studio Toolbar (Simplified) */}
            <div className="flex items-center gap-1 bg-[#2d2d2d] px-2 py-1.5 border-b border-[#111]">
                <div className="px-3 py-1 bg-[#1e1e1e] text-blue-400 text-xs rounded-t border-t-2 border-blue-500 relative -mb-2 z-10">
                    Leaderstats.server.lua
                    <span className="ml-2 text-gray-400 hover:text-white cursor-pointer">x</span>
                </div>
            </div>

            {/* Studio Code Area */}
            <div className="p-4 bg-[#1e1e1e] min-h-[300px] text-[13px] leading-6 overflow-hidden">
                {displayedLines.map((line, i) => (
                    <div key={i} className="flex">
                        <span className="w-8 text-right mr-4 text-[#858585] select-none">{i + 1}</span>
                        <SyntaxHighlight code={line} />
                    </div>
                ))}
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-20 h-4 ml-[52px] border-l-2 border-white"
                />
            </div>
        </div>
    );
}

// Simple regex-based syntax highlighter for Roblox Lua
const SyntaxHighlight = ({ code }: { code: string }) => {
    // Pass 1: Basic keywords and coloring (very simplified)
    // In a real app, use a proper lexer like prismjs

    const parts = code.split(/(".*?"|[\s()]+)/g).filter(Boolean);

    return (
        <span className="whitespace-pre">
            {parts.map((part, i) => {
                if (part.startsWith('"')) return <span key={i} className="text-[#adf195]">{part}</span>; // Strings (Green)
                if (["local", "function", "return", "if", "then", "end"].includes(part.trim()))
                    return <span key={i} className="text-[#f86d7c] font-bold">{part}</span>; // Keywords (Red/Pink structure)
                if (["game", "workspace", "script", "print", "pcall", "table", "math"].includes(part.trim()))
                    return <span key={i} className="text-[#66ccff]">{part}</span>; // Globals/Services (Blue)
                if (part.includes("Connect") || part.includes("GetService"))
                    return <span key={i} className="text-[#fkh6d7c] text-yellow-200">{part}</span>; // Methods (Yellowish)

                return <span key={i} className="text-[#cccccc]">{part}</span>; // Default text
            })}
        </span>
    );
};
