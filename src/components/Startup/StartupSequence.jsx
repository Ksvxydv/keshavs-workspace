import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StartupSequence({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),   // K-OS logo
      setTimeout(() => setStage(2), 1600),  // Quote
      setTimeout(() => setStage(3), 5000),  // Credit
      setTimeout(() => setStage(4), 7500),  // Desktop reveal
      setTimeout(() => onComplete(), 8300),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.9,
          ease: "easeInOut",
        },
      }}
    >
      {/* Desktop blur */}
      <motion.div
        className="absolute inset-0 backdrop-blur-[35px] bg-black/35"
        animate={{
          opacity: stage === 4 ? 0 : 1,
          backdropFilter:
            stage === 1
              ? "blur(35px)"
              : stage === 2
                ? "blur(18px)"
                : stage === 3
                  ? "blur(8px)"
                  : "blur(0px)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div
              key="logo"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center"
            >
              <h1 className="text-6xl font-extralight tracking-[0.28em] text-white">
                K-OS
              </h1>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div
              key="quote"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-center px-10"
            >
              <p className="text-5xl font-extralight leading-[1.5] tracking-tight text-white">
                “Good artists copy;
                <br />
                great artists steal.”
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                }}
                className="mt-10 text-sm tracking-[0.3em] uppercase text-white"
              ></motion.p>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div
              key="credit"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Designed & Developed by
              </p>

              <h2 className="mt-4 text-5xl font-extralight tracking-wide text-white">
                Keshav
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
