
import folderIcon from "../../assets/icons/folders/folder.png";
import finderIcon from "../../assets/icons/apps/finder.png";

const SidebarIcon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    width={18}
    height={18}
    draggable={false}
    className="select-none object-contain shrink-0"
  />
);

const favorites = [
  { id: "home", label: "Home", icon: finderIcon },
  { id: "applications", label: "Applications", icon: folderIcon },
  { id: "documents", label: "Documents", icon: folderIcon },
  { id: "portfolio", label: "Portfolio", icon: folderIcon },
  { id: "projects", label: "Workspace", icon: folderIcon },
  { id: "downloads", label: "Downloads", icon: folderIcon },
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
        {favorites.map(({ id, label, icon }) => {
          const path = currentPath.toLowerCase();

          const selected =
            id === "home"
              ? currentPath === "/"
              : id === "projects"
                ? path.includes("projects") || path.includes("workspace")
                : path.includes(id);

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
              <SidebarIcon src={icon} alt={label} />
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
