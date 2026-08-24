"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="font-mono text-sm text-cyan-400">04 / ABOUT</p>
          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Engineer by training.
            <span className="block text-zinc-500">AI builder by choice.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-8 text-zinc-400"
        >
          <p>
            I am an IIT Ropar Mechanical Engineering graduate who moved from
            engineering fundamentals into machine learning, deep learning,
            generative AI and data systems.
          </p>

          <p>
            My interest is not just in training models. I enjoy taking a
            real-world problem, understanding the underlying workflow, and
            building a practical system that makes the process faster,
            smarter or easier.
          </p>

          <p>
            This portfolio is designed as a neural network because my work has
            evolved the same way: one experiment connects to another, research
            becomes engineering, and engineering becomes production.
          </p>
        </motion.div>
      </div>
    </section>
  );
}