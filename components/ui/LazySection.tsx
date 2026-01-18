"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * LazySection - Lazy loads heavy sections only when they enter viewport
 * Useful for sections with complex animations or large images
 */
export function LazySection({
  children,
  fallback,
  rootMargin = "200px",
  minHeight = "400px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [rootMargin]);

  const defaultFallback = (
    <div
      className="flex items-center justify-center bg-slate-50 dark:bg-slate-900"
      style={{ minHeight }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-slate-300 dark:border-slate-600 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-sm text-slate-400 dark:text-slate-500">
          Loading...
        </span>
      </div>
    </div>
  );

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : fallback || defaultFallback}
    </div>
  );
}

export default LazySection;
