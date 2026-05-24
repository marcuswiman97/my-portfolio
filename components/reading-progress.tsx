"use client";

import { useEffect, useRef, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const documentElement = document.documentElement;
      const scrollableHeight =
        documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setProgress(100);
        return;
      }

      const nextProgress = Math.min(
        100,
        Math.max(0, (window.scrollY / scrollableHeight) * 100),
      );

      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-label="Reading progress"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={Math.round(progress)}
      className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      role="progressbar"
    >
      <div
        className="h-full origin-left bg-[#6FAF8F] transition-transform duration-150 ease-out motion-reduce:transition-none"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  );
}
