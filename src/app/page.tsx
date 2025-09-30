import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Timeline from "@/components/timeline";
import Experience from "@/components/experience";
import VibeCoding from "@/components/vibe-coding";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <VibeCoding />
      <Contact />
    </div>
  );
}
