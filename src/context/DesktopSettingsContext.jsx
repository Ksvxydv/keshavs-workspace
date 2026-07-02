import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { wallpapers } from "../data/wallpapers";

import { accentColors } from "../data/accentColors";

const DesktopSettingsContext = createContext(null);

export function DesktopSettingsProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [wallpaper, setWallpaper] = useState(
    wallpapers.find((wallpaper) => wallpaper.id === "tahoe") ?? wallpapers[0]
  );
  const [accentColor, setAccentColor] = useState("blue");

  useEffect(() => {
    const selectedAccent = accentColors.find(
      (color) => color.id === accentColor
    );

    document.documentElement.style.setProperty(
      "--accent",
      selectedAccent?.value ?? "#0A84FF"
    );
  }, [accentColor]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      wallpaper,
      setWallpaper,
      accentColor,
      setAccentColor,
    }),
    [theme, wallpaper, accentColor]
  );

  return (
    <DesktopSettingsContext.Provider value={value}>
      {children}
    </DesktopSettingsContext.Provider>
  );
}

export function useDesktopSettings() {
  const context = useContext(DesktopSettingsContext);

  if (!context) {
    throw new Error(
      "useDesktopSettings must be used within a DesktopSettingsProvider"
    );
  }

  return context;
}

export default DesktopSettingsContext;