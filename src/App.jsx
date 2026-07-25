import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Background from "./components/Background.jsx";
import Carousel from "./components/Carousel.jsx";
import FullscreenViewer from "./components/FullscreenViewer.jsx";
import Loader from "./components/Loader.jsx";
import { images } from "./data/images.js";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const preload = images.map(
      (image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = resolve;
        })
    );

    Promise.all(preload).then(() => {
      if (!cancelled) setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <Background />
      <Loader visible={loading} />

      {!loading && (
        <motion.main
          className="relative z-10 flex w-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Carousel
            images={images}
            onOpen={(index) => setFullscreenImage(images[index])}
          />
        </motion.main>
      )}

      <FullscreenViewer
        image={fullscreenImage}
        onClose={() => setFullscreenImage(null)}
      />

      {!loading && (
        <motion.a
          href="https://wa.link/f67r06"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-cinema-red px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-glow transition-colors hover:bg-cinema-crimson sm:bottom-8 sm:px-10 sm:py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Order Now
        </motion.a>
      )}
    </div>
  );
}
