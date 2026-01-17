import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { CursorFollower } from "@/components/ui/cursor-follower";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
