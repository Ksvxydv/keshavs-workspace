import { useContext, useRef, useState } from "react";
import { WindowManagerContext } from "../../core/window/WindowManager";
import { dockApps } from "../../data/dockApps";

export default function Dock() {
  const {
    openWindow,
    restoreWindow,
    focusWindow,
    openWindows,
  } = useContext(WindowManagerContext);
  const dockRef = useRef(null);
  const [mouseX, setMouseX] = useState(null);
  return (
    <div className="fixed bottom-4 left-1/2 z-[999] -translate-x-1/2">
      <div
        ref={dockRef}
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
        className="flex items-end gap-1 rounded-[26px] border px-3 py-2 backdrop-blur-3xl transition-all duration-300"
        style={{
          background: "color-mix(in srgb, var(--window) 58%, transparent)",
          borderColor: "var(--border)",
          boxShadow: "0 10px 28px rgba(0,0,0,.18)",
        }}
      >
        {dockApps.map((app, index) => {
          const distance = mouseX === null
            ? Infinity
            : Math.abs(
                mouseX -
                (dockRef.current?.children[index]?.getBoundingClientRect().left +
                  dockRef.current?.children[index]?.getBoundingClientRect().width / 2 || 0)
              );

          const maxDistance = 150;

          let scale = 1;

          if (mouseX !== null && distance < maxDistance) {
            const t = 1 - distance / maxDistance;
            // Strong emphasis on the hovered icon
            scale = 1 + t * 0.34;
          }

          const neighborDistance = Math.abs(
            (dockRef.current?.children[index]?.getBoundingClientRect().left +
              (dockRef.current?.children[index]?.getBoundingClientRect().width || 0) / 2 || 0) -
              mouseX
          );

          if (mouseX !== null && neighborDistance < 180) {
            const influence = Math.max(0, 1 - neighborDistance / 180);
            // Much subtler boost for neighboring icons
            scale += influence * 0.015;
          }

          scale = Math.min(scale, 1.36);

          const running = openWindows.some(
            (window) => window.id === app.id
          );

          return (
            <button
              key={app.id}
              title={app.name}
              onClick={() => {
                const existing = openWindows.find((w) => w.id === app.id);

                if (existing) {
                  if (existing.minimized) {
                    restoreWindow(app.id);
                  }

                  if (focusWindow) {
                    focusWindow(existing.id);
                  }

                  return;
                }

                openWindow(app.id);
              }}
              className="group relative flex h-14 w-14 items-center justify-center rounded-[18px] transition-colors duration-200 hover:bg-white/8 active:scale-95"
              style={{
                background: "transparent",
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
                transition: "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)",
                zIndex: Math.round(scale * 100),
              }}
            >
              <img
                src={app.icon}
                alt={app.name}
                draggable={false}
                className="h-12 w-12 object-contain select-none pointer-events-none transition-transform duration-200"
              />

              <span
                className="absolute -top-10 rounded-lg px-2 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background: "var(--window)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
              >
                {app.name}
              </span>

              {running && (
                <span
                  className="absolute -bottom-1.5 h-1.5 w-1.5 rounded-full shadow-sm"
                  style={{
                    background: "var(--accent)",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
