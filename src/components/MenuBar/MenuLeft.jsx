const menus = {
  finder: ["Finder", "File", "Edit", "View", "Go", "Window", "Help"],
  safari: [
    "Safari",
    "File",
    "Edit",
    "View",
    "History",
    "Bookmarks",
    "Window",
    "Help",
  ],
  terminal: [
    "Terminal",
    "Shell",
    "Edit",
    "View",
    "Window",
    "Help",
  ],
  settings: [
    "Settings",
    "File",
    "Edit",
    "View",
    "Window",
    "Help",
  ],
  projects: ["Projects", "File", "Edit", "View", "Window", "Help"],
  skills: ["Skills", "File", "Edit", "View", "Window", "Help"],
  education: ["Education", "File", "Edit", "View", "Window", "Help"],
  achievements: ["Achievements", "File", "Edit", "View", "Window", "Help"],
  resume: ["Resume", "File", "Edit", "View", "Window", "Help"],
  contact: ["Contact", "File", "Edit", "View", "Window", "Help"],
};

export default function MenuLeft({ activeApp = "finder" }) {
  const items = menus[activeApp] ?? menus.finder;

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        className="text-lg font-semibold transition-opacity hover:opacity-70"
      >
        
      </button>

      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className={`text-sm transition-opacity hover:opacity-70 ${
            index === 0 ? "font-semibold" : "font-medium"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
