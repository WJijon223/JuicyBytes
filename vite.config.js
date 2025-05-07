import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy API requests to the FruityVice API
      "/api": {
        target: "https://www.fruityvice.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Remove "/api" prefix
      },
    },
  },
});
