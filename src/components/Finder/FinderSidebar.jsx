import {
  FaUser,
  FaCode,
  FaBrain,
  FaGraduationCap,
  FaTrophy,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const favorites = [
  { name: "About Me", icon: FaUser },
  { name: "Projects", icon: FaCode },
  { name: "Skills", icon: FaBrain },
  { name: "Education", icon: FaGraduationCap },
  { name: "Achievements", icon: FaTrophy },
  { name: "Resume", icon: FaFileAlt },
  { name: "Contact", icon: FaEnvelope },
];

export default function FinderSidebar({ active, setActive }) {
  return (
    <aside className="w-64 bg-[#252526]/70 backdrop-blur-2xl border-r border-white/10 flex flex-col">
      <div className="px-5 pt-5 pb-3">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
          Favorites
        </p>
      </div>

      <div className="px-2 space-y-1">
        {favorites.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200

            ${
              active === name
                ? "bg-[#0A84FF] text-white"
                : "text-zinc-300 hover:bg-white/10"
            }
            `}
          >
            <Icon className="text-sm" />
            <span className="text-[15px]">{name}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto p-5 border-t border-white/10">
        <p className="text-xs text-zinc-500">Keshav's Workspace</p>
      </div>
    </aside>
  );
}
