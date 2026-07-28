import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/slider/",
  plugins: [react()],
  build: {
    target: "esnext",
    sourcemap: false,
  },
});
