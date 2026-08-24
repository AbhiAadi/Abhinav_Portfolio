"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectNode({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  const size =
    project.size === "large"
      ? "h-24 w-24"
      : project.size === "medium"
      ? "h-16 w-16"
      : "h-12 w-12";

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, type: "spring" }}
        whileHover={{ scale: 1.12 }}
        onClick={() => setOpen(true)}
        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer text-left outline-none"
        style={{ left: `${project.position.x}%`, top: `${project.position.y}%` }}
        aria-label={`Open ${project.title}`}
      >
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.04, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
          className="absolute inset-0 rounded-full bg-cyan-400"
        />

        <div
          className={`relative ${size} flex items-center justify-center rounded-full border border-cyan-400/60 bg-zinc-950 shadow-[0_0_40px_rgba(34,211,238,0.15)]`}
        >
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
        </div>

        <div className="absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 text-center">
          <p className="font-mono text-xs text-cyan-400">{project.year}</p>
          <h3 className="mt-1 text-sm font-semibold text-white">
            {project.shortTitle}
          </h3>
          <p className="mt-1 text-xs text-zinc-500">{project.category}</p>
        </div>
      </motion.button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-zinc-800 bg-[#090a0d] p-7 shadow-2xl md:p-9"
          >
            <p className="font-mono text-sm text-cyan-400">
              {project.year} · {project.category}
            </p>

            <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>

            <p className="mt-5 leading-7 text-zinc-400">{project.description}</p>

            <div className="mt-7 space-y-3">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {detail}
                </div>
              ))}
            </div>

            {project.metrics?.length ? (
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4 font-mono text-sm text-cyan-300"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-cyan-400"
                >
                  <Github size={16} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-300"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}