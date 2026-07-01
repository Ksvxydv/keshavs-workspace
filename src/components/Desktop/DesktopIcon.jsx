import { Folder, Globe, Terminal, Settings, Trash2 } from "lucide-react";

const icons = {
  Finder: Folder,
  Safari: Globe,
  Terminal: Terminal,
  Settings: Settings,
  Trash: Trash2,
};

export default function DesktopIcon({ name, onOpen }) {
  const Icon = icons[name];

  return (
    <button
      onDoubleClick={onOpen}
      className="flex flex-col items-center gap-2 w-24 select-none group"
    >
      <div
        className="
          w-16
          h-16
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          flex
          items-center
          justify-center
          transition
          duration-200
          group-hover:scale-105
        "
      >
        <Icon size={34} className="text-white" />
      </div>

      <span className="text-white text-sm drop-shadow">{name}</span>
    </button>
  );
}
