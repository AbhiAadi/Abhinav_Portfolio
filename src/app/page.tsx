import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NeuralBackground from "@/components/NeuralBackground";
import NeuralNetwork from "@/components/NeuralNetwork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main >
      <NeuralBackground />
      <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <NeuralNetwork />
      <Experience />
      <Skills />
      <About />
      <Contact />
      </div>
    </main>
  );
}