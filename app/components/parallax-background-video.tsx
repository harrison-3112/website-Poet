"use client";

import { useEffect, useRef } from "react";

type ParallaxBackgroundVideoProps = {
  source: string;
};

export default function ParallaxBackgroundVideo({ source }: ParallaxBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    let frameId = 0;

    const applyParallaxScale = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = Math.max(window.innerHeight, 1);
      const normalizedScroll = Math.min(scrollTop / (viewportHeight * 1.8), 1);
      const nextScale = 1 + normalizedScroll * 0.05;

      videoElement.style.transform = `scale(${nextScale.toFixed(4)})`;
      frameId = 0;
    };

    const onScrollOrResize = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(applyParallaxScale);
    };

    applyParallaxScale();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      videoElement.style.transform = "scale(1)";
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="bg-parallax-video h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={source} type="video/mp4" />
    </video>
  );
}
