import { useState } from "react";
import { desktopApps } from "../../data/desktopApps";
import DesktopIcon from "./DesktopIcon";
import Finder from "../Finder/Finder";

import wallpaper from "../../assets/wallpaper.jpg";

export default function Desktop() {
  const [finderOpen, setFinderOpen] = useState(false);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Desktop Icons */}
      <div className="absolute right-8 top-8 flex flex-col gap-6">
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            name={app.name}
            onOpen={() => {
              if (app.app === "finder") {
                setFinderOpen(true);
              }
            }}
          />
        ))}
      </div>

      {/* Windows */}
      {finderOpen && <Finder />}
    </div>
  );
}
