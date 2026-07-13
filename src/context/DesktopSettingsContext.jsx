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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("k-os-theme") ?? "dark";
  });
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("k-os-accent") ?? "blue";
  });
  const [wallpaper, setWallpaper] = useState(() => {
    const savedId = localStorage.getItem("k-os-wallpaper");
    return (
      wallpapers.find((wallpaper) => wallpaper.id === savedId) ??
      wallpapers.find((wallpaper) => wallpaper.id === "tahoe") ??
      wallpapers[0]
    );
  });

  useEffect(() => {
    const selectedAccent = accentColors.find(
      (color) => color.id === accentColor
    );

    document.documentElement.style.setProperty(
      "--accent",
      selectedAccent?.value ?? "#0A84FF"
    );
  }, [accentColor]);

  useEffect(() => {
    localStorage.setItem("k-os-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("k-os-accent", accentColor);
  }, [accentColor]);

  useEffect(() => {
    if (wallpaper?.id) {
      localStorage.setItem("k-os-wallpaper", wallpaper.id);
    }
  }, [wallpaper]);

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