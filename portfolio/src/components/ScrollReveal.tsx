"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0, duration, delay, ease: "power3.out" };
    if (direction === "up") fromVars.y = distance;
    if (direction === "down") fromVars.y = -distance;
    if (direction === "left") fromVars.x = distance;
    if (direction === "right") fromVars.x = -distance;

    const tween = gsap.from(el, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [delay, direction, distance, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
