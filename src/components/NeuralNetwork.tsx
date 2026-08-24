"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectNode from "./ProjectNode";

export default function NeuralNetwork() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-14">
        <p className="font-mono text-sm text-cyan-400">01 / PROJECT GRAPH</p>
        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          My work,<span className="text-zinc-500"> connected.</span>
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
          Research, experiments and production systems connected as a visual
          timeline of my journey into AI.
        </p>
      </div>

      <div className="relative h-[720px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
        <div className="absolute inset-0 bg-grid opacity-25" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {projects.slice(0, -1).map((project, index) => {
            const next = projects[index + 1];
            return (
              <motion.line
                key={`${project.id}-${next.id}`}
                x1={project.position.x}
                y1={project.position.y}
                x2={next.position.x}
                y2={next.position.y}
                stroke="currentColor"
                className="text-cyan-400/20"
                strokeWidth="0.14"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
              />
            );
          })}
        </svg>

        {projects.map((project, index) => (
          <ProjectNode key={project.id} project={project} index={index} />
        ))}

        <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 font-mono text-xs text-zinc-500 backdrop-blur">
          Hover a node to explore
        </div>
      </div>
    </section>
  );
}