import HolographicCode from "@/components/code-displays/HolographicCode";
import RobloxEditor from "@/components/code-displays/RobloxEditor";
import InteractiveSnippet from "@/components/code-displays/InteractiveSnippet";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CodeShowcase() {
    return (
        <div className="min-h-screen bg-black text-white p-8 md:p-24 space-y-32">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors absolute top-8 left-8">
                <ArrowLeft className="w-5 h-5" /> Back to Home
            </Link>

            {/* Header */}
            <section className="text-center space-y-6 max-w-3xl mx-auto">
                <h1 className="text-5xl font-fugaz bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                    Code Styling Patterns
                </h1>
                <p className="text-xl text-gray-400 font-light">
                    Experimental components for displaying Lua code in a Roblox-focused portfolio.
                </p>
            </section>

            {/* Concept 1 */}
            <section className="flex flex-col items-center gap-8">
                <div className="text-center">
                    <span className="text-purple-400 tracking-widest text-sm font-bold uppercase mb-2 block">Concept 01</span>
                    <h2 className="text-3xl font-bold mb-4">Holographic Card</h2>
                    <p className="max-w-md text-gray-400 mx-auto">
                        3D tilt effect with dynamic lighting. Best for highlighting short, impressive algorithms or snippets.
                    </p>
                </div>
                <HolographicCode />
            </section>

            {/* Concept 2 */}
            <section className="flex flex-col items-center gap-8 w-full">
                <div className="text-center">
                    <span className="text-blue-400 tracking-widest text-sm font-bold uppercase mb-2 block">Concept 02</span>
                    <h2 className="text-3xl font-bold mb-4">Roblox Studio Editor</h2>
                    <p className="max-w-md text-gray-400 mx-auto">
                        Animated typing effect in a native-feeling UI environment. Great for "About Me" or storytelling.
                    </p>
                </div>
                <RobloxEditor />
            </section>

            {/* Concept 3 */}
            <section className="flex flex-col items-center gap-8 w-full max-w-5xl mx-auto">
                <div className="text-center">
                    <span className="text-green-400 tracking-widest text-sm font-bold uppercase mb-2 block">Concept 03</span>
                    <h2 className="text-3xl font-bold mb-4">Interactive Playground</h2>
                    <p className="max-w-md text-gray-400 mx-auto">
                        Direct cause-and-effect visualization. Hover over the code to trigger game engine state changes.
                    </p>
                </div>
                <div className="w-full">
                    <InteractiveSnippet />
                </div>
            </section>
        </div>
    );
}
