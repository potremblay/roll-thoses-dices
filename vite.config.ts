import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const base = process.env.VITE_BASE_PATH || "/";

export default defineConfig({
  base: base,
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
