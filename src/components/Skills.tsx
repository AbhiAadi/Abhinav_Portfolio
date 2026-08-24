const skills = {
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "NLP",
    "Computer Vision"
  ],
  "Languages": ["Python", "SQL", "C++"],
  "AI Stack": [
    "TensorFlow",
    "Keras",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "Pinecone",
    "FastAPI"
  ],
  "Data": ["Spark", "Hive", "Snowflake", "Pandas"],
  Cloud: ["Azure", "Amazon S3", "Supabase", "Firebase"],
  "DevOps / MLOps": [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "GitHub Actions"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/5 bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <p className="font-mono text-sm text-cyan-400">03 / TOOLKIT</p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          The stack behind
          <span className="text-zinc-500"> the systems</span>
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-3xl border border-zinc-800 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <p className="font-mono text-sm text-cyan-400">{group}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}