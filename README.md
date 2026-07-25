# Cinematic Gallery

A premium, cinematic 3D carousel gallery — React + Vite + Tailwind CSS +
Framer Motion + Swiper.js.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Adding / removing images

Everything is driven by [`src/data/images.js`](src/data/images.js). No other
file needs to change.

1. Copy your image into `public/images/` (portrait images work best,
   roughly 1200x1800px).
2. Add one object to the `images` array:

```js
{
  title: "My Movie",
  subtitle: "Category",
  src: "/images/my-movie.jpg",
}
```

3. To remove an image, delete its object from the array.

If an image is missing or fails to load, the card gracefully falls back to
a dark gradient placeholder showing the title instead of a broken-image
icon.

## Project structure

```
/src
  /components
    Carousel.jsx          3D coverflow carousel (Swiper)
    ImageCard.jsx          Poster card: image, glass overlay, reflection
    FullscreenViewer.jsx   ESC/backdrop-closable lightbox
    Background.jsx         Animated cinematic background + vignette
    Loader.jsx              Preload spinner
  /data
    images.js               <- edit this to add/remove images
  App.jsx
  main.jsx
  index.css
/public/images               <- put your image files here
```

## Interaction

- Autoplay every 3s, pauses on hover, resumes on mouse leave.
- Infinite loop.
- Drag / swipe (mouse + touch).
- Arrow keys navigate.
- Mouse wheel navigates horizontally.
- Click the active (center) card to open it fullscreen; ESC or the close
  button/backdrop dismisses it.

## Notes

- `npm audit` will flag a moderate `esbuild`/`vite` advisory — it only
  affects the local dev server (not the production build) and requires a
  breaking Vite 8 upgrade to clear; left as-is intentionally.
