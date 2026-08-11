import AmbientBackground from "@/components/AmbientBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

function Divider() {
    return (
        <div className="relative h-px max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen relative">
            <AmbientBackground />
            <Hero />
            <Divider />
            <About />
            <Divider />
            <Process />
            <Divider />
            <Projects />
            <Divider />
            <Testimonials />
            <Divider />
            <Contact />

            <footer className="py-8 text-center text-white/15 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} PowFPS1 — All rights reserved
            </footer>
        </main>
    );
}
