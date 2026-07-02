import { useContext } from "react";
import { motion } from "framer-motion";
import { WindowManagerContext } from "../../core/window/WindowManager";
import Clock from "./Clock";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

export default function MenuBar() {
  const { activeWindowId } = useContext(WindowManagerContext);
  return (
    <motion.header
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
      className="fixed left-0 top-0 z-[5000] flex h-10 w-full items-center justify-between border-b px-5 backdrop-blur-2xl transition-colors duration-300"
      style={{
        background: "color-mix(in srgb, var(--window) 72%, transparent)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      <MenuLeft activeApp={activeWindowId ?? "finder"} />

      <MenuRight>
        <Clock />
      </MenuRight>
    </motion.header>
  );
}
