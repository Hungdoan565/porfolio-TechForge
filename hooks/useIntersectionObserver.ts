import { useState, useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook to detect when an element is visible in the viewport
 * Useful for lazy loading and pausing animations when not visible
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
): [RefObject<HTMLDivElement | null>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "50px",
    freezeOnceVisible = false,
  } = options;

  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Skip if already visible and freeze is enabled
    if (freezeOnceVisible && isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsVisible(visible);
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, freezeOnceVisible, isVisible]);

  return [elementRef, isVisible];
}

/**
 * Hook to pause animations when tab is not visible
 * Combines document visibility with intersection observer
 */
export function useAnimationVisibility(
  ref: RefObject<HTMLElement | null>,
): boolean {
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isElementVisible, setIsElementVisible] = useState(false);

  // Document visibility (tab focus)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Element visibility (in viewport)
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsElementVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "100px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isDocumentVisible && isElementVisible;
}
