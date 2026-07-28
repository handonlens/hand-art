/**
 * Gallery image list.
 *
 * To add a new image:
 *   1. Copy the image file into /public/images/
 *   2. Add one object below with title, subtitle, and src.
 *
 * To remove an image, delete its object from this array.
 * No other code changes are required — the carousel renders
 * every entry in this array automatically.
 */
const IMAGE_COUNT = 37;

export const images = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
  title: `Photo ${i + 1}`,
  subtitle: "Gallery",
  src: `${import.meta.env.BASE_URL}images/${i + 1}.JPG`,
}));
