"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";

/*
  LAYOUT: Sama persis seperti referensi (Developer X)
  ─────────────────────────────────────────────────
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  [TEKS + CTA]   [     FOTO BESAR     ]  [INFO PANEL]│
  │   kiri bawah      position:absolute       kanan      │
  │                   z-index: 1              z-index: 2 │
  └──────────────────────────────────────────────────────┘

  Foto: position absolute, tinggi ~100vh, centered di
  area antara kiri dan kanan (bukan di dalam grid column).
  Foto besar seperti di referensi — mendominasi ruang tengah.
*/

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Centered wrapper: max-width 80rem (1280px), konten tidak melebar ── */}
      <div
        className="relative mx-auto min-h-screen overflow-hidden"
        style={{ maxWidth: "72rem" }}
      >
        {/* ══════════════════════════════════════════════
          FOTO — Absolute, besar, menyatu (z-index: 1)
          Posisi: centered di antara kiri & kanan panel
      ══════════════════════════════════════════════ */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none hidden lg:block"
          style={{ zIndex: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.1 }}
        >
          {/* Floating wrapper */}
          <motion.div
            className="absolute bottom-0"
            style={{
              /* Geser foto ke tengah: kiri ~300px (area teks), kanan ~280px (panel) */
              left: "300px",
              right: "280px",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <Image
              src="/photo.png"
              alt="Zarnaji"
              width={600}
              height={900}
              className="object-contain object-bottom"
              style={{
                height: "97vh",
                width: "auto",
                maxWidth: "100%",
                display: "block",
              }}
              priority
            />
          </motion.div>

          {/* ── Gradient fades untuk foto menyatu ── */}
          {/* Bawah */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "220px",
              background: "linear-gradient(to top, var(--bg) 20%, transparent 100%)",
            }}
          />
          {/* Kiri (agar tidak menutupi teks) */}
          <div
            className="absolute top-0 bottom-0 left-0"
            style={{
              width: "320px",
              background: "linear-gradient(to right, var(--bg) 55%, transparent 100%)",
            }}
          />
          {/* Kanan (agar tidak menutupi panel) */}
          <div
            className="absolute top-0 bottom-0 right-0"
            style={{
              width: "300px",
              background: "linear-gradient(to left, var(--bg) 40%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
          LAYOUT: 2 kolom — [kiri: flex] [kanan: panel]
          z-index: 2 — selalu di depan foto
      ══════════════════════════════════════════════ */}
        <div
          className="relative flex min-h-screen"
          style={{ zIndex: 2 }}
        >
          {/* ── KIRI: Teks + CTA (fleksibel) ── */}
          <div className="flex flex-col justify-end pb-24 px-8 lg:px-14 pt-36 flex-1">
            {/* Garis dekoratif biru */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="origin-left mb-8"
              style={{ width: "4rem", height: "2px", background: "var(--accent)" }}
            />

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.6rem)",
                color: "var(--text)",
                letterSpacing: "-0.03em",
                lineHeight: 1.12,
              }}
            >
              I'm Zarnaji, a<br />
              <span style={{ color: "var(--accent)" }}>Full Stack Developer</span>
            </motion.h1>

            {/* Deskripsi */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm leading-loose mb-12 max-w-[280px]"
              style={{ color: "var(--text-muted)" }}
            >
              Membangun aplikasi web siap produksi dan sistem cerdas menggunakan
              Laravel, Python, dan AI — mulai dari computer vision hingga alat
              pengambilan keputusan berbasis data.
            </motion.p>

            {/* Tombol scroll */}
            <motion.a
              href="#about"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow"
              style={{ background: "var(--accent)" }}
              aria-label="Scroll ke bagian About"
            >
              <ChevronDown size={22} color="#ffffff" />
            </motion.a>
          </div>

          {/* ── KANAN: Info Panel (fixed width 280px) ── */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex flex-col justify-center"
            style={{
              width: "280px",
              flexShrink: 0,
              background: "var(--bg)",
            }}
          >
            {/* Panel — About Me */}
            <div className="px-7 py-9">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text)" }}>
                About Me
              </p>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Full Stack Developer &amp; Data Analyst dengan keahlian membangun
                sistem web dan alat analitik berbasis data.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70 border-b pb-px"
                style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
              >
                Learn More <ArrowRight size={11} />
              </a>
            </div>

            {/* Panel — My Work */}
            <div className="px-7 py-9" style={{ borderBottom: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text)" }}>
                My Work
              </p>
              <p className="text-sm mb-5" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                4 aplikasi web, 1 proyek Computer Vision YOLO11 dengan 94% mAP50,
                dan sistem keputusan berbasis data.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-70 border-b pb-px"
                style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
              >
                Browse Portfolio <ArrowRight size={11} />
              </a>
            </div>

            {/* Panel — Follow Me */}
            <div className="px-7 py-9">
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--text)" }}>
                Follow Me
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="hover:opacity-60 transition-opacity" style={{ color: "var(--text-muted)" }}>
                  <LinkedInIcon size={20} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="hover:opacity-60 transition-opacity" style={{ color: "var(--text-muted)" }}>
                  <GitHubIcon size={20} />
                </a>
                <a href="mailto:your@email.com" aria-label="Email"
                  className="hover:opacity-60 transition-opacity" style={{ color: "var(--text-muted)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <a href="https://wa.me/62xxxxxxxxxx" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                  className="hover:opacity-60 transition-opacity" style={{ color: "var(--text-muted)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
        {/* ── End centered wrapper ── */}
      </div>
    </section>
  );
}
