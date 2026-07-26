import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zarnaji",
    jobTitle: "Full Stack Developer & Data Analyst",
    url: "https://zarnaji-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Zarnaji",
      "https://linkedin.com/in/zarnaji"
    ],
    knowsAbout: [
      "Laravel",
      "PHP",
      "Next.js",
      "Python",
      "SQL",
      "Data Analysis",
      "Artificial Intelligence",
      "Computer Vision"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}
