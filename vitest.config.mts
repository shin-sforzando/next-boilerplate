import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "import.meta.vitest": false,
  },
  test: {
    environment: "jsdom",
    includeSource: ["src/**/*.{js,jsx,ts,tsx}"],
    coverage: {
      provider: "istanbul",
      include: ["src/lib/**/*.{js,jsx,ts,tsx}"],
    },
  },
});
