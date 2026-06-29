import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:   ['react', 'react-dom'],
          emailjs:  ['@emailjs/browser'],
          icons:    ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    target: 'es2015',
  },
})
