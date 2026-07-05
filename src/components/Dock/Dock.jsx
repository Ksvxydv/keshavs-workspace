import { useContext, useEffect, useRef, useState } from "react";
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
  const [bouncingApp, setBouncingApp] = useState(null);

  useEffect(() => {
    if (!bouncingApp) return;

    const timer = setTimeout(() => {
      setBouncingApp(null);
    }, 700);

    return () => clearTimeout(timer);
  }, [bouncingApp]);

  function handleOpen(app) {
    setBouncingApp(app.id);

    const existing = openWindows.find((w) => w.id === app.id);

    if (existing) {
      if (existing.minimized) {
        restoreWindow(app.id);
      }

      focusWindow?.(existing.id);
      return;
    }

    openWindow(app.id);
  }

  return (
    <>
      <style>{`
@keyframes dockBounce {
  0% { transform: translateY(0) scale(${1}); }
  18% { transform: translateY(-18px) scale(1.02); }
  38% { transform: translateY(0); }
  55% { transform: translateY(-10px); }
  72% { transform: translateY(0); }
  86% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}
`}</style>
      <div className="fixed bottom-3 left-1/2 z-[999] -translate-x-1/2">
        <div
          ref={dockRef}
          onMouseMove={(e) => setMouseX(e.clientX)}
          onMouseLeave={() => setMouseX(null)}
          className="flex items-end gap-1 rounded-[26px] border px-3 py-2 backdrop-blur-3xl transition-all duration-300 overflow-visible"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
            borderColor: "var(--border)",
            backdropFilter: "blur(34px) saturate(180%)",
            WebkitBackdropFilter: "blur(34px) saturate(180%)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.18)",
          }}
        >
          {dockApps.map((app, index) => {
            const distance =
              mouseX === null
                ? Infinity
                : Math.abs(
                    mouseX -
                      (dockRef.current?.children[index]?.getBoundingClientRect()
                        .left +
                        dockRef.current?.children[index]?.getBoundingClientRect()
                          .width /
                          2 || 0),
                  );

            const maxDistance = 170;

            let scale = 1;

            if (mouseX !== null) {
              const t = Math.max(0, 1 - distance / maxDistance);

              // Smooth macOS-style easing
              const eased = Math.sin((t * Math.PI) / 2);

              scale = 1 + eased * 0.28;
            }

            const running = openWindows.some((window) => window.id === app.id);

            return (
              <button
                key={app.id}
                title={app.name}
                onClick={() => handleOpen(app)}
                className="group relative flex h-14 w-14 items-center justify-center rounded-[18px] transition-colors duration-200 hover:bg-white/8 active:scale-95"
                style={{
                  background: "transparent",
                  transform: `scale(${scale})`,
                  transformOrigin: "bottom center",
                  transition: "transform 220ms cubic-bezier(0.22,1,0.36,1)",
                  zIndex: Math.round(scale * 100),
                  animation:
                    bouncingApp === app.id
                      ? "dockBounce .7s cubic-bezier(.34,1.56,.64,1)"
                      : "none",
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
    </>
  );
}
