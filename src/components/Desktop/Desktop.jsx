import { useEffect, useRef, useState } from "react";
import WindowManager from "../../core/window/WindowManager";
import { desktopApps } from "../../data/desktopApps";
import { appRegistry } from "../../data/appRegistry";
import DesktopIcon from "./DesktopIcon";
import MenuBar from "../MenuBar/MenuBar";
import Dock from "../Dock/Dock";

import { useDesktopSettings } from "../../context/DesktopSettingsContext";
import { AnimatePresence, motion } from "framer-motion";
import { registerTerminalActions } from "../../terminal/terminalActions";

export default function Desktop() {
  const {
    wallpaper,
    theme,
    accentColor,
    setWallpaper,
    setTheme,
    setAccentColor,
  } = useDesktopSettings();

  const [selectedIcon, setSelectedIcon] = useState(null);
  const openWindowRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedIcon(null);
        return;
      }

      if (event.key === "Enter" && selectedIcon) {
        const app = desktopApps.find((item) => item.id === selectedIcon);
        if (app) {
          event.preventDefault();
          openWindowRef.current?.(app.app);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIcon]);

  function openDirectory(directoryId) {
    const app = desktopApps.find((item) => item.id === directoryId);
    if (app) {
      openWindowRef.current?.(app.app);
    }
  }

  return (
    <WindowManager>
      {({
        openWindows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        startDragging,
        startResizing,
      }) => {
        openWindowRef.current = openWindow;

        console.log("Open windows:", openWindows);

        registerTerminalActions({
          openWindow,
          openDirectory,
          setTheme,
          setAccentColor,
          setWallpaper,
          openWindowCount: () => openWindows.length,
          currentWallpaper: () => wallpaper.id,
          theme: () => theme,
          currentAccent: () => accentColor,
        });

        return (
          <motion.div
            initial={{
              scale: 1.04,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-screen h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${wallpaper.image})` }}
            onClick={() => setSelectedIcon(null)}
          >
            {/* Menu Bar */}
            <MenuBar />
            {/* Desktop Icons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute right-8 top-12 flex flex-col gap-6"
            >
              {desktopApps.map((app) => (
                <DesktopIcon
                  key={app.id}
                  name={app.name}
                  selected={selectedIcon === app.id}
                  onSelect={(e) => {
                    e.stopPropagation();
                    setSelectedIcon(app.id);
                  }}
                  onOpen={() => openWindow(app.app)}
                />
              ))}
            </motion.div>

            {/* Windows */}
            <AnimatePresence mode="popLayout">
              {openWindows.map((window) => {
                const App = appRegistry[window.id]?.component;

                if (!App) return null;
                if (window.minimized) {
                  console.log("Window is minimized:", window.id, window);
                  return null;
                }

                return (
                  <div
                    key={window.id}
                    style={{
                      position: "absolute",
                      left: window.x,
                      top: window.y,
                      width: window.width,
                      height: window.height,
                      zIndex: window.zIndex,
                    }}
                    onMouseDown={() => focusWindow(window.id)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <App
                      window={window}
                      onClose={() => {
                        console.log("Close clicked:", window.id);
                        closeWindow(window.id);
                      }}
                      onMinimize={() => {
                        console.log("Minimize clicked:", window.id);
                        minimizeWindow(window.id);
                      }}
                      onMaximize={() => maximizeWindow(window.id)}
                      onFocus={() => focusWindow(window.id)}
                      onDragStart={(event) => {
                        focusWindow(window.id);
                        startDragging(window.id, event);
                      }}
                      onResizeStart={(direction, event) => {
                        focusWindow(window.id);
                        startResizing(window.id, direction, event);
                      }}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
            {/* Dock */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Dock />
            </motion.div>
          </motion.div>
        );
      }}
    </WindowManager>
  );
}
