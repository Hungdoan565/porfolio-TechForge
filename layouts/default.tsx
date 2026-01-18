import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Monitor Core Web Vitals in development
  usePerformanceMonitor();

  return (
    <div className="relative flex flex-col min-h-screen bg-morning-mist">
      <Head />
      <Navbar />
      <main className="flex-grow">{children}</main>

      {/* Custom Cursor - only on desktop */}
      <CursorFollower />
    </div>
  );
}
