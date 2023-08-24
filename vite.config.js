/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite"
import { resolve } from "path"
import tsconfigPaths from "vite-tsconfig-paths"
import handlebars from "vite-plugin-handlebars"

export default defineConfig(({ command, mode }) => ({
  base: command === "build" ? "/dist" : "/",
  publicDir: command === "build" ? "public" : "src/assets",
  root: "src",
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === "development" ? false : "terser",
    outDir: "../dist",
    sourcemap: command === "serve" ? "inline" : false,

    rollupOptions: {
      output: {
        assetFileNames: "assets/[ext]/[name][extname]",
        chunkFileNames: "assets/chunks/[name].[hash].js",
        entryFileNames: "assets/js/[name].js",
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
  server: {
    port: 3000,
  },
}))
