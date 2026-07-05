import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WindowManagerContext } from "../../core/window/WindowManager";
import Clock from "./Clock";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

export default function MenuBar() {
  const { activeWindowId, isActiveWindowMaximized } = useContext(WindowManagerContext);
  const [showMenuBar, setShowMenuBar] = useState(true);

  useEffect(() => {
    if (!isActiveWindowMaximized) {
      setShowMenuBar(true);
    } else {
      setShowMenuBar(false);
    }
  }, [isActiveWindowMaximized]);

  return (
    <>
      {isActiveWindowMaximized && !showMenuBar && (
        <div
          className="fixed inset-x-0 top-0 h-5 z-[6001]"
          onMouseEnter={() => setShowMenuBar(true)}
        />
      )}
      <motion.header
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={
          !isActiveWindowMaximized
            ? { y: 0, opacity: 1 }
            : showMenuBar
            ? { y: 0, opacity: 1 }
            : { y: -40, opacity: 0 }
        }
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 380,
          damping: 32,
        }}
        onMouseEnter={() => isActiveWindowMaximized && setShowMenuBar(true)}
        onMouseLeave={() => isActiveWindowMaximized && setShowMenuBar(false)}
        className="fixed left-0 top-0 z-[5000] flex h-8 w-full items-center justify-between border-b px-3 backdrop-blur-3xl transition-colors duration-300 will-change-transform"
        style={{
          background: "rgba(58,72,92,0.72)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderColor: "rgba(255,255,255,.08)",
          color: "var(--text)",
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,.04)",
        }}
      >
        <MenuLeft activeApp={activeWindowId ?? "finder"} />

        <MenuRight>
          <Clock />
        </MenuRight>
      </motion.header>
    </>
  );
}
