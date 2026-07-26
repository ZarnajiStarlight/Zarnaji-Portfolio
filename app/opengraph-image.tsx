import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Zarnaji — Full Stack Developer & Data Analyst";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right bottom, #0f172a, #020617)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "140px",
            height: "140px",
            backgroundColor: "#2563eb",
            borderRadius: "70px",
            marginBottom: "40px",
            fontSize: "80px",
            fontWeight: "bold",
            color: "#ffffff",
            boxShadow: "0 0 40px rgba(37, 99, 235, 0.5)",
          }}
        >
          Z
        </div>
        <div
          style={{
            fontSize: "84px",
            fontWeight: "900",
            marginBottom: "20px",
            textAlign: "center",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Zarnaji
        </div>
        <div
          style={{
            fontSize: "42px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
            marginBottom: "40px",
          }}
        >
          Full Stack Developer & Data Analyst
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", color: "#38bdf8", fontSize: "28px", fontWeight: "600" }}>Laravel & PHP</div>
          <div style={{ display: "flex", alignItems: "center", color: "#475569", fontSize: "28px" }}>•</div>
          <div style={{ display: "flex", alignItems: "center", color: "#38bdf8", fontSize: "28px", fontWeight: "600" }}>Next.js</div>
          <div style={{ display: "flex", alignItems: "center", color: "#475569", fontSize: "28px" }}>•</div>
          <div style={{ display: "flex", alignItems: "center", color: "#38bdf8", fontSize: "28px", fontWeight: "600" }}>Python & AI</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
