import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="text-center px-6">
        <p
          className="text-8xl font-bold mb-4"
          style={{ color: "var(--accent)", lineHeight: 1 }}
        >
          404
        </p>
        <h1
          className="text-2xl font-bold mb-3"
          style={{ color: "var(--text)" }}
        >
          Page not found
        </h1>
        <p className="text-base mb-8" style={{ color: "var(--text-muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: "var(--accent)" }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
