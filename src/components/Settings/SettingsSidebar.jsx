const sections = [
  "Appearance",
  "Wallpapers",
  "Dock",
  "Personalize",
  "About",
];

export default function SettingsSidebar({ active, setActive }) {
  return (
    <aside
      className="w-64 border-r p-4"
      style={{
        background: "var(--toolbar)",
        borderColor: "var(--border)",
      }}
    >
      <h2 className="mb-4 text-lg font-semibold">Settings</h2>

      <div className="space-y-1">
        {sections.map((section) => (
          <button
            key={section}
            type="button"
            onClick={() => setActive(section)}
            className="w-full rounded-lg px-3 py-2 text-left transition-colors duration-150"
            style={{
              background:
                active === section
                  ? "var(--accent)"
                  : "transparent",
              color: active === section ? "#fff" : "var(--text)",
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </aside>
  );
}
