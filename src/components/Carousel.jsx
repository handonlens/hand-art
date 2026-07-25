import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Keyboard,
  Mousewheel,
  A11y,
} from "swiper/modules";
import ImageCard from "./ImageCard.jsx";

import "swiper/css";
import "swiper/css/effect-coverflow";

const AUTOPLAY_DELAY = 3000;

/**
 * The centerpiece 3D carousel. Wraps Swiper's coverflow effect with
 * autoplay, keyboard, mousewheel and drag support, and hands each
 * slide off to <ImageCard /> for rendering.
 */
export default function Carousel({ images, onOpen }) {
  const swiperRef = useRef(null);

  const handleSwiper = useCallback((swiper) => {
    swiperRef.current = swiper;
  }, []);

  const handleOpenActive = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const realIndex = swiper.realIndex;
    onOpen(realIndex);
  }, [onOpen]);

  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel, A11y]}
      effect="coverflow"
      grabCursor
      centeredSlides
      loop
      initialSlide={32}
      slidesPerView="auto"
      speed={800}
      className="gallery-swiper"
      coverflowEffect={{
        rotate: 32,
        stretch: 0,
        depth: 220,
        modifier: 1,
        slideShadows: false,
      }}
      autoplay={{
        delay: AUTOPLAY_DELAY,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard={{ enabled: true, onlyInViewport: false }}
      mousewheel={{ forceToAxis: true, sensitivity: 1 }}
      a11y={{ enabled: true }}
      onSwiper={handleSwiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={image.src + index} className="gallery-slide">
          {({ isActive }) => (
            <ImageCard
              image={image}
              isActive={isActive}
              onOpen={handleOpenActive}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
