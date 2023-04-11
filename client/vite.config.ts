import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Exclude all JavaScript files from manual chunks.
          // This ensures that only CSS files are affected by this configuration.
        
        },
      },
    },
  },
})
