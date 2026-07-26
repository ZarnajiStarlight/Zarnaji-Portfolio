import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/ZarnajiStarlight" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/zarnajiizar/" },
  { icon: Mail, label: "Email", href: "mailto:naji9296@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6287791406271" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "var(--accent)" }}
              >
                ZN
              </div>
              <span className="font-semibold" style={{ color: "var(--text)" }}>
                Zarnaji
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Full Stack Developer · Data Analyst · AI Enthusiast
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[var(--border)] transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--bg-tertiary)]"
                style={{ color: "var(--text-muted)" }}
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2"
        >
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            © {year} Zarnaji. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            Designed & Built by{" "}
            <span style={{ color: "var(--accent)" }}>Zarnaji</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
