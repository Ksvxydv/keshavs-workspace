import Page from "../components/ui/Page";
import { useState, useEffect, useRef, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import desktop from "../assets/projects/desktop.png";
import finder from "../assets/projects/finder.png";
import about from "../assets/projects/about.png";
import resume from "../assets/projects/resume.png";
import contacts from "../assets/projects/contacts.png";
import settings from "../assets/projects/settings.png";
import darkmode from "../assets/projects/darkmode.png";
import multitasking from "../assets/projects/multitasking.png";

const screenshots = [
  { image: desktop, title: "Desktop" },
  { image: finder, title: "Finder" },
  { image: about, title: "About" },
  { image: resume, title: "Resume Preview" },
  { image: contacts, title: "Contacts" },
  { image: settings, title: "Settings" },
  { image: darkmode, title: "Dark Mode" },
  { image: multitasking, title: "Multi-window Experience" },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const nextRef = useRef(() => {});

  const previous = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    nextRef.current = next;
  }, [next]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setPreviewOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (paused || previewOpen) return;

    intervalRef.current = setInterval(() => {
      nextRef.current();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [paused, previewOpen]);

  return (
    <Page>
      <div
        className="rounded-3xl border p-5 md:p-8 h-full overflow-y-auto"
        style={{
          background: "var(--window)",
          borderColor: "var(--border)",
          color: "var(--text)",
        }}
      >
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-3/5">
            <div
              className="group relative aspect-video w-full overflow-hidden rounded-2xl border flex items-center justify-center"
              style={{
                background: "var(--window-secondary)",
                borderColor: "var(--border)",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <button
                onClick={previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                aria-label="Previous screenshot"
              >
                <FiChevronLeft size={24} />
              </button>

              <div
                className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] will-change-transform"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {screenshots.map((shot) => (
                  <img
                    key={shot.title}
                    src={shot.image}
                    alt={shot.title}
                    onClick={() => setPreviewOpen(true)}
                    className="h-full min-w-full cursor-zoom-in select-none object-contain transition-all duration-300 group-hover:scale-[1.025] group-hover:brightness-105"
                    draggable={false}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white backdrop-blur-md transition hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                aria-label="Next screenshot"
              >
                <FiChevronRight size={24} />
              </button>

              <div className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md select-none pointer-events-none">
                {screenshots[current].title}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      index === current
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2 px-1">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.title}
                  onClick={() => setCurrent(index)}
                  className={`overflow-hidden rounded-xl border transition-all duration-200 ${
                    current === index
                      ? "ring-2 ring-blue-500 scale-110 shadow-lg"
                      : "opacity-60 hover:opacity-100 hover:scale-105"
                  }`}
                  style={{ borderColor: "var(--border)" }}
                  aria-label={`Open ${shot.title}`}
                >
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="h-14 w-24 object-cover transition-transform duration-200"
                    draggable={false}
                  />
                </button>
              ))}
            </div>

          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-3xl font-bold">K-OS</h2>
            <p className="mt-2 text-lg" style={{ color: "var(--text-secondary)" }}>
              macOS-inspired Interactive Portfolio
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {['React','JavaScript','Vite','HTML','CSS'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3 py-1 text-sm"
                  style={{
                    background: "var(--window-secondary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-6 leading-7" style={{ color: "var(--text-secondary)" }}>
              A fully interactive macOS-inspired desktop portfolio featuring draggable windows, Finder, Dock, Control Center, Resume Preview, Settings, wallpaper customization, light/dark mode, and desktop-like interactions built with React and Vite.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://k-os-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/ksvxydv/keshavs-workspace"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-5 py-2 transition"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--toolbar)",
                  color: "var(--text)",
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            'Finder & Desktop',
            'Dock & Window Manager',
            'Resume Preview',
            'Contacts & About',
            'Theme & Wallpapers',
            'Responsive UI',
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--border)",
                background: "var(--window-secondary)",
              }}
            >
              <h3 className="font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] transition-all duration-300 ease-out"
            style={{
              transform: previewOpen ? "scale(1)" : "scale(0.96)",
              opacity: previewOpen ? 1 : 0,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[current].image}
              alt={screenshots[current].title}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl select-none cursor-zoom-out"
              onClick={() => setPreviewOpen(false)}
              draggable={false}
            />

            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md select-none">
              {screenshots[current].title}
            </div>

            <button
              onClick={previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition hover:scale-110 opacity-90 hover:opacity-100"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white backdrop-blur-md transition hover:scale-110 opacity-90 hover:opacity-100"
            >
              <FiChevronRight size={24} />
            </button>

            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-2 text-sm text-white backdrop-blur-md transition hover:scale-110 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Page>
  );
}
