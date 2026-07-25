import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen loading animation shown while the poster images
 * preload, so the carousel never pops in mid-render.
 */
export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-black/10 border-t-cinema-red"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
