import FinderToolbar from "./FinderToolbar";
import { useState } from "react";
import FinderSidebar from "./FinderSidebar";
import FinderContent from "./FinderContent";

export default function Finder() {
  const [active, setActive] = useState("About Me");

  return (
    <div
      className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2

      w-[1000px]
      h-[650px]

      rounded-2xl
      overflow-hidden

      bg-zinc-900/70
      backdrop-blur-3xl

      border border-white/10
      shadow-2xl
      "
    >
      <FinderToolbar />

      {/* Body */}
      <div className="flex h-[calc(100%-56px)]">
        <FinderSidebar active={active} setActive={setActive} />

        <FinderContent active={active} />
      </div>
    </div>
  );
}
