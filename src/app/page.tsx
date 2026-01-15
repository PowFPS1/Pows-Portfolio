import StarBackground from "@/components/StarBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <StarBackground />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PowFPS1. All rights reserved.
      </footer>
    </main>
  );
}
