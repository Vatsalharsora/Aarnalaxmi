import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Advanced optimization for faster production loads
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core libraries into a separate cached chunk
          vendor: ['react', 'react-dom'],
          // Split routing libraries
          router: ['react-router-dom'],
        }
      }
    },
    // Chunks smaller than this are not generated to save network requests
    chunkSizeWarningLimit: 1000, 
  }
})
