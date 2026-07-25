"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1 shadow-md",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      style={{
        background: "var(--surface)",
        color: "var(--text-muted)",
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
