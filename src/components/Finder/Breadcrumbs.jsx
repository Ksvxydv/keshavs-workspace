import { House, ChevronRight } from "lucide-react";

export default function Breadcrumbs({ currentPath, goHome, openPath }) {
  const parts = currentPath.split("/").filter(Boolean);

  return (
    <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm">
      <button
        onClick={goHome}
        className="flex items-center rounded-md p-1.5 transition hover:bg-black/5 dark:hover:bg-white/5"
        title="Home"
      >
        <House size={15} />
      </button>
      {parts.map((part, index) => {
        const path = "/" + parts.slice(0, index + 1).join("/");
        return (
          <div key={`${part}-${index}`} className="flex items-center gap-1">
            <ChevronRight size={14} className="opacity-50" />
            <button
              className="rounded-md px-2 py-1 transition hover:bg-black/5 dark:hover:bg-white/5"
              onClick={() => openPath(path)}
            >
              {part}
            </button>
          </div>
        );
      })}
    </div>
  );
}
