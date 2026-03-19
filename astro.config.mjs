import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@interfaces": path.resolve(__dirname, "src/interfaces"),
      },
    },
  },
  output: "static",
});