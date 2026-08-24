import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    company: "ZS",
    role: "Decision Analytics Associate",
    period: "Jul 2025 — Aug 2026",
    description:
      "Built analytics automation, reusable machine learning workflows and AI-powered process automation.",
    metrics: [
      "90% reporting turnaround reduction",
      "Reusable KNN & XGBoost models",
      "AI-powered Jira ticket automation"
    ]
  },
  {
    company: "Mindcase",
    role: "ML Engineer Intern",
    period: "May 2024 — Nov 2024",
    description:
      "Worked on document intelligence, embeddings, RAG and production-oriented AI pipelines.",
    metrics: [
      "40% faster data processing",
      "84% lower embedding latency",
      "25% improvement in top-3 relevance",
      "80% lower client operating time"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-32">
      <p className="font-mono text-sm text-cyan-400">02 / EXPERIENCE</p>

      <h2 className="mt-4 text-4xl font-bold md:text-6xl">
        From experiments
        <span className="text-zinc-500"> to production.</span>
      </h2>

      <div className="mt-16 space-y-14">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="group border-l border-zinc-800 pl-7 transition hover:border-cyan-400 md:pl-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness size={18} className="text-cyan-400" />
                  <h3 className="text-2xl font-bold">{experience.company}</h3>
                </div>
                <p className="mt-2 text-cyan-400">{experience.role}</p>
              </div>
              <p className="font-mono text-sm text-zinc-500">{experience.period}</p>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
              {experience.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {experience.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}