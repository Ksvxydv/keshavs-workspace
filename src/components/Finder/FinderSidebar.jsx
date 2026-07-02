import {
  House,
  Folder,
  Briefcase,
  Download,
} from "lucide-react";

const favorites = [
  { id: "home", label: "Home", icon: House },
  { id: "applications", label: "Applications", icon: Folder },
  { id: "documents", label: "Documents", icon: Folder },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "projects", label: "Workspace", icon: Folder },
  { id: "downloads", label: "Downloads", icon: Download },
];

export default function FinderSidebar({
  currentPath,
  goHome,
  openRootDirectory,
}) {
  return (
    <aside
      className="flex w-60 flex-col border-r transition-colors duration-300"
      style={{
        background: "var(--sidebar)",
        borderColor: "var(--border)",
      }}
    >
      <div className="px-5 pt-5 pb-3">
        <p
          className="px-1 text-[11px] font-semibold uppercase tracking-wide"
          style={{ color: "var(--text-muted)" }}
        >
          Favorites
        </p>
      </div>

      <div className="px-2 space-y-0.5">
        {favorites.map(({ id, label, icon: Icon }) => {
          const selected =
            id === "home"
              ? currentPath === "/"
              : currentPath.toLowerCase().includes(id);

          return (
            <button
              key={id}
              onClick={() => {
                if (id === "home") {
                  goHome();
                  return;
                }

                openRootDirectory(id);
              }}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors"
              style={{
                background: selected ? "var(--accent)" : "transparent",
                color: selected ? "#fff" : "var(--text-secondary)",
              }}
            >
              <Icon size={16} />
              <span className="text-[13px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>

      <div
        className="mt-auto border-t px-4 py-3"
        style={{ borderColor: "var(--border)" }}
      >
        <p style={{ color: "var(--text-muted)" }}>K-OS File System</p>
      </div>
    </aside>
  );
}
