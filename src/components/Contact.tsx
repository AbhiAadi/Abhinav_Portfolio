import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <p className="font-mono text-sm text-cyan-400">05 / CONTACT</p>

        <h2 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Have a problem worth
          <span className="text-cyan-400"> solving?</span>
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          I am interested in AI, machine learning, data and real-world
          automation problems where intelligent systems can create measurable
          impact.
        </p>

        <a
          href="mailto:abhinav04adarsh@gmail.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
        >
          <Mail size={18} />
          Get in touch
          <ArrowUpRight size={18} />
        </a>

        <footer className="mt-28 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-zinc-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Abhinav Adarsh</span>
          <span className="font-mono">AI / ML / GENAI</span>
        </footer>
      </div>
    </section>
  );
}