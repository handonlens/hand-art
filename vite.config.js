import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hand-art/",
  plugins: [react()],
  build: {
    target: "esnext",
    sourcemap: false,
  },
});
