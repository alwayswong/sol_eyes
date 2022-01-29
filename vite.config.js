import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    "process.env": process.env,
  },
  build: {
    chunkSizeWarningLimit: '2048' // 2kb
  }
});
