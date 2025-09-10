import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "StorybookCourse",
      fileName: "index",
      formats: ["es"], // ES modules format
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    // Important: Bundle all CSS into one file
    cssCodeSplit: false,
    sourcemap: true,
    outDir: "dist",
  },
});
