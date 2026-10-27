import Navbar from "@/components/Navbar";
import FloatingMenu from "@/components/ui/liquid-morph-floating-menu";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import TerminalPlayground from "@/components/TerminalPlayground";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#141414] overflow-x-hidden selection:bg-[#E4FD97] selection:text-[#141414]">
      {/* Desktop Header Navigation */}
      <Navbar />

      {/* Mobile Liquid Morph Floating Navigation */}
      <FloatingMenu />

      <div className="flex flex-col gap-6 sm:gap-12">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <TerminalPlayground />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
