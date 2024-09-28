import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@api": resolve(__dirname, "./src/api/index.ts"),
      "@components": resolve(__dirname, "./src/components"),
      "@helpers": resolve(__dirname, "./src/helpers"),
    },
  },
});
