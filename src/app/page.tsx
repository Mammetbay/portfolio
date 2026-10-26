import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TerminalPlayground from "@/components/TerminalPlayground";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#141414] overflow-x-hidden selection:bg-[#E4FD97] selection:text-[#141414]">
      {/* Desktop Header Navigation */}
      <Navbar />

      {/* Mobile Liquid Morph Floating Navigation */}
      <FloatingMenu />

      <div className="flex flex-col gap-12 sm:gap-20">
        <Hero />
        <Projects />
        <TerminalPlayground />
        <TechStack />
        <Experience />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
