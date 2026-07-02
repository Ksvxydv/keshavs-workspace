import { createContext } from "react";
import useWindowManager from "./useWindowManager";

export const WindowManagerContext = createContext(null);

export default function WindowManager({ children }) {
  const windowManager = useWindowManager();

  return (
    <WindowManagerContext.Provider value={windowManager}>
      {typeof children === "function"
        ? children(windowManager)
        : children}
    </WindowManagerContext.Provider>
  );
}
