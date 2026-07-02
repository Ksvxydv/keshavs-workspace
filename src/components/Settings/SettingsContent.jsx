

import Appearance from "../../pages/Appearance";
import Wallpapers from "../../pages/Wallpapers";
import DockSettings from "../../pages/DockSettings";
import Personalize from "../../pages/Personalize";
import AboutKOS from "../../pages/AboutKOS";

export default function SettingsContent({ active }) {
  const pages = {
    Appearance,
    Wallpapers,
    Dock: DockSettings,
    Personalize,
    About: AboutKOS,
  };

  const Page = pages[active] ?? Appearance;

  return (
    <main
      className="flex-1 overflow-auto p-8"
      style={{
        background: "var(--window-secondary)",
        color: "var(--text)",
      }}
    >
      <div className="mx-auto max-w-5xl">
        <Page />
      </div>
    </main>
  );
}