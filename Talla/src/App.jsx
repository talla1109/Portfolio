import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { ChevronUp } from "./components/Icons";
import { useActiveSection } from "./hooks";
import { profile, about, projects, resume } from "./data/portfolio";

const sectionIds = ["home", "about", "projects", "resume", "contact"];

function buildCvText() {
  const lines = [
    profile.name.toUpperCase(),
    `${profile.role}`,
    `${profile.email} | ${profile.location}`,
    "",
    "EDUCATION",
    ...resume.education.map((e) => `- ${e.title}, ${e.place} (${e.period})`),
    "",
    "EXPERIENCE",
    ...resume.experience.map((e) => `- ${e.title}, ${e.place} (${e.period}): ${e.note}`),
    "",
    "SKILLS",
    resume.skills.join(", "),
    "",
    "PROJECTS",
    ...projects.map((p) => `- ${p.title}: ${p.summary}`),
  ];
  return lines.join("\n");
}

export default function App() {
  const active = useActiveSection(sectionIds);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const downloadCv = () => {
    const blob = new Blob([buildCvText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "John-Harold-Talla-CV.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar active={active} name={profile.shortName + "."} />
      <main>
        <Hero profile={profile} onDownloadCv={downloadCv} />
        <About about={about} profile={profile} />
        <Projects projects={projects} />
        <Resume resume={resume} onDownloadCv={downloadCv} />
        <Contact profile={profile} />
      </main>
      <footer className="border-t border-edge px-5 py-8 text-center text-sm text-soft">
        © {new Date().getFullYear()} {profile.name} · {profile.section}, {profile.school}
      </footer>
      {showTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="glow-box fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-neon text-black transition hover:bg-white"
        >
          <ChevronUp />
        </a>
      )}
    </>
  );
}
