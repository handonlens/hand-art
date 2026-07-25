import { motion } from "framer-motion";

/**
 * Cinematic background: soft white base, a slowly breathing red
 * radial glow centered behind the active card, subtle drifting
 * accent gradients, and a light vignette to frame the composition.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fafafa] to-[#f3f3f4]" />

      {/* Breathing red glow behind the active card.
          Centering (translate) and the animated transform (scale) are
          split across two elements — Framer Motion writes its own
          inline `transform`, which would otherwise clobber the
          Tailwind translate-based centering on the same node. */}
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,45,45,0.28) 0%, rgba(255,45,45,0.1) 35%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Slow drifting secondary accent */}
      <motion.div
        className="absolute left-1/3 top-1/4 h-[40vmin] w-[40vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,45,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-[35vmin] w-[35vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,45,45,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette */}
      <div className="vignette" />
    </div>
  );
}
