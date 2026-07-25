import { useState } from "react";
import { motion } from "framer-motion";

/**
 * A single gallery card: just the photo frame — poster image with
 * rounded corners, shadow and hover glow. Scaling, blur and darkening
 * for inactive slides is handled by the .card-inner CSS rules in
 * index.css (driven by Swiper's active/prev/next slide classes) so
 * that it stays perfectly in sync with the carousel's own transform.
 */
export default function ImageCard({ image, isActive, onOpen }) {
  const { title, src } = image;
  const [broken, setBroken] = useState(false);

  return (
    <div className="card-inner">
      <motion.div
        className="group relative h-full w-full cursor-pointer select-none rounded-[20px]"
        whileHover={isActive ? { scale: 1.03 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        onClick={() => isActive && onOpen()}
      >
        {/* Poster */}
        <div className="relative h-full w-full overflow-hidden rounded-[20px] shadow-card ring-1 ring-black/10 transition-shadow duration-500 group-hover:shadow-glow">
          {broken ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a1f] to-[#0a0a0c]" />
          ) : (
            <img
              src={src}
              alt={title}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover"
              onError={() => setBroken(true)}
            />
          )}

          {/* Hover glow ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 ring-2 ring-cinema-red/70 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </motion.div>
    </div>
  );
}
