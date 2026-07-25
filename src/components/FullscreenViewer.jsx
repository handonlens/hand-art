import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Fullscreen lightbox shown when the active card is clicked.
 * Closes on ESC, backdrop click, or the close button.
 */
export default function FullscreenViewer({ image, onClose }) {
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    setBroken(false);
  }, [image]);

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.button
            type="button"
            aria-label="Close fullscreen view"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition hover:border-cinema-red/60 hover:text-white"
            onClick={onClose}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </motion.button>

          <motion.div
            className="relative mx-4 flex max-h-[88vh] max-w-4xl flex-col items-center"
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            {broken ? (
              <div className="h-[50vh] w-[70vw] max-w-2xl rounded-[20px] bg-gradient-to-br from-[#1a1a1f] to-[#0a0a0c] shadow-glow ring-1 ring-white/10" />
            ) : (
              <img
                src={image.src}
                alt={image.title}
                className="max-h-[75vh] w-auto rounded-[20px] object-contain shadow-glow ring-1 ring-white/10"
                onError={() => setBroken(true)}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
