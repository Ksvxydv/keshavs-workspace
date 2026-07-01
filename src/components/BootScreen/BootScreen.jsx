import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[9999]"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-7xl font-light tracking-wide"
          >
            Welcome
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-lg"
          >
            Preparing your workspace...
          </motion.p>

          <div className="mt-10 flex gap-2">
            <span className="w-3 h-3 rounded-full bg-white animate-bounce"></span>
            <span className="w-3 h-3 rounded-full bg-white animate-bounce delay-150"></span>
            <span className="w-3 h-3 rounded-full bg-white animate-bounce delay-300"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
