import {
  FaChevronLeft,
  FaChevronRight,
  FaThLarge,
  FaList,
  FaSearch,
} from "react-icons/fa";

export default function FinderToolbar() {
  return (
    <div className="h-14 bg-zinc-800/70 border-b border-white/10 flex items-center justify-between px-5">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex gap-2 ml-4">
          <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-zinc-300">
            <FaChevronLeft />
          </button>

          <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-zinc-300">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Center */}
      <h2 className="text-white font-semibold">Keshav's Workspace</h2>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-zinc-300">
          <FaThLarge />
        </button>

        <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-zinc-300">
          <FaList />
        </button>

        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />

          <input
            placeholder="Search"
            className="
            pl-9
            pr-3
            py-2
            w-56
            rounded-xl
            bg-white/10
            text-white
            placeholder:text-zinc-400
            outline-none
            border border-white/10
            "
          />
        </div>
      </div>
    </div>
  );
}
