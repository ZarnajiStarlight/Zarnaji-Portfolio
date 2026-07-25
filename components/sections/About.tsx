"use client";

import { motion } from "framer-motion";
import { Code2, BarChart2, Brain, Settings } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Pengembangan Web",
    description:
      "Membangun aplikasi web full-stack dengan Laravel, PHP, dan JavaScript modern. Dari sistem CRUD hingga platform multi-peran yang kompleks.",
  },
  {
    icon: BarChart2,
    title: "Analisis Data",
    description:
      "Mengekstrak wawasan dari dataset kompleks menggunakan SPSS, Excel, dan Python. Analisis regresi, uji hipotesis, dan pelaporan.",
  },
  {
    icon: Brain,
    title: "Kecerdasan Buatan",
    description:
      "Menerapkan pipeline computer vision dengan YOLO11 untuk deteksi objek real-time. Pelatihan model, evaluasi, dan deployment produksi.",
  },
  {
    icon: Settings,
    title: "Otomatisasi Proses",
    description:
      "Merancang alur kerja otomatis Excel dan Google Sheets yang menghilangkan entri data manual dan mengurangi waktu pemrosesan hingga 80%+.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title mb-6">
              Saya membangun perangkat lunak yang{" "}
              <span style={{ color: "var(--accent)" }}>memecahkan masalah nyata</span>
            </h2>

            <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
              <p className="text-lg leading-relaxed">
                Saya adalah Full Stack Developer dan Data Analyst yang berbasis di Indonesia,
                dengan fokus kuat pada pengembangan perangkat lunak praktis dan siap produksi.
                Pekerjaan saya mencakup aplikasi web, sistem cerdas, dan alat pengambilan
                keputusan berbasis data.
              </p>
              <p className="leading-relaxed">
                Yang membedakan pendekatan saya adalah kombinasi disiplin rekayasa perangkat lunak
                dan pemikiran analitis. Saya tidak hanya menulis kode — saya
                memahami masalah bisnis terlebih dahulu, merancang model data dengan cermat,
                lalu membangun solusi yang dapat dipelihara dan diskalakan.
              </p>
              <p className="leading-relaxed">
                Saya telah membangun 4 aplikasi lengkap mulai dari analisis kebutuhan hingga
                deployment, termasuk sistem klasifikasi sampah berbasis AI menggunakan
                YOLO11 yang mencapai akurasi 94% mAP50, dan Sistem Pendukung Keputusan
                tingkat pemerintah yang kini digunakan dalam distribusi bantuan sosial nyata.
              </p>
              <p className="leading-relaxed">
                Di luar pengembangan, saya bekerja sebagai konsultan otomasi data —
                merancang solusi Excel dan Google Sheets yang menghemat ratusan jam
                pekerjaan manual organisasi setiap tahunnya.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Pendekatan problem-first",
                "Arsitektur bersih",
                "Keputusan terdokumentasi",
                "Sadar performa",
                "Pembelajaran berkelanjutan",
              ].map((v) => (
                <span key={v} className="badge">
                  {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card p-6"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  <card.icon size={20} />
                </div>
                <h3
                  className="font-semibold mb-2 text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
