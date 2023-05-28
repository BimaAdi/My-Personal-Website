/// <reference types="vitest" />
import path from 'path'
import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude:[
      ...configDefaults.exclude, 
      'e2e/*'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
