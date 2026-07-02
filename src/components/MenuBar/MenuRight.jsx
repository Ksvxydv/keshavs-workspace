import {
  Search,
  Wifi,
  BatteryFull,
  SlidersHorizontal,
} from "lucide-react";

export default function MenuRight({ children }) {
  const Item = ({ children: icon }) => (
    <button
      className="flex h-7 w-7 items-center justify-center rounded-md transition-all duration-150 hover:bg-white/10 hover:backdrop-blur-sm"
      type="button"
    >
      {icon}
    </button>
  );

  return (
    <div className="flex items-center gap-1 text-[13px] font-medium">
      <Item>
        <Search size={15} strokeWidth={2.2} />
      </Item>

      <Item>
        <SlidersHorizontal size={15} strokeWidth={2.2} />
      </Item>

      <Item>
        <Wifi size={15} strokeWidth={2.2} />
      </Item>

      <Item>
        <BatteryFull size={18} strokeWidth={2} />
      </Item>

      <div className="ml-2 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-white/10">
        {children}
      </div>
    </div>
  );
}
