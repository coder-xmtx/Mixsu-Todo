import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import { VitePWA } from "vite-plugin-pwa";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["TODO_INFO.svg", "haha2.png"],
      manifest: {
        name: "Mixsu Todo",
        short_name: "Todo",
        description: "Mixsu Todo Application",
        icons: [
          {
            src: "TODO_INFO.svg",
            sizes: "any",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
