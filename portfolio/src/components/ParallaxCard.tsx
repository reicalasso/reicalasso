"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxCardProps = {
  children: React.ReactNode;
  className?: string;
  depth?: number; // how many px to shift vertically (positive = lags behind, negative = leads)
  delay?: number;
};

export default function ParallaxCard({
  children,
  className = "",
  depth = 24,
  delay = 0,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Entrance reveal
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    // Parallax drift while scrolling
    const tween = gsap.to(el, {
      y: -depth,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [depth, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
