"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Download, Send, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const contactLinks = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
    description: "Lihat karya open source saya",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
    description: "Terhubung secara profesional",
  },
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    description: "Terbaik untuk pertanyaan formal",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 xxx-xxxx-xxxx",
    href: "https://wa.me/62xxxxxxxxxx",
    description: "Pertanyaan singkat dipersilakan",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback
    const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">Mari bekerja sama</h2>
          <p className="section-subtitle mx-auto">
            Punya proyek dalam pikiran atau ingin mendiskusikan peluang?
            Saya senang mendengar dari Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Availability */}
            <div
              className="card p-5 mb-6 flex items-start gap-4"
              style={{ background: "var(--surface)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1 shrink-0 animate-pulse" />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Available for opportunities
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Menerima pekerjaan full-time, freelance, dan konsultasi.
                  Biasanya merespons dalam 24 jam.
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs" style={{ color: "var(--text-subtle)" }}>
                  <MapPin size={12} />
                  Indonesia (Ramah Remote)
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card flex items-center gap-4 p-4 group cursor-pointer"
                  style={{ background: "var(--surface)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[var(--accent-light)]"
                    style={{
                      background: "var(--bg-tertiary)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <link.icon size={18} className="group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-subtle)" }}>
                      {link.label}
                    </p>
                    <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                      {link.value}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-[var(--border)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]"
              style={{ color: "var(--text-secondary)", background: "var(--surface)" }}
            >
              <Download size={16} />
              Download My CV / Resume
            </a>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card p-6 lg:p-8" style={{ background: "var(--surface)" }}>
              <h3 className="text-base font-semibold mb-6" style={{ color: "var(--text)" }}>
                Send a message
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>
                    Membuka aplikasi email Anda…
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    Jika tidak terbuka, kirim email langsung ke{" "}
                    <a href="mailto:your@email.com" className="underline" style={{ color: "var(--accent)" }}>
                      your@email.com
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Nama *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-[var(--border)] outline-none transition-colors duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-subtle)]"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm border border-[var(--border)] outline-none transition-colors duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-subtle)]"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Tentang apa ini?"
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[var(--border)] outline-none transition-colors duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-subtle)]"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan tentang proyek atau peluang Anda…"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[var(--border)] outline-none transition-colors duration-200 focus:border-[var(--accent)] placeholder:text-[var(--text-subtle)] resize-none"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text)",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: "var(--accent)" }}
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
