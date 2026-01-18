"use client";

import { useEffect } from "react";

interface PerformanceMetric {
    name: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}

/**
 * usePerformanceMonitor - Hook to monitor Core Web Vitals
 * Only logs in development mode
 */
export function usePerformanceMonitor() {
    useEffect(() => {
        // Only run in browser and in development
        if (typeof window === "undefined" || process.env.NODE_ENV !== "development")
            return;

        // Check for Performance Observer support
        if (!("PerformanceObserver" in window)) return;

        const logMetric = (metric: PerformanceMetric) => {
            const colors = {
                good: "color: #10B981",
                "needs-improvement": "color: #F59E0B",
                poor: "color: #EF4444",
            };

            // eslint-disable-next-line no-console
            console.log(
                `%c[Perf] ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`,
                colors[metric.rating],
            );
        };

        // LCP - Largest Contentful Paint
        try {
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
                    startTime: number;
                };

                if (lastEntry) {
                    const value = lastEntry.startTime;
                    const rating =
                        value <= 2500
                            ? "good"
                            : value <= 4000
                                ? "needs-improvement"
                                : "poor";

                    logMetric({ name: "LCP", value, rating });
                }
            });

            lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
        } catch {
            // LCP not supported
        }

        // FID - First Input Delay
        try {
            const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    const fidEntry = entry as PerformanceEntry & {
                        processingStart: number;
                    };
                    const value = fidEntry.processingStart - entry.startTime;
                    const rating =
                        value <= 100 ? "good" : value <= 300 ? "needs-improvement" : "poor";

                    logMetric({ name: "FID", value, rating });
                }
            });

            fidObserver.observe({ type: "first-input", buffered: true });
        } catch {
            // FID not supported
        }

        // CLS - Cumulative Layout Shift
        try {
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    const clsEntry = entry as PerformanceEntry & {
                        hadRecentInput: boolean;
                        value: number;
                    };

                    if (!clsEntry.hadRecentInput) {
                        clsValue += clsEntry.value;
                    }
                }
                const rating =
                    clsValue <= 0.1
                        ? "good"
                        : clsValue <= 0.25
                            ? "needs-improvement"
                            : "poor";

                logMetric({ name: "CLS", value: clsValue * 1000, rating }); // Multiply for readability
            });

            clsObserver.observe({ type: "layout-shift", buffered: true });
        } catch {
            // CLS not supported
        }

        // FCP - First Contentful Paint
        try {
            const fcpObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === "first-contentful-paint") {
                        const value = entry.startTime;
                        const rating =
                            value <= 1800
                                ? "good"
                                : value <= 3000
                                    ? "needs-improvement"
                                    : "poor";

                        logMetric({ name: "FCP", value, rating });
                    }
                }
            });

            fcpObserver.observe({ type: "paint", buffered: true });
        } catch {
            // Paint timing not supported
        }
    }, []);
}

export default usePerformanceMonitor;
