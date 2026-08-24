# Abhinav AI Portfolio

An interactive AI/ML portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open:

http://localhost:3000

## Add a project

Edit:

`src/data/projects.ts`

Add another object to the `projects` array:

```ts
{
  id: "my-project",
  title: "My Project",
  shortTitle: "Project",
  category: "Generative AI",
  year: "2026",
  description: "Short description.",
  details: [
    "What you built.",
    "How you built it.",
    "What impact it had."
  ],
  technologies: ["Python", "LLM", "FastAPI"],
  metrics: ["95% accuracy"],
  github: "https://github.com/...",
  demo: "https://...",
  position: { x: 35, y: 80 },
  size: "medium"
}
```

The node will automatically appear in the neural-network project graph.

## Replace links

Update GitHub/LinkedIn links in:

`src/components/Hero.tsx`

## Add images

Place project images in:

`public/projects/`

and extend the Project type if you want to show them in the modal.

## Build

```bash
npm run build
npm start
```
