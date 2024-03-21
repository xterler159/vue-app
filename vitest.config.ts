import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
  },
  plugins: [tsconfigPaths(), vue()],
});
