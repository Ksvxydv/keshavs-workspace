import { useState } from "react";
import WindowFrame from "../../core/window/WindowFrame";
import SettingsSidebar from "./SettingsSidebar";
import SettingsContent from "./SettingsContent";

export default function Settings(props) {
  const [active, setActive] = useState("Appearance");

  return (
    <WindowFrame title="Settings" {...props}>
      <div className="flex h-full min-h-0 overflow-hidden">
        <SettingsSidebar
          active={active}
          setActive={setActive}
        />

        <SettingsContent active={active} />
      </div>
    </WindowFrame>
  );
}
