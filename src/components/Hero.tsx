"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="noise absolute inset-0 opacity-30" />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[130px]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_380px]">

          {/* LEFT — ORIGINAL CONTENT */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 font-mono text-sm text-cyan-400"
            >
              <Sparkles size={16} />
              AI / MACHINE LEARNING / GENERATIVE AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glow-text text-6xl font-extrabold tracking-tight md:text-8xl"
            >
              Abhinav
              <span className="block text-cyan-400">Adarsh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
            >
              I build intelligent systems that transform real-world problems
              into scalable AI, machine learning and data-driven solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
              >
                Explore my work
                <ArrowDown size={18} />
              </a>

              <a
                href="https://github.com/AbhiAadi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-cyan-400"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhinav-adarsh-0769b8223/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 transition hover:border-cyan-400"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>

            <div className="mt-20 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                ["AI", "Core"],
                ["ML", "Systems"],
                ["GenAI", "Applications"],
                ["Data", "Engineering"],
              ].map(([a, b]) => (
                <div key={a}>
                  <div className="font-mono text-sm text-cyan-400">{a}</div>
                  <div className="mt-1 text-sm text-zinc-500">{b}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto flex items-center justify-center"
          >

            {/* Cyan glow behind photo */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[70px]"
            />

            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[350px] w-[350px] rounded-full border border-cyan-400/20 border-dashed"
            />

            {/* Second ring */}
            <div className="absolute h-[320px] w-[320px] rounded-full border border-white/10" />

            {/* Profile image */}
            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-cyan-400/40 bg-zinc-900 shadow-[0_0_80px_rgba(34,211,238,0.15)] md:h-[310px] md:w-[310px]">
              <Image
                src="/profile.jpg"
                alt="Abhinav Adarsh"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Small decorative nodes */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-12 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]"
            />

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-4 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}