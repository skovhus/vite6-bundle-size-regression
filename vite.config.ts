import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

console.log("?", visualizer);

export default defineConfig(() => {
  return {
    plugins: [visualizer({ open: true })],
  };
});
