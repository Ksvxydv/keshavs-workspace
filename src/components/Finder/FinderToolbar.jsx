import {
  FaChevronLeft,
  FaChevronRight,
  FaGripHorizontal,
  FaList,
  FaSearch,
  FaHome,
  FaAngleRight,
  FaEllipsisH,
  FaShareSquare
} from "react-icons/fa";

export default function FinderToolbar() {
  return (
    <div
      className="relative flex h-12 items-center justify-between border-b px-4 transition-colors duration-300"
      style={{
        background: "var(--toolbar)",
        borderColor: "var(--border)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <FaChevronLeft />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <FaChevronRight />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            ↑
          </button>
        </div>
      </div>

      {/* Center */}
      <div
        className="pointer-events-none absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        <FaHome className="text-xs" style={{ color: "var(--text-muted)" }} />
        <FaAngleRight className="text-[10px]" style={{ color: "var(--text-muted)" }} />
        <span className="font-medium">Portfolio</span>
        <FaAngleRight className="text-[10px]" style={{ color: "var(--text-muted)" }} />
        <span className="font-medium">Projects</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <FaGripHorizontal />
        </button>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <FaList />
        </button>
        <div className="relative">
          <FaSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
            style={{ color: "var(--text-muted)" }}
          />
          <input
            placeholder="Search Portfolio"
            className="pl-9 pr-3 py-2 w-56 rounded-xl outline-none border transition-all focus:w-64"
            style={{
              background: "rgba(255,255,255,.06)",
              color: "var(--text)",
              borderColor: "rgba(255,255,255,.08)",
              backdropFilter: "blur(18px)",
            }}
          />
        </div>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <FaShareSquare />
        </button>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
}
