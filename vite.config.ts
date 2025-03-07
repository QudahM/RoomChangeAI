import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Only include Tempo if explicitly needed
const conditionalPlugins: [string, Record<string, any>][] = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

//const base = process.env.NODE_ENV === "production" ? "/RoomChangeAI/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RoomChangeAI/", 
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    allowedHosts: true,
  },
});
