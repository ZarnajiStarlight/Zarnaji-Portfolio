"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-2 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "top-0" : "top-0"
        )}
      >
        <div
          className={cn(
            "mx-auto w-full transition-all duration-300",
            scrolled
              ? "mx-4 lg:mx-auto mt-3 rounded-2xl border border-[var(--border)] backdrop-blur-xl"
              : "px-0"
          )}
          style={{
            background: scrolled
              ? "rgba(var(--bg-rgb, 255,255,255), 0.85)"
              : "transparent",
          }}
        >
          <nav className="flex items-center justify-between px-6 py-4 lg:px-8 max-w-[72rem] mx-auto">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Go to homepage"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-transform group-hover:scale-105"
                style={{ background: "var(--accent)" }}
              >
                ZN
              </div>
              <span
                className="font-semibold text-sm hidden sm:block"
                style={{ color: "var(--text-muted)" }}
              >
                Zarnaji
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[var(--bg-tertiary)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200 hover:bg-[var(--bg-tertiary)]"
                style={{ color: "var(--text-muted)" }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <a
                href="/cv.pdf"
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:opacity-90"
                style={{
                  background: "var(--accent)",
                  color: "white",
                }}
              >
                <Download size={14} />
                CV
              </a>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-[var(--bg-tertiary)]"
                style={{ color: "var(--text-muted)" }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeMobile}
          />
          <div
            className="absolute right-0 top-0 h-full w-72 border-l border-[var(--border)] p-6 flex flex-col gap-2 shadow-xl"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold" style={{ color: "var(--text)" }}>
                Navigation
              </span>
              <button
                onClick={closeMobile}
                className="p-1 rounded"
                style={{ color: "var(--text-muted)" }}
              >
                <X size={18} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[var(--bg-tertiary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-auto">
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium rounded-lg"
                style={{ background: "var(--accent)", color: "white" }}
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
