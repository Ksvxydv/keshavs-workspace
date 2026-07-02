import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Desktop from "./components/Desktop/Desktop";
import StartupSequence from "./components/Startup/StartupSequence";

export default function App() {
  const [bootFinished, setBootFinished] = useState(false);

  return (
    <>
      <Desktop />

      <AnimatePresence>
        {!bootFinished && (
          <StartupSequence
            key="startup"
            onComplete={() => setBootFinished(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
