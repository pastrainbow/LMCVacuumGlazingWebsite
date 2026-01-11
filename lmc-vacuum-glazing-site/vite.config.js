import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { prerenderPaths } from "./src/prerenderPaths";

function normalizePath(p) {
  if (!p) return "/";
  return p.startsWith("/") ? p : `/${p}`;
}

const routes = [
  "/", // always include root
  "/404",
].concat(prerenderPaths).map(normalizePath);

// de-dupe
const prerenderRoutes = Array.from(new Set(routes));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      additionalPrerenderRoutes: prerenderRoutes,
      // Optional but helpful for `vite preview`:
      previewMiddlewareFallback: "/404",
    }),
  ],
  base: "/",
});
