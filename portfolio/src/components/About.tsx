"use client";

import ScrollReveal from "./ScrollReveal";

const timeline = [
  { year: "Now", label: "Beyond Transformer", desc: "Building SSMs, RWKV & Flash Attention from scratch" },
  { year: "2024", label: "CUDA Kernels", desc: "Dove into low-level GPU optimization for attention" },
  { year: "2023", label: "Research Mode", desc: "Systematic reading & re-implementation of key papers" },
];

const stats = [
  { icon: "⟨ ⟩", label: "Focus", value: "Non-Transformer\nArchitectures" },
  { icon: "λ", label: "Approach", value: "Implementation\nFirst" },
  { icon: "∞", label: "Phase", value: "1 / 6\nFoundations" },
  { icon: "Δ", label: "Method", value: "Systematic\nLearning" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-16">
            <span className="font-mono text-accent text-lg mr-3">01.</span>
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Text column */}
          <div className="md:col-span-3 space-y-6">
            <ScrollReveal delay={0.05}>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m{" "}
                <strong className="text-text">Mehmet Arda Hakbilen</strong>, known
                online as <strong className="text-text">Kael Valen</strong>. I&apos;m
                an ML architecture researcher focused on questioning the
                transformer monopoly and exploring alternative sequence models.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                My approach is{" "}
                <em className="text-accent-pink font-medium">implementation-first</em>: I
                don&apos;t just read papers, I build architectures from scratch to
                truly understand the trade-offs between speed, expressiveness, and
                memory efficiency.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-text-secondary leading-relaxed">
                Currently deep into State-Space Models (Mamba), RWKV, and Flash
                Attention v2 CUDA kernels. Every commit is a step toward
                understanding why — or why not — transformers are the answer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <blockquote className="border-l-2 border-accent pl-5 py-1 mt-8 italic text-text-muted bg-accent/5 rounded-r-lg">
                &ldquo;Implementation over theory. Trade-offs over hype. Systematic
                learning over vibe coding.&rdquo;
              </blockquote>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.25}>
              <div className="mt-10 space-y-0">
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-5">
                  Timeline
                </p>
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0 group-hover:bg-accent-pink transition-colors" />
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-1" />
                      )}
                    </div>
                    <div className="pb-5">
                      <span className="text-xs font-mono text-accent-green block mb-0.5">{item.year}</span>
                      <span className="text-sm font-semibold text-text block">{item.label}</span>
                      <span className="text-xs text-text-muted">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Stats column */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 h-fit">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={0.05 * i} direction="left">
                <div className="bg-bg-card border border-border rounded-xl p-5 hover:border-accent/40 hover:bg-bg-card-hover transition-all group cursor-default h-full">
                  <span className="text-2xl text-accent group-hover:text-accent-hover transition-colors block mb-3">
                    {s.icon}
                  </span>
                  <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                    {s.label}
                  </span>
                  <span className="text-sm text-text font-medium whitespace-pre-line leading-snug">
                    {s.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
