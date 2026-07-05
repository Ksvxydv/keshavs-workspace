import { useState } from "react";
import Page from "../components/ui/Page";
import GlassWindow from "../components/ui/GlassWindow";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiFolder,
  FiFileText,
  FiCpu,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiRotateCw,
  FiPlus,
} from "react-icons/fi";
import { FaSafari } from "react-icons/fa";

import githubLogo from "../assets/social/githubLogo.svg";
import linkedinLogo from "../assets/social/linkedinLogo.png";
import leetcodeLogo from "../assets/social/leetcodeLogo.png";
import codeforcesLogo from "../assets/social/codeforceslogo.png";

const favoriteCardClass = `
  group
  cursor-pointer
  rounded-[20px]
  border

  h-full
  w-full

  p-3

  flex
  flex-col
  items-center
  justify-center

  text-center

  transition-all
  duration-300

  hover:-translate-y-1
  hover:scale-[1.03]
  hover:shadow-2xl
  hover:border-white/20
  hover:bg-white/10
`;

const favoriteCardStyle = {
  background:
    "color-mix(in srgb, var(--wallpaper-primary) 6%, rgba(255,255,255,.02))",
  border: "1px solid rgba(255,255,255,0.05)",
  backdropFilter: "blur(20px)",
  boxShadow:
    "0 16px 45px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.07)",
};

const portfolioIconStyle = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
};

const favorites = [
  {
    title: "GitHub",
    type: "image",
    icon: githubLogo,
    url: "https://github.com/Ksvxydv",
  },
  {
    title: "LinkedIn",
    type: "image",
    icon: linkedinLogo,
    url: "https://linkedin.com",
  },
  {
    title: "LeetCode",
    type: "image",
    icon: leetcodeLogo,
    url: "https://leetcode.com",
  },
  {
    title: "Codeforces",
    type: "image",
    icon: codeforcesLogo,
    url: "https://codeforces.com",
  },
  {
    title: "Resume",
    type: "component",
    icon: FiFileText,
    query: "resume",
  },
  {
    title: "Projects",
    type: "component",
    icon: FiFolder,
    query: "projects",
  },
  {
    title: "Contact",
    type: "component",
    icon: FiUser,
    query: "contact",
  },
  {
    title: "Skills",
    type: "component",
    icon: FiCpu,
    query: "skills",
  },
];

const quickLinks = ["about", "skills", "education", "contact"];

export default function Safari() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Start Page",
      query: "",
      result: null,
    },
  ]);
  const [activeTab, setActiveTab] = useState(1);

  function updateActiveTab(data) {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === activeTab ? { ...tab, ...data } : tab
      )
    );
  }

  function isValidUrl(value) {
    return /^(https?:\/\/|www\.)/i.test(value) || /^[a-z0-9-]+(\.[a-z]{2,})+/i.test(value);
  }

  function handleSearch(searchText = query) {
    if (searchText.trim()) {
      const nextHistory = history.slice(0, historyIndex + 1);
      nextHistory.push(searchText);
      setHistory(nextHistory);
      setHistoryIndex(nextHistory.length - 1);
    }

    const q = searchText.trim().toLowerCase();

    updateActiveTab({
      query: searchText,
      title:
        searchText.trim().length > 0
          ? searchText.charAt(0).toUpperCase() + searchText.slice(1)
          : "Start Page",
    });

    if (isValidUrl(searchText)) {
      const url = searchText.startsWith("http")
        ? searchText
        : `https://${searchText.replace(/^www\./, "www.")}`;

      window.open(url, "_blank");

      const data = {
        title: "Opening Website",
        text: `Opening ${url}`,
      };

      setResult(data);
      updateActiveTab({ result: data });
      return;
    }

    switch (q) {
      case "github":
      case "open github":
        window.open("https://github.com/Ksvxydv", "_blank");
        return;

      case "linkedin":
        window.open("https://linkedin.com", "_blank");
        return;

      case "about":
        {
          const data = {
            title: "About Me",
            text: "I'm a Computer Science & Engineering student at MNNIT Allahabad with a passion for software engineering, UI/UX design, competitive programming, and building polished applications inspired by macOS.",
          };
          setResult(data);
          updateActiveTab({ result: data });
          return;
        }

      case "skills":
        {
          const data = {
            title: "Skills",
            text: "Explore my Skills app to see the technologies and tools I work with.",
          };
          setResult(data);
          updateActiveTab({ result: data });
          return;
        }

      case "education":
        {
          const data = {
            title: "Education",
            text: "I'm currently pursuing B.Tech in Computer Science & Engineering at MNNIT Allahabad.",
          };
          setResult(data);
          updateActiveTab({ result: data });
          return;
        }

      case "projects":
        {
          const data = {
            title: "Projects",
            text: "I'm currently building real-world projects. They'll appear here soon.",
          };
          setResult(data);
          updateActiveTab({ result: data });
          return;
        }

      case "contact":
        {
          const data = {
            title: "Contact",
            text: "Open the Contact app from the Dock to get in touch with me.",
          };
          setResult(data);
          updateActiveTab({ result: data });
          return;
        }

      default:
        {
          const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;

          window.open(searchUrl, "_blank");

          const data = {
            title: "Searching Google",
            text: `Searching Google for "${searchText}"...`,
          };

          setResult(data);
          updateActiveTab({ result: data });
        }
    }
  }

  function goBack() {
    if (historyIndex <= 0) return;

    const previous = history[historyIndex - 1];
    setHistoryIndex((i) => i - 1);
    setQuery(previous);
    handleSearch(previous);
  }

  function goForward() {
    if (historyIndex >= history.length - 1) return;

    const next = history[historyIndex + 1];
    setHistoryIndex((i) => i + 1);
    setQuery(next);
    handleSearch(next);
  }

  function refreshPage() {
    handleSearch(query);
  }

  function newTab() {
    const id = Date.now();
    setTabs((prev) => [
      ...prev,
      {
        id,
        title: "New Tab",
        query: "",
        result: null,
      },
    ]);
    setActiveTab(id);
    setQuery("");
    setResult(null)
    setHistory([]);
    setHistoryIndex(-1);
  }

  function openFavorite(item) {
    if (item.url) {
      window.open(item.url, "_blank");
      return;
    }

    setQuery(item.query);
    setResult(null);
    handleSearch(item.query);
  }

  return (
    <Page className="p-0">
      <div
        className="relative flex h-full w-full flex-col overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--wallpaper-primary) 14%, transparent), rgba(255,255,255,0.05) 35%, rgba(255,255,255,0.02) 70%, color-mix(in srgb, var(--wallpaper-secondary) 12%, transparent))",
        }}
      >
        <style>{`
            @keyframes pulseGlow {
            0%,100% {
                transform: scale(1);
                opacity:.45;
            }
            50% {
                transform: scale(1.18);
                opacity:.95;
            }
            }
        `}</style>
        <div
          className="flex items-end gap-2 px-5 pt-3 pb-2 overflow-x-auto"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setQuery(tab.query || "");
                setResult(tab.result || null);
              }}
              className="min-w-[170px] rounded-t-2xl px-5 py-2 text-sm transition-all flex items-center justify-between"
              style={{
                background:
                  activeTab === tab.id
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderBottom:
                  activeTab === tab.id
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {tab.title}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  if (tabs.length === 1) return;

                  const remaining = tabs.filter((t) => t.id !== tab.id);
                  setTabs(remaining);

                  if (activeTab === tab.id) {
                    setActiveTab(remaining[0].id);
                    setQuery(remaining[0].query || "");
                    setResult(remaining[0].result || null);
                  }
                }}
                className="ml-3 rounded-full px-2 hover:bg-white/10"
              >
                ×
              </span>
            </button>
          ))}
        </div>
        <div
          className="flex items-center justify-center border-b px-8 py-5 backdrop-blur-2xl"
          style={{
            background: "rgba(255,255,255,0.025)",
            backdropFilter: "blur(30px) saturate(180%)",
            WebkitBackdropFilter: "blur(30px) saturate(180%)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex w-full items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={goBack}
                disabled={historyIndex <= 0}
                className="rounded-full p-2 transition hover:bg-white/10 disabled:opacity-40"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={goForward}
                disabled={historyIndex >= history.length - 1}
                className="rounded-full p-2 transition hover:bg-white/10 disabled:opacity-40"
              >
                <FiChevronRight size={18} />
              </button>
              <button
                onClick={refreshPage}
                className="rounded-full p-2 transition hover:bg-white/10"
              >
                <FiRotateCw size={17} />
              </button>
            </div>
            <div className="flex flex-1 justify-center">
              <div
                className="flex w-full max-w-xl xl:max-w-2xl items-center gap-3 rounded-full px-6 py-3.5 transition-all duration-500 hover:scale-[1.01] focus-within:scale-[1.01] focus-within:shadow-[0_0_30px_rgba(59,130,246,0.18)]"
                style={{
                  background:
                    "color-mix(in srgb, var(--wallpaper-primary) 8%, rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(28px)",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,.03), inset 0 1px 0 rgba(255,255,255,.10), 0 20px 40px rgba(0,0,0,.12)",
                }}
              >
                <FiSearch className="text-lg opacity-50" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                  placeholder="Search Google or enter website name"
                  className="w-full bg-transparent text-[15px] font-medium outline-none placeholder:text-[var(--text-secondary)]"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={newTab}
                className="rounded-full p-2 transition hover:bg-white/10"
              >
                <FiPlus size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid flex-1 min-h-0 grid-cols-1 lg:grid-cols-[220px_1fr]">
          {/* LEFT SIDEBAR */}
          <aside
            className="hidden lg:flex flex-col min-h-0 overflow-y-auto backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--wallpaper-primary) 8%, transparent), rgba(255,255,255,.015))",
              backdropFilter: "blur(26px) saturate(170%)",
              WebkitBackdropFilter: "blur(26px) saturate(170%)",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              padding: 24,
            }}
          >
            <h2 className="mb-6 text-xl font-semibold">K-OS Start Page</h2>
            <p
              className="mb-8 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Quick access to portfolio sections.
            </p>
            <section>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      setQuery(link);
                      handleSearch(link);
                    }}
                    className="rounded-full border px-4 py-2 text-left transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--window)",
                      color: "var(--text)",
                    }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                ))}
              </div>
            </section>
          </aside>
          {/* RIGHT CONTENT */}
          <main
            className="flex flex-col h-full min-h-0 overflow-hidden"
            style={{
              padding: 16,
              paddingBottom: 24,
              background: "transparent",
            }}
          >
            <div className="relative flex-shrink-0 flex flex-col items-center text-center py-3 lg:py-5 overflow-visible">
              <div className="relative mb-2 flex items-center justify-center">
                {/* Outer glowing ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "72px",
                    height: "72px",
                    border: "2px solid rgba(14,165,233,.45)",
                    boxShadow:
                      "0 0 12px rgba(14,165,233,.45), 0 0 30px rgba(14,165,233,.25)",
                    animation: "pulseGlow 3.5s ease-in-out infinite",
                  }}
                />

                {/* Soft edge glow */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "86px",
                    height: "86px",
                    background:
                      "radial-gradient(circle, transparent 60%, rgba(14,165,233,.22) 72%, transparent 82%)",
                    filter: "blur(6px)",
                    animation: "pulseGlow 3.5s ease-in-out infinite",
                  }}
                />

                <FaSafari
                  className="relative z-10 text-4xl lg:text-5xl"
                  style={{
                    color: "#0EA5E9",
                    filter:
                      "drop-shadow(0 2px 8px rgba(0,0,0,.35)) drop-shadow(0 0 8px rgba(14,165,233,.28))",
                  }}
                />
              </div>
              <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                Welcome to K-OS Safari
              </h2>
              <p
                className="mt-2 max-w-xl text-sm leading-6 opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                Search the web, open your favorite websites, or ask questions
                about my portfolio. AI-powered search is coming soon.
              </p>
            </div>

            <section className="flex flex-col flex-1 min-h-0 mt-3">
              <div
                className="
                    grid
                    flex-1
                    min-h-0
                    overflow-y-auto
                    overflow-x-hidden
                    pr-2
                    gap-4

                    grid-cols-2
                    sm:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5

                    auto-rows-[100px]
                    sm:auto-rows-[115px]
                    lg:auto-rows-[130px]

                    content-start
                "
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {favorites.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => openFavorite(item)}
                    className={favoriteCardClass}
                    onMouseEnter={() => setHoveredCard(item.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      ...favoriteCardStyle,
                      transform:
                        hoveredCard === item.title
                          ? "perspective(1000px) rotateX(4deg) translateY(-4px)"
                          : "perspective(1000px) rotateX(0deg)",
                      transition: "all .45s cubic-bezier(.22,1,.36,1)",
                    }}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="
                        mx-auto
                        mb-2
                        h-9
                        w-9
                        sm:h-10
                        sm:w-10
                        lg:h-11
                        lg:w-11
                        object-contain
                        drop-shadow-md
                        transition-all
                        duration-300
                        group-hover:scale-110
                        "
                      />
                    ) : (
                      <div
                        className="
                        mx-auto
                        mb-2
                        flex
                        h-9
                        w-9
                        sm:h-10
                        sm:w-10
                        lg:h-11
                        lg:w-11
                        items-center
                        justify-center
                        rounded-2xl
                        transition-transform
                        duration-300
                        group-hover:scale-110
                        "
                        style={portfolioIconStyle}
                      >
                        <item.icon size={20} />
                      </div>
                    )}

                    <h4 className="text-xs sm:text-sm lg:text-base font-semibold">
                      {item.title}
                    </h4>
                    <p
                      className="hidden sm:block mt-1 text-[11px]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.type === "image" ? "Website" : "Portfolio"}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <AnimatePresence>
              {result && (
                <div
                  className="absolute inset-0 z-50 flex items-center justify-center"
                  onClick={() => setResult(null)}
                  style={{
                    background: "rgba(0,0,0,.35)",
                    backdropFilter: "blur(64px) saturate(140%) brightness(.82)",
                    WebkitBackdropFilter:
                      "blur(64px) saturate(140%) brightness(.82)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="
                            relative
                            w-[92%]
                            max-w-2xl
                            rounded-[30px]
                            p-8
                            overflow-visible
                            border
                        "
                      style={{
                        background: "rgba(24,26,31,0.96)",
                        border: "1px solid rgba(255,255,255,.12)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        boxShadow:
                          "0 36px 120px rgba(0,0,0,.60), inset 0 1px 0 rgba(255,255,255,.08)",
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setResult(null);
                        }}
                        className="
                        absolute
                        top-5
                        right-5
                        z-30

                        flex
                        h-11
                        w-11
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/15

                        bg-white/5

                        text-[22px]
                        leading-none

                        backdrop-blur-xl

                        transition-all
                        duration-200

                        hover:bg-white/12
                        hover:border-white/30
                        hover:scale-105

                        active:scale-95
                        "
                      >
                        ×
                      </button>
                      <h3 className="relative z-10 pr-12 text-3xl font-semibold tracking-tight">
                        {result.title}
                      </h3>
                      <p
                        className="relative z-10 mt-5 text-[15px] leading-8 opacity-90"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {result.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Page>
  );
}