"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number; y: number; vx: number; vy: number; radius: number; phase: number;
};

type Signal = {
  from: number; to: number; progress: number; speed: number;
};

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const nodes: Node[] = [];
    const signals: Signal[] = [];
    const nodeCount = width < 768 ? 58 : 115;
    const connectionDistance = width < 768 ? 125 : 155;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.35 + 0.55,
        phase: Math.random() * Math.PI * 2
      });
    }

    const addSignal = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let best = -1;
      let bestDistance = Infinity;

      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue;
        const dx = nodes[from].x - nodes[i].x;
        const dy = nodes[from].y - nodes[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < bestDistance && distance < connectionDistance) {
          best = i;
          bestDistance = distance;
        }
      }

      if (best >= 0 && signals.length < 8) {
        signals.push({
          from,
          to: best,
          progress: 0,
          speed: 0.004 + Math.random() * 0.006
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.phase += 0.015;
        if (node.x < -20 || node.x > width + 20) node.vx *= -1;
        if (node.y < -20 || node.y > height + 20) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const alpha = (1 - distance / connectionDistance) * 0.27;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(225, 232, 240, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const pulse = (Math.sin(time * 0.0018 + node.phase) + 1) / 2;
        const glowRadius = node.radius * (3.5 + pulse * 3);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0, node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(245,248,255,${0.12 + pulse * 0.12})`);
        gradient.addColorStop(1, "rgba(245,248,255,0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(245,248,255,${0.58 + pulse * 0.28})`;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      signals.forEach((signal) => {
        signal.progress += signal.speed;
        const a = nodes[signal.from], b = nodes[signal.to];
        if (!a || !b) return;

        const x = a.x + (b.x - a.x) * signal.progress;
        const y = a.y + (b.y - a.y) * signal.progress;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, "rgba(255,255,255,.9)");
        glow.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,.95)";
        ctx.arc(x, y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = signals.length - 1; i >= 0; i--) {
        if (signals[i].progress >= 1) signals.splice(i, 1);
      }

      if (Math.random() < 0.025) addSignal();
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
