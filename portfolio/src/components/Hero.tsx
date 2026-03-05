"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ColorBends from "./ColorBends";

const commands = [
  "python train.py --model mamba --seq_len 8192",
  "cargo build --release --features cuda",
  "nvcc -O3 flash_attention_v2.cu -o flash_attn",
  "python benchmark.py --compare transformer,mamba,rwkv",
  "git commit -m 'feat: selective state-space mechanism'",
];

const terminalHistory = [
  { prompt: "$", cmd: "git clone https://github.com/kaelvalen/beyond_transformer", out: "Cloning into 'beyond_transformer'... done." },
  { prompt: "$", cmd: "python benchmark.py --arch mamba", out: "✓  Mamba-130M  |  2.1ms/token  |  O(n) memory" },
];

const statusBadges = [
  { label: "Phase", value: "1 / 6", color: "accent" },
  { label: "Focus", value: "Non-Transformer", color: "accent-pink" },
  { label: "Method", value: "Impl-First", color: "accent-green" },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(badgesRef.current, { opacity: 0, y: -20, duration: 0.5 })
        .from(headingRef.current, { opacity: 0, y: 30, duration: 0.7 }, "-=0.2")
        .from(subRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(descRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(termRef.current, { opacity: 0, y: 30, scale: 0.97, duration: 0.6 }, "-=0.2")
        .from(scrollRef.current, { opacity: 0, y: -10, duration: 0.4 }, "-=0.1");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const current = commands[cmdIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => { setText(current.slice(0, charIndex + 1)); setCharIndex(charIndex + 1); }, 40 + Math.random() * 30);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => { setText(current.slice(0, charIndex - 1)); setCharIndex(charIndex - 1); }, 18);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      const t = setTimeout(() => { setDeleting(false); setCmdIndex((cmdIndex + 1) % commands.length); }, 0);
      return () => clearTimeout(t);
    }
  }, [charIndex, deleting, cmdIndex]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full"
    >
      <div className="absolute inset-0">
        <ColorBends
          colors={["#865eff", "#ffffff", "#ff63d8"]}
          rotation={-1}
          speed={0}
          scale={0.1}
          frequency={1.2}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0}
          noise={0.219}
          transparent
          autoRotate={-5}
        />
      </div>
      <div className="absolute inset-0 bg-bg/40" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center min-w-0">
        {/* Status badges */}
        <div ref={badgesRef} className="flex flex-wrap gap-2 justify-center mb-8">
          {statusBadges.map((b) => (
            <span
              key={b.label}
              className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full border border-${b.color}/30 text-${b.color} bg-${b.color}/5`}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-${b.color} animate-pulse shrink-0`} />
              <span className="text-text-muted">{b.label}:</span>
              {b.value}
            </span>
          ))}
        </div>

        <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
          <span className="bg-linear-to-r from-accent via-accent-pink to-accent bg-clip-text text-transparent bg-size-[200%] animate-gradient">
            Kael Valen
          </span>
        </h1>

        <p ref={subRef} className="text-xl sm:text-2xl text-text-secondary font-light mb-6">
          Building Beyond Transformer
        </p>

        <p ref={descRef} className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Researching{" "}
          <strong className="text-text">non-transformer architectures</strong>{" "}
          through systematic implementation. Not just reading papers — building
          Mamba, RWKV, Flash Attention from scratch.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-14">
          <a
            href="#research"
            className="group px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all duration-200 hover:shadow-[0_0_24px_rgba(127,90,240,0.5)]"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Terminal */}
        <div
          ref={termRef}
          className="max-w-2xl mx-auto rounded-xl border border-border overflow-hidden bg-bg-card/90 backdrop-blur text-left shadow-2xl"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-bg-secondary border-b border-border">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="flex-1 text-center text-xs text-text-muted font-mono -ml-12">
              zsh — ~/research — beyond_transformer
            </span>
          </div>

          {/* History lines */}
          <div className="px-4 pt-3 pb-1 font-mono text-xs sm:text-sm space-y-2">
            {terminalHistory.map((line, i) => (
              <div key={i} className="space-y-0.5 opacity-60">
                <div className="flex gap-1.5 min-w-0">
                  <span className="text-accent-green shrink-0">{line.prompt}</span>
                  <span className="text-text-secondary truncate">{line.cmd}</span>
                </div>
                <div className="text-text-muted pl-3 truncate">{line.out}</div>
              </div>
            ))}
          </div>

          {/* Active line */}
          <div className="px-4 pb-4 pt-2 font-mono text-xs sm:text-sm overflow-hidden">
            <span className="text-accent-green">$</span>{" "}
            <span className="text-text">{text}</span>
            <span className="animate-pulse text-accent ml-0.5">▋</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-linear-to-b from-accent to-transparent animate-bounce-slow" />
      </div>
    </section>
  );
}
