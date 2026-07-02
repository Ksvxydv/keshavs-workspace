import { createContext, useEffect } from "react";
import { useDesktopSettings } from "../context/DesktopSettingsContext";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const { theme, setTheme } = useDesktopSettings();

  useEffect(() => {
    const resolvedTheme =
      theme === "auto"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        themeName: theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
